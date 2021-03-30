
import { GetterTree } from 'vuex'
import { IModuleState } from '..'
import { IPlaybookState } from './state'

import { IRace } from 'src/types/races/race-select.types'

const getters: GetterTree<IPlaybookState, IModuleState> = {
  races: (state:IPlaybookState):IRace[] => state.races
}

export default getters
