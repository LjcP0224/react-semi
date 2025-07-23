import { useContext } from 'react'
import { Button, Select } from '@douyinfe/semi-ui'
import { IconLanguage } from '@douyinfe/semi-icons'

import { LOCALE_OPTIONS } from '@/locale/index'
import { GlobalContext } from '@/context'
import { isString } from 'es-toolkit'

const Locale = () => {
  const { setLang, lang } = useContext(GlobalContext)

  const triggerRender = () => {
    return (
      <Button icon={<IconLanguage />}>{lang == 'zh-CN' ? '中' : 'En'}</Button>
    )
  }

  const handleChange = (value: unknown) => {
    if (setLang && isString(value)) {
      setLang(value)
    }
  }

  return (
    <Select
      value={lang}
      onChange={handleChange}
      prefix={<IconLanguage />}
      triggerRender={triggerRender}>
      {LOCALE_OPTIONS.map((item) => (
        <Select.Option value={item.value} key={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  )
}

export default Locale
