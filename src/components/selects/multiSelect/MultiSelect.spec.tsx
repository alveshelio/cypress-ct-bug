import { MultiSelect } from './MultiSelect'

const options = [
  {
    value: 'CANADA',
    label: 'Canada',
  },
  {
    value: 'PORTUGAL',
    label: 'Portugal',
  },
  {
    value: 'USA',
    label: 'USA',
  },
  {
    value: 'FRANCE',
    label: 'France',
  },
]

describe('<MultiSelect />', () => {
  it('should be able to select an item from the list', () => {
    cy.mount(
      <MultiSelect
        id="countries"
        name="countries"
        onChange={(options) => {
          console.warn('options', options)
        }}
        options={options}
        placeholder="Select an option"
      />
    )
    cy.get('input').type('ca')
    cy.get('li').contains('Canada').click()
    cy.get('span').contains('Canada').should('exist')
  })

  it('should be able to select multiple items from the list', () => {
    cy.mount(
      <MultiSelect
        options={options}
        id="countries"
        name="countries"
        onChange={(options) => {
          console.warn('options', options)
        }}
        placeholder="Select an option"
      />
    )
    cy.get('input').type('Fr')
    cy.get('li').contains('France').click()
    cy.get('input').type('Po')
    cy.get('li').contains('Portugal').click()
    cy.get('span').contains('Portugal').should('exist')
  })

  it('should be able to select an item from the list using arrow keys', () => {
    cy.mount(
      <MultiSelect
        options={options}
        id="countries"
        name="countries"
        onChange={(options) => {
          console.warn('options', options)
        }}
        placeholder="Select an option"
      />
    )
    cy.get('input').click().type('{downarrow}{enter}')
    cy.get('span').contains('Canada').should('exist')
  })

  it('should be able to close the menu when "Esc" key is pressed', () => {
    cy.mount(
      <MultiSelect
        options={options}
        id="countries"
        name="countries"
        onChange={(options) => {
          console.warn('options', options)
        }}
        placeholder="Select an option"
      />
    )
    cy.get('input').click().type('{esc}')
    cy.contains('Canada').should('not.exist')
  })
})
