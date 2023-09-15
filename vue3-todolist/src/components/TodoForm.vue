<template>
  <!-- UPDATE -->
  <form class="p-16 flex flex-row space-x-2 justify-center items-center" v-if="todo">
    <input class="border-2 rounded-lg shadow bg-white px-4 py-2 focus:outline-none" v-model="content" />
    <button
      class="i-tabler-circle-arrow-up-filled text-3xl bg-orange-500 transform duration-200 focus:scale-90"
      @click="update"
    />
  </form>
  <!-- CREATE -->
  <form class="p-16 flex flex-row space-x-2 justify-center items-center" v-else>
    <input class="border-2 rounded-lg shadow bg-white px-4 py-2 focus:outline-none" v-model="content" />
    <button class="i-tabler-circle-plus text-3xl bg-blue-500 transform duration-200 focus:scale-90" @click="create" />
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  props: {
    todo: {
      id: String,
      content: String,
    },
  },
  data: function () {
    return {
      content: this.todo.content,
    };
  },
  methods: {
    create: function () {
      this.$store.commit("createTodo", this.content);
      this.$router.push("/");
    },
    update: function () {
      const newTodo = {
        id: this.todo.id,
        content: this.content
      }
      this.$store.commit("updateTodo", newTodo);
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
