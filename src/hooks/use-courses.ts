import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { coursesApi } from '~/services'
import type { Course, Meta, ResponseData, TypeCourseSchema } from '~/types'
import type { QueryConfig } from './use-query-config'

export const useGetCourseById = (id?: string) => {
    const {
        data,
        isFetching: loading,
        error,
        refetch
    } = useQuery<Course | null, ResponseData<null> | undefined>({
        queryKey: ['course', id],
        queryFn: async (): Promise<Course | null> => {
            if (!id) return null
            const res = await coursesApi('public').getCourse(id)
            return res.data.data
        },
        enabled: !!id,
        staleTime: 60 * 1000,
        retry: 1
    })

    return {
        data,
        loading,
        error,
        refetch
    }
}

export const useGetCourses = (params: QueryConfig) => {
    const {
        data,
        isLoading: loading,
        error,
        refetch
    } = useQuery<
        {
            courses: Course[]
            meta: Meta
        },
        ResponseData<null> | undefined
    >({
        queryKey: ['courses', params],
        queryFn: async () => {
            const { data } = await coursesApi('public').getCourses(params)
            return {
                courses: data.data || [],
                meta: data.meta || { total_pages: 1, total_items: 0, page: 1, limit: '10' }
            }
        },
        staleTime: 60 * 1000,
        placeholderData: (prevData) => prevData
    })

    return {
        data: data?.courses || [],
        meta: data?.meta ?? { total_pages: 1, total_items: 0, page: 1, limit: 10 },
        loading,
        error,
        refetch
    }
}

export const useCreateCourse = (onSuccessCallback?: () => void) => {
    const queryClient = useQueryClient()

    const {
        mutate: createCourse,
        isPending: loading,
        error
    } = useMutation<Course | null, ResponseData<null> | undefined, TypeCourseSchema>({
        mutationFn: async (courseData: TypeCourseSchema): Promise<Course | null> => {
            const res = await coursesApi('private').createCourse(courseData)
            return res.data.data
        },
        onSuccess: (newCourse) => {
            if (newCourse) {
                onSuccessCallback?.()
                queryClient.invalidateQueries({ queryKey: ['courses'] })
            }
        }
    })

    return {
        createCourse,
        loading,
        error
    }
}

export const useUpdateCourse = (onSuccessCallback?: () => void) => {
    const queryClient = useQueryClient()

    const {
        mutate: updateCourse,
        isPending: loading,
        error
    } = useMutation<void, ResponseData<null> | undefined, { id: string; courseData: TypeCourseSchema }>({
        mutationFn: async ({ id, courseData }: { id: string; courseData: TypeCourseSchema }): Promise<void> => {
            await coursesApi('private').updateCourse(id, courseData)
        },
        onSuccess: () => {
            onSuccessCallback?.()
            queryClient.invalidateQueries({ queryKey: ['courses'] })
        }
    })

    return {
        updateCourse,
        loading,
        error
    }
}

export const useDeleteCourse = (onSuccessCallback?: () => void) => {
    const queryClient = useQueryClient()

    const {
        mutate: deleteCourse,
        isPending: loading,
        error
    } = useMutation<void, ResponseData<null> | undefined, string>({
        mutationFn: async (id: string): Promise<void> => {
            await coursesApi('private').deleteCourse(id)
        },
        onSuccess: () => {
            onSuccessCallback?.()
            queryClient.invalidateQueries({ queryKey: ['courses'] })
        }
    })

    return {
        deleteCourse,
        loading,
        error
    }
}
