import { Module } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import { IModuleState } from '..'
import { IRaceSelect } from 'src/interfaces/race/race-select.interface'

export interface IPlaybookModule {
  races: IRaceSelect[]
}

export const playbookModule:Module<IPlaybookModule, IModuleState> = {
  namespaced: true,
  getters,
  actions,
  mutations,
  state
}
