import { z } from "zod"

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    username: z.string().min(3).optional(),
})


export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})


export const blogupInput = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type UpdaetBlogInput = z.infer<typeof updateBlogInput>
export type CreateBlogInput = z.infer<typeof blogupInput>

