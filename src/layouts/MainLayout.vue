<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-grey-10">
      <q-toolbar>
        <q-btn
          class="icon"
          dense
          flat
          round
          icon="menu"
          style="padding-right: 1rem"
          @click="toggleLeftDrawer"
        />
        <q-separator vertical />

        <q-toolbar-title class="custom-title">
          <q-icon class="icon" size="md" name="fa fa-globe"> </q-icon>
          <a class="titulo">
            <strong>Controle De Acesso</strong>
          </a>
        </q-toolbar-title>
      </q-toolbar>
      <q-separator />
    </q-header>

    <q-drawer v-model="leftDrawerOpen">
      <MenuLateral />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import MenuLateral from 'src/components/MenuLateral.vue';
import { ref } from 'vue';

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<style scoped lang="scss">
$--q-titulo-color: $titulo;
$--q-icon-color: $Color-icon;
.custom-title {
  color: $--q-titulo-color;
}
.titulo {
  padding-left: 1rem;
}
.icon {
  color: $--q-icon-color;
}
</style>
