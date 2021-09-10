import { ToggleIconButton } from './ToggleIconButton'
import { ReactElement, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

describe('Toggle Icon Button', () => {
  it('should call "toggle" when the user clicks on the icon', () => {
    const WrapperToggle = (): ReactElement => {
      const [theme, setTheme] = useState<'light' | 'dark'>('light')
      const toggle = (): void => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
      }
      return (
        <ToggleIconButton
          toggle={toggle}
          icon={theme === 'light' ? <FiMoon /> : <FiSun />}
          aria-label="Toggle Icon Button"
        />
      )
    }

    cy.mount(<WrapperToggle />)
    cy.get('button').click()
  })
})
