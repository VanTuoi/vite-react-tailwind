import type { Course } from '~/types'

import { Link, useNavigate } from 'react-router-dom'

export const CourseItem = ({ course }: { course: Course }) => {
    const navigate = useNavigate()

    return (
        <div
            key={course.id}
            className='cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-600 dark:bg-gray-800'
            onClick={() => navigate(`/${course.id}`)}
        >
            <img
                src={course.image || '/assets/img/not-found.jpg'}
                alt={course.name}
                className='h-25 w-full object-cover sm:h-40'
            />
            <div className='p-1: sm:p-2 md:p-4'>
                <Link to={`/${course.id}`} className='text-lg font-semibold'>
                    {course.name}
                </Link>
            </div>
        </div>
    )
}
