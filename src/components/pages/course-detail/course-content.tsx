import type { Course } from '~/types'
import { CourseInfo } from './course-info'

type Props = {
    courseData: Course
}

export const CourseContent = ({ courseData }: Props) => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col md:grid md:grid-cols-5 md:gap-5 md:p-6'>
                <div className='order-1 md:order-none md:col-span-3'>
                    <img
                        src={courseData.image}
                        alt={`Course image}`}
                        className='h-40 w-full rounded-md object-cover sm:h-80'
                    />
                </div>
                <div className='order-2 flex flex-col gap-6 md:order-none md:col-span-2'>
                    <CourseInfo courseData={courseData} />
                </div>
            </div>
        </div>
    )
}
