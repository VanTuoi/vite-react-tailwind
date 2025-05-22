import { LogOutIcon, MoreVerticalIcon, Settings, SunMoon, UserCircleIcon } from 'lucide-react'

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
    DropdownMenuTrigger,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from '~/components/ui'
import { useLogout } from '~/hooks'
import type { User } from '~/types'
import { ThemeToggle } from '../header/theme-toggle'

export function NavUser({ user }: { user: User | null }) {
    const { isMobile } = useSidebar()
    const navigate = useNavigate()
    const { logout } = useLogout(() => navigate('/login'))

    const handleLogout = () => {
        logout()
    }

    if (user === null) return

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size='lg'
                            className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
                        >
                            <Avatar className='h-8 w-8 rounded-lg'>
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback className='rounded-lg'>{user.name}</AvatarFallback>
                            </Avatar>
                            <div className='grid flex-1 text-left text-sm leading-tight'>
                                <span className='truncate font-medium'>{user.name}</span>
                                <span className='truncate text-xs text-muted-foreground'>{user.email}</span>
                            </div>
                            <MoreVerticalIcon className='ml-auto size-4' />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
                        side={isMobile ? 'bottom' : 'right'}
                        align='end'
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className='p-0 font-normal'>
                            <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                                <Avatar className='h-8 w-8 rounded-lg'>
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                                </Avatar>
                                <div className='grid flex-1 text-left text-sm leading-tight'>
                                    <span className='truncate font-medium'>{user.name}</span>
                                    <span className='truncate text-xs text-muted-foreground'>{user.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <UserCircleIcon />
                                Tài khoản
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings />
                                Cài đặt
                            </DropdownMenuItem>
                            <DropdownMenuItem className='justify-between'>
                                <div className='flex flex-row items-center gap-2'>
                                    <SunMoon />
                                    Chủ đề
                                </div>
                                <ThemeToggle />
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleLogout()}>
                            <LogOutIcon />
                            Đăng xuất
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
