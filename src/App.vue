<template>
  <div id="app">
    <!-- <nav> -->
      
      <!-- <login-button/> -->
      <!-- <div v-if="user"> -->
        <!-- <nav-bar/> -->
      <!-- </div> -->
    <router-view/>
  </div>
</template>

<script>
import { auth } from "@/firebaseConfig";

// import LoginButton from './components/LoginButton.vue'
// import NavBar from './components/NavBar.vue'
export default {
  // components: {  NavBar },
  beforeCreate: function() {

    auth.getRedirectResult().then(result=>{
      if (result.user) {
        console.log('result: ', result)
        this.$router.push("/todos")
      }
    }).catch(() => {
      this.$router.push("/")
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

   background-color:rgb(3,25,86);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
  background-size: 100% 100%;
  
}

html{
   background-color: rgb(3,25,86);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; 
  background-size: 100% 100%;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.loginbutton{
  margin-top: 5px;
  position: fixed;
  right: 1em;
}

</style>
