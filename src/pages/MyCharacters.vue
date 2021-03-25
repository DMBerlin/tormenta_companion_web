<template>
  <q-page class="col">
    <q-item class="row">
      <q-item-section>
        <q-breadcrumbs class="q-ma-md">
          <q-breadcrumbs-el class="text-red-5" label="Início" to="/" ></q-breadcrumbs-el>
          <q-breadcrumbs-el class="text-grey" label="Meus Personagens" ></q-breadcrumbs-el>
        </q-breadcrumbs>
      </q-item-section>
      <q-item-section side>
        <q-btn label="Criar Novo" outline class="bg-grey-10 text-white" @click="$router.push({ path: '/characters/builder' })" />
      </q-item-section>
    </q-item>
    <q-item class="row">
      <q-space class="col-1" />
      <q-item-section class="col-10">
        <q-item-label class="text-h6 text-grey-8">
          Meus Personagens
        </q-item-label>
        <q-item-label class="text-body text-grey-6">
          A lista dos seus personagens criados até o momento.
        </q-item-label>
        <q-separator />
      </q-item-section>
      <q-space class="col-1" />
    </q-item>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class MyCharacters extends Vue {}
</script>
