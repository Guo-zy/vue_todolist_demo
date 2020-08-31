  <template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      label="Date"
      width="250px"
    >
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left:5px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="Content"
      width="250px"
    >
      <template slot-scope="
      scope">
        <el-popover
          trigger="hover"
          placement="top"
        >
          <p>姓名: {{ scope.row.name }}</p>
          <div
            slot="reference"
            class="name-wrapper"
          >
            <el-tag size="medium">{{ scope.row.content }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="Status"
      width="250px"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.isFinished ? "Finished" : "Unfinished" }}</span>
      </template>
    </el-table-column>

    <el-table-column
      prop="tag"
      label="标签"
      width="200px"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '家' ? 'primary' : 'success'"
          disable-transitions
        >{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      label="操作"
      width="250px"
    >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleDone(scope.row)"
        >Done</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)"
        >Delete</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
  },
  computed: {
    tableData () {
      return this.data
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleDone (row) {
      this.$emit('doneItem', row)
    },
    handleDelete (row) {
      this.$emit('deleteItem', row._id)
    }
  }
}
</script>

<style scoped></style>