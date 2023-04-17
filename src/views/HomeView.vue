<template>
  <div id="home" class="flex bg-home-background-color">
    <SideBar />
    <h1>Olá, eu sou seu <br class="inline lg:inline-block"> Gestor Acadêmico.</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '../components/SideBar/index.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    SideBar,
  },
});
</script>
