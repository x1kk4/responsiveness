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
  direction: 'vertical' | 'horizontal'
  devices: Device[]
}

export const DeviceBar: FC<DeviceBarProps> = ({ isOpen, onClose, devices, direction }) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement={direction === 'vertical' ? 'right' : 'top'}>
      <DrawerContent
        width={direction === 'vertical' ? '140px !important' : '100%'}
        flexDirection={direction === 'vertical' ? 'column' : 'row'}
        overflowX={'scroll'}>
        {devices.map((device: Device, index: number) => (
          <Flex
            py={'10px'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'space-between'}
            height={'140px'}
            width={'140px'}
            key={index}
            borderBottom={direction === 'vertical' ? '2px solid' : undefined}
            borderRight={direction === 'horizontal' ? '2px solid' : undefined}>
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
