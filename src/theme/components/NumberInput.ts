const parts = ['root', 'field', 'stepper', 'stepperGroup']

export const NumberInput = {
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
      stepper: {
        bg: 'gray.100',
        color: 'black',
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
}
