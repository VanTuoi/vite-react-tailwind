import { path } from '@/constants/path'
import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
        <Link to={path.home} className='text-3xl font-bold uppercase'>
            Eleaning
        </Link>
    )
}
