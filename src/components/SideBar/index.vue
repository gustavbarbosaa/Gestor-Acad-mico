<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="side-bar" class="bg-sidebar-background-color w-52 h-screen">
    <div id="logo" class="flex items-center gap-2 mx-2 pt-3 pb-4 border-b border-border-color">
      <img src="../../assets/images/icon-e-ga.png" alt="" class="w-11 h-11">
      <h2 class="text-font-sidebar-color font-bold text-sm">Projeto e-GA</h2>
    </div>
    <div id="pages-side-bar" class="mx-2 border-b border-border-color">
      <PagesSideBar :img="require('../../assets/images/arquivos.png')" :text="textArq"/>
      <PagesSideBar :img="require('../../assets/images/cadastro.png')" :text="textCad"/>
      <PagesSideBar :img="require('../../assets/images/financeiro.png')" :text="textFin"/>
      <PagesSideBar :img="require('../../assets/images/consultas.png')" :text="textCons"/>
      <PagesSideBar :img="require('../../assets/images/frequencia.png')" :text="textFreq"/>
      <PagesSideBar :img="require('../../assets/images/notas.png')" :text="textNot"/>
      <PagesSideBar :img="require('../../assets/images/plano.png')" :text="textPlano"/>
    </div>
    <div id="logout" class="w-full h-12 px-2 my-3">
      <PagesSideBar :img="require('../../assets/images/forum.png')" :text="textForum" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PagesSideBar from '../Pages/index.vue';

export default defineComponent({
  name: 'SideBar',
  components: {
    PagesSideBar,
  },
  data() {
    return {
      textArq: 'Meus Arquivos',
      textCad: 'Meu Cadastro',
      textFin: 'Financeiro',
      textCons: 'Consultas',
      textFreq: 'Frequência',
      textNot: 'Notas',
      textPlano: 'Plano de Aula',
      textForum: 'Fórum de Turmas',
    };
  },
});
</script>
