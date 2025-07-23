import { useContext } from 'react'
import { Select } from '@douyinfe/semi-ui'
import { IconLanguage } from '@douyinfe/semi-icons'

import { LOCALE_OPTIONS } from '@/locale/index'
import { GlobalContext } from '@/context'

const Locale = () => {
  const { setLang, lang } = useContext(GlobalContext)

  const handleChange = (value: unknown) => {
    if (setLang) {
      setLang(value as string)
    }
  }

  return (
    <Select value={lang} onChange={handleChange} prefix={<IconLanguage />} >
      {LOCALE_OPTIONS.map((item) => (
        <Select.Option value={item.value} key={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  )
}

export default Locale
