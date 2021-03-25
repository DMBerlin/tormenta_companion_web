<template>
  <q-page class="col">
    <div class="row">
      <q-breadcrumbs class="q-ma-md">
        <q-breadcrumbs-el class="text-red-5" label="Início" to="/" ></q-breadcrumbs-el>
        <q-breadcrumbs-el class="text-red-5" label="Meus Personagens" to="/characters/my" ></q-breadcrumbs-el>
        <q-breadcrumbs-el class="text-grey" label="Novo Personagem" ></q-breadcrumbs-el>
      </q-breadcrumbs>
    </div>
    <div class="row">
      <q-space class="col-3" />
      <div class="col-6">
        <p class="text-h6 text-grey-8">
          Modo de Criação do Personagem
        </p>
        <p class="text-body text-grey-6">
          Selecione como você deseja montar seu personagem
        </p>
      </div>
      <q-space class="col-3" />
    </div>
    <div class="row items-center content-center justify-center q-gutter-md">
      <q-item class="col-3 q-ma-md q-pa-md shadow-1 bg-grey-4" disable>
        <q-item-section >
          <q-item-label class="text-grey-6 text-center">
            <strong>
              PADRÃO
            </strong>
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            Defina o valor de atributos do seu personagem jogando 4d6, descartando o menor valor.
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-3 q-ma-md q-pa-md shadow-1 bg-grey-1" clickable @click="$router.push({ path: '/characters/builder/new' })">
        <q-item-section>
          <q-item-label class="text-grey-6 text-center">
            <strong>
              PONTOS
            </strong>
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            Compre seus valores de atributos do seu personagem livremente, utilizando 20 pontos.
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class CharacterBuilder extends Vue {}
</script>
