import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import {createBlog,updateBlog} from "@ashwin_khowala/medium_common";

export const blogRouter=new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: any
    }
}>();

blogRouter.use('/*', async (c, next) => {
    try {
        const token = c.req.header('Authorization');
        if (!token) throw new Error("Missing Authorization Header");

        // const token = jwt.split(' ')[1];
        const payload = await verify(token, c.env.JWT_SECRET);
        if (!payload) throw new Error("Invalid token");

        c.set('userId', String(payload.id));
        await next();
    } catch (error) {
        console.error("JWT Error:", error);
        return c.json({ error: "unauthorized" }, 401);
    }
});


blogRouter.post('/', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    try {
        const userId = c.get('userId');
        const body = await c.req.json();
        const {success}=createBlog.safeParse(body);
        if(!success){
            c.status(400);
            return c.json({error:"invalid input"})
        }

        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        });

        return c.json({ id: post.id });
    } catch (error) {
        console.error("Error creating post:", error);
        return c.json({ error: "Internal server error" }, 500);
    }
});


blogRouter.put('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    const {success}=updateBlog.safeParse(body);
    if(!success){
        c.status(400);
        return c.json({error:"invalid input"})
    }
    
	prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('updated post');
});

//todo:add pagination and limit
blogRouter.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());	

    const posts = await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });

    return c.json({
        posts
    });
});

blogRouter.get('/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.post.findUnique({
		where: {
			id
		},
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
	});

	return c.json(post);
})
