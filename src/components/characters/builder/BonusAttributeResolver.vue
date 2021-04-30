<template>
  <div>
    <q-select
      multiple
      v-model="selection"
      :options="props.attributes"
      :max-values="props.maxValues"
      use-chips
      stack-label
      label="Selecione seus atributos"
      class="q-ma-md"
      :rules="[
        val => val.length === props.maxValues || `Necessário escolher ${props.maxValues} atributos.`
      ]"
    />
  </div>
</template>

<script lang="ts">
import { CharacterSheetModel } from 'src/models/character-sheet.model'
import { IRaceProps } from 'src/types/races/race-select.types'
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class BonusAttributeResolver extends Vue {
  @Prop({
    required: true,
    default: () => ({
      attributes: ['Força', 'Constituição', 'Destreza', 'Inteligência', 'Sabedoria', 'Carisma'],
      maxValues: 1
    })
  })
  private props:IRaceProps

  @Prop({
    type: CharacterSheetModel,
    required: true
  })
  private model:CharacterSheetModel

  private selection: string[]

  constructor () {
    super()
    this.selection = <string[]>[]
  }

  @Watch('selection')
  watchOverSelection (attributes:string[]) {
    this.model.resetAttributes()
    attributes.forEach(attribute => this.model.setAttribute({ name: attribute, value: 12 }))
  }
}
</script>
