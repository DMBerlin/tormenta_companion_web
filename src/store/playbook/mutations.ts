
import { IRace } from 'src/types/races/race-select.types'
import { MutationTree } from 'vuex'
import { IPlaybookState } from './state'

const mutations: MutationTree<IPlaybookState> = {
  ADD_RACE_SELECT: (state:IPlaybookState, data:IRace) => {
    const race = <IRace>Object.assign({}, {
      name: data.name,
      image: data.image,
      info: data.info,
      traits: data.traits,
      dialog: data.dialog
    })

    state.races.push(race)
  }
}

export default mutations
