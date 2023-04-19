<!-- eslint-disable max-len -->
<template>
  <div id="home" class="flex bg-home-background-color">
    <SideBar />
    <div class="container-home flex items-center justify-center w-full gap-10 sm:m-8 sm:gap-0">
      <div class="flex flex-col max-w-2xl">
        <h1 class="font-roboto font-bold text-4xl text-blue-home-color">Olá, eu sou seu <br class="inline-block lg:hidden"> Gestor <br class="inline-block lg:hidden"> Acadêmico.</h1>
        <p class="font-roboto pt-5">
          Comigo você poderá planejar suas aulas, lançar as notas dos alunos, preencher a frequência das aulas e muito mais.
        </p>
        <div class="flex mt-5 gap-3">
          <button class="p-4 px-6 rounded-md text-white bg-black hover:bg-transparent hover:text-black hover:ease-in border-2 border-black duration-300">Android</button>
          <button class="p-4 px-6 rounded-md border-2 border-black hover:bg-black hover:text-white ease-in duration-300">iOs</button>
        </div>
      </div>
      <picture>
        <img src="../assets/images/image-home.svg" alt="" class="max-w-2xl sm:max-w-sm">
      </picture>
    </div>
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
