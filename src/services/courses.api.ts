import type { QueryConfig } from '~/hooks'
import type { Course, ResponseData, TypeCourseSchema } from '~/types'
import { apiSelector } from '~/utils'

const URL = '/courses'

export const coursesApi = (type: 'public' | 'private' = 'public') => {
    const http = apiSelector(type)

    return {
        getCourses: (params: QueryConfig) => http.get<ResponseData<Course[]>>(URL, { params }),

        getCourse: (id: string) => http.get<ResponseData<Course>>(`${URL}/${id}`),

        createCourse: (course: TypeCourseSchema) => http.post<ResponseData<Course>>(URL, course),

        updateCourse: (id: string, course: TypeCourseSchema) => http.put<ResponseData<Course>>(`${URL}/${id}`, course),

        deleteCourse: (id: string) => http.delete<ResponseData<null>>(`${URL}/${id}`)
    }
}
