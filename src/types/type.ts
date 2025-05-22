type Role = 'user' | 'admin'

export interface User {
    id: string
    roles: Role[]
    name: string
    email: string
    avatar: string
    phone: string
    date_of_birth: string
    created_at: string
    updated_at: string
}

export interface LoginData {
    user: User
    accessToken: string
}

export interface Category {
    id: string
    name: string
    created_at: string
    updated_at?: string
}

export interface Course {
    id: string
    image?: string
    images?: string[]
    course_code: string
    name: string
    description?: string
    year?: number
    credit: number
    price: string
    price_before_discount?: string
    rating?: string
    quantity?: number
    sold?: number
    view?: number
    category?: Category
    category_id?: string
    created_at: string
    updated_at?: string
}

export interface CourseInput extends Omit<Course, 'created_at' | 'updated_at' | 'category'> {
    category?: string[]
}

export interface CourseQueryParams {
    page?: number | string
    limit?: number | string
    sort_by?: 'created_at' | 'updated_at' | 'view' | 'sold' | 'price' | 'name' | 'course_code'
    order?: 'asc' | 'desc'
    exclude?: string
    rating_filter?: number | string
    price_max?: number | string
    price_min?: number | string
    name?: string
    category?: string
}
