
export enum SPELL_SCHOOL {
  ABJURACAO = 'Abjuração'
}

export enum SPELL_CLASS {
  DIVINA = 'Divina'
}

export interface ISpell {
  name: string
  school: SPELL_SCHOOL
  class: SPELL_CLASS
  rank: number
  execution?: string
  range?: string
  target?: string
  duration?: string
  specs: {
    [key:string]: string
  }[]
}
