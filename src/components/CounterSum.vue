<template>
  <h2>Sum: {{sum}}</h2>
</template>

<script>
export default {
  name: "CounterSum",
  props: {
    sum: {
      default: 0
    }
  }
};
</script>

