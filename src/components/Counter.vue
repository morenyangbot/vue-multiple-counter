<template>
  <div>
    <h2>{{count}}</h2>
    <div>
      <button @click="plus">点我+</button>
      <button @click="minus">点我-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  model: {
      prop: "count"
  },
  props: {
    count: {
      default: 0
    }
  },
  methods: {
    plus() {
      this.emitUpdate(this.count + 1);
    },
    minus() {
      this.emitUpdate(this.count - 1);
    },
    emitUpdate(count) {
      this.$emit("change", count);
    }
  }
};
</script>

