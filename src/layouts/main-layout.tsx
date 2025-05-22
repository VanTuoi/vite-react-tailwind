import type { ReactNode } from 'react'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header/header'

interface Props {
    children: ReactNode
}

export const MainLayout = ({ children }: Props) => {
    return (
        <div className='bg-gray-50 text-foreground dark:bg-gray-900 dark:text-foreground'>
            <Header />
            <main className='container flex-1'>
                <div className='px-1 py-1 md:py-4'>{children}</div>
            </main>
            <Footer />
        </div>
    )
}
