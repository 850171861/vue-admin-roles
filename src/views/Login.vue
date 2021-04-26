<template>
  <div class="login">
    <a-input
      type="text"
      v-model="username"
      placeholder="请输入角色SuperAdmin或者CommonAdmin"
    />
    <a-button type="primary" @click="confirm">登录</a-button>
  </div>
</template>

<script>
import { superAdmin, commonAdmin } from "@/api/roles";
import Store from "@/store";
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    confirm() {
      const username = this.username;
      if (username == "SuperAdmin") {
        superAdmin().then((res) => {
          Store.commit("setMenuRouter", res.data.data);
          Store.commit("setRoles", res.data.msg);
        });
      } else if (username == "CommonAdmin") {
        commonAdmin().then((res) => {
          Store.commit("setMenuRouter", res.data.data);
          Store.commit("setRoles", res.data.msg);
        });
      } else {
        this.hint();
        return;
      }

      Store.commit("setIsLogin", true);
      setTimeout(() => {
        this.$router.push("/");
      }, 300);
    },

    hint() {
      this.$message.info("请输入SuperAdmin或者CommonAdmin");
    },
  },
};
</script>

<style>
.login {
  width: 300px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login input,
button {
  width: 100%;
  margin-bottom: 10px;
}
</style>