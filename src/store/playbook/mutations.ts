
import { IRaceSelect } from 'src/interfaces/race/race-select.interface'
import { MutationTree } from 'vuex'
import { IPlaybookState } from './state'

const mutations: MutationTree<IPlaybookState> = {
  ADD_RACE_SELECT: (state:IPlaybookState, data:IRaceSelect) => {
    const race = <IRaceSelect>Object.assign({}, {
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
