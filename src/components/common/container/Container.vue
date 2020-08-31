<template>
  <div id="container">
    <el-container>
      <el-header />
      <el-container>
        <el-aside width="200px">
          <slot name="el-aside"></slot>
        </el-aside>
        <el-container>
          <el-main>
            <router-view v-if="isRouterAlive" />
          </el-main>
          <el-footer />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Container",
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))

    }
  },
}
</script>

<style scoped>
.el-header {
  background-color: #409eff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 50px;
}
</style>