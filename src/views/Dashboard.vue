<template>
  <div>
    <h1>数据可视化</h1>
    {{ menu }}
  </div>
</template>

<script>
import Store from "@/store";

export default {
  computed: {
    menu: () => {
      return Store.state.router;
    },
  },
};
</script>

<style>
</style>