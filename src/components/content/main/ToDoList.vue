<template>
  <div id="todoList">
    <container>
      <Aside
        slot="el-aside"
        path="/ToDo"
      >
        <i
          slot="icon"
          class="el-icon-menu"
        />
        <span slot="content">ToDo</span>
      </Aside>
      <Aside
        slot="el-aside"
        path="/Finished"
      >
        <i
          slot="icon"
          class="el-icon-success"
        />
        <span slot="content">Finshed</span>
      </Aside>
    </container>
  </div>
</template>

<script>
import Container from "@/components/common/container/Container"
import Aside from "@/components/common/aside/Aside"
export default {
  name: "todoList",
  components: {
    Container,
    Aside
  }
}
</script>

<style scoped>
</style>