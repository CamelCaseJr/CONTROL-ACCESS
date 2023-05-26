<template>
  <div class="q-pa-sm" style="max-width: 28rem">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm">
      <div style="width: 28rem">
        <q-input
          filled
          v-model.lazy="militar.nome"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>

      <div style="display: flex; justify-content: space-between; width: 28rem">
        <q-input
          filled
          v-model="militar.cpf"
          label="CPF"
          mask="###.###.###-##"
          fill-mask
          hint="Digite o cpf"
          :rules="[
            (val) =>
              (val !== null && val !== '' && isValidCPF(militar.cpf)) ||
              'Please type a valid CPF',
          ]"
        />

        <q-input
          filled
          type="string"
          v-model="militar.sexo"
          label="Sexo"
          mask="#"
          fill-mask
          hint="Digite o sexo da pessoa"
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => /^['M','m','F','f']{1}$/.test(val) || 'Digite M ou F',
          ]"
        />
      </div>

      <div style="display: flex; justify-content: space-between; width: 28rem">
        <q-input
          filled
          v-model="militar.saram"
          label="Saram"
          mask="######-#"
          fill-mask
          hint="Digite o saram do militar"
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) =>
              /^[0-9]{6}\-[0-9]{1}$/.test(val) || 'Please type a valid Saram',
          ]"
        />

        <q-input
          filled
          v-model.lazy="militar.nomeDeGuerra"
          label="Your nome de guerra*"
          hint=""
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>

      <div style="display: flex; justify-content: space-between; width: 28rem">
        <q-input
          filled
          v-model.lazy="militar.orgMilitar"
          label="Your OM*"
          hint="Digite o nome da OM"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          v-model.lazy="militar.posto"
          label="Your posto/graduação*"
          hint="ads"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>

      <q-space />

      <div class="q-pt-md">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import isValidCPF from 'src/composables/isValidCPF';
import { reactive } from 'vue';
import ServiceMilitar from '../services/ServiceMilitar';
import { useQuasar } from 'quasar';

const militar = reactive({});
const { postMilitar } = ServiceMilitar();
const $q = useQuasar();

const onSubmit = async () => {
  await postMilitar(militar)
    .then((response) => {
      $q.notify({
        type: 'positive',
        message: 'Militar criado com sucesso!',
      });
        console.log(response);
    })
    .catch((error) => {
      // Caso ocorra um erro, verifique se é uma exceção EntityNotFoundException
      if (error.response.data.exception === 'EntityNotFoundException') {
        // Exiba a mensagem de erro em um notify ou qualquer outro componente de notificação
        $q.notify({
          color: 'negative',
          message: error.response.data.message,
        });
      }
    });
};
</script>
<style></style>
