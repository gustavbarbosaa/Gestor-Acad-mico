<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="resgister" class="flex bg-background-form w-full h-screen">
    <SideBar />
    <div class="flex pt-10 justify-center w-full overflow-y-scroll">
      <form class="w-full md:w-2/3 md:min-w-max rounded-sm shadow-lg">
        <div class="flex justify-between px-4 py-5 bg-white">
          <h1 class="text-2xl font-bold text-gray-800">Meu Cadastro</h1>
          <button class="text-white text-xs font-bold p-3 rounded-md bg-blue-700 hover:bg-blue-800 transition-colors">CONFIRMAR ALTERAÇÕES</button>
        </div>
        <div class="sm:p-6 bg-background-form-cad">
          <h2 class="font-bold text-gray-500">DADOS GERAIS</h2>
          <div id="inputs" class="lg:grid lg:grid-cols-2 justify-between gap-8 p-4 border-b border-gray-300 flex flex-col">
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
            :valueOption1="sexoInput.optionFem"
            :valueOption2="sexoInput.optionMasc"
            :valueOption3="sexoInput.optionNot"
            />
          </div>
          <h2 class="font-bold pt-6 text-gray-500">NASCIMENTO</h2>
          <div id="inputs" class="lg:grid lg:grid-cols-2 justify-between gap-8 p-4 border-b border-gray-300 flex flex-col">
            <InputsComponent
            :typeInput="dataInput.type"
            :textLabel="dataInput.label"
            :idInput="dataInput.id"
            :nameInput="dataInput.id"
            :placeholder="dataInput.placeholder"
            />
            <selectComponent
            :idInput="estadoInput.id"
            :textLabel="estadoInput.label"
            :nameInput="estadoInput.id"
            :value-option1="estadoInput.optionEstadoPB"
            :value-option2="estadoInput.optionEstadoRN"
            :value-option3="estadoInput.optionEstadoPE"
            />
            <selectComponent
            :idInput="cidadeInput.id"
            :textLabel="cidadeInput.label"
            :nameInput="cidadeInput.id"
            :value-option1="cidadeInput.optionCidade1"
            :value-option2="cidadeInput.optionCidade2"
            :value-option3="cidadeInput.optionCidade3"
            />
            <selectComponent
            :idInput="nacionalidadeInput.id"
            :textLabel="nacionalidadeInput.label"
            :nameInput="nacionalidadeInput.id"
            :value-option1="nacionalidadeInput.optionNacionalidade1"
            :value-option2="nacionalidadeInput.optionNacionalidade2"
            :value-option3="nacionalidadeInput.optionNacionalidade3"
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
        label: 'SEXO',
        id: 'sexo',
        optionMasc: 'Masculino',
        optionFem: 'Feminino',
        optionNot: 'Não informado',
      },

      dataInput: {
        type: 'date',
        label: 'DATA',
        id: 'data',
        placeholder: 'dd/mm/aaaa',
      },

      estadoInput: {
        type: 'text',
        label: 'ESTADO',
        id: 'estado',
        optionEstadoPB: 'PB',
        optionEstadoRN: 'RN',
        optionEstadoPE: 'PE',
      },

      cidadeInput: {
        type: 'text',
        label: 'CIDADE',
        id: 'cidade',
        optionCidade1: 'Cajazeiras',
        optionCidade2: 'Cachoeira dos Indios',
        optionCidade3: 'Umari',
      },

      nacionalidadeInput: {
        type: 'text',
        label: 'NACIONALIDADE',
        id: 'nacionalidade',
        optionNacionalidade1: 'Brasileiro',
        optionNacionalidade2: 'Mexicano',
        optionNacionalidade3: 'Japonês',
      },
    };
  },
};
</script>
