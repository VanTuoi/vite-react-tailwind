import { Logo } from '../logo'
import { User } from './user'

export const Header = () => {
    return (
        <header className='h-[50px] w-full border-b shadow-sm sm:h-[60px] py-3'>
            <div className='container flex flex-row items-center justify-between'>
                <Logo />
                <User />
            </div>
        </header>
    )
}
