import type { ReactNode } from 'react'
import { AppSidebar } from '~/components/layout'
import { SidebarProvider, SidebarTrigger } from '~/components/ui'

export function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full p-1 sm:p-2 bg-gray-50 text-foreground dark:bg-gray-900 dark:text-foreground'>
                <SidebarTrigger className='size-10' />
                {children}
            </main>
        </SidebarProvider>
    )
}
