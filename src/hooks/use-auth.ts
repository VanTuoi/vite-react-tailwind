import { authApi } from '@/services/auth.services'
import type { ResponseData } from '@/types/response'
import type { TypeUserSchema } from '@/types/schema'
import type { LoginData } from '@/types/user.type'
import { useMutation } from '@tanstack/react-query'

type LoginFormData = Pick<TypeUserSchema, 'email' | 'password'>

export const useLogin = (onSuccessCallback?: () => void) => {
    const {
        data,
        mutate: login,
        isPending: loading,
        error
    } = useMutation<LoginData, ResponseData<null> | undefined, LoginFormData>({
        mutationFn: async (credentials) => {
            const { data } = await authApi('public').login(credentials)
            if (!data?.data?.user) throw new Error('Login failed: user data not found')
            return {
                user: data.data.user,
                accessToken: data.data.accessToken
            }
        },
        onSuccess: () => {
            onSuccessCallback?.()
        }
    })

    return { data, login, loading, error }
}
