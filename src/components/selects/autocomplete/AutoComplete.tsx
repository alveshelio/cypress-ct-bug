import { IconProps } from '@chakra-ui/icons'
import {
  Flex,
  IconButton,
  Input,
  InputProps,
  List,
  ListItem,
  ListProps,
  Stack,
  StackProps,
} from '@chakra-ui/react'
import { ArrowDown } from '@components'
import { Option } from '@models'
import {
  useCombobox,
  UseComboboxState,
  UseComboboxStateChange,
  UseComboboxStateChangeOptions,
} from 'downshift'
import { ChangeEvent, forwardRef, ReactElement, Ref, useEffect, useState } from 'react'

export interface Props<T extends Option> {
  items: T[]
  placeholder: string
  name: string
  onSelectItem: (changes: UseComboboxStateChange<T>) => void
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void
  inputStyles?: InputProps
  containerStyles?: StackProps
  listStyles?: ListProps
  iconButtonStyles?: IconProps
  selectedItem?: Option
}

export const AutoComplete = forwardRef(
  <T extends Option>(
    {
      items,
      name,
      onSelectItem,
      onBlur,
      inputStyles,
      iconButtonStyles,
      containerStyles,
      listStyles,
      placeholder,
      selectedItem,
    }: Props<T>,
    ref: Ref<HTMLInputElement>
  ): ReactElement => {
    const [inputItems, setInputItems] = useState(items)
    const itemToString = (defaultItem): string => (defaultItem ? defaultItem.label : '')

    const stateReducer = (
      state: UseComboboxState<Option>,
      actionAndChanges: UseComboboxStateChangeOptions<Option>
    ): Partial<UseComboboxState<Option>> => {
      const { changes, type } = actionAndChanges
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputItems(
            items.filter(({ label }) =>
              label.toLowerCase().includes(changes.inputValue.toLowerCase())
            )
          )
          return {
            ...changes,
            inputValue: changes.inputValue,
          }
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
          return {
            ...changes,
            inputValue: changes.selectedItem.label,
          }
        default: {
          return changes
        }
      }
    }

    useEffect(() => {
      setInputItems(items)
    }, [items])

    const {
      isOpen,
      getItemProps,
      getToggleButtonProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      openMenu,
    } = useCombobox({
      items: inputItems,
      selectedItem,
      onSelectedItemChange: onSelectItem,
      stateReducer,
      itemToString,
    })

    const handleOpenMenu = (): void => {
      if (!isOpen) {
        openMenu()
      }
    }

    return (
      <Stack {...getComboboxProps()} {...containerStyles} position="relative">
        <Flex>
          <Input
            {...getInputProps({
              placeholder,
              onClick: handleOpenMenu,
              onFocus: handleOpenMenu,
              onBlur,
              ref,
            })}
            data-cy={`autocomplete-${name}`}
            roundedEnd={0}
            roundedBottomStart={isOpen ? 0 : 'md'}
            autoComplete="off"
            {...inputStyles}
          />
          <IconButton
            {...getToggleButtonProps()}
            roundedStart={0}
            roundedBottomEnd={isOpen ? 0 : 'md'}
            aria-label="toggle-menu"
            bg="white"
            color="black"
            icon={<ArrowDown strokeWidth={3} w={2} h={2} />}
            {...iconButtonStyles}
          />
        </Flex>
        <List
          {...getMenuProps()}
          aria-expanded={isOpen}
          fontSize="16px"
          bg="white"
          color="black"
          borderRadius="md"
          position="absolute"
          top={31}
          left={0}
          w="100%"
          zIndex="10"
          borderTopRadius={0}
          maxHeight="280px"
          overflowY="scroll"
          display={isOpen ? 'block' : 'none'}
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
          {...listStyles}
        >
          {isOpen &&
            inputItems.length &&
            inputItems.map((item, index) => (
              <ListItem
                {...getItemProps({
                  item,
                  index,
                })}
                px={4}
                py={2}
                key={`${item.value}${index}`}
                _selected={highlightedIndex === index && { bg: 'gray.100' }}
                _hover={{ bg: 'gray.100' }}
              >
                {item.label}
              </ListItem>
            ))}
        </List>
      </Stack>
    )
  }
)
