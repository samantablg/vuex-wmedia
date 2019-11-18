import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
new Vue({
    el: '#app',
    store: store, // podria poner simplemente store porque el nombre y la propiedad coinciden
    render: h => h(App)
})