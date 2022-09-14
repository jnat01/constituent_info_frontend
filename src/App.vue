<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <table>
    <thead>
      <tr>
        <th>Email</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Zip Code</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(con, i) in constituents" :key="i">
        <td>{{con.firstName}}</td>
        <td>{{con.lastName}}</td>
        <td>{{con.email}}</td>
        <td>{{con.role}}</td>
      </tr>
    </tbody>
</table>
</template>

<script>
import mapState from 'vuex';

export default {
  name: 'App',
  created() {
    this.$store.dispatch('getConstituents');
  },
  computed: mapState({
    constituents: state => state.constituents
  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
