import React from 'react'
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
} from '@chakra-ui/core'

import { AddForm } from 'components/form/Add'

export function TodoAdd() {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Add Todo Item
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <AddForm />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
