import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Button } from '~/components/ui'
import { path } from '~/constants'

export const EmptyState = () => {
    const navigate = useNavigate()
    const { t } = useTranslation('home')

    return (
        <div className='col-span-full py-20 text-center min-h-screen'>
            <p className='text-lg text-gray-600'>{t('empty_state.no_courses')}</p>
            <Button variant='ghost' className='mt-4 text-primary' onClick={() => navigate(path.home)}>
                {t('empty_state.view_all')}
            </Button>
        </div>
    )
}
