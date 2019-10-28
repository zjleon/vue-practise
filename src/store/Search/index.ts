import {GeoPoint} from '../common'

interface Location {
  id: number,
  name: string,
  address: string,
  position: GeoPoint[],
}
interface State {
  searchResult: Location[],
  searchHistory: Location[],
  keyword?: string,
}

export const SearchModule = {
  namespaced: true,
  state: {
    searchResult: [],
    searchHistory: [],
    count: 0,
  },
  getters: {
  },
  mutations: {
    addResult(state: State, location: Location) {
      // mutate state
      state.searchResult.push(location)
    },
    clearResult(state: State) {
      // mutate state
      state.searchResult = []
    },
    setKeyword(state: State, keyword: string) {
      state.keyword = keyword
    },
  },
  actions: {
  },
}
