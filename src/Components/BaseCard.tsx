import { Card, Image, Text, CardBody, CardFooter, Stack, Heading, Button, ButtonGroup, Divider } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

interface BaseCardProps {
  title: string
  content?: string
  img: string
}

function BaseCard({ title, content, img}: BaseCardProps) {
  const { t } = useTranslation();

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
          <Button variant='solid' colorScheme='blue'>
            {t('Button label')}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export { BaseCard }