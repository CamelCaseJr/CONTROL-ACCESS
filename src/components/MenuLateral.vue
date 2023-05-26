<template>
  <q-list>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon class="icon" size="md" name="fa fa-house" />
      </q-item-section>
      <q-item-section>Home</q-item-section>
    </q-item>

    <q-separator inset></q-separator>
    <q-item-label header style="padding-top: 1rem"> CADASTRAR</q-item-label>

    <q-item clickable v-ripple to="militar">
      <q-item-section avatar>
        <q-icon class="icon" name="fa fa-person-rifle" />
      </q-item-section>
      <q-item-section>Militar</q-item-section>
    </q-item>

    <q-item clickable v-ripple to="visitante">
      <q-item-section avatar>
        <q-icon class="icon" name="fa fa-person-walking" />
      </q-item-section>
      <q-item-section>Visitante</q-item-section>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon class="icon" name="fa fa-building" />
      </q-item-section>
      <q-item-section>Empresa</q-item-section>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon class="icon" name="fa fa-building-user" />
      </q-item-section>
      <q-item-section>Departamentos</q-item-section>
    </q-item>
    <q-separator inset />
    <q-item-label header style="padding-top: 1rem"> ACESSO</q-item-label>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon class="icon" name="fa fa-mobile" />
      </q-item-section>
      <q-item-section>Dispositivos</q-item-section>
    </q-item>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon class="icon" name="fa fa-chart-area" />
      </q-item-section>
      <q-item-section>Áreas</q-item-section>
    </q-item>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon class="icon" name="fa fa-universal-access" />
      </q-item-section>
      <q-item-section>Regras de Acesso</q-item-section>
    </q-item>
    <q-separator inset />
    <q-item-label header style="padding-top: 1rem"> RELATÓRIOS</q-item-label>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon class="icon" name="fa fa-universal-access" />
      </q-item-section>
      <q-item-section>Acessos</q-item-section>
    </q-item>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon class="icon" name="fa fa-square-check" />
      </q-item-section>
      <q-item-section>Permissões</q-item-section>
    </q-item>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon class="icon" name="fa fa-address-card" />
      </q-item-section>
      <q-item-section>Registros</q-item-section>
    </q-item>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon class="icon" name="fa fa-bars-progress" />
      </q-item-section>
      <q-item-section>Status Atual</q-item-section>
    </q-item>
  </q-list>
</template>

<script setup></script>

<style scoped lang="scss">
$--q-icon-color: $Color-icon;
.icon {
  color: $--q-icon-color;
}
</style>
