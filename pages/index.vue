<template>
  <div class="container">
    <div>
      <Logo/>
      <h1 class="title">node-ssr</h1>
      <h2 class="subtitle">{{name}}</h2>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  data () {
    return {
      name:''
    }
  },
 async mounted () {
    let res=await this.$axios.get('/getUser')
    if(res.code===200){
      this.name=res.data.name
    }
  },
  components: {
    Logo
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
}
</style>
