import { BookA, ChartBarStacked } from 'lucide-react'

import { type ComponentProps } from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '~/components/ui'
import { path } from '~/constants'
import { User } from '../header/user'
import { Logo } from '../logo'
import { NavMain } from './nav-main'

const data = {
    navMain: [
        {
            title: 'Danh mục',
            url: path.admin_categories,
            icon: ChartBarStacked
        },
        {
            title: 'Khoá học',
            url: path.admin_courses,
            icon: BookA
        }
    ]
}

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
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
                <User />
            </SidebarFooter>
        </Sidebar>
    )
}
