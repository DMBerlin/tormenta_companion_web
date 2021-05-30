import { CharacterSheetModel } from './character-sheet.model'

export class CharacterSheetService {
  private characterSheetModel: CharacterSheetModel

  constructor () {
    this.characterSheetModel = new CharacterSheetModel()
  }
}
