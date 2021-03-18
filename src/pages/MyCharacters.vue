<template>
  <q-page class="col">
    <q-item class="row">
      <q-item-section>
        <q-breadcrumbs class="q-ma-md">
          <q-breadcrumbs-el label="Início" to="/" ></q-breadcrumbs-el>
          <q-breadcrumbs-el label="Meus Personagens" ></q-breadcrumbs-el>
        </q-breadcrumbs>
      </q-item-section>
      <q-item-section side>
        <q-btn label="Criar Novo" outline class="bg-grey-10 text-white" />
      </q-item-section>
    </q-item>
    <q-item class="row">
      <q-item-section>
        <q-item-label>
          Meus Personagens
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class MyCharacters extends Vue {}
</script>
