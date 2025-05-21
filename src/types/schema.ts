import { z } from 'zod'

export const userSchema = z.object({
    email: z.string().email('Email không hợp lệ').min(1, 'Email không được để trống'),
    name: z
        .string({ required_error: 'Tên không được để trống' })
        .min(1, 'Tên ít nhất 1 kí tự')
        .max(50, 'Tên tối đa 50 kí tự'),
    password: z
        .string({ required_error: 'Mật khẩu không được để trống' })
        .min(8, 'Mật khẩu ít nhất 8 kí tự')
        .max(20, 'Mật khẩu tối đa 20 kí tự')
})

export type TypeUserSchema = z.infer<typeof userSchema>
