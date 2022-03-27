<template>
  <div class="about" v-if="flag">
    <!-- <h1>This is an about page</h1> -->
    <button @click="onClick">刷新</button>
    <AboutComponent msg="This is an about page"/>
  </div>
</template>
<script>
import AboutComponent from '@/components/About.vue'

export default {
  name: 'about',
  components: { AboutComponent },
  data () {
    return {
      flag: true
    }
  },
  watch: {
    $route: {
      handler () {
        this.reload()
      },
      deep: true
    }
  },
  methods: {
    onClick () {
      this.$router.replace({
        query: {
          id: Math.random().toString().substring(2)
        }
      })
      // this.reload()
    },
    reload () {
      this.flag = false
      this.$nextTick(() => {
        this.flag = true
      })
    }
  }
}
</script>
