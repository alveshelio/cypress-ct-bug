import { ListItem } from '@chakra-ui/react'
import { Option } from '@models'
import { ReactElement } from 'react'

interface OptionItemProps {
  option: Option
  active: boolean
}

export const OptionItem = ({ option, active }: OptionItemProps): ReactElement => {
  const onFocusStyle = {
    cursor: 'pointer',
    bg: 'blue.1000',
    color: 'white',
  }
  return (
    <ListItem
      py={2}
      px={7}
      minH={8}
      _focus={onFocusStyle}
      _hover={onFocusStyle}
      sx={{
        bg: active && 'blue.1000',
        color: active && 'white',
      }}
    >
      {option.label}
    </ListItem>
  )
}
