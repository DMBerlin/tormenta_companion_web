
import { IRace } from 'src/types/races/race-select.types'
import { ActionTree } from 'vuex'
import { IModuleState } from '..'
import { IPlaybookState } from './state'

const actions:ActionTree<IPlaybookState, IModuleState> = {
  addOneToRaceState: ({ commit }, data:IRace) => {
    commit('ADD_RACE_SELECT', data)
  }
}

export default actions
