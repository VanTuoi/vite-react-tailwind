export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='w-full bg-gray-600 p-2 dark:bg-gray-700'>
            <p className='p-1 text-center text-lg font-semibold text-white'>&copy;{currentYear} Elearning</p>
        </footer>
    )
}
