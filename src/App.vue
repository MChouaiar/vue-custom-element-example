<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-bind:msg="text" v-bind:count="counter" v-on:counter-updated="bubbleUpEvent"/>
    <h5>value app {{counter}}</h5>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
    props: {
      message: {
          type: String,
          default: "Hello Vue.js"
      },
      number: {
          type: Number,
          default: 0
      }
    },
    data: function() {
        return {
            counter: this.number,
            text: this.message
        }
    },
    methods: {
      bubbleUpEvent: function (event) {
          this.counter = event
          this.$emit('counter-update', this.counter)
      }
    },
    watch: {
      message() {
          this.text = this.message
      },
        number(){
          this.counter = this.number
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
