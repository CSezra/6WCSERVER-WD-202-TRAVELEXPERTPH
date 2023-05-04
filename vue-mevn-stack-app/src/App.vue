<template>
 <div>
  <nav class="navbar navbar-expand-lg navbar-blue">
  <div class="container-fluid">
    <a class="navbar-brand"><img src="./assets/navlogo.png" class= "logosize" alt=""></a>
    <button class="navbar-toggler" type="button" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/About">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/Contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/Blog">Blog</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- Router view -->
<div class="container mt-5">
      <router-view></router-view>
    </div>
 </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "App",
    components: { RouterLink }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar-blue{
  background-color: #d0efff;
}
.logosize{
  height: 5rem;
  width: 5rem;
}
</style>
