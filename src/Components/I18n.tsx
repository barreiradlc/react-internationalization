import { Avatar, Box, Button, ButtonGroup, Stack } from "@chakra-ui/react";
import enFlag from "../assets/en.png"
import ptFlag from "../assets/pt.png"
import { useTranslation } from 'react-i18next';


function I18n(){
  const { i18n } = useTranslation();
  const language = i18n.language

  function handleSetBR() {
    i18n.changeLanguage('pt-BR')
  }
  function handleSetEN() {
    i18n.changeLanguage('en-US')
  }

  return(
    <Box pos="fixed" top="0" right="0" padding="1rem"  >
      <ButtonGroup isAttached variant='outline' spacing='6' colorScheme='blue' background="#fff" >
        <Button variant={language === 'pt-BR' ? 'solid' : 'outline'} onClick={handleSetBR}>          
          <Avatar size='sm' src={ptFlag} showBorder />
        </Button>
        <Button variant={language === 'en-US' ? 'solid' : 'outline'} onClick={handleSetEN}>          
          <Avatar size='sm' src={enFlag} showBorder />
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export { I18n }