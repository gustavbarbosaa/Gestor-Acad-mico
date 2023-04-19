<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="side-bar" class="bg-sidebar-background-color w-52 h-screen flex flex-col justify-between">
    <div>
      <div id="logo" class="flex items-center gap-2 mx-2 pt-3 pb-2 border-b border-border-color">
        <img src="../../assets/images/icon-e-ga.png" alt="" class="w-11 h-11">
        <h2 class="text-font-sidebar-color font-bold text-sm">Projeto e-GA</h2>
      </div>
      <div id="pages-side-bar" class="mx-2 border-b border-border-color">
        <PagesSideBar
        :img="require('../../assets/images/arquivos.png')"
        :text="textFile"
        :route="construction"
        />
        <PagesSideBar
        :img="require('../../assets/images/cadastro.png')"
        :text="textRegister"
        :route="register"
        />
        <PagesSideBar
        :img="require('../../assets/images/financeiro.png')"
        :text="textFinancial"
        :route="construction"
        />
        <PagesSideBar
        :img="require('../../assets/images/consultas.png')"
        :text="textQueries"
        :route="queries"
        />
        <PagesSideBar
        :img="require('../../assets/images/frequencia.png')"
        :text="textFrequency"
        :route="construction"
        />
        <PagesSideBar
        :img="require('../../assets/images/notas.png')"
        :text="textGrades"
        :route="construction"
        />
        <PagesSideBar
        :img="require('../../assets/images/plano.png')"
        :text="textFlat"
        :route="construction"
        />
      </div>
      <div id="logout" class="w-full h-12 px-2 my-3">
        <PagesSideBar
        :img="require('../../assets/images/forum.png')"
        :text="textForum"
        :route="forum"
        />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <LogoutComponent
      :img="require('../../assets/images/engrenagem.png')"
      :text="textPassword"
      :route="construction"
      />
      <LogoutComponent
      :img="require('../../assets/images/sair.png')"
      :text="textExit"
      :route="construction"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PagesSideBar from '../Pages/index.vue';
import LogoutComponent from '../Pages/Logout.vue';

export default defineComponent({
  name: 'SideBar',
  components: {
    PagesSideBar,
    LogoutComponent,
  },
  data() {
    return {
      textFile: 'Meus Arquivos',
      textRegister: 'Meu Cadastro',
      textFinancial: 'Financeiro',
      textQueries: 'Consultas',
      textFrequency: 'Frequência',
      textGrades: 'Notas',
      textFlat: 'Plano de Aula',
      textForum: 'Fórum de Turmas',
      textPassword: 'Trocar senha',
      textExit: 'Sair',

      forum: '/forum',
      construction: '/construction',
      register: '/register',
      queries: '/queries',
    };
  },
});
</script>
