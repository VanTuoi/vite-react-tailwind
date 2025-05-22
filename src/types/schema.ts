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

export const categorySchema = z.object({
    id: z.string().trim().min(1, 'ID danh mục là bắt buộc'),
    name: z.string().trim().min(1, 'Tên danh mục là bắt buộc')
})

export type TypeCategorySchema = z.infer<typeof categorySchema>

export const courseSchema = z.object({
    id: z.string().trim().optional(),
    name: z.string().trim().min(1, 'Tên khoá học là bắt buộc'),
    image: z.string().trim().optional(),
    images: z.array(z.string().min(1, 'Không được để trống URL')).optional(),
    course_code: z.string().min(1, 'Mã khóa học không được để trống'),
    description: z.string().trim().optional(),
    credit: z.number().min(1, 'Tín chỉ phải lớn hơn 0'),
    year: z.number().min(2000, 'Năm học không hợp lệ'),
    price: z.string().min(1, 'Giá không được để trống'),
    price_before_discount: z.string().min(1, 'Giá giảm không được để nhỏ hơn 0').optional(),
    rating: z.string().optional(),
    quantity: z.number().optional(),
    sold: z.number().optional(),
    view: z.number().optional(),
    category: z.string().trim().optional(),
    price_min: z.string().optional().default(''),
    price_max: z.string().optional().default('')
})

export type TypeCourseSchema = z.infer<typeof courseSchema>

export type CourseFormData = Omit<z.infer<typeof courseSchema>, 'price_min' | 'price_max'>
