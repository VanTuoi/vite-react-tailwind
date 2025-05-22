import { useGetCourseById } from '~/hooks'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CourseContent, CourseSkeletonDetail, EmptyStateDetail } from '~/components/pages'

const CourseDetail = () => {
    const { id } = useParams()

    const { data: courseData, loading } = useGetCourseById(id ?? undefined)

    useEffect(() => {
        if (courseData) {
            document.title = courseData.name
        } else {
            document.title = 'Trang chủ | Khóa học'
        }
    }, [courseData])

    if (loading) {
        return <CourseSkeletonDetail />
    }

    if (!courseData || !id) {
        return <EmptyStateDetail />
    }

    return <CourseContent courseData={courseData} />
}

export default CourseDetail
