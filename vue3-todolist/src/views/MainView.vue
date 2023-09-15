<template>
  <div class="bg-[#EDF2F7] min-h-screen">
    <!-- todos -->
    <div class="p-16" v-if="todosCount">
      <ul class="flex flex-col items-center space-y-4">
        <div
          class="p-4 bg-white rounded-lg shadow w-[300px] h-[100px] flex flex-col space-y-4 justify-center border-l-4 border-l-blue-400"
          v-for="todo in todos"
          :key="todo.id"
        >
          <span class="text-sm">{{ todo.content }}</span>
          <div class="space-x-2">
            <button class="i-tabler-pencil bg-green-500 text-xl focus:scale-90" @click="update(todo.id)" />
            <button class="i-tabler-trash bg-red-500 text-xl focus:scale-90" @click="remove(todo.id)" />
          </div>
        </div>
      </ul>
    </div>
    <!-- todoCount == 0 の時 -->
    <div class="p-16" v-else>
      <p class="text-sm mb-5">
        Todoが登録されていません。<br />
        今すぐあなたのTodoを追加しましょう!
      </p>
      <router-link
        class="bg-blue-500 text-white text-sm font-bold px-4 py-2 shadow rounded-lg transform duration-200 hover:bg-blue-400"
        to="/create"
      >
        追加する
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainView",
  components: {},
  computed: {
    todos: function () {
      return this.$store.getters.getTodos;
    },
    todosCount: function () {
      return this.$store.getters.getCount;
    },
  },
  methods: {
    remove: function (id) {
      this.$store.commit("deleteTodo", id);
    },
    update: function (id) {
      this.$router.push(`/update/${id}`);
    },
  },
};
</script>
