import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import { DarkModeSwitch, DeviceBar, Drawer, DrawerOpenButton, IframeContainer } from './components'

import { useLocalStorage } from '@uidotdev/usehooks'
import { Url, Device } from './types'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [direction, setDirection] = useState<'vertical' | 'horizontal'>('vertical')
  const [url, saveUrl] = useLocalStorage<Url>('url', '')
  const [usedDevices, saveUsedDevices] = useLocalStorage<string>('devices', '[]')

  const devices = JSON.parse(usedDevices)

  return (
    <>
      <DarkModeSwitch />
      <DrawerOpenButton onOpen={onOpen} />
      <DeviceBar
        isOpen={isOpen}
        onClose={onClose}
        devices={devices}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        url={url}
        saveUrl={saveUrl}
        usedDevices={usedDevices}
        saveUsedDevices={saveUsedDevices}
      />

      <Flex
        minH={'100vh'}
        minW={'100vw'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'20px'}>
        {url ? (
          devices.map((device: Device) => (
            <IframeContainer
              key={device.name}
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
