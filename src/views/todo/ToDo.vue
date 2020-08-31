<template>
  <div id="todo">
    <el-button
      style="display:none"
      :plain="true"
      @click="open"
    >成功</el-button>
    <h1>All ToDoList</h1>
    <el-button
      type="primary"
      icon="el-icon-edit"
      circle
      @click="centerDialogVisible = true"
    ></el-button>

    <el-dialog
      title="add todo"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <div>
        <span style="font-size:22px;margin-right:20px;width:87px;display:inline-block">name:</span>
        <el-input
          placeholder="请输入内容"
          v-model="name"
          clearable
          style="width:300px"
        >
        </el-input>
      </div>
      <div style="margin-top:20px;">
        <span style="font-size:22px;margin-right:20px">content:</span>
        <el-input
          placeholder="请输入内容"
          v-model="content"
          clearable
          style="width:300px"
        >
        </el-input>
      </div>
      <div style="margin-top:20px;">
        <span style="font-size:22px;margin-right:20px;width:87px;display:inline-block">tag:</span>
        <el-input
          placeholder="请输入内容"
          v-model="tag"
          clearable
          style="width:300px"
        >
        </el-input>
      </div>

      <span
        slot="footer"
        class="dialog-footer"
      >

        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="centerDialogVisible = false , addItem()"
        >确 定</el-button>
      </span>
    </el-dialog>

    <Table
      :data="data"
      @deleteItem="deleteItem"
      @doneItem="doneItem"
    ></Table>

  </div>
</template>

<script>
import Table from "components/content/table/Table"
import { getToDoList, deleteItem, doneItem, addItem } from "network/todo/todo"
export default {
  inject: ['reload'],
  name: 'ToDo',
  components: {
    Table,

  },
  created () {
    this.getToDoList()
  },
  data () {
    return {
      data: null,
      centerDialogVisible: false,
      name: '',
      content: '',
      tag: ''
    }
  },
  methods: {
    getToDoList () {
      getToDoList().then(dataList => {
        this.data = dataList.data
      })
    },
    deleteItem (_id) {
      deleteItem(_id).then(res => {
        if (res.status === 201) {
          this.messageBox(res.message);
          this.reload()
        }
      })
    },
    doneItem (data) {
      data.isFinished = !data.isFinished;
      doneItem(data).then(res => {
        if (res.status === 201) {
          this.messageBox(res.message)
          this.reload()
        }
      })
    },

    messageBox (message) {
      this.$message({
        message: message,
        type: 'success'
      });
    },
    addItem () {
      const name = this.name;
      const content = this.content;
      const tag = this.tag;
      const data = {
        name,
        content,
        tag
      }
      addItem(data).then(res => {
        if (res.status === 201) {
          this.messageBox(res.message)
          this.reload()
        }
      })
    }

  },
}
</script>

<style scoped>
</style>