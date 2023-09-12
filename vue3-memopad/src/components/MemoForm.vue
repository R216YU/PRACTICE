<template>
  <div class="w-full min-h-screen p-10 bg-gray-200 flex flex-col items-center">
    <h1 class="text-4xl font-bold mb-10">{{ h1 }}</h1>
    <div class="flex flex-col space-y-4 bg-white p-16 shadow rounded-lg">
      <input class="text-l px-4 py-2 border-2 rounded focus:outline-none" v-model="title" />
      <textarea class="w-[20rem] h-[16rem] text-sm px-4 py-2 border-2 rounded focus:outline-none" v-model="content"></textarea>
      <button @click="save" class="text-white text-l px-4 py-2 bg-blue-400 rounded transform duration-200 hover:scale-95">
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemoForm",
  props: {
    h1: String,
    button: String,
    memo: {
      id: Number,
      title: String,
      content: String,
    },
  },
  data: function () {
    return {
      title: this.memo.title,
      content: this.memo.content,
    };
  },
  methods: {
    save: function () {
      const newMemo = {
        title: this.title,
        content: this.content,
      };
      // memo.idが存在する場合は編集 存在しない場合は新規作成
      if (this.memo.id) {
        newMemo.id = this.memo.id;
        this.$store.commit("updateMutation", newMemo);
      } else {
        this.$store.commit("saveMutation", newMemo);
      }

      this.$router.push("/");
    },
  },
};
</script>
