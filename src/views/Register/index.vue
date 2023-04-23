<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="resgister" class="flex bg-background-form w-full">
    <SideBar/>
    <div class="container-home flex items-center justify-center w-full">
      <form class="w-2/3 md:min-w-max rounded-sm shadow-lg">
        <div class="flex justify-between px-4 py-5 bg-white">
          <h1 class="text-2xl font-bold text-gray-800">Meu Cadastro</h1>
          <button class="text-white text-xs font-bold p-3 rounded-md bg-blue-700 hover:bg-blue-800 transition-colors">CONFIRMAR ALTERAÇÕES</button>
        </div>
        <div class="p-6 bg-background-form-cad">
          <h2 class="font-bold text-gray-500">DADOS GERAIS</h2>
          <div id="inputs" class="lg:grid lg:grid-rows-3 lg:grid-cols-2 justify-between gap-8 p-4 border-b border-gray-300 flex flex-col">
            <InputsComponent
              :typeInput="nameInput.type"
              :textLabel="nameInput.label"
              :idInput="nameInput.id"
              :nameInput="nameInput.id"
              :placeholder="nameInput.placeholder"
            />
            <InputsComponent
              :typeInput="civilInput.type"
              :textLabel="civilInput.label"
              :idInput="civilInput.id"
              :nameInput="civilInput.id"
              :placeholder="civilInput.placeholder"
            />
            <InputsComponent
              :typeInput="cpfInput.type"
              :textLabel="cpfInput.label"
              :idInput="cpfInput.id"
              :nameInput="cpfInput.id"
              :placeholder="cpfInput.placeholder"
            />
            <InputsComponent
            :typeInput="rgInput.type"
            :textLabel="rgInput.label"
            :idInput="rgInput.id"
            :nameInput="rgInput.id"
            :placeholder="rgInput.placeholder"
            />
            <InputsComponent
            :typeInput="orgaoExpedidorInput.type"
            :textLabel="orgaoExpedidorInput.label"
            :idInput="orgaoExpedidorInput.id"
            :nameInput="orgaoExpedidorInput.id"
            :placeholder="orgaoExpedidorInput.placeholder"
            />
            <selectComponent
              :idInput="sexoInput.id"
              :textLabel="sexoInput.label"
              :nameInput="sexoInput.id"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from '../../components/SideBar/index.vue';
import InputsComponent from '../../components/InputsForm/index.vue';
import selectComponent from '../../components/InputsForm/selectInput.vue';

export default {
  name: 'MyResgister',
  components: { SideBar, InputsComponent, selectComponent },
  data() {
    return {
      nameInput: {
        type: 'text',
        label: 'NOME',
        id: 'nome',
        placeholder: 'Digite seu nome',
      },

      civilInput: {
        type: 'text',
        label: 'CIVILMENTE REGISTRADO COMO',
        id: 'civil',
        placeholder: 'Digite seu nome completo',
      },

      cpfInput: {
        type: 'text',
        label: 'CPF',
        id: 'cpf',
        placeholder: 'Infome o seu CPF',
      },

      rgInput: {
        type: 'text',
        label: 'RG',
        id: 'rg',
        placeholder: 'Informe o seu RG',
      },

      orgaoExpedidorInput: {
        type: 'text',
        label: 'ÓRGÃO EXPEDIDOR',
        id: 'orgaoExpedidor',
        placeholder: 'EX: SSDS',
      },

      sexoInput: {
        type: 'text',
        label: 'ÓRGÃO EXPEDIDOR',
        id: 'orgaoExpedidor',
        placeholder: 'EX: SSDS',
      },
    };
  },
};
</script>
