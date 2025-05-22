import { Link } from 'react-router-dom'
import { path } from '~/constants'
import { cn } from '~/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Link to={path.home} className={cn('text-3xl font-bold uppercase text-center w-full', className)}>
            Eleaning
        </Link>
    )
}
