import {
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from '@chakra-ui/react'
import { FC } from 'react'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
          <Button
            variant="outline"
            mr={3}
            onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  )
}
