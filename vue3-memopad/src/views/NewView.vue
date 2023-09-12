<template>
  <MemoForm h1="New Memo" button="Create" memo="" />
</template>

<script>
import MemoForm from "@/components/MemoForm.vue";

export default {
  name: "NewView",
  components: {
    MemoForm,
  },
};
</script>
