import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useCreateCourse, useGetCategories, useUpdateCourse } from '~/hooks'
import { courseSchema, type Course, type TypeCourseSchema } from '~/types'

import {
    Button,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    Input,
    Label,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '~/components/ui'

interface CourseModelProps {
    course?: Course | null
    isCreate: boolean
    isOpen: boolean
    setIsOpen: (status: boolean) => void
}

export const CourseModel = ({ isOpen, setIsOpen, course, isCreate }: CourseModelProps) => {
    const { createCourse, loading: isCreating, error: errorCreate } = useCreateCourse(() => handleCreateSuccess())
    const { updateCourse, loading: isUpdating, error: errorUpdate } = useUpdateCourse(() => handleUpdateSuccess())
    const { data: dataCategories } = useGetCategories()

    const {
        register,
        handleSubmit,
        reset,
        setError,
        clearErrors,
        control,
        formState: { errors, isValid, isSubmitted, touchedFields }
    } = useForm<TypeCourseSchema>({
        resolver: zodResolver(courseSchema),
        defaultValues: {},
        mode: 'onSubmit'
    })

    const error = errorUpdate || errorCreate

    useEffect(() => {
        if (error?.errors) {
            Object.entries(error.errors).forEach(([field, messages]) => {
                messages.forEach((message) => {
                    setError(field as keyof TypeCourseSchema, {
                        type: 'server',
                        message
                    })
                })
            })
        } else {
            clearErrors()
        }
    }, [error, setError, clearErrors])

    const handleCreateSuccess = () => {
        toast.success('Tạo mới khóa học thành công')
        setIsOpen(false)
    }

    const handleUpdateSuccess = () => {
        toast.success('Cập nhật khóa học thành công')
        setIsOpen(false)
    }

    const handleSubmitForm = (formData: TypeCourseSchema) => {
        if (isCreate) {
            createCourse(formData)
        } else {
            if (!course?.id) {
                toast.error('Không tìm thấy ID khóa học để cập nhật')
                return
            }
            updateCourse({ id: course.id, courseData: formData })
        }
    }

    useEffect(() => {
        if (isOpen) {
            if (isCreate) {
                reset({
                    name: '',
                    category: undefined,
                    image: undefined
                })
            } else if (course) {
                reset({
                    name: course.name,
                    category: course.category?.id || undefined,
                    image: course.image || undefined
                })
            }
        }
    }, [isOpen, isCreate, course, reset])

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className='max-h-[90vh] min-w-[64rem] overflow-y-auto bg-background text-foreground/90'>
                <DialogHeader>
                    <DialogTitle>{isCreate ? 'Tạo mới' : 'Cập nhật'} khóa học</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Label htmlFor='id' className='py-2'>
                                ID khóa học
                            </Label>
                            <Input
                                disabled
                                id='id'
                                placeholder='ID'
                                className='h-12'
                                value={course?.id ?? 'Tự động tạo'}
                                readOnly
                            />
                        </div>
                        <div>
                            <Label htmlFor='name' className='py-2'>
                                Tên khóa học
                            </Label>
                            <Input id='name' placeholder='Tên khóa học' className='h-12' {...register('name')} />
                            {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor='image' className='py-2'>
                                Hình ảnh
                            </Label>
                            <Input id='image' placeholder='URL hình ảnh' className='h-12' {...register('image')} />
                            {errors.image && <p className='mt-1 text-sm text-red-500'>{errors.image.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor='category' className='py-2'>
                                Danh mục
                            </Label>
                            <Controller
                                name='category'
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value || ''}
                                        disabled={!dataCategories || dataCategories.length === 0}
                                    >
                                        <SelectTrigger className='!h-12 w-full border-gray-500'>
                                            <SelectValue placeholder='Chọn danh mục' />
                                        </SelectTrigger>
                                        <SelectContent className='max-h-[400px] bg-background text-foreground'>
                                            {dataCategories?.map((cat) => (
                                                <SelectItem key={cat.id} value={cat.id}>
                                                    {cat.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.category && <p className='mt-1 text-sm text-red-500'>{errors.category.message}</p>}
                        </div>
                    </div>
                    <div className='flex justify-end py-3'>
                        <Button
                            type='submit'
                            disabled={
                                (!isValid && Object.keys(touchedFields).length > 0) ||
                                isCreating ||
                                isUpdating ||
                                isSubmitted
                            }
                        >
                            {isCreate
                                ? isCreating
                                    ? 'Đang tạo mới...'
                                    : 'Tạo mới'
                                : isUpdating
                                  ? 'Đang cập nhật...'
                                  : 'Cập nhật'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
