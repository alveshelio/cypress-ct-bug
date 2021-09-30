export interface Option {
  value: string
  label: string
}

export interface OptionGroup {
  title: string
  options: Option[]
}

export interface Technology extends Option {
  releaseYear: string
}

export interface TechnologyGroup {
  title: string
  options: Technology[]
}

export const isOptionGroup = (tech: unknown): tech is OptionGroup => {
  return !!(tech as OptionGroup).options
}
