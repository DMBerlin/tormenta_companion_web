import { IAttribute } from '../attributes/attribute.types'

export interface ISkillSet {
  name:string
  attribute:IAttribute | null
  description:string
  trained:boolean
  penalty:boolean
  abilities?:ISkillAbility[]
  table?:string[][]
}

export interface ISkillAbility {
  name:string
  cd?:number
  trained?:boolean
  description:string
  table?:string[][]
}
