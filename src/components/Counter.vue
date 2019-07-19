<template>
  <div>
    <h2>{{count}}</h2>
    <div>
      <button @click="count++">点我+</button>
      <button @click="count--">点我-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0
    };
  },
  watch: {
    count(val) {
      this.$emit("countUpdate", val);
    }
  }
};
</script>

