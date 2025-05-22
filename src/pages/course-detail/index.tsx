import { useGetCourseById } from '~/hooks'

import { useParams } from 'react-router-dom'
import { CourseContent, CourseSkeletonDetail, EmptyStateDetail } from '~/components/pages'

const CourseDetail = () => {
    const { id } = useParams()

    const { data: courseData, loading } = useGetCourseById(id ?? undefined)

    if (loading) {
        return <CourseSkeletonDetail />
    }

    if (!courseData || !id) {
        return <EmptyStateDetail />
    }

    return <CourseContent courseData={courseData} />
}

export default CourseDetail
