
export interface IAttribute {
  code:string
  name:string
  description:string
  value:number
  modifier:number
}

export const CharacterAttributes:IAttribute[] = [
  {
    code: 'FOR',
    name: 'Força',
    description: '',
    value: 0,
    modifier: 0
  },
  {
    code: 'DES',
    name: 'Destreza',
    description: '',
    value: 0,
    modifier: 0
  },
  {
    code: 'CON',
    name: 'Constituição',
    description: '',
    value: 0,
    modifier: 0
  },
  {
    code: 'INT',
    name: 'Inteligência',
    description: '',
    value: 0,
    modifier: 0
  },
  {
    code: 'SAB',
    name: 'Sabedoria',
    description: '',
    value: 0,
    modifier: 0
  },
  {
    code: 'CAR',
    name: 'Carisma',
    description: '',
    value: 0,
    modifier: 0
  }
]
