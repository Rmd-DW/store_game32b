import { createStore } from 'vuex';
import juegos from '@/assets/juegos.json';

export default createStore({
  state: {
    juegos: juegos
  },
  mutations: {
    modificarStock(state, { codigo, cantidad }) {
      const juego = state.juegos.find(juego => juego.codigo === codigo);
      if (juego) {
        juego.stock -= cantidad; // Suma o resta la cantidad al stock actual
      }
    }
  },
  actions: {
    actualizarStock({ commit }, payload) {
      commit('modificarStock', payload);
    }
  },
  getters: {
    juegos: state => state.juegos
  }
});
