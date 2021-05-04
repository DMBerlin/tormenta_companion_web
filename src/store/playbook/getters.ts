
import { GetterTree } from 'vuex'
import { IModuleState } from '..'
import { IPlaybookState } from './state'

import { IRace } from 'src/models/races/race-select.types'

const getters: GetterTree<IPlaybookState, IModuleState> = {
  races: (state:IPlaybookState):IRace[] => state.races
}

export default getters
