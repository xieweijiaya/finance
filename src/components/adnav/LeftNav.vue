<template>
  <el-menu router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="collapsed" :collapse-transition="bb">
    <!-- <el-menu default-active="2" :collapse="collapsed" collapse-transition router :default-active="$route.path" unique-opened class="el-menu-vertical-demo" background-color="#334157" text-color="#fff" active-text-color="#ffd04b"> -->
    <div class="logobox">
      <img class="logoimg" src="@/assets/adimg/img/logo.png" alt="">
    </div>
    <el-submenu v-for="tn in treeNode" :index="'index-'+tn.treeNodeId" :key="'key'+tn.treeNodeId">
      <template slot="title">
        <i :class="tn.icon"></i>
        <span style="color: black;font-size: 16px;">{{tn.treeNodeName}}</span>
      </template>

      <el-submenu v-for="tn2 in tn.children" :index="'index2-'+tn2.treeNodeId" :key="tn2.treeNodeId">
        <template slot="title">
          <i :class="tn2.icon"></i>
          <span style="color: black;font-size: 16px;">{{tn2.treeNodeName}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item style="font-size: 13px;" v-for="tn3 in tn2.children" :index="tn3.url" :key="tn3.treeNodeId">{{tn3.treeNodeName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: 'LeftNav',
    data() {
      return {
        collapsed: false, //折叠
        bb: true, //过渡动画
        treeNode: []
      }
    },
    created: function() {
      let url = this.axios.urls.SYSTEM_TREE_LISTTREE;
      this.axios.post(url).then(resp => {
        console.log(resp.data);
				this.treeNode=resp.data
      }).catch(resp => {
        console.log(resp);
      })
    }
		
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 100%;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    border: none;
    text-align: left;
  }

  .el-menu-item-group__title {
    padding: 0px;
  }

  .el-menu-bg {
    background-color: #409EFF !important;
  }

  .el-menu {
    border: none;
  }

  .logobox {
    height: 40px;
    line-height: 40px;
    color: #9d9d9d;
    font-size: 20px;
    text-align: center;
    padding: 20px 0px;
  }

  .logoimg {
    height: 40px;
  }
</style>
