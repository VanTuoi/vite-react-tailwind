import { Link } from 'react-router-dom'
import { path } from '~/constants'
import { cn } from '~/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Link
            to={path.home}
            className={cn(
                'text-3xl font-bold uppercase text-center',
                'inline-block px-2',
                'sm:px-0 sm:w-auto',
                'before:content-[attr(data-short)] sm:before:content-[attr(data-full)]',
                className
            )}
            data-short='E'
            data-full='Eleaning'
        />
    )
}
