<template>
  <div
    id="Aside"
    :class="{active : isActive}"
    @click="handleOption"
  >
    <span class="icon">
      <slot name="icon"></slot>
    </span>

    <span class="content">
      <slot name="content"></slot>
    </span>

  </div>
</template>

<script>
export default {
  name: "Aside",
  props: {
    path: {
      type: String,
      default: "/ToDo"
    },
  },
  computed: {
    isActive () {
      return this.path.indexOf(this.$route.path) !== -1
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleOption () {
      this.$router.push(this.path)
    }
  },
}
</script>

<style scoped>
#Aside {
  cursor: pointer;
  position: relative;
}
#Aside:hover {
  color: #f40;
}
.active {
  color: #f40;
}
#Aside .icon {
  position: absolute;
  left: 30px;
}
</style>