import Vue from 'vue'
import { VueClass } from 'vue-class-component/lib/declarations'

export interface IRaceProps {
  attributes?:string[]
  maxValues?:number,
  bonus?:Map<string, number>
}

export interface IRace {
  name: string,
  subrace?: Array<IRace>,
  image?: File,
  info?: string,
  traits?: Array<{
    title: string,
    description: string,
    componentResolver?: VueClass<Vue> | null,
    props?: IRaceProps
  }>,
  dialog?: {
    visible: boolean
  }
}
