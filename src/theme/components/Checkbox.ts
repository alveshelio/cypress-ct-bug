const parts = ['container', 'control', 'label', 'icon']

export const Checkbox = {
  parts,
  baseStyle: {
    container: {},
    control: {
      borderColor: 'white',
      _checked: {
        bg: 'white',
        borderColor: 'white',
      },
      _indeterminate: {
        bg: 'white',
      },
    },
    label: {
      fontWeight: 600,
      fontSize: 'md',
    },
    icon: {
      bg: 'white',
      _checked: {
        borderColor: 'white',
      },
    },
  },
}
