<template>
  <q-page class="bg-grey-1">
    <div>
      <q-item>
        <q-item-section>
          <q-item-label class="text-h5" style="color: #bc4c45;">
            Escolha sua raça
          </q-item-label>
          <q-item-label class="text-subtitle1" style="color: #231f20;">
            Em Tormenta, atualmente, existem 17 raças jogáveis desde a mais comuns como humanos até algumas inesperadas como Osteon. Escolha:
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-input
            type="text"
            label="Buscar..."
            color="grey"
            outlined
            rounded
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>
      <template v-for="(race, index) in races">
        <q-card :key="index" flat bordered class="q-ma-md">
          <q-item clickable v-ripple @click="showRaceInfo(race)">
            <q-item-section side>
              <q-img
                :ratio="1"
                height="52px"
                width="52px"
                :src="race.image"
                spinner-color="red"
                :img-style="{ 'border': '2px solid', 'border-image-slice': '1', 'border-width': '2px', 'border-image-source': 'linear-gradient(to left, #f9a61f, #da5d28)' }"
              >
                <template v-slot:error>
                  <div class="absolute-full flex flex-center bg-negative text-white">
                    :(
                  </div>
                </template>
              </q-img>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6">{{ race.name }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="wb_incandescent" color="red-14" />
            </q-item-section>
          </q-item>
        </q-card>
      </template>
      <q-dialog v-model="dialog.visible">
        <q-card class="my-card bg-grey-4" style="min-width: 375px;">
          <template v-if="dialog.data">
            <q-card-section class="bg-blue-grey-8">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-white text-h6">
                    Confirme sua raça
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card-section>
            <q-card-section>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h4 text-bold">
                    {{ dialog.data.name }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-img
                    :ratio="1"
                    height="68px"
                    width="68px"
                    :src="dialog.data.image"
                    spinner-color="red"
                    :img-style="{ 'border': '2px solid', 'border-image-slice': '1', 'border-width': '2px', 'border-image-source': 'linear-gradient(to left, #f9a61f, #da5d28)' }"
                  >
                    <template v-slot:error>
                      <div class="absolute-full flex flex-center bg-negative text-white">
                        :(
                      </div>
                    </template>
                  </q-img>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-subtitle1 text-justify q-my-md">
                    {{ dialog.data.info }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card-section>
            <q-card-section>
              <template v-for="(trait, index) in dialog.data.traits">
                <q-expansion-item
                  :key="index"
                  :label="trait.title"
                  class="shadow-1 q-my-md bg-grey-3"
                  header-class="bg-blue-grey-2 text-bold"
                  :default-opened="index === 0"
                >
                  <q-item>
                    <q-item-section>
                      <q-item-label class="text-body1">
                        {{ trait.description }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-expansion-item>
              </template>
            </q-card-section>
            <q-card-actions>
              <div style="width: 100%; q-gutter-md">
                <q-btn style="width: 50%;" flat class="bg-white" label="Cancelar" />
                <q-btn style="width: 50%;"  flat class="bg-green-7 text-white" label="Confirmar" />
              </div>
            </q-card-actions>
          </template>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { IRaceSelect } from 'src/interfaces/race/race-select.interface'

interface IDialog {
  visible:boolean,
  data:IRaceSelect | null
}

@Component
export default class RaceSelect extends Vue {
  private races: IRaceSelect[]
  private dialog:IDialog = {
    visible: false,
    data: null
  }

  constructor () {
    super()
    this.races = <IRaceSelect[]> this.$store.state.playbookModule.races || <IRaceSelect[]>[]
  }

  showRaceInfo (race:IRaceSelect) {
    this.dialog.visible = true
    this.dialog.data = race
  }
}
</script>
