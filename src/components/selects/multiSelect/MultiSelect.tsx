import { IconProps } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputProps,
  ListItem,
  ListProps,
  Stack,
  StackProps,
  TagProps,
} from '@chakra-ui/react'
import { ArrowDown } from '@components'
import { Option } from '@models'
import { useCombobox, useMultipleSelection, UseMultipleSelectionProps } from 'downshift'
import { matchSorter } from 'match-sorter'
import { forwardRef, ReactElement, useEffect, useRef, useState } from 'react'
import { OptionList } from 'src/components/selects/multiSelect/OptionList'
import { Tags } from 'src/components/selects/Tags'
import { filterDuplicatesFromArray } from '../helpers'

const defaultOptionsFilter = (items: Option[], inputValue: string): Option[] =>
  matchSorter(items, inputValue, { keys: ['value', 'label'] })

const sortItems = (a: Option, b: Option): number =>
  a.value < b.value ? -1 : a.value > b.value ? 1 : 0

export interface Props extends UseMultipleSelectionProps<Option> {
  options: Option[]
  placeholder: string
  id: string
  name: string
  onChange: (options: Option[]) => void
  onRemoveOption?: (value: string) => void
  initialSelectedOptions?: Option[]
  inputStyles?: InputProps
  tagStyles?: TagProps
  containerStyles?: StackProps
  listStyles?: ListProps
  iconButtonStyles?: IconProps
  optionsFilter?: (items: Option[], inputValue: string) => Option[]
}

export const MultiSelect = forwardRef<HTMLInputElement, Props>(
  (
    {
      options,
      inputStyles,
      tagStyles,
      iconButtonStyles,
      containerStyles,
      listStyles,
      placeholder,
      optionsFilter = defaultOptionsFilter,
      onChange,
      onRemoveOption,
      initialSelectedOptions = [],
      id,
      name,
      ...downshiftProps
    }: Props,
    ref
  ): ReactElement => {
    const updatedInitialItems = useRef(false)
    const [inputValue, setInputValue] = useState('')
    const getFilteredItems = (): Option[] =>
      optionsFilter(
        options.filter(
          (item) => !selectedItems.some((selectedItem) => selectedItem.value === item.value)
        ),
        inputValue
      ).sort(sortItems)

    const {
      getSelectedItemProps,
      getDropdownProps,
      addSelectedItem,
      removeSelectedItem,
      selectedItems,
    } = useMultipleSelection({ ...downshiftProps })

    const handleRemoveItem = (item: Option): void => {
      onRemoveOption?.(item.value)
      removeSelectedItem(item)
      const filteredSelectedItems = selectedItems.filter((option) => option.value !== item.value)
      onChange(filteredSelectedItems)
    }

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
      id,
      items: getFilteredItems(),
      stateReducer: (state, actionAndChanges) => {
        const { changes, type } = actionAndChanges
        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
            return {
              ...changes,
              isOpen: true,
              inputValue: '',
            }
        }
        return changes
      },
      onStateChange: ({ inputValue, type, selectedItem }) => {
        switch (type) {
          case useCombobox.stateChangeTypes.InputChange:
            setInputValue(inputValue)
            break
          case useCombobox.stateChangeTypes.ItemClick:
          case useCombobox.stateChangeTypes.InputBlur:
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
            if (selectedItem) {
              addSelectedItem(selectedItem)
              onChange([...selectedItems, selectedItem])
            }
            setInputValue('')
            break
          default:
            break
        }
      },
    })

    const handleOpenMenu = (): void => {
      if (!isOpen) {
        openMenu()
      }
    }

    useEffect(() => {
      const uniqueSelectedOptions = filterDuplicatesFromArray(initialSelectedOptions, 'value')
      if (uniqueSelectedOptions?.length && !updatedInitialItems.current) {
        uniqueSelectedOptions.forEach((option) => addSelectedItem(option))
        updatedInitialItems.current = true
      }
    }, [addSelectedItem, initialSelectedOptions])

    return (
      <Stack {...getComboboxProps()} {...containerStyles} spacing={6}>
        {selectedItems && (
          <Tags
            name={name}
            tags={selectedItems}
            getSelectedItemProps={getSelectedItemProps}
            removeTag={handleRemoveItem}
            tagStyles={tagStyles}
          />
        )}
        <Stack>
          <Flex>
            <Input
              {...getInputProps(
                getDropdownProps({
                  placeholder,
                  onClick: handleOpenMenu,
                  onFocus: handleOpenMenu,
                  ref,
                  id,
                })
              )}
              roundedEnd={0}
              roundedBottomStart={isOpen ? 0 : 'md'}
              id={id}
              name={name}
              autoComplete="off"
              {...inputStyles}
            />
            <IconButton
              {...getToggleButtonProps({})}
              roundedStart={0}
              roundedBottomEnd={isOpen ? 0 : 'md'}
              aria-label="toggle-menu"
              bg="white"
              color="black"
              icon={<ArrowDown strokeWidth={3} w={2} h={2} />}
              {...iconButtonStyles}
            />
          </Flex>
          <Box position="relative">
            <OptionList
              {...getMenuProps({})}
              on={isOpen}
              name={name}
              rounded="md"
              roundedTop={isOpen ? 0 : 'md'}
              {...listStyles}
            >
              {isOpen &&
                getFilteredItems().map((item, index) => (
                  <ListItem
                    {...getItemProps({
                      item,
                      index,
                    })}
                    py={2}
                    px={7}
                    minH={8}
                    key={`${item.value}${index}`}
                    _selected={highlightedIndex === index && { bg: 'blue.1000', color: 'white' }}
                    _hover={{ bg: 'blue.1000', color: 'white' }}
                  >
                    {item.label}
                  </ListItem>
                ))}
            </OptionList>
          </Box>
        </Stack>
      </Stack>
    )
  }
)
