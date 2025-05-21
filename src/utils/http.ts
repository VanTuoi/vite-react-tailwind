import type { ResponseData } from '@/types/response'
import type { LoginData } from '@/types/user.type'
import axios from 'axios'
import { getAccessTokenFromLS, setAccessTokenToLS, setProfileToLS } from './auth'

const publicApi = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: false
})

const privateApi = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: false
})

privateApi.interceptors.request.use(
    async (config) => {
        const token = getAccessTokenFromLS()
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

publicApi.interceptors.response.use(
    (response) => {
        const { url } = response.config
        const data = response.data as ResponseData<LoginData>

        if (url === '/login') {
            setAccessTokenToLS(data.data.accessToken)
            setProfileToLS(data.data.user)
        }
        return response
    },
    (error) => Promise.reject(error)
)

/**
 *
 * @param type
 * @returns
 */
export function apiSelector(type: 'public' | 'private' = 'public') {
    return type === 'public' ? publicApi : privateApi
}
