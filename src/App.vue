<template>
  <div id="app">
    <h1>Tienda de Juegos 32 Bits</h1>

    <div class="content">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="juego in juegos" :key="juego.codigo">
            <td>{{ juego.codigo }}</td>
            <td>{{ juego.nombre }}</td>
            <td>{{ juego.stock }}</td>
            <td>{{ juego.precio }}</td>
            <td>
              <button @click="modificarStock(juego.codigo, -1)">+</button>
              <button @click="modificarStock(juego.codigo, 1)">-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      juegos: state => state.juegos
    })
  },
  methods: {
    ...mapActions(['actualizarStock']),
    modificarStock(codigo, cantidad) {
      this.actualizarStock({ codigo, cantidad });
    }
  }
};
</script>

<style>
body {
  background-color: rgb(8, 8, 53);
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}

table {
  width: 100%;
  border: solid 1px rgb(13, 113, 206);
}

th {
  background-color: blue;
}

th,
td {
  width: 25%;
  text-align: center;
  vertical-align: middle;
  border: solid 1px rgb(13, 113, 206);
  border-collapse: collapse;
  padding: 0.3em;
  caption-side: bottom;
}

.content {
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin: 1rem;
}
</style>
