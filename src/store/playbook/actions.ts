
import { IRaceSelect } from 'src/interfaces/race/race-select.interface'
import { ActionTree } from 'vuex'
import { IModuleState } from '..'
import { IPlaybookState } from './state'

const actions:ActionTree<IPlaybookState, IModuleState> = {
  addOneToRaceState: ({ commit }, data:IRaceSelect) => {
    commit('ADD_RACE_SELECT', data)
  }
}

export default actions
