<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="side-bar" class="bg-sidebar-background-color w-72 h-screen flex flex-col">
    <div>
      <div id="logo" class="flex items-center gap-5 mx-2 pt-3 pb-2 border-b border-border-color">
        <img src="../../assets/images/icon-e-ga.png" alt="" class="w-11 h-11">
        <h2 class="text-font-sidebar-color font-bold text-sm">Projeto e-GA</h2>
        <i class= "cursor-pointer pi pi-angle-double-left text-font-sidebar-color hover:text-gray-300" ></i>
      </div>
      <div id="pages-side-bar" class="mx-2 border-b border-border-color">
        <PagesSideBar
        :img="folderIcon"
        :text="textFile"
        :route="construction"
        />
        <PagesSideBar
        :img="registerIcon"
        :text="textRegister"
        :route="register"
        />
        <PagesSideBar
        :img="financialIcon"
        :text="textFinancial"
        :route="construction"
        />
        <PagesSideBar
        :img="queriesIcon"
        :text="textQueries"
        :route="queries"
        />
        <PagesSideBar
        :img="frequencyIcon"
        :text="textFrequency"
        :route="construction"
        />
        <PagesSideBar
        :img="gradesIcon"
        :text="textGrades"
        :route="construction"
        />
        <PagesSideBar
        :img="constructionIcon"
        :text="textFlat"
        :route="construction"
        />
      </div>
      <div id="logout" class="w-full h-12 px-2 my-3">
        <PagesSideBar
        :img="forumIcon"
        :text="textForum"
        :route="forum"
        />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <LogoutComponent
      :img="passIcon"
      :text="textPassword"
      :route="construction"
      />
      <LogoutComponent
      :img="exitIcon"
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
      folderIcon: 'pi pi-folder-open',
      registerIcon: 'pi pi-id-card',
      financialIcon: 'pi pi-money-bill',
      queriesIcon: 'pi pi-search',
      frequencyIcon: 'pi pi-calendar',
      gradesIcon: 'pi pi-pencil',
      constructionIcon: 'pi pi-desktop',
      forumIcon: 'pi pi-comments',
      passIcon: 'pi pi-lock',
      exitIcon: 'pi pi-sign-out',

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
