import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui'

const LanguageSelector = () => {
    const { i18n: i18nInstance } = useTranslation()

    const handleChange = (value: string) => {
        i18n.changeLanguage(value)
    }

    return (
        <Select defaultValue={i18nInstance.language} onValueChange={handleChange}>
            <SelectTrigger className='w-[90px] !h-6 text-xs px-1 rounded-md border'>
                <SelectValue placeholder='Lang' />
            </SelectTrigger>
            <SelectContent className='text-xs'>
                <SelectItem value='vi' className='text-xs'>
                    Tiếng Việt
                </SelectItem>
                <SelectItem value='en' className='text-xs'>
                    English
                </SelectItem>
            </SelectContent>
        </Select>
    )
}

export default LanguageSelector
