import { BookA, ChartBarStacked, LayoutDashboardIcon } from 'lucide-react'

import { useContext, type ComponentProps } from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '~/components/ui'
import { AppContext } from '~/contexts'
import { Logo } from '../logo'
import { NavMain } from './nav-main'
import { NavUser } from './nav-user'

const data = {
    navMain: [
        {
            title: 'Tổng quan',
            url: '/',
            icon: LayoutDashboardIcon
        },
        {
            title: 'Danh mục',
            url: '/categories',
            icon: ChartBarStacked
        },
        {
            title: 'Khoá học',
            url: '/courses',
            icon: BookA
        }
    ]
}

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
    const { profile } = useContext(AppContext)

    return (
        <Sidebar collapsible='offcanvas' {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className='w-full'>
                        <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:!p-1.5'>
                            <Logo className='text-xl' />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={profile} />
            </SidebarFooter>
        </Sidebar>
    )
}
