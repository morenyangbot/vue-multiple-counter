<template>
  <div>
    <input type="number" v-model="counterNum" />
    <Counter
      v-for="(i, index) in new Array(count)"
      :key="index"
      @countUpdate="(e) => updateNum(index, e)"
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
      counterNum: 2,
      counts: []
    };
  },
  computed: {
    count() {
      return parseInt(this.counterNum);
    },
    sum() {
      return _.sum(this.counts);
    }
  },
  methods: {
    updateNum(index, e) {
      const _counts = [...this.counts];
      _counts[index] = e;
      this.counts = _counts;
    }
  },
  watch: {
    counterNum(val, oldVal) {
      if (val > oldVal) {
        this.counts.push(0);
      } else {
        this.counts.pop();
      }
    }
  }
};
</script>
