import { ATTRIBUTE_LIST } from 'src/database/attributes/attribute-list.enum'
import { IArmor } from 'src/types/armors/armor.types'
import { IRace } from 'src/types/races/race-select.types'
import { ISkill } from 'src/types/skills/skill.types'
import { IWeapon } from 'src/types/weapons/weapon.types'
import { AttributeSheetLabels, AttributeStats, CharacterBuilderType, HealthStatuses } from './character-sheet.types'

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
    switch (name) {
      case ATTRIBUTE_LIST.FORCA:
        this[AttributeSheetLabels.FORCA] = {
          value,
          mod: this._getAttributeMod(value)
        }
        break
      case ATTRIBUTE_LIST.DESTREZA:
        this[AttributeSheetLabels.DESTREZA] = {
          value,
          mod: this._getAttributeMod(value)
        }
        break
      case ATTRIBUTE_LIST.CONSTITUICAO:
        this[AttributeSheetLabels.CONSTITUICAO] = {
          value,
          mod: this._getAttributeMod(value)
        }
        break
      case ATTRIBUTE_LIST.INTELIGENCIA:
        this[AttributeSheetLabels.INTELIGENCIA] = {
          value,
          mod: this._getAttributeMod(value)
        }
        break
      case ATTRIBUTE_LIST.SABEDORIA:
        this[AttributeSheetLabels.SABEDORIA] = {
          value,
          mod: this._getAttributeMod(value)
        }
        break
      case ATTRIBUTE_LIST.CARISMA:
        this[AttributeSheetLabels.CARISMA] = {
          value,
          mod: this._getAttributeMod(value)
        }
        break
      default:
        throw Error('Atributo inválido.')
    }
  }

  setRace (race:IRace) {
    this.race = race
    console.log('Race set:\n', this)
  }
}
