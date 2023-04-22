<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="resgister" class="flex bg-background-form h-full w-full">
    <SideBar />
    <div class="container-home flex items-center justify-center w-full">
      <form class="w-2/3 rounded-sm shadow-lg">
        <div class="flex justify-between px-4 py-5 bg-white">
          <h1 class="text-2xl font-bold text-gray-800">Meu Cadastro</h1>
          <button class="text-white text-xs font-bold p-3 rounded-md bg-blue-700">CONFIRMAR ALTERAÇÕES</button>
        </div>
        <div class="bg-background-form-cad">
          <h2 class="font-bold text-gray-500">DADOS GERAIS</h2>
          <div>

          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from '../../components/SideBar/index.vue';

export default {
  name: 'MyResgister',
  components: { SideBar },
};
</script>
