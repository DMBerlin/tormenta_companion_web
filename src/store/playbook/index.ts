import { Module } from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import { IModuleState } from '..'
import { IRace } from 'src/types/races/race-select.types'

export interface IPlaybookModule {
  races: IRace[]
}

export const playbookModule:Module<IPlaybookModule, IModuleState> = {
  namespaced: true,
  getters,
  actions,
  mutations,
  state
}
