<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ count }}</p>
    <p>{{ double }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>


<script>
import { ref, computed, watchEffect } from "@vue/composition-api";


export default {
  name: 'App',

  setup() {
    const count = ref(0);
    const double = computed(() => count.value * 2);
    
    function increment() {
      console.log('pre-increment');
      count.value++;
      console.log('post-increment');
    }

    watchEffect(() => {
      console.log("count watchEffect:", count.value);
    }, { flush: 'pre' });

    watchEffect(() => {
      console.log("double watchEffect:", double.value);
    }, { flush: 'sync' });

    /**
     * sync: happens instantly after value mutation
     * pre: happens before rendering (component update)
     * post: happens after rendering (default)
     */

    return {
      count,
      double,
      increment
    }
  }


}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
