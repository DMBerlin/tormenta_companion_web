import { IAttribute } from '../attributes/attribute.types'
import { ISkill } from '../skills/skill.types'

export interface IPower {
  name:string
  description:string
  requirement?:{
    params: Array<IPowerRequirement>,
    assessments?: POWER_ASSESSMENTS
  }
}

export interface IPowerRequirement {
  type?:IAttribute|ISkill|IPower|undefined
  value?:number
}

export enum POWER_ASSESSMENTS {
  ALL = 'TODOS',
  BETWEEN = 'UM OU OUTRO'
}
