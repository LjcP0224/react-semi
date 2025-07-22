/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vite'
import type { UserConfig } from 'vite'

import baseConfig from './vite.config.base'

const devConfig = defineConfig({
  mode: 'development',
  server: {
    host: true
  },
  test: {
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
}) satisfies UserConfig

export default mergeConfig(baseConfig, devConfig)
