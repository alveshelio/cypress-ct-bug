/// <reference types="cypress" />

import { ChakraProvider, Box } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import customTheme from '@theme/customTheme'
import { Fonts } from '@theme/Fonts'
import { createElement, ReactElement, ReactNode } from 'react'

const ThemeProvider = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <ChakraProvider resetCSS={true} theme={customTheme}>
      <Fonts />
      <Box my={4} mx={6}>
        {children}
      </Box>
    </ChakraProvider>
  )
}

Cypress.Commands.add('mount', (component) => {
  mount(createElement(ThemeProvider, null, component))
})

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`)
})
