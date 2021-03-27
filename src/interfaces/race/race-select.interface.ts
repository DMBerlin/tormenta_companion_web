
export interface IRaceSelect {
  name: string,
  image: File,
  info: string,
  traits: Array<{
    title: string,
    description: string,
    rule: string | null
  }>,
  dialog: {
    visible: boolean
  }
}
