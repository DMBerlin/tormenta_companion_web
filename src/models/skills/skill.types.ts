import { IAttribute } from '../attributes/attribute.types'

export interface ISkill {
  name:string
  attribute:IAttribute | undefined
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

export interface ISkillSet {
  name:string
  total:number
  halfLevel:number
  attribute:string
  mod:number
  train:number
  other:number
}
