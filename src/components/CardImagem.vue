<template>
  <div class="q-pa-lg row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

      <q-card-section>
        <div class="text-overline text-orange-9">Nome</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Posto</div>
        <div class="text-caption text-grey">Resumo de dados</div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="Atualizar Foto" />
        <q-btn flat color="secondary" label="Delet" />
        <q-space />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px
</style>
