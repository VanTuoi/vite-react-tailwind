import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { path } from '~/constants'
import { AppContext } from '~/contexts'
import { useLogin } from '~/hooks'
import { userSchema, type TypeUserSchema } from '~/types'
import { Button, Input, InputPassword, Label } from '../ui'

const loginSchema = userSchema.pick({ email: true, password: true })
type TypeLoginSchema = Pick<TypeUserSchema, 'email' | 'password'>

export const LoginForm = () => {
    const { login, loading, data } = useLogin()
    const { setIsAuthenticated, setProfile } = useContext(AppContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitted }
    } = useForm<TypeLoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: 'jone@example.com', password: '12345678' },
        mode: 'onSubmit'
    })

    const handleLogin = (dataLogin: TypeLoginSchema) => {
        login(dataLogin)
    }

    useEffect(() => {
        if (data) {
            toast.success('Đăng nhập thành công')
            setIsAuthenticated(true)
            setProfile(data.user)
            navigate(path.home)
        }
    }, [data, setIsAuthenticated, setProfile, navigate])

    return (
        <form noValidate className='space-y-4' onSubmit={handleSubmit(handleLogin)}>
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
            <Button className='w-full' type='submit' disabled={(!isValid && isSubmitted) || loading}>
                Đăng nhập
            </Button>
        </form>
    )
}
