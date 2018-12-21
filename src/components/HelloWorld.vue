<template>
  <div class="hello">
    <h1>{{ message }}</h1>

    <h4>{{counter}}</h4>
    <button-counter v-bind:value="counter" v-on:counter-updated="counter = $event"></button-counter>
  </div>
</template>

<script>
import ButtonCounter from "./button-counter";
export default {
  name: 'HelloWorld',
    components: {ButtonCounter},
    props: {
      msg: String,
      count: Number
  },
    data: function() {
      return {
          message: this.msg,
          counter: this.count
      }
    },
    watch: {
        msg() {
            this.message = this.msg
        },
        count(){
            this.counter = this.count
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
