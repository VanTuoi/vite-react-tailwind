import { Footer } from '@/components/footer'
import { Header } from '@/components/header/header'
import type { ReactNode } from 'react'

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Header />
            <main className='h-[500px]'>{children}</main>
            <Footer />
        </div>
    )
}
