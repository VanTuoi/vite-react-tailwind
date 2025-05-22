import { type LucideIcon } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '~/components/ui'
import { cn } from '~/lib/utils'

export function NavMain({
    items
}: {
    items: {
        title: string
        url: string
        icon?: LucideIcon
    }[]
}) {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname

    return (
        <SidebarGroup>
            <SidebarGroupContent className='flex flex-col gap-2'>
                <SidebarMenu>
                    {items.map((item) => {
                        const isActive = pathname === item.url
                        return (
                            <SidebarMenuItem key={item.title} className={cn(isActive && 'bg-muted rounded-md')}>
                                <SidebarMenuButton
                                    tooltip={item.title}
                                    onClick={() => navigate(item.url)}
                                    className={cn(isActive && 'text-primary font-semibold')}
                                >
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
