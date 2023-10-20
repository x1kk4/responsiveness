import { IconButton, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const DarkModeSwitch: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      position="fixed"
      top={'12px'}
      right={'12px'}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
    />
  )
}
