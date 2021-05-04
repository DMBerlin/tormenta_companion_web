import { IRace } from 'src/models/races/race-select.types'
import { RaceService } from 'src/models/races/races.services'
import { IPlaybookModule } from '.'

const raceService:RaceService = new RaceService()

export interface IPlaybookState {
  races: IRace[]
}

function state ():IPlaybookModule {
  return {
    races: raceService.races
  }
}

export default state
