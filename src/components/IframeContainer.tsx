import { Box } from '@chakra-ui/react'
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
    <Box minHeight={'100vh'}>
      <h2>{name}</h2>
      <iframe
        src={url}
        sandbox="allow-same-origin allow-forms allow-scripts"
        seamless
        width={`${size.width}px`}
        height={`${size.height}px`}></iframe>
    </Box>
  )
}
