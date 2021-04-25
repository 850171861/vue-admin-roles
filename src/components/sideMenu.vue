<template>
  <div style="width: 200px">
    <a-menu
      :defaultSelectedKeys="[0]"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      style="background: #2c3e50"
    >
      <a-menu-item :key="index" v-for="(item,index)  in sideMenu"  @click="cutPath(item)"> 
       <div>
          <a-icon type="pie-chart" />
        <span>{{item.meta.text}}</span>
       </div>
       </a-menu-item> 
      <a-sub-menu :key="'sub'+index"  v-for="(item,index)  in sideMenuChildren">
        <span slot="title"
          ><a-icon type="mail" /><span>{{item.meta.text}}</span></span
        >
        <a-menu-item :key="'chilren'+i" v-for="(children,i) in item.children" @click="cutPath(item)"> {{children.meta.text}} </a-menu-item>
      </a-sub-menu>
  
    </a-menu>
  </div>
</template>

<script>
import Store from '@/store'
export default {
  data() {
    return {
      collapsed: false
    };
  },
  computed:{
    sideMenu:()=>{
      return Store.state.menuRouter.filter(item => {
      return typeof item.children === 'undefined'
    })
    },
    sideMenuChildren:()=>{
      return Store.state.menuRouter.filter(item => {
      return typeof item.children !== 'undefined'
    })
    }
  },
  methods: {
    cutPath(item){
      this.$router.push(item.path)
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>