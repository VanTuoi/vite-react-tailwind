import MockAdapter from 'axios-mock-adapter'
import type { User } from '~/types'

const adminUser: User = {
    id: 'd538daad-03c6-4479-ad10-2d95d0048244',
    name: 'Admin Jone',
    avatar: '/images/user.png',
    email: 'jone@example.com',
    phone: '0123456789',
    roles: ['admin'],
    gender: 'male',
    date_of_birth: '1990-01-01T00:00:00.000000Z',
    created_at: '2025-05-20T03:15:39.000000Z',
    updated_at: '2025-05-20T03:15:39.000000Z'
}

const normalUser: User = {
    ...adminUser,
    id: 'b7e60a52-b7fb-4f3a-8458-b3ee8120cc3e',
    name: 'User Jone',
    email: 'jone2@example.com',
    roles: ['user']
}

export function auth(mock: MockAdapter) {
    mock.onPost(`/login`).reply((config) => {
        const { email } = JSON.parse(config.data)

        let user: User | null = null

        if (email === 'jone@example.com') {
            user = adminUser
        } else if (email === 'jone2@example.com') {
            user = normalUser
        }

        if (user) {
            return [
                200,
                {
                    success: true,
                    message: 'Login successfully',
                    data: {
                        accessToken:
                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXIiOiJtb3JfMjMxNCIsImlhdCI6MTcyODcxODk3MH0.lq4mo5IOr9ml5RFT42Wg7jSpMkDwWI-3Ss0Hu3TfNXQ',
                        user
                    }
                }
            ]
        }

        return [
            401,
            {
                success: false,
                message: 'Invalid email or password',
                data: null
            }
        ]
    })

    mock.onPost(`/register`).reply(200, {
        success: true,
        message: 'Register successfully',
        data: {
            user: normalUser
        }
    })

    mock.onPost(`/logout`).reply(200, {
        success: true,
        message: 'Logout successfully',
        data: null
    })
}
