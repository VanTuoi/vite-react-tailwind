import MockAdapter from 'axios-mock-adapter'
import { v4 as uuidv4 } from 'uuid'

import type { Course } from '~/types'
import { categoriesData } from './categories'

const LOCAL_STORAGE_KEY = 'mock_courses_data'
const imageUrls = ['images/img_1.png', 'images/img_2.png']

function getRandomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)]
}

export function loadCourses(): Course[] {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (stored) return JSON.parse(stored)

    const initialCourses = Array.from({ length: 25 }, (_, i) => {
        const category = getRandomItem(categoriesData)
        const image = getRandomItem(imageUrls)
        return {
            id: uuidv4(),
            name: `Khóa học số ${i + 1}`,
            image,
            category,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }
    })

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialCourses))
    return initialCourses
}

export function saveCourses(data: Course[]) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}

const coursesData = loadCourses()

export function courses(mock: MockAdapter) {
    mock.onGet(/\/courses\/[\w-]+$/).reply((config) => {
        const id = config.url?.split('/').pop()

        const course = coursesData.find((course) => course.id === id)
        if (!course) {
            return [
                404,
                {
                    success: false,
                    message: 'Course not found',
                    errors: []
                }
            ]
        } else {
            return [
                200,
                {
                    success: true,
                    message: 'Get all courses success',
                    data: course
                }
            ]
        }
    })

    mock.onGet(/\/courses.*/).reply((config) => {
        const query = config.params

        if (!query) {
            return [400, { success: false, message: 'Invalid query parameters' }]
        }

        const page = parseInt((query.page as string) || '1')
        const limit = parseInt((query.limit as string) || '10')
        const sortBy = (query.sort_by as string) || 'created_at'
        const order = (query.order as string) || 'desc'
        const name = query.name as string

        let filtered = [...coursesData]

        if (name) {
            filtered = filtered.filter((c) => c.name.includes(name))
        }

        const allowedSortFields: (keyof Course)[] = ['name']

        if (allowedSortFields.includes(sortBy as keyof Course)) {
            filtered.sort((a, b) => {
                const valA = a[sortBy as keyof Course]
                const valB = b[sortBy as keyof Course]

                if (typeof valA === 'number' && typeof valB === 'number') {
                    return order === 'asc' ? valA - valB : valB - valA
                }

                return order === 'asc'
                    ? String(valA).localeCompare(String(valB))
                    : String(valB).localeCompare(String(valA))
            })
        }

        const totalItems = filtered.length
        const totalPages = Math.ceil(totalItems / limit)
        const paginated = filtered.slice((page - 1) * limit, page * limit)

        return [
            200,
            {
                success: true,
                message: 'Get all courses success',
                data: paginated,
                meta: {
                    page,
                    limit,
                    total_items: totalItems,
                    total_pages: totalPages
                }
            }
        ]
    })

    mock.onPost('/courses').reply((config) => {
        const body = JSON.parse(config.data) as Omit<Course, 'id' | 'created_at'>
        const newCourse: Course = {
            id: uuidv4(),
            name: body.name || 'Khóa học mới',
            image: body.image || getRandomItem(imageUrls),
            category: body.category,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }

        coursesData.push(newCourse)

        return [201, { success: true, message: 'Course created', data: newCourse }]
    })

    mock.onPut(new RegExp(`^/courses/[^/]+$`)).reply((config) => {
        const id = config.url?.split('/').pop()
        const index = coursesData.findIndex((c) => c.id === id)
        if (index === -1) {
            return [404, { success: false, message: 'Course not found' }]
        }

        const body = JSON.parse(config.data) as Partial<Omit<Course, 'id' | 'created_at'>>
        coursesData[index] = {
            ...coursesData[index],
            ...body,
            updated_at: new Date().toISOString()
        }

        return [200, { success: true, message: 'Course updated', data: coursesData[index] }]
    })

    mock.onDelete(new RegExp(`^/courses/[^/]+$`)).reply((config) => {
        const id = config.url?.split('/').pop()
        const index = coursesData.findIndex((c) => c.id === id)
        if (index === -1) {
            return [404, { success: false, message: 'Course not found' }]
        }

        coursesData.splice(index, 1)
        return [200, { success: true, message: 'Course deleted' }]
    })
}
