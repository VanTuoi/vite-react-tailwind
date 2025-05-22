import { ArrowDown, ArrowUp, Pencil, Trash2 } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { path } from '~/constants/path'
import { useDeleteCourse, useGetCourses, useQueryConfig } from '~/hooks'

import { useNavigate } from 'react-router-dom'
import { CourseModel } from '~/components/pages'
import { Pagination } from '~/components/pagination'
import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui'
import type { Course } from '~/types'
import { createSearchString } from '~/utils'

const CoursePage = () => {
    const navigate = useNavigate()
    const queryConfig = useQueryConfig()

    const { data: courses, loading, meta } = useGetCourses(queryConfig)
    const { deleteCourse } = useDeleteCourse(() => toast.success('Xoá khoá học thành công'))

    const [isCreate, setIsCreate] = useState<boolean>(true)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [categorySelect, setCategorySelect] = useState<Course | null>(null)
    const [deletingId, setDeletingId] = useState<string | null>(null)

    const handleDelete = (id: string) => {
        setDeletingId(id)
        try {
            deleteCourse(id)
        } finally {
            setDeletingId(null)
        }
    }

    const handleCloseModel = (status: boolean) => {
        setIsOpen(status)
        setCategorySelect(null)
    }

    const handleEdit = (category: Course) => {
        setIsOpen(true)
        setIsCreate(false)
        setCategorySelect(category)
    }

    const handleCreate = () => {
        setIsOpen(true)
        setIsCreate(true)
        setCategorySelect(null)
    }

    const handleSort = (column: string) => {
        const currentSortBy = queryConfig.sort_by
        const currentOrder = queryConfig.order || 'desc'

        const newOrder = currentSortBy === column && currentOrder === 'desc' ? 'asc' : 'desc'

        const newQuery = {
            ...queryConfig,
            page: '1',
            sort_by: column,
            order: newOrder
        }

        navigate(path.admin_courses + createSearchString(newQuery))
    }

    const renderSortIcon = (column: string) => {
        const isActive = queryConfig.sort_by === column
        const order = queryConfig.order || 'desc'

        if (!isActive) return null
        return order === 'asc' ? (
            <ArrowUp className='ml-1 inline-block h-4 w-4' />
        ) : (
            <ArrowDown className='ml-1 inline-block h-4 w-4' />
        )
    }

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between py-2'>
                <h2 className='font-bold uppercase text-primary'>Quản lý khóa học</h2>
                <Button onClick={handleCreate}>Tạo mới</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[5%] text-center'>STT</TableHead>
                        <TableHead className='w-[20%] cursor-pointer text-center' onClick={() => handleSort('name')}>
                            Tên khóa học {renderSortIcon('name')}
                        </TableHead>
                        <TableHead
                            className='w-[15%] cursor-pointer text-center'
                            onClick={() => handleSort('course_code')}
                        >
                            Mã {renderSortIcon('course_code')}
                        </TableHead>
                        <TableHead className='w-[10%] text-center'>Hành động</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {!loading ? (
                        courses.map((course, index) => {
                            const isDeletingThis = deletingId === course.id
                            const startIndex = (meta.page - 1) * Number(meta.limit)
                            return (
                                <TableRow key={course.id}>
                                    <TableCell className='text-center'>{startIndex + index + 1}</TableCell>
                                    <TableCell className='truncate text-center' title={course.name}>
                                        {course.name}
                                    </TableCell>
                                    <TableCell className='text-center'>{course.id}</TableCell>
                                    <TableCell className='flex items-center justify-center gap-2 text-center'>
                                        <Button
                                            variant='ghost'
                                            className='text-primary'
                                            onClick={() => handleEdit(course)}
                                        >
                                            <Pencil />
                                        </Button>
                                        <Button
                                            variant='ghost'
                                            className='text-red-500'
                                            disabled={isDeletingThis}
                                            onClick={() => course?.id && handleDelete(course.id)}
                                        >
                                            {isDeletingThis ? <Trash2 className='animate-spin' /> : <Trash2 />}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={8} className='text-center'>
                                Đang tải...
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <CourseModel
                isOpen={isOpen}
                setIsOpen={(value) => handleCloseModel(value)}
                course={categorySelect}
                isCreate={isCreate}
            />
            {courses.length !== 0 && (
                <Pagination path={path.admin_courses} queryConfig={queryConfig} pageSize={meta.total_pages} />
            )}
        </div>
    )
}

export default CoursePage
