import { extendTheme } from '@chakra-ui/react'
import { globals } from './globals'

export const extendedTheme = extendTheme({
  styles: {
    global: globals,
  },

  colors: {
    responsiveness: {
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
  },
  components: {},
})
