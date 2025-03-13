import {z} from 'zod';


export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    name: z.string().min(3).optional()
});

export type SignupInput=z.infer<typeof signupInput>;

export const signinInput=z.object({
    email: z.string(),
    password: z.string()
});

export type SigninInput=z.infer<typeof signinInput>;


export const createBlog=z.object({
    title: z.string().min(3),
    content: z.string().min(3)
});

export type CreateBlog=z.infer<typeof createBlog>;

export const updateBlog=z.object({
    title: z.string().min(3).optional(),
    content: z.string().min(3).optional(),
    id: z.string().uuid()
});

export type UpdateBlog=z.infer<typeof updateBlog>;