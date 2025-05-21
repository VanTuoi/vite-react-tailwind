import { Logo } from '@/components/logo'
import { LoginForm } from '@/components/pages/login-form'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui'
import { path } from '@/constants/path'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <Card className='min-w-[400px]'>
                <CardHeader className='flex flex-col items-center'>
                    <Logo />
                    <CardTitle className='text-lg w-full text-left'>Đăng nhập</CardTitle>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
                <CardFooter className='flex flex-row justify-end items-center gap-1'>
                    <p className='text-sm'>Bạn chưa có tài khoản ?</p>
                    <Link to={path.register} className='text-sm font-bold'>
                        Đăng ký ngay
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login
