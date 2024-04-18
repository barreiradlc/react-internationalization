import { Flex } from "@chakra-ui/react";
import { BaseCard } from "./Components/BaseCard";
import { I18n } from "./Components/I18n";
import { useTranslation } from 'react-i18next';
import giraffeImage from './assets/giraffe.jpeg'
import dogImage from './assets/dog.jpeg'
import rabbitImage from './assets/rabbit.jpeg'


function App() {
  const { t } = useTranslation();

  return (

    <>
      <Flex align="space-between" justify="space-between" flexDirection="column" padding="2rem" gap={2}>  
        <BaseCard
          img={giraffeImage}
          title={t('giraffe.title')}
          content={t('giraffe.content')}
          />
        <BaseCard 
          title={t('dog.title')}
          content={t('dog.content')}
          img={dogImage} 
          />
        <BaseCard 
          title={t('rabbit.title')}
          content={t('rabbit.content')}
          img={rabbitImage} 
        />
      </Flex>
      <I18n />
    </>
  );
}

export default App;
