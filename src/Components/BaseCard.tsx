import { Card, Image, Text, CardBody, CardFooter, Stack, Heading, Button, ButtonGroup, Divider } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { ReadMoreModal } from './ReadMoreModal';

export interface BaseCardProps {
  title: string
  content?: string
  img: string
}

function BaseCard(props: BaseCardProps) {
  const { title, content, img } = props

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={img}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>

          <Text noOfLines={[1, 2, 3]}>
            {content}
          </Text>
        </CardBody>

        <CardFooter>
          <ReadMoreModal 
            img={img} 
            title={title} 
            content={content}  
          />
        </CardFooter>
      </Stack>
    </Card>
  )
}

export { BaseCard }