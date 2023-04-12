<script>
export default {
  data() {
    return {
      storeName: 'Enter New Store Name',
      min: 'enter min'
    }
  }
}
</script>

<template>
  <h3>{{ storeName }}, {{ min }} cookies per hour</h3>
  <input type="text" v-model="storeName"/>
  <input type="text" v-model="min"/>
</template>
