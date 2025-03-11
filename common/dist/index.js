"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.createBlog = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().min(3).optional()
});
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6)
});
exports.createBlog = zod_1.z.object({
    title: zod_1.z.string().min(3),
    content: zod_1.z.string().min(3)
});
exports.updateBlog = zod_1.z.object({
    title: zod_1.z.string().min(3).optional(),
    content: zod_1.z.string().min(3).optional(),
    id: zod_1.z.string().uuid()
});
