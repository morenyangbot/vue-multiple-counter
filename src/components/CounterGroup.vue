<template>
  <div>
    <div>
      nums:
      <input type="number" :value="$store.state.counterNum" @change="updateCounterNum" />
    </div>
    <Counter
      v-for="(count, index) in $store.state.list"
      :key="index"
      :count="count.value"
      @change="(value) => $store.dispatch('updateList', {index, value})"
    />
    <CounterSum />
  </div>
</template>

<script>
import Counter from "./Counter";
import CounterSum from "./CounterSum";

export default {
  name: "CounterGroup",
  components: { Counter, CounterSum },
  data() {
    return {
      counterNum: 0,
      counts: []
    };
  },
  methods: {
    updateCounterNum(e) {
      this.$store.dispatch("updateCounterNum", parseInt(e.target.value));
    }
  }
};
</script>
