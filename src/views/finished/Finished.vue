<template>
  <div>
    <Table :data="data" />
  </div>
</template>

<script>
import Table from "components/content/table/Table"
import { getToDoList } from "network/todo/todo"
export default {
  name: 'Finished',
  components: {
    Table
  },
  created () {
    this.getToDoList();
  },
  data () {
    return {
      data: null
    }
  },

  methods: {
    getToDoList () {
      getToDoList().then(dataList => {
        this.data = dataList.data.filter(item => item.isFinished)
      })
    }
  },
}
</script>

<style scoped>
</style>