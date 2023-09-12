import { createStore } from "vuex";
import { VuexPersistence } from "vuex-persist";

const vuexPersist = new VuexPersistence({
  storage: localStorage,
});

export default createStore({
  // データの状態
  state: {
    count: 0,
    memos: [],
  },
  // データの取得
  getters: {
    getCount: (state) => {
      return state.memos.length;
    },
    getMemos: (state) => {
      return state.memos;
    },
    getSingleMemo: (state) => (id) => {
      return state.memos.find((memo) => memo.id == id);
    },
  },
  // データの更新
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    saveMutation: (state, newMemo) => {
      newMemo.id = ++state.count;
      state.memos.unshift(newMemo);
    },
    updateMutation: (state, newMemo) => {
      // 編集対象のメモを見つける
      const updatedMemo = state.memos.find((memo) => memo.id === newMemo.id);
      // そのメモを直接書き換える
      updatedMemo.title = newMemo.title;
      updatedMemo.content = newMemo.content;
    },
    deleteMutation: (state, id) => {
      state.memos = state.memos.filter((memo) => memo.id !== id);
    },
  },
  plugins: [vuexPersist.plugin],
});
