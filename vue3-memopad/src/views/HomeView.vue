<template>
  <div class="w-full min-h-screen p-10 bg-gray-200 flex flex-col items-center">
    <h1 class="text-4xl font-bold mb-10">Home</h1>
    <!-- メモがある場合 -->
    <ul class="grid grid-cols-3 gap-4" v-if="HasMemos">
      <div class="p-4 rounded-lg shadow bg-white space-y-8" v-for="memo in memos" :key="memo.id">
        <div class="px-16 py-8">
          <p class="text-xl font-bold">{{ memo.title }}</p>
          <span class="text-sm">{{ memo.content }}</span>
        </div>
        <div class="space-x-2">
          <button class="text-sm px-2 py-1 text-green-400 rounded transform duration-200 hover:scale-90">
            <router-link :to="{ name: 'edit', params: { id: memo.id } }">Edit</router-link>
          </button>
          <button @click="remove(memo.id)" class="text-sm px-2 py-1 text-red-400 rounded transform duration-100 hover:scale-90">
            delete
          </button>
        </div>
      </div>
    </ul>
    <!-- メモがない場合 -->
    <h2 class="text-xl" v-else>No Memos...</h2>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    HasMemos: function () {
      return this.$store.getters.getCount;
    },
    memos: function () {
      return this.$store.getters.getMemos;
    },
  },
  methods: {
    remove: function (id) {
      this.$store.commit("deleteMutation", id);
    },
  },
};
</script>
