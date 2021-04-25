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
import { superAdmin } from "@/api/roles";
import Store from "@/store";
export default {
  data() {
    return {
      username: "SuperAdmin",
    };
  },
  methods: {
    confirm() {
      const username = this.username;
      if (username == "SuperAdmin") {
        superAdmin().then((res) => {
          console.log(res.data);
          Store.commit("setMenuRouter", res.data.data);
        });
      } else if (username == "CommonAdmin") {
        console.log(2);
      } else {
        this.hint();
        return;
      }

      Store.commit("setIsLogin", true);
      this.$router.push("/");
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