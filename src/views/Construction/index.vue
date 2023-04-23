<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="construction">
    <div id="home" class="flex bg-background-form w-full h-screen">
      <SideBar />
      <div class="flex flex-col text-left items-center justify-center w-full gap-10 sm:m-8 sm:gap-0">
        <h2 class="text-xl text-red-600">Página em Construção</h2>
        <h2 class="text-xl">Em breve disponilizaremos ela para que seja visualizada!</h2>
        <a href="/" class="text-xl text-blue-700">Voltar para Página de início</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from '../../components/SideBar/index.vue';

export default {
  name: 'PagConstruction',
  components: { SideBar },
};
</script>
