
import { GetterTree } from 'vuex'
import { IModuleState } from '..'
import { IPlaybookState } from './state'

const getters: GetterTree<IPlaybookState, IModuleState> = {
  races: (state:IPlaybookState) => state.races
}

export default getters
