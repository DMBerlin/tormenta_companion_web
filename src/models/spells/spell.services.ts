import { ISpell } from './spell.types'

export class SpellService {
  private readonly spells:ISpell[]
  constructor () {
    this.spells = []
  }
}
