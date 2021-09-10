const parts = ['field', 'addon']

export const Input = {
  parts,
  variants: {
    outline: {
      field: {
        color: 'black',
        _placeholder: {
          color: 'gray.500',
        },
        bg: 'white',
      },
      addon: {
        bg: 'gray.100',
        color: 'black',
        fontSize: 'xs',
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
}
