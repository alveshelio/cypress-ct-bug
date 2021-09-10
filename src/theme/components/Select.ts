const parts = ['field', 'icon']

export const Select = {
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
      icon: {
        bg: 'white',
        color: 'black',
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
}
