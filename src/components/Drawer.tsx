import {
  Box,
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import devices from '../devices/devices.json'
import { Url } from '../types'
import { AddIcon } from '@chakra-ui/icons'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  url: Url
  saveUrl: Dispatch<SetStateAction<Url>>
  usedDevices: string
  saveUsedDevices: Dispatch<SetStateAction<string>>
}

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose, url, saveUrl, usedDevices, saveUsedDevices }) => {
  const [urlInput, setUrlInput] = useState<string>(url ?? '')

  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      autoFocus={false}>
      <DrawerContent>
        <DrawerHeader>Preferences</DrawerHeader>

        <DrawerBody
          display={'flex'}
          flexDirection={'column'}
          gap={'20px'}>
          <Box>
            URL
            <Input
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}>
            {devices.map((device) => (
              <Flex
                key={device.name}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Text>{device.name}</Text>
                <IconButton
                  minWidth={'none'}
                  height={'20px'}
                  width={'20px'}
                  icon={
                    <AddIcon
                      width={'10px'}
                      height={'10px'}
                    />
                  }
                  aria-label="add device"
                  onClick={() => saveUsedDevices(JSON.stringify([...JSON.parse(usedDevices), device]))}
                />
              </Flex>
            ))}
          </Box>
        </DrawerBody>

        <DrawerFooter
          padding={'8px'}
          flexDirection={'column'}
          width={'100%'}
          height={'104px'}
          justifyContent={'space-between'}>
          <Button
            width={'100%'}
            colorScheme={'red'}
            onClick={() => saveUsedDevices('[]')}>
            Clear devices list
          </Button>
          <Flex
            gap={'8px'}
            flexDirection={'row'}
            width={'100%'}>
            <Button
              variant="outline"
              onClick={onClose}
              flex={1}>
              Cancel
            </Button>
            <Button
              flex={1}
              colorScheme={'cyan'}
              onClick={() => {
                saveUrl(urlInput)
                onClose()
              }}>
              Save
            </Button>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  )
}
