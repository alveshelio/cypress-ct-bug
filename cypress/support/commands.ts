/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    dataCy(value: string): Chainable<Element>
    login(email: string, password: string): Chainable<Element>
    displaySignupForm(): Chainable<Element>
    signup(fullName: string, email: string, password: string): Chainable<Element>
    mount(component: JSX.Element): Chainable<Element>
  }
}

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`)
})

Cypress.Commands.add('login', (email, password) => {
  cy.dataCy('button-email-password').click()
  cy.dataCy('login-input-email').type(email)
  cy.dataCy('login-input-password').type(password)
  cy.dataCy('login-button-submit').click()
})

Cypress.Commands.add('displaySignupForm', () => {
  cy.dataCy('signup-more-options').click()
  cy.dataCy('signup-button-email-password').click()
})

Cypress.Commands.add('signup', (fullName, email, password) => {
  cy.displaySignupForm()
  cy.dataCy('signup-input-fullName').type(fullName)
  cy.dataCy('signup-input-email').type(email)
  cy.dataCy('signup-input-password').type(password)
  cy.dataCy('signup-button-submit').click()
})
