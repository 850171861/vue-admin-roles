<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-sider v-if="!$route.meta.showSideMenu">
        <sideMenu />
      </a-layout-sider>
      <a-layout>
        <a-layout-header v-if="!$route.meta.showSideMenu">
          <span>当前:{{ roles }} </span>
          <a-button type="primary" @click="outLogin">退出</a-button>
        </a-layout-header>
        <a-layout-content>
          <Main />
        </a-layout-content>
        <a-layout-footer v-if="!$route.meta.showSideMenu"
          >Footer</a-layout-footer
        >
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import sideMenu from "@/components/sideMenu.vue";
import Main from "./main.vue";
import Store from "@/store";
export default {
  components: {
    sideMenu,
    Main,
  },
  computed: {
    roles: () => Store.state.roles,
  },
  methods: {
    outLogin() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#components-layout-demo-basic {
  height: 100%;
  text-align: center;
}
.ant-layout-has-sider {
  height: 100%;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  border-left: 1px solid #fff;
  background: #2c3e50;
  color: #fff;
}
.ant-layout-header button {
  width: 60px;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #2c3e50;
}
#components-layout-demo-basic .ant-layout-content {
  color: #000;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>