import z from "zod"

export const signupValidation = z.object({
    email: z.string(),
    name: z.string(),
    password: z.string().min(6)
});

export const signinValidation = z.object({
    email: z.string(),
    password: z.string().min(6)
});

export const blogCreate = z.object({
    title: z.string().min(1),
    content: z.string().min(10)
});

export const blogUpdate = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
});

export type SignupType = z.infer<typeof signupValidation>
export type SigninType = z.infer<typeof signinValidation>
export type CreateBlog = z.infer <typeof blogCreate>
export type UpdateBlog = z.infer <typeof blogUpdate>

