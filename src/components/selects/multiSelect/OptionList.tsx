import { List } from '@chakra-ui/react'
import { forwardRef, PropsWithChildren } from 'react'

interface OptionListProps {
  on: boolean
  name: string
}

export const OptionList = forwardRef<HTMLUListElement, PropsWithChildren<OptionListProps>>(
  ({ children, on, name }, ref) => {
    return (
      <List
        ref={ref}
        position="absolute"
        top={-2}
        aria-expanded={on}
        fontSize="md"
        bg="gray.25"
        color="black"
        maxHeight={64}
        overflowY="auto"
        zIndex={10}
        data-cy={`list-${name}`}
        w="full"
        sx={{
          '&::-webkit-scrollbar': {
            width: 2,
            background: 'gray.300',
            borderRadius: 'md',
          },
          '::-webkit-scrollbar-thumb': {
            background: 'gray.400',
            borderRadius: 'md',
          },
        }}
        tabIndex={0}
        roundedBottom="md"
      >
        {children}
      </List>
    )
  }
)

OptionList.displayName = 'OptionList'
