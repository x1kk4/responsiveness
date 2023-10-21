import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import { DarkModeSwitch, DeviceBar, Drawer, DrawerOpenButton, IframeContainer } from './components'

import { useLocalStorage } from '@uidotdev/usehooks'
import { Url, Device } from './types'
import { useState } from 'react'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isDevicebarOpen, onOpen: onDevicebarOpen, onClose: onDevicebarClose } = useDisclosure()
  const [direction, setDirection] = useState<'vertical' | 'horizontal'>('vertical')
  const [url, saveUrl] = useLocalStorage<Url>('url', '')
  const [usedDevices, saveUsedDevices] = useLocalStorage<string>('devices', '[]')

  const devices = JSON.parse(usedDevices)

  return (
    <>
      <DarkModeSwitch />
      <DrawerOpenButton
        onOpen={onOpen}
        position={'left'}
      />
      <DrawerOpenButton
        onOpen={onDevicebarOpen}
        position={direction === 'vertical' ? 'right' : 'top'}
      />
      <DeviceBar
        isOpen={isDevicebarOpen}
        onClose={onDevicebarClose}
        devices={devices}
        direction={direction}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        url={url}
        saveUrl={saveUrl}
        usedDevices={usedDevices}
        saveUsedDevices={saveUsedDevices}
        direction={direction}
        setDirection={setDirection}
      />

      <Flex
        minH={'100vh'}
        minW={'100vw'}
        flexDirection={direction === 'vertical' ? 'column' : 'row'}
        alignItems={direction === 'vertical' ? 'center' : undefined}
        gap={'50px'}>
        {url ? (
          devices.map((device: Device, index: number) => (
            <IframeContainer
              key={index}
              url={url}
              name={device.name}
              size={device.size}
              type={device.type}
            />
          ))
        ) : (
          <Box>Specify url</Box>
        )}
      </Flex>
    </>
  )
}

export default App
