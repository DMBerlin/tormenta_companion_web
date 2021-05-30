import { IAttribute } from '../attributes/attribute.types'
import { CharacterSheetService } from '../character-sheet/character-sheet.services'
import { ISkill } from '../skills/skill.types'

export interface IPower {
  name:string
  description:string
  rule?:Array<Map<string, string>>
  requirement?:{
    params: Array<IPowerRequirement>,
    assessments?: POWER_ASSESSMENTS
  }
}

export interface IPowerRequirement {
  type?:IAttribute|ISkill|IPower|CharacterSheetService|undefined
  value?:number
  required?:boolean
}

export enum POWER_ASSESSMENTS {
  ALL = 'TODOS',
  BETWEEN = 'UM OU OUTRO'
}
