import { Logo } from '@/components/logo'
import { RegisterForm } from '@/components/pages/register-form'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui'
import { path } from '@/constants/path'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <Card className='min-w-[400px]'>
                <CardHeader className='flex flex-col items-center'>
                    <Logo />
                    <CardTitle className='text-lg w-full text-left'>Đăng ký</CardTitle>
                </CardHeader>
                <CardContent>
                    <RegisterForm />
                </CardContent>
                <CardFooter className='flex flex-row justify-end items-center gap-1'>
                    <p className='text-sm'>Bạn đã có tài khoản ?</p>
                    <Link to={path.login} className='text-sm font-bold'>
                        Đăng nhập ngay
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Register
