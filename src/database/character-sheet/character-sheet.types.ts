export enum AttributeSheetLabels {
  FORCA = 'strength',
  DESTREZA = 'dexterity',
  CONSTITUICAO = 'constitution',
  INTELIGENCIA = 'inteligence',
  SABEDORIA = 'wisdom',
  CARISMA = 'charisma'
}

export enum CharacterBuilderType {
  DEFAULT = 'default',
  DICED = 'diced'
}

export interface AttributeStats {
  value:number
  mod:number
}

export interface HealthStatuses {
  max:number
  cur:number
}
