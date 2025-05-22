import MockAdapter from 'axios-mock-adapter'
import { v4 as uuidv4 } from 'uuid'
import type { Category } from '~/types'

export const categoriesData: Category[] = [
    {
        id: '0c63ab36-cc9d-450a-93ba-1d1fd7825cb5',
        name: 'Symfony',
        created_at: '2025-05-20T03:15:39.000000Z',
        updated_at: '2025-05-20T03:15:39.000000Z'
    },
    {
        id: '178ff96e-16ef-4b34-9698-1d92f20d8a70',
        name: 'JavaScript',
        created_at: '2025-05-20T03:15:39.000000Z',
        updated_at: '2025-05-20T03:15:39.000000Z'
    }
]

export function categories(mock: MockAdapter) {
    mock.onGet(`/categories`).reply(() => {
        return [
            200,
            {
                success: true,
                message: 'Get categories success',
                data: categoriesData
            }
        ]
    })

    mock.onPost(`/categories`).reply((config) => {
        const newCategoryData = JSON.parse(config.data) as Omit<Category, 'id' | 'created_at' | 'updated_at'>
        const newId = uuidv4()
        const currentTime = new Date().toISOString()
        const newCategory: Category = {
            id: newId,
            name: newCategoryData.name || 'Unnamed Category',
            created_at: currentTime,
            updated_at: currentTime
        }

        categoriesData.push(newCategory)

        return [
            201,
            {
                success: true,
                message: 'Category created successfully',
                data: newCategory
            }
        ]
    })

    mock.onPut(new RegExp(`^/categories/[^/]+$`)).reply((config) => {
        const id = config.url?.split('/').pop()
        const categoryIndex = categoriesData.findIndex((category) => category.id === id)

        if (categoryIndex === -1) {
            return [
                404,
                {
                    success: false,
                    message: 'Category not found',
                    errors: []
                }
            ]
        }

        const updatedCategoryData = JSON.parse(config.data) as Partial<
            Omit<Category, 'id' | 'created_at' | 'updated_at'>
        >
        const existingCategory = categoriesData[categoryIndex]

        const updatedCategory: Category = {
            ...existingCategory,
            name: updatedCategoryData.name || existingCategory.name,
            updated_at: new Date().toISOString()
        }

        categoriesData[categoryIndex] = updatedCategory

        return [
            200,
            {
                success: true,
                message: 'Category updated successfully',
                data: updatedCategory
            }
        ]
    })

    mock.onDelete(new RegExp(`^/categories/[^/]+$`)).reply((config) => {
        const id = config.url?.split('/').pop()
        const categoryIndex = categoriesData.findIndex((category) => category.id === id)

        if (categoryIndex === -1) {
            return [
                404,
                {
                    success: false,
                    message: 'Category not found',
                    errors: []
                }
            ]
        }

        const deletedCategory = categoriesData.splice(categoryIndex, 1)[0]

        return [
            200,
            {
                success: true,
                message: 'Category deleted successfully',
                data: deletedCategory
            }
        ]
    })
}
