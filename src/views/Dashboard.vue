<template>
  <div>
    <h1>当前角色可用路由</h1>

    <ul>
      <li v-for="(item, index) in menu" :key="index">
        <span>路由--</span>{{ item.meta.title }}
        <ul>
          <li v-for="(children, index) in item.children" :key="index">
            <span>子路由--</span>{{ children.meta.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Store from "@/store";

export default {
  computed: {
    menu: () => {
      return Store.state.menuRouter;
    },
  },
};
</script>

<style>
h1 {
  font-size: 24px;
}
li {
  font-size: 18px;
  text-align: left;
}
</style>