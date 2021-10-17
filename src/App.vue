<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/currencyconverter">Conversor de moedas</router-link> |
    <router-link to="/calculator">Calculadora</router-link> |
    <router-link to="/crud">CRUD</router-link>
  </div>
  <main class="container">
    <router-view/>
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
