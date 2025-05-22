import { LogOutIcon, Settings, SunMoon, UserCircleIcon } from 'lucide-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '~/components/ui'
import { path } from '~/constants'
import { AppContext } from '~/contexts'
import { Button } from '../ui'
import { ThemeToggle } from './theme-toggle'

export const User = () => {
    const navigate = useNavigate()
    const { isAuthenticated, profile, resetProfile } = useContext(AppContext)

    const handleLogout = () => {
        resetProfile()
    }

    if (!isAuthenticated || !profile) {
        return <Button onClick={() => navigate(path.login)}>Đăng nhập</Button>
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='flex items-center gap-2 cursor-pointer px-2 py-1 rounded-lg hover:bg-accent'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src={profile.avatar} alt={profile.name} />
                        <AvatarFallback>{profile.name?.[0] ?? 'U'}</AvatarFallback>
                    </Avatar>
                    <div className='hidden sm:flex flex-col text-left text-sm leading-tight'>
                        <span className='font-medium truncate'>{profile.name}</span>
                        <span className='text-xs text-muted-foreground truncate'>{profile.email}</span>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='min-w-56 rounded-lg' side='bottom' align='end' sideOffset={4}>
                <DropdownMenuLabel className='p-0 font-normal'>
                    <div className='flex items-center gap-2 px-3 py-2 text-sm'>
                        <Avatar className='h-8 w-8'>
                            <AvatarImage src={profile.avatar} alt={profile.name} />
                            <AvatarFallback>{profile.name?.[0] ?? 'U'}</AvatarFallback>
                        </Avatar>
                        <div className='text-left'>
                            <div className='font-medium truncate'>{profile.name}</div>
                            <div className='text-xs text-muted-foreground truncate'>{profile.email}</div>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <UserCircleIcon className='mr-2 size-4' />
                        Tài khoản
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className='mr-2 size-4' />
                        Cài đặt
                    </DropdownMenuItem>
                    <DropdownMenuItem className='justify-between'>
                        <div className='flex items-center gap-2'>
                            <SunMoon className='size-4' />
                            Chủ đề
                        </div>
                        <ThemeToggle />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    <LogOutIcon className='mr-2 size-4' />
                    Đăng xuất
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
