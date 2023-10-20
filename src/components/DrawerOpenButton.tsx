import { ChevronRightIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { FC } from 'react'

interface DrawerOpenButtonProps {
  onOpen: () => void
}

export const DrawerOpenButton: FC<DrawerOpenButtonProps> = ({ onOpen }) => {
  return (
    <IconButton
      position={'fixed'}
      left={'0px'}
      top={'50%'}
      onClick={onOpen}
      aria-label="drawer open button"
      icon={<ChevronRightIcon />}
    />
  )
}
