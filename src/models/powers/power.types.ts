import { IAttribute } from '../attributes/attribute.types'
import { CharacterSheetService } from '../character-sheet/character-sheet.services'
import { ISkill } from '../skills/skill.types'
import { SpellService } from '../spells/spell.services'

export interface IPower {
  name:string
  description:string
  cost?:string
  deity?:string
  rule?:Array<Map<string, string>>
  requirement?:{
    params: Array<IPowerRequirement>,
    assessments?: POWER_ASSESSMENTS
  } | null
}

export interface IPowerRequirement {
  type?:IAttribute|ISkill|IPower|SpellService|CharacterSheetService|undefined
  value?:number
  required?:boolean
}

export enum POWER_DEITY {
  OCEANO = 'Oceano',
  AHARADAK = 'Aharadak',
  VALKIRIA = 'Valkiria',
  SSZZAASS = 'SSZZAASS',
  LENA = 'Lena',
  THYATIS = 'Thyatis',
  KALLY = 'Kally',
  MARAH = 'Marah',
  WYNNA = 'Wynna',
  TENEBRA = 'Tenebra',
  TANNATOH = 'Tanna-Toh',
  ARSENAL = 'Arsenal',
  KHALMYR = 'Khalmyr',
  LINWU = 'Lin-Wu',
  ALLIHANNA = 'Allihanna',
  AZGHER = 'Azgher',
  HYNINN = 'hyninn',
}

export enum POWER_ASSESSMENTS {
  ALL = 'TODOS',
  BETWEEN = 'UM OU OUTRO'
}
