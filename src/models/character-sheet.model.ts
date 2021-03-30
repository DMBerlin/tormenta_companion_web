import { IArmor } from 'src/types/armors/armor.types'
import { IRace } from 'src/types/races/race-select.types'
import { ISkill } from 'src/types/skills/skill.types'
import { IWeapon } from 'src/types/weapons/weapon.types'

export enum AttributeLabels {
  STRENGHT = 'strength',
  DEXTERITY = 'dexterity',
  CONSTITUTION = 'constitution',
  INTELIGENCE = 'inteligence',
  WISDOM = 'wisdom',
  CHARISMA = 'charisma'
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

export class CharacterSheetModel {
  race:IRace
  name:string
  player:string
  level:number
  origin:string
  job:string
  deity:string
  strength: AttributeStats
  constitution: AttributeStats
  dexterity: AttributeStats
  inteligence: AttributeStats
  wisdom: AttributeStats
  charisma: AttributeStats
  weapons:Array<IWeapon>
  armors:Array<IArmor>
  skills:Array<ISkill>
  life:HealthStatuses
  mana:HealthStatuses

  constructor (type:CharacterBuilderType = CharacterBuilderType.DEFAULT) {
    if (type === CharacterBuilderType.DEFAULT) {
      this._setDefaultAttributes()
    } else {

    }
  }

  private _setDefaultAttributes () {
    this.strength = { value: 10, mod: 0 }
    this.constitution = { value: 10, mod: 0 }
    this.dexterity = { value: 10, mod: 0 }
    this.inteligence = { value: 10, mod: 0 }
    this.wisdom = { value: 10, mod: 0 }
    this.charisma = { value: 10, mod: 0 }
  }

  private _getAttributeMod (value = 10):number {
    const mods = new Map()
    mods.set(10, 1)
    mods.set(12, 2)
    mods.set(14, 3)
    mods.set(16, 4)
    mods.set(18, 5)
    mods.set(20, 6)
    return <number> mods.get(value) || 0
  }

  private _setHealthAndMana ({ health, mana }:{ health:HealthStatuses, mana:HealthStatuses }) {
    this.life = health
    this.mana = mana
  }

  private _applyRaceAttributes () {
    return false
  }

  resetAttributes () {
    this._setDefaultAttributes()
  }

  setAttribute (
    { name, value }:
    {name:string, value:number}
  ) {
    if (name === 'Força') {
      this[AttributeLabels.STRENGHT] = {
        value,
        mod: this._getAttributeMod(value)
      }
    }
    if (name === 'Destreza') {
      this[AttributeLabels.DEXTERITY] = {
        value,
        mod: this._getAttributeMod(value)
      }
    }
    if (name === 'Constituição') {
      this[AttributeLabels.CONSTITUTION] = {
        value,
        mod: this._getAttributeMod(value)
      }
    }
    if (name === 'Inteligência') {
      this[AttributeLabels.INTELIGENCE] = {
        value,
        mod: this._getAttributeMod(value)
      }
    }
    if (name === 'Sabedoria') {
      this[AttributeLabels.WISDOM] = {
        value,
        mod: this._getAttributeMod(value)
      }
    }
    if (name === 'Carisma') {
      this[AttributeLabels.CHARISMA] = {
        value,
        mod: this._getAttributeMod(value)
      }
    }
  }

  setRace (race:IRace) {
    this.race = race
    console.log(this)
  }
}
