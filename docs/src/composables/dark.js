// import { useDark, useToggle } from '@vueuse/core'

export const isDark = VueUse.useDark()
export const toggleDark = VueUse.useToggle(isDark)