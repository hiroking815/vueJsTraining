new Vue({
  el: '#app',
  data: {
    counter: 0,
    list: ['Apple', 'Banana', 'Strawberry']
  },
  computed: {
    length: function() {
      return this.list.length
    }
  },
  methods: {
    addItem: function() {
      this.list.push('Orange' + (++this.counter).toString())
    }
  }
})
