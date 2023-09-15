import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexPersist = new VuexPersistence({
  Storage: localStorage,
});

export default createStore({
  RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
  state: {
    todos: [
      {
        id: 1,
        content: "ジムに行く",
      },
      {
        id: 2,
        content: "vue3を学習する",
      },
      {
        id: 3,
        content: "部屋の掃除をする",
      },
    ],
  },
  getters: {
    getTodos: (state) => {
      return state.todos;
    },
    getSingleTodo: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
    getCount: (state) => {
      return state.todos.length;
    },
  },
  mutations: {
    createTodo: (state, content) => {
      const newTodo = {
        id: state.todos.length + 1,
        content: content,
      };
      state.todos.unshift(newTodo);
    },
    updateTodo: (state, newTodo) => {
      const subjectTodo = state.todos.find((todo) => todo.id === newTodo.id);
      subjectTodo.content = newTodo.content;
    },
    deleteTodo: (state, id) => {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin],
});
