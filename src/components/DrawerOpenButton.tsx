import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
// import { useMouse } from '@uidotdev/usehooks'
import { FC, ReactElement } from 'react'

const pickIcon = (position: 'top' | 'right' | 'left'): ReactElement => {
  switch (position) {
    case 'top':
      return <ChevronDownIcon />
    case 'right':
      return <ChevronLeftIcon />
    default:
      return <ChevronRightIcon />
  }
}

interface DrawerOpenButtonProps {
  position: 'top' | 'right' | 'left'
  onOpen: () => void
}

export const DrawerOpenButton: FC<DrawerOpenButtonProps> = ({ onOpen, position }) => {
  // const [mouse] = useMouse()

  return (
    // <Slide
    // direction={'left'}
    // in={mouse.x < 200}>
    <IconButton
      position={'fixed'}
      minWidth={'none'}
      width={position !== 'top' ? '20px' : '40px'}
      height={position === 'top' ? '20px' : '40px'}
      right={position === 'top' || position === 'right' ? '0px' : 'unset'}
      left={position === 'top' ? '0px' : 'unset'}
      top={position !== 'top' ? '0px' : 'unset'}
      bottom={position !== 'top' ? '0px' : 'unset'}
      margin={'auto'}
      roundedLeft={position === 'left' ? 'none' : 'md'}
      roundedRight={position === 'right' ? 'none' : 'md'}
      roundedTop={position === 'top' ? 'none' : undefined}
      onClick={onOpen}
      aria-label="drawer open button"
      icon={pickIcon(position)}
      zIndex={10}
      colorScheme={'cyan'}
    />
    // </Slide>
  )
}
