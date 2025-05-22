import { path } from '~/constants'

import { useNavigate } from 'react-router-dom'
import { Button } from '~/components/ui'

export const EmptyState = () => {
    const navigate = useNavigate()

    return (
        <div className='col-span-full py-20 text-center'>
            <p className='text-lg text-gray-600'>Không tìm thấy khoá học nào.</p>
            <Button variant='ghost' className='mt-4 text-primary' onClick={() => navigate(path.home)}>
                Xem tất cả khóa học
            </Button>
        </div>
    )
}
