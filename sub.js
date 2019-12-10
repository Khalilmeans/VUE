new Vue({
    el: '#vue-app-one',
    data: {
        output: 'Your favorite f00d'
  },
    methods: {
        readRefs: function(){
            console.log(this.$refs);
            this.output = this.$refs.input.value;
      }
  }
});
