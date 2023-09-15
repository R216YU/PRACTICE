<template>
  <div class="bg-[#EDF2F7] min-h-screen">
    <div v-if="todo">
      <TodoForm :todo="todo" />
    </div>
    <div v-else>
      <p class="mt-16">Todo (ID: {{ this.$route.params.id }}) は存在しません。</p>
    </div>
  </div>
</template>

<script>
import TodoForm from "../components/TodoForm.vue";

export default {
  name: "CreateView",
  components: {
    TodoForm,
  },
  computed: {
    todo: function () {
      const id = parseInt(this.$route.params.id);
      return this.$store.getters.getSingleTodo(id);
    },
  },
};
</script>
