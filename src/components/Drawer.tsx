import {
  Button,
  Drawer as ChakraDrawer,
  DrawerContent,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  Switch,
  Text,
} from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import devices from '../devices/devices.json'
import { Device, Url } from '../types'
import { AddIcon } from '@chakra-ui/icons'
import { IconType } from 'react-icons'
import { AiOutlineDesktop, AiOutlineLaptop, AiOutlineMobile, AiOutlineTablet } from 'react-icons/ai'

const pickIcon = (type: string): IconType => {
  switch (type) {
    case 'tablet':
      return AiOutlineTablet
    case 'laptop':
      return AiOutlineLaptop
    case 'desktop':
      return AiOutlineDesktop
    default:
      return AiOutlineMobile
  }
}

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  url: Url
  saveUrl: Dispatch<SetStateAction<Url>>
  usedDevices: string
  saveUsedDevices: Dispatch<SetStateAction<string>>
  direction: 'vertical' | 'horizontal'
  setDirection: Dispatch<SetStateAction<'vertical' | 'horizontal'>>
}

export const Drawer: FC<DrawerProps> = ({
  isOpen,
  onClose,
  url,
  saveUrl,
  usedDevices,
  saveUsedDevices,
  direction,
  setDirection,
}) => {
  const [urlInput, setUrlInput] = useState<string>(url ?? '')
  const [devicesSearch, setDevicesSearch] = useState<string>('')

  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement={'left'}
      onClose={onClose}
      autoFocus={false}
      size={'md'}>
      <DrawerContent
        flexDirection={'row'}
        width={'auto !important'}>
        <Flex
          flexDirection={'column'}
          padding={'16px'}
          justifyContent={'space-between'}>
          <Flex
            flexDirection={'column'}
            gap={'16px'}>
            <Heading
              as={'h2'}
              size={'lg'}>
              Preferences
            </Heading>
            <Flex
              flexDirection={'column'}
              gap={'8px'}>
              <Heading
                as={'h3'}
                size={'md'}>
                URL
              </Heading>
              <Input
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder={'Specify URL'}
              />
            </Flex>
            <Flex
              flexDirection={'column'}
              gap={'8px'}>
              <Heading
                as={'h3'}
                size={'md'}>
                Devices
              </Heading>
              <Input
                value={devicesSearch}
                onChange={(e) => setDevicesSearch(e.target.value)}
                placeholder={'Find device'}
              />
              <Flex
                flexDirection={'column'}
                gap={'4px'}
                height={'400px'}
                overflowY={'auto'}
                paddingRight={'12px'}>
                {devices.map((device) =>
                  device.name.slice(0, devicesSearch.length).toLocaleLowerCase() ===
                  devicesSearch.toLocaleLowerCase() ? (
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
                  ) : null,
                )}
              </Flex>
            </Flex>
          </Flex>

          <Flex
            flexDirection={'column'}
            gap={'4px'}>
            <Flex
              gap={'8px'}
              alignContent={'center'}>
              <Text fontWeight={600}>Horizontal view?</Text>
              <Switch
                isChecked={direction === 'horizontal'}
                onChange={() => setDirection(direction === 'horizontal' ? 'vertical' : 'horizontal')}
              />
            </Flex>

            <Flex
              flexDirection={'column'}
              width={'100%'}
              height={'88px'}
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
            </Flex>
          </Flex>
        </Flex>
        {usedDevices !== '[]' ? (
          <Flex
            flexDirection={'column'}
            width={'140px'}
            overflowY={'scroll'}>
            {JSON.parse(usedDevices).map((device: Device, index: number) => (
              <Flex
                py={'10px'}
                direction={'column'}
                alignItems={'center'}
                justifyContent={'space-between'}
                height={'140px'}
                key={index}
                borderBottom={'2px solid'}
                borderLeft={'2px solid'}>
                <Icon
                  as={pickIcon(device.type)}
                  height={'80px'}
                  width={'80px'}
                />
                <Text>{device.name}</Text>
              </Flex>
            ))}
          </Flex>
        ) : null}
      </DrawerContent>
    </ChakraDrawer>
  )
}
