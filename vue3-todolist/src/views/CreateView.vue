<template>
  <div class="bg-[#EDF2F7] min-h-screen">
    <TodoForm todo="" />
  </div>
</template>

<script>
import TodoForm from "../components/TodoForm.vue";
export default {
  name: "CreateView",
  components: {
    TodoForm,
  },
};
</script>

<style></style>
