import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '~/components/ui'
import { path } from '~/constants'
import { AppContext } from '~/contexts'
import { Button } from '../ui'

export const User = () => {
    const navigate = useNavigate()
    const { isAuthenticated, profile, resetProfile } = useContext(AppContext)

    const handleLogout = () => {
        resetProfile()
    }

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='border-none'>
                            <Avatar className='h-[35px] w-auto'>
                                <AvatarImage src={profile?.avatar} />
                                <AvatarFallback>{profile?.name}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleLogout()}>Đăng xuất</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            ) : (
                <Button onClick={() => navigate(path.login)}>Đăng nhập</Button>
            )}
        </div>
    )
}
