import { Button, Stack } from '@chakra-ui/react'
import { AutoComplete } from '@components'
import { Option } from '@models'
import { UseComboboxStateChange } from 'downshift'
import { ChangeEvent, ReactElement, useState } from 'react'

const AutoCompleteWrapper = (): ReactElement => {
  const options: Option[] = [
    { value: 'canada', label: 'Canada' },
    { value: 'germany', label: 'Germany' },
    { value: 'uk', label: 'UK' },
    { value: 'portugal', label: 'Portugal' },
    { value: 'france', label: 'France' },
    { value: 'spain', label: 'Spain' },
    { value: 'italy', label: 'Italy' },
    { value: 'usa', label: 'USA' },
    { value: 'brazil', label: 'Brazil' },
  ]

  const [items] = useState<Option[]>(options)

  const onSelectItem = (item: UseComboboxStateChange<Option>): void => {
    console.warn('onSelectItem', item)
  }

  const onBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    console.warn('onBlue', e.currentTarget.value)
  }

  const sortedItems = items.sort((a, b) => (a.value < b.value ? -1 : 0))

  return (
    <Stack spacing={6}>
      <AutoComplete
        name="countries"
        items={sortedItems}
        placeholder="Select a country"
        onSelectItem={onSelectItem}
        onBlur={onBlur}
        containerStyles={{
          position: 'relative',
        }}
        listStyles={{
          position: 'absolute',
          top: 31,
          left: 0,
          w: '100%',
          zIndex: '10',
          borderTopRadius: 0,
          maxHeight: '280px',
          overflowY: 'scroll',
        }}
      />
      <Button>Submit</Button>
    </Stack>
  )
}

describe('<AutoComplete />', () => {
  it('should render component', () => {
    cy.mount(<AutoCompleteWrapper />)
    cy.get('input').type('ca')

    cy.get('li').eq(0).click()
    cy.get('input').should('have.value', 'Canada')
  })
})
