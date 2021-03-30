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
            v-model="searchInput"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-item-section>
      </q-item>
      <template v-for="(race, index) in playbookRacesFilter">
        <q-card :key="index" flat bordered class="q-ma-md">
          <template v-if="!race.subrace">
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
          </template>
          <template v-else>
            <q-expansion-item>
              <template v-slot:header>
                <q-item-section avatar>
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
                  <q-item-label class="text-h6">
                    {{ race.name }}
                  </q-item-label>
                  <q-item-label class="text-body2">
                    {{ race.subrace.length + ' subraças' }}
                  </q-item-label>
                </q-item-section>
              </template>
              <template v-for="(subrace, index) in race.subrace">
                <q-item :key="index" clickable v-ripple @click="showRaceInfo(subrace)">
                  <q-item-section>
                    <q-item-label class="text-body1">{{ subrace.name }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="wb_incandescent" color="red-14" />
                  </q-item-section>
                </q-item>
              </template>
            </q-expansion-item>
          </template>
        </q-card>
      </template>
      <q-dialog v-model="dialog.visible" persistent>
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
              <template v-if="dialog.data.traits">
                <template v-for="(trait, index) in dialog.data.traits">
                  <q-expansion-item
                    :key="index"
                    :label="trait.title"
                    class="shadow-1 q-my-md q-pa-sm bg-grey-3"
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
                    <component
                      :is="trait.componentResolver"
                      :props="trait.props"
                      :model="model"
                    />
                  </q-expansion-item>
                </template>
              </template>
            </q-card-section>
            <q-card-actions>
              <div style="width: 100%; q-gutter-md">
                <q-btn
                  flat
                  label="Cancelar"
                  class="bg-white"
                  style="width: 50%;"
                  @click="dialog.visible = false"
                />
                <q-btn
                  flat
                  label="Confirmar"
                  style="width: 50%;"
                  class="bg-green-7 text-white"
                  @click="setData"
                />
              </div>
            </q-card-actions>
          </template>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IModuleState } from 'src/store'
import { IRace } from 'src/types/races/race-select.types'
import { CharacterSheetModel } from 'src/models/character-sheet.model'

interface IDialog {
  visible:boolean,
  data:IRace | null
}

@Component
export default class RaceSelect extends Vue {
  @Prop({ type: CharacterSheetModel, required: true })
  private model:CharacterSheetModel

  private dialog:IDialog
  private searchInput:string

  constructor () {
    super()
    this.searchInput = ''
    this.dialog = {
      visible: false,
      data: null
    }
  }

  get playbookRaces (): IRace[] {
    return (<IModuleState> this.$store.state).playbookModule.races || <IRace[]>[]
  }

  get playbookRacesFilter (): IRace[] {
    return !this.searchInput
      ? this.playbookRaces
      : (<IModuleState> this.$store.state)
        .playbookModule
        .races
        .filter((race:IRace) => race.name.toLowerCase().includes(this.searchInput.toLowerCase()))
  }

  showRaceInfo (race:IRace) {
    this.dialog.visible = true
    this.dialog.data = race
  }

  setData () {
    this.dialog.data
      ? this.model.setRace(this.dialog.data)
      : this.$q.notify('Erro ao adicionar raça.')
    this.dialog.visible = false
  }
}
</script>
