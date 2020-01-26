<template>
  <v-data-table
    :headers="headers"
    :items="inventory"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Product Name', value: 'product_name' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Price', value: 'price' }
      ],
      inventory: []
    }
  },
  methods: {
    retrieveInventory () {
      this.$store.dispatch('retrieveInventory')
        .then(response => {
          this.inventory = this.$store.getters.retrieveInventory
        })
    }
  },
  created () {
    this.retrieveInventory()
  }
}
</script>
