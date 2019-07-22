<template>
  <div id="app">
    {{title}}
    <CounterGroup />
  </div>
</template>

<script>
import CounterGroup from "./components/CounterGroup.vue";
import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8090"
});

export default {
  name: "app",
  components: {
    CounterGroup
  },
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    request.get("/title").then(res => {
      this.title = res.data;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
