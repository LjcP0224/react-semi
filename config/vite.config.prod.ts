import { defineConfig, mergeConfig } from 'vite'
import type { UserConfig } from 'vite'

import baseConfig from './vite.config.base'

const prodConfig = defineConfig({
  mode: 'production'
}) satisfies UserConfig

export default mergeConfig(baseConfig, prodConfig)
