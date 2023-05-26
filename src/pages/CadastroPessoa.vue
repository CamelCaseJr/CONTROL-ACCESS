<template>
  <q-page class="q-pa-md">
    <div class="q-pa-md q-my-md">
      <div class="text-h6">Cadastro</div>
      <div class="text-subtitle2">Militar</div>
    </div>
    <div class="q-pa-md q-my-md">
      <q-card>
        <q-card-section horizontal>
          <card-imagem />
          <div class="q-pa-md row items-start q-gutter-md">
            <form-militar />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import CardImagem from 'src/components/CardImagem.vue';
import FormMilitar from 'src/components/FormMilitar.vue';
</script>

<style></style>
