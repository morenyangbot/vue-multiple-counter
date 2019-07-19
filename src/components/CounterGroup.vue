<template>
  <div>
    <div>
      nums:
      <input type="number" v-model="counterNum" @change="updateCounterNum" />
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
import _ from "lodash";

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
      return _.sum(this.counts.map(c => c.value));
    }
  },
  methods: {
    updateCounterNum(e) {
      this.counts = new Array(parseInt(e.target.value))
        .fill(0)
        .map(i => ({ value: 0 }));
    },
    updateCount(index, num) {
      this.counts[index].value = num;
    }
  }
};
</script>
