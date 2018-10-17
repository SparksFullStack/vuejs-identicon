new Vue({
    el: '#app',
    data: {
        initialString: ''
    },
    computed: {
        identicon: function(){
            return jdenticon.toSvg(this.textInput, 200);
        }
    },
    methods: {
        onInput: function(event){
            this.textInput = event.target.value;
        }
    },
    template: `
    <div>
        <h3>My Identicon Generator</h3>
        <div>
            Input:
            <input v-on:input="onInput"/>
        </div>

        <div>
            Output:
            <div v-html='identicon'/>
        </div>
  </div>
    `
})