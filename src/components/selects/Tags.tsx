import { Flex, Tag, TagCloseButton, TagLabel, TagProps } from '@chakra-ui/react'
import { Option } from '@models'
import { UseMultipleSelectionPropGetters } from 'downshift'
import { ReactElement } from 'react'

interface TagsProps {
  tags: Option[]
  name: string
  getSelectedItemProps: UseMultipleSelectionPropGetters<Option>['getSelectedItemProps']
  removeTag: (tag: Option) => void
  tagStyles?: TagProps
}
export const Tags = ({
  tags,
  name,
  getSelectedItemProps,
  removeTag,
  tagStyles,
}: TagsProps): ReactElement => {
  return (
    <Flex flexDir="row" wrap="wrap" gridGap={2}>
      {tags.map((selectedItem, index) => (
        <Tag
          {...getSelectedItemProps({ selectedItem, index })}
          key={`${selectedItem.value}-${index}`}
          data-cy={`tag-${name}-${index}`}
          size="lg"
          borderRadius="full"
          variant="solid"
          bg="gray.200"
          color="black"
          {...tagStyles}
        >
          <TagLabel>{selectedItem.label}</TagLabel>
          <TagCloseButton
            data-cy={`remove-${name}-${index}`}
            onClick={() => removeTag(selectedItem)}
          />
        </Tag>
      ))}
    </Flex>
  )
}
