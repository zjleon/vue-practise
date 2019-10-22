interface TodoItem {
  id: number,
  text: string,
  image: string,
  done: boolean,
}
interface State {
  todos: TodoItem[],
  count: number,
}

export const HomeModule = {
  namespaced: true,
  state: {
    todos: [
      {
        id: 1,
        text: 'todo1',
        image: 'logo.png',
        done: false,
      },
    ],
    count: 0,
  },
  getters: {
    doneTodos: (state: State) => {
      return state.todos.filter((todo) => todo.done)
    },
  },
  mutations: {
    increment(state: State, n: number) {
      // mutate state
      state.count = state.count + n
    },
    addImage(state: State) {
      state.todos.push({
        id: state.todos.length,
        text: 'todo' + state.todos.length,
        image: 'logo copy.png',
        done: false,
      })
    },
  },
  actions: {
    incrementAsync({ commit }: {commit: any}) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
  },
}
