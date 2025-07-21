import { assign, isObject } from 'es-toolkit/compat'

const modules = import.meta.glob('./modules/*.ts', { eager: true })
const pageLocale = import.meta.glob('@/**/*.en.ts', {
  eager: true
})
function formatModules(_modules: any, result: Record<string, string>) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default
    if (!defaultModule) return
    const moduleList = isObject(defaultModule) ? { ...defaultModule } : {}
    assign(result, moduleList)
  })
  return result
}

export const en: Record<string, string> = formatModules(modules, {})
export const pageEn: Record<string, string> = formatModules(pageLocale, {})

export default { ...en, ...pageEn }
