import { Drawer, DrawerContent, Flex, Icon, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Device } from '../types'
import { AiOutlineMobile, AiOutlineTablet, AiOutlineLaptop, AiOutlineDesktop } from 'react-icons/ai'
import { IconType } from 'react-icons'

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

interface DeviceBarProps {
  isOpen: boolean
  onClose: () => void
  devices: Device[]
}

export const DeviceBar: FC<DeviceBarProps> = ({ isOpen, onClose, devices }) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="right">
      <DrawerContent width={'140px !important'}>
        {devices.map((device) => (
          <Flex
            py={'10px'}
            direction={'column'}
            alignItems={'center'}
            justifyContent={'space-between'}
            height={'140px'}
            key={device.name}
            borderBottom={'2px solid'}>
            <Icon
              as={pickIcon(device.type)}
              height={'80px'}
              width={'80px'}
            />
            <Text>{device.name}</Text>
          </Flex>
        ))}
      </DrawerContent>
    </Drawer>
  )
}
