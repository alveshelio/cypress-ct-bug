const parts = ['container', 'label', 'closeButton']

export const Tag = {
  parts,
  variants: {
    plain: {
      container: {
        rounded: 'full',
        bg: 'gray.200',
      },
      label: {
        color: 'black',
        fontSize: 'sm',
      },
    },
    required: {
      container: {
        rounded: 'full',
        bg: 'gray.700',
      },
      label: {
        color: 'gray.400',
        fontSize: 'sm',
      },
    },
  },
  defaultProps: {
    variant: 'plain',
  },
}
