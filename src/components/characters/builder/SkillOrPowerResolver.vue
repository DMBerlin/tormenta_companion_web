<template>
  <div>
    <q-btn-toggle
      v-model="selection"
      spread
      unelevated
      toggle-color="blue-grey-8"
      class="toggle q-my-md"
      color="blue-grey-2"
      text-color="blue-grey-8"
      :options="props.options"
    />
    <template v-if="props.options[selection].skills">
      <q-select
        multiple
        v-model="skills"
        :options="['Perícia 1', 'Perícia 2']"
        :max-values="props.options[selection].skills"
        label="Selecione a(s) perícia(s)"
        class="q-ma-md"
        :rules="[
          val => val.length === props.options[selection].skills || `Necessário escolher ${props.options[selection].skills} perícia(s).`
        ]"
      />
    </template>
    <template v-if="props.options[selection].powers">
      <q-select
        multiple
        v-model="powers"
        :options="['Poder A', 'Poder B']"
        :max-values="props.options[selection].powers"
        label="Selecione o(s) poder(es)"
        class="q-ma-md"
        :rules="[
          val => val.length === props.options[selection].powers || `Necessário escolher ${props.options[selection].skills} poder(es).`
        ]"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { CharacterSheetModel } from 'src/models/character-sheet.model'
import { ISkillOrPowerProps } from 'src/types/builder/skill-or-powers.types'
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class SkillOrPowerResolver extends Vue {
  @Prop({
    required: false,
    default: () => ({
      options: [
        { label: '2 perícias', value: 0, skills: 2, powers: 0 },
        { label: '1 perícia e 1 poder', value: 1, skills: 1, powers: 1 }
      ]
    })
  })
  private props:ISkillOrPowerProps

  @Prop({
    type: CharacterSheetModel,
    required: true
  })
  private model:CharacterSheetModel

  private selection: number
  private skills: string[]
  private powers: string[]

  constructor () {
    super()
    this.selection = 0
    this.skills = <string[]>[]
    this.powers = <string[]>[]
  }

  @Watch('selection')
  watchOverSelection (value:number) {
    this.skills = <string[]>[]
    this.powers = <string[]>[]
    console.log('SELECTION\n', value)
    // this.model.resetAttributes()
    // attributes.forEach(attribute => this.model.setAttribute({ name: attribute, value: 12 }))
  }
}
</script>
<style scoped>
.toggle {
  border: 1px solid grey;
}
</style>
