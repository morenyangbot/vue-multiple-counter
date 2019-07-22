<template>
  <div>
    <div>
      nums:
      <input type="number" :value="$store.state.counterNum" @change="updateCounterNum" />
    </div>
    <Counter
      v-for="(count, index) in counts"
      :key="index"
      :count="count.value"
      @change="(val) => updateCount(index, val)"
    />
    <CounterSum :sum="sum" />
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
  computed: {
    sum() {
      return this.counts.map(i => i.value).reduce((a, b) => a + b, 0);
    }
  },
  methods: {
    updateCounterNum(e) {
      this.$store.dispatch("updateCounterNum", parseInt(e.target.value));
    },
    updateCount(index, num) {
      this.counts[index].value = num;
    }
  },
  watch: {
    "$store.state.counterNum"(val) {
      this.counts = new Array(parseInt(val))
        .fill(0)
        .map(() => ({ value: 0 }));
    }
  }
};
</script>
