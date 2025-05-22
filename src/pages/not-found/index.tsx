import { Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '~/components/ui'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900'>
            <div className='text-center'>
                <h1 className='text-6xl font-extrabold'>404</h1>
                <p className='mb-4 text-2xl text-gray-700 dark:text-gray-300'>
                    Rất tiếc, trang của bạn tìm kiếm không tồn tại.
                </p>
                <Button onClick={() => navigate('/')}>
                    <Home className='h-5 w-5' />
                    Quay về trang chủ
                </Button>
            </div>
        </div>
    )
}

export default NotFound
