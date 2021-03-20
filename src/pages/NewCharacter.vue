<template>
  <q-page class="col">
    <div class="row">
      <q-breadcrumbs class="q-ma-md">
        <q-breadcrumbs-el class="text-red-5" label="Início" to="/" ></q-breadcrumbs-el>
        <q-breadcrumbs-el class="text-red-5" label="Meus Personagens" to="/characters/my" ></q-breadcrumbs-el>
        <q-breadcrumbs-el class="text-red-5" label="Novo Personagem" to="/characters/builder/new" ></q-breadcrumbs-el>
        <q-breadcrumbs-el class="text-grey" label="Elaboração" ></q-breadcrumbs-el>
      </q-breadcrumbs>
    </div>
    <div class="row">
      <div class="col">
        <q-stepper
          v-model="builderStep"
          alternative-labels
          header-nav
          animated
        >
          <q-step
            :name="1"
            title="Raça"
            :done="builderStep > 1"
          >
            For each ad campaign that you create, you can control how much you're willing to
            spend on clicks and conversions, which networks and geographical locations you want
            your ads to show on, and more.
          </q-step>

          <q-step
            :name="2"
            title="Atributos"
            :done="builderStep > 2"
          >
            An ad group contains one or more ads which target a shared set of keywords.
          </q-step>

          <q-step
            :name="3"
            title="Classe"
            :done="builderStep > 3"
          >
            This step won't show up because it is disabled.
          </q-step>

          <q-step
            :name="4"
            title="Origem"
            :done="builderStep > 4"
          >
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
          </q-step>

          <q-step
            :name="5"
            title="Divindade"
            :done="builderStep > 5"
          >
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
          </q-step>

          <q-step
            :name="6"
            title="Perícias"
            :done="builderStep > 6"
          >
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
          </q-step>

          <q-step
            :name="7"
            title="Equipamento"
            :done="builderStep > 7"
          >
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
          </q-step>

          <q-step
            :name="8"
            title="Magias"
            :done="builderStep > 8"
          >
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
          </q-step>

          <q-step
            :name="9"
            title="Finalização"
            :done="builderStep > 9"
          >
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="builderStep++" color="primary" label="Continue" />
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NewCharacter extends Vue {
  private builderStep:number

  constructor () {
    super()
    this.builderStep = 1
  }
}
</script>
