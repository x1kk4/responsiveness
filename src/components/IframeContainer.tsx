import { Box, Heading } from '@chakra-ui/react'
import { FC } from 'react'

interface IframeContainerProps {
  url: string
  name: string
  size: {
    width: number
    height: number
  }
  type?: string
  borderImage?: null
}

export const IframeContainer: FC<IframeContainerProps> = ({ url, name, size }) => {
  return (
    <Box>
      <Heading
        as={'h2'}
        size={'lg'}
        textAlign={'center'}
        mb={'4px'}>
        {name}
      </Heading>
      <Box border={'2px solid'}>
        <iframe
          src={url}
          sandbox="allow-same-origin allow-forms allow-scripts"
          seamless
          width={`${size.width}px`}
          height={`${size.height}px`}></iframe>
      </Box>
    </Box>
  )
}
