import { userSchema, type TypeUserSchema } from '@/types/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button, Input, Label } from '../ui'
import { InputPassword } from '../ui/input-password'

const registerSchema = userSchema
    .pick({ email: true, password: true, name: true })
    .extend({
        password_confirmation: z
            .string({ required_error: 'Xác nhận mật khẩu không được để trống' })
            .min(8, 'Xác nhận mật khẩu ít nhất 8 kí tự')
            .max(20, 'Xác nhận mật khẩu tối đa 20 kí tự')
    })
    .refine((data) => data.password === data.password_confirmation, {
        path: ['password_confirmation'],
        message: 'Mật khẩu xác nhận không khớp'
    })
type TypeRegisterSchema = Pick<TypeUserSchema, 'email' | 'password' | 'name'> & {
    password_confirmation: string
}

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitted }
    } = useForm<TypeRegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: 'jone@example.com',
            name: 'Jone',
            password: '12345678',
            password_confirmation: '12345678'
        },
        mode: 'onSubmit'
    })

    return (
        <form noValidate className='space-y-4' onSubmit={handleSubmit(() => {})}>
            <div className='flex flex-col items-start gap-1'>
                <Label form='name'>Tên</Label>
                <Input
                    id='name'
                    type='text'
                    autoComplete='name'
                    placeholder='Vui lòng nhập tên'
                    {...register('name')}
                />
                {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>}
            </div>
            <div className='flex flex-col items-start gap-1'>
                <Label form='email'>Email</Label>
                <Input
                    id='email'
                    type='text'
                    autoComplete='email'
                    placeholder='Vui lòng nhập email'
                    {...register('email')}
                />
                {errors.email && <p className='mt-1 text-sm text-red-500'>{errors.email.message}</p>}
            </div>
            <div className='flex flex-col items-start gap-1'>
                <Label form='password'>Mật khẩu</Label>
                <InputPassword
                    id='password'
                    autoComplete='password'
                    placeholder='Vui lòng nhập mật khẩu'
                    {...register('password')}
                />
                {errors.password && <p className='mt-1 text-sm text-red-500'>{errors.password.message}</p>}
            </div>
            <div className='flex flex-col items-start gap-1'>
                <Label form='password_confirmation'>Xác nhận mật khẩu</Label>
                <InputPassword
                    id='password_confirmation'
                    autoComplete='password'
                    placeholder='Vui lòng nhập xác nhận mật khẩu'
                    {...register('password_confirmation')}
                />
                {errors.password_confirmation && (
                    <p className='mt-1 text-sm text-red-500'>{errors.password_confirmation.message}</p>
                )}
            </div>
            <Button className='w-full' type='submit' disabled={!isValid && isSubmitted}>
                Đăng ký
            </Button>
        </form>
    )
}
