var app = new Vue({
  el: '#app',
  data: {
    height: '100vh',
    justify: 'justify-center',
    align: 'align-center',
    wrap: 'wrap',
    wrap2: 'wrap2',
    direction: 'row',
    basis: '100',
    grow: '0',
    counter: '1',

    newItem: '',
    items: [1, 2]
  },
   methods: {
    addNewItem: function () {
      this.items.push(this.newItem)
      this.newItem = ''
    },
     reset: function () {
      this.items = [1, 2],
      this.grow = '0'
      this.basis = '100'
    }
  }
})
