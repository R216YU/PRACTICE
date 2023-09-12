<template>
  <MemoForm v-if="memo" h1="Editing Memo" button="Update" :memo="memo" />
  <div v-else class="w-full min-h-screen bg-gray-200">
    <p class="text-xl">Memo doesn't exist. id:{{ this.$route.params.id }}</p>
  </div>
</template>

<script>
import MemoForm from "@/components/MemoForm.vue";

export default {
  name: "EditView",
  components: {
    MemoForm,
  },
  computed: {
    memo: function () {
      const id = parseInt(this.$route.params.id);
      return this.$store.getters.getSingleMemo(id);
    },
  },
};
</script>
