<template>
  <div>
    <q-item>
      <q-item-section>
        <q-item-label class="text-h5">
          Escolha sua raça
        </q-item-label>
        <q-item-label class="text-subtitle1">
          Em Tormenta, atualmente, existem 17 raças jogáveis desde a mais comuns como humanos até algumas inesperadas como Osteon. Escolha:
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-ripple>
      <q-item-section side>
        <q-avatar rounded size="48px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Mary</q-item-label>
        <q-item-label caption>2 new messages</q-item-label>
      </q-item-section>
      <q-item-section side>
        3 min ago
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class RaceSelect extends Vue {}
</script>

<style>

</style>
