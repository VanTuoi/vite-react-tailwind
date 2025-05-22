import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui'
import { path } from '~/constants'
import type { QueryConfig } from '~/hooks'
import { createSearchString } from '~/utils'

interface Props {
    queryConfig: QueryConfig
}

export const Sort = ({ queryConfig }: Props) => {
    const navigate = useNavigate()
    const { t } = useTranslation('home')

    const sortOptions = [
        { label: t('sort.name'), value: 'name' },
        { label: t('sort.year'), value: 'year' },
        { label: t('sort.rating'), value: 'rating' },
        { label: t('sort.created_at'), value: 'created_at' },
        { label: t('sort.view'), value: 'view' },
        { label: t('sort.sold'), value: 'sold' },
        { label: t('sort.price'), value: 'price' }
    ]

    const handleSortByChange = (sort_by: string) => {
        const newQuery = {
            ...queryConfig,
            page: '1',
            sort_by,
            order: queryConfig.order || 'desc'
        }
        navigate(path.home + createSearchString(newQuery))
    }

    const handleOrderChange = (order: string) => {
        const newQuery = {
            ...queryConfig,
            page: '1',
            order,
            sort_by: queryConfig.sort_by || 'created_at'
        }
        navigate(path.home + createSearchString(newQuery))
    }

    return (
        <div className='flex flex-wrap items-center gap-1 sm:gap-4'>
            <div className='flex items-center gap-2'>
                <p>{t('sort.sort_by')}:</p>
                <Select value={queryConfig.sort_by || 'created_at'} onValueChange={handleSortByChange}>
                    <SelectTrigger className='w-[120px] bg-background'>
                        <SelectValue placeholder={t('sort.field')} />
                    </SelectTrigger>
                    <SelectContent className='w-[120px] text-foreground'>
                        {sortOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className='flex items-center gap-2'>
                <p>{t('sort.order')}:</p>
                <Select value={queryConfig.order || 'desc'} onValueChange={handleOrderChange}>
                    <SelectTrigger className='w-[120px] bg-background'>
                        <SelectValue placeholder={t('sort.order_placeholder')} />
                    </SelectTrigger>
                    <SelectContent className='w-[120px] text-foreground'>
                        <SelectItem value='asc'>{t('sort.asc')}</SelectItem>
                        <SelectItem value='desc'>{t('sort.desc')}</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
