import type { ResponseData } from '@/types/response'
import type { TypeUserSchema } from '@/types/schema'
import type { LoginData } from '@/types/user.type'
import { apiSelector } from '@/utils/http'

const urlLogin = '/login'

export const authApi = (type: 'public' | 'private' = 'public') => {
    const http = apiSelector(type)
    return {
        login: (user: Pick<TypeUserSchema, 'email' | 'password'>) => http.post<ResponseData<LoginData>>(urlLogin, user)
    }
}
