import { path } from '~/constants'

import { Link } from 'react-router-dom'
import { Button } from '~/components/ui'

export const EmptyStateDetail = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center text-center'>
            <p className='text-lg text-gray-600'>Không tìm thấy khoá học.</p>
            <Link to={path.home}>
                <Button variant='default' className='mt-4'>
                    Xem tất cả khóa học
                </Button>
            </Link>
        </div>
    )
}
