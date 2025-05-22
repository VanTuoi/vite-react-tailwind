import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui'

import { useNavigate } from 'react-router-dom'
import type { QueryConfig } from '~/hooks'
import { cn } from '~/lib/utils'
import { createSearchString } from '~/utils'

interface Props {
    path: string
    queryConfig: QueryConfig
    pageSize: number
}

const RANGE = 1

export const Pagination = ({ path = '/', queryConfig, pageSize = 1 }: Props) => {
    const navigate = useNavigate()
    const page = Number(queryConfig.page)

    const renderPagination = () => {
        let dotAfter = false
        let dotBefore = false

        const renderDotBefore = (index: number) => {
            if (!dotBefore) {
                dotBefore = true
                return (
                    <span key={`before-${index}`} className='mx-2 rounded px-3 py-2'>
                        ...
                    </span>
                )
            }
            return null
        }

        const renderDotAfter = (index: number) => {
            if (!dotAfter) {
                dotAfter = true
                return (
                    <span key={`after-${index}`} className='mx-2 rounded px-3 py-2'>
                        ...
                    </span>
                )
            }
            return null
        }

        return Array(pageSize)
            .fill(0)
            .map((_, index) => {
                const pageNumber = index + 1

                if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
                    return renderDotAfter(index)
                } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
                    if (pageNumber < page - RANGE && pageNumber > RANGE) return renderDotBefore(index)
                    if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) return renderDotAfter(index)
                } else if (page >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page - RANGE) {
                    return renderDotBefore(index)
                }

                const href = path + createSearchString({ ...queryConfig, page: pageNumber.toString() })

                return (
                    <Button
                        variant={'ghost'}
                        className={cn(
                            'mx-1 px-3 py-1 border-primary',
                            pageNumber === page
                                ? 'border-primary bg-primary hover:bg-primary/80 text-white'
                                : 'border-transparent hover:bg-primary/10 '
                        )}
                        onClick={() => navigate(href)}
                        key={index}
                    >
                        {pageNumber}
                    </Button>
                )
            })
    }

    const handlePageChange = (newPage: number) => {
        const newQuery = { ...queryConfig, page: newPage.toString() }
        navigate(path + createSearchString(newQuery))
    }

    const handleLimitChange = (newLimit: string) => {
        const newQuery = { ...queryConfig, page: '1', limit: newLimit }
        navigate(path + createSearchString(newQuery))
    }

    return (
        <div className='mb-4 mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-center'>
            <div className='flex items-center'>
                <Select value={queryConfig.limit || '10'} onValueChange={handleLimitChange}>
                    <SelectTrigger className='w-[65px] bg-background'>
                        <SelectValue placeholder='Số lượng' />
                    </SelectTrigger>
                    <SelectContent className='w-[55px] bg-background text-foreground'>
                        <SelectItem value='2'>2</SelectItem>
                        <SelectItem value='5'>5</SelectItem>
                        <SelectItem value='10'>10</SelectItem>
                        <SelectItem value='20'>20</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='hidden h-8 w-px bg-gray-300 sm:inline'></div>
            <div className='flex w-full items-center justify-center md:w-auto'>
                {page === 1 ? (
                    <Button disabled variant='ghost' className='text-foreground-muted'>
                        <ChevronLeft className='sm:hidden' />
                        <span className='hidden sm:inline'>Trang trước</span>
                    </Button>
                ) : (
                    <Button
                        variant='ghost'
                        onClick={() => handlePageChange(page - 1)}
                        className='text-primary hover:bg-primary/10'
                    >
                        <ChevronLeft className='sm:hidden' />
                        <span className='hidden sm:inline'>Trang trước</span>
                    </Button>
                )}

                {renderPagination()}

                {page === pageSize ? (
                    <Button disabled variant='ghost' className='text-foreground-muted'>
                        <ChevronRight className='sm:hidden' />
                        <span className='hidden sm:inline'>Trang kế</span>
                    </Button>
                ) : (
                    <Button
                        variant='ghost'
                        onClick={() => handlePageChange(page + 1)}
                        className='text-primary hover:bg-primary/10'
                    >
                        <ChevronRight className='sm:hidden' />
                        <span className='hidden sm:inline'>Trang kế</span>
                    </Button>
                )}
            </div>
        </div>
    )
}
