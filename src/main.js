import { createApp } from 'vue'; // Importa createApp desde vue
import App from './App.vue';
import store from './store'; // Importa la tienda Vuex

const app = createApp(App);

app.use(store); // Usa la tienda Vuex en la aplicación
app.mount('#app'); // Monta la aplicación en el elemento con id 'app'
