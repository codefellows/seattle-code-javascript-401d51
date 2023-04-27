<script>
export default {
  data() {
    return {
      headRW: ['Store', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'DL Total'],
      stores: [
        {
          name: 'Seattle',
          min: 23,
          max: 65,
          avg: 6.3
        }
      ],
      totalDT: 0,
    }
  },
  methods: {
    getRandomCust: function(min, max){
      return Math.floor(Math.random() * (max - min + 1)) +min
    },
    renderData: function (stores){
      this.totalDT++;
      return stores.map((store, idx) => (
        <th>{{ getRandomCust(store.min, store.max) }}</th>
        
      ));
    }
  }
};
</script>

<template>
  <h3>{{ storeName }}, {{ min }} cookies per hour</h3>
  <input type="text" v-model="storeName"/>
  <input type="text" v-model="min"/>
</template>


