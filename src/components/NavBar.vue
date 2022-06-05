<template>
  <div id="navBar">
    <b-navbar  variant="dark" type="dark">
      <!-- <router-link to="/">Home</router-link> | -->
      <b-nav-item><router-link class="item" to="/todos">Todos</router-link></b-nav-item>
      <b-nav-item><router-link class="item" to="/done">Done</router-link></b-nav-item>
      <login-button class="loginbutton"/>
    </b-navbar>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import LoginButton from "./LoginButton.vue";
export default {
  components: { LoginButton }
}
</script>

<style>
#navBar{
  background-color: rgb(119, 108, 129);
  margin-bottom: 50px;
}

.item{
  color: rgb(139, 139, 137);
  text-decoration: none;
  font-size: 1.5em;
}
.item:hover{
  color: rgb(238, 186, 17);
}
.navbar.navbar-dark.bg-dark{
    background-color: #3b3ca3!important;
}
</style>