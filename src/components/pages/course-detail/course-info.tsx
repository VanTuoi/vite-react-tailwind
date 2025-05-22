import type { Course } from '~/types'

import { Button } from '~/components/ui'

type Props = {
    courseData: Course
}

export const CourseInfo = ({ courseData }: Props) => {
    return (
        <div className='flex flex-col gap-1 p-1 sm:gap-2 sm:p-6 min-h-screen'>
            <h3 className='my-1 text-3xl font-semibold sm:text-4xl'>{courseData.name}</h3>
            <h5 className='text-lg'>{courseData.category?.name ?? 'Không có danh mục'}</h5>
            <div className='flex flex-row items-center justify-start gap-2'></div>
            <Button className='h-[50px] w-full'>Mua ngay</Button>
        </div>
    )
}
