<template>
  <div class="q-pa-sm" style="max-width: 28rem">
    <q-form @submit="onSubmit" @reset="onReset" class="myForm q-gutter-sm">
      <div style="width: 28rem">
        <q-input
          filled
          v-model="nome"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>

      <div style="display: flex; justify-content: space-between; width: 28rem">
        <q-input
          filled
          type="number"
          v-model="cpf"
          label="Your Cpf *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-input
          filled
          v-model="sexo"
          label="Your sex *"
          hint="M or F"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>

      <div style="display: flex; justify-content: space-between; width: 28rem">
        <q-input
          filled
          type="number"
          v-model="identidade"
          label="Your identidade *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-input
          filled
          v-model="autorizador"
          label="Autorizador*"
          hint=""
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <div style="display: flex; justify-content: space-between; width: 28rem">
        <q-input
          filled
          type="number"
          v-model="visitado"
          label="Visitado *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-input
          filled
          v-model="locaisLiberados"
          label="Locais liberados*"
          hint=""
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
import { ref } from 'vue';

const nome = ref('');
const cpf = ref('');
const sexo = ref('');
const identidade = ref('');
const visitado = ref('');
const locaisLiberados = ref('');



</script>

<style></style>
