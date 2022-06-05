<template>
  <div>
    <div class="home">
      <!-- <h1>This is the home page tittle</h1> -->
      <h1 class="appname"> Todoly App</h1>
      <h3 class="sub">Login to start using the App.</h3>
    </div>
    <login-button/>
  </div>
</template>

<script>
import LoginButton from "@/components/LoginButton.vue"
export default {
  name: 'HomeView',
  components:{ LoginButton }
}
</script>

<style>

.home{
  margin-top: 20%;
  margin-bottom: 50px;
}

h1{
  color: var(--bs-grey);
  font-size: 5em;
}
.appname{
  font-size: 6em;
}
.sub{
  color: rgba(17, 238, 91, 0.877);
  font-size: 2em;
}
</style>