import { useDisclosure } from '@chakra-ui/react'
import { DarkModeSwitch, Drawer, DrawerOpenButton } from './components'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <DarkModeSwitch />
      <DrawerOpenButton onOpen={onOpen} />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
      />
      LAYOUT
    </>
  )
}

export default App
