import { ChevronRightIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
// import { useMouse } from '@uidotdev/usehooks'
import { FC } from 'react'

interface DrawerOpenButtonProps {
  onOpen: () => void
}

export const DrawerOpenButton: FC<DrawerOpenButtonProps> = ({ onOpen }) => {
  // const [mouse] = useMouse()

  return (
    // <Slide
    // direction={'left'}
    // in={mouse.x < 200}>
    <IconButton
      position={'fixed'}
      minWidth={'none'}
      width={'20px'}
      top={'0px'}
      bottom={'0px'}
      margin={'auto'}
      roundedLeft={'none'}
      onClick={onOpen}
      aria-label="drawer open button"
      icon={<ChevronRightIcon />}
      zIndex={10}
      colorScheme={'cyan'}
    />
    // </Slide>
  )
}
