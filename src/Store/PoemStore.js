import { observable } from 'mobx'

class PoemStore {
  @observable selectedPoem = ''
  @observable selectedYear = ''
  @observable baseURL = ''

  changeSelectedPoem(poem) {
    this.selectedPoem = poem
  }

  changeSelectedYear(year) {
    this.selectedYear = year
    this.selectedPoem = ''
  }
}

let store = new PoemStore
export default store
