import { Box, Text, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { useTranslation } from "react-i18next";

interface ReadMoreModalProps {
  title: string
  content?: string
  img: string
}
function ReadMoreModal({ title, content, img }: ReadMoreModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation();
  const finalRef = useRef(null)

  return (
    <>
      <Button variant='solid' colorScheme='blue' onClick={onOpen}>
       {t('Button label')}
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {content}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              {t('Button label close')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


export { ReadMoreModal }