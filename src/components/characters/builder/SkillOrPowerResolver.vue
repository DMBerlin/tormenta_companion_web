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
        :options="skillService.getSkillList()"
        :max-values="props.options[selection].skills"
        :display-value="skills.map(skill => ' ' + skill.name).toString()"
        label="Selecione a(s) perícia(s)"
        class="q-ma-md"
        :rules="[
          val => val.length === props.options[selection].skills || `Necessário escolher ${props.options[selection].skills} perícia(s).`
        ]"
      >
        <template v-slot:option="scope">
          <q-item
            v-bind="scope.itemProps"
            v-on="scope.itemEvents"
            style="max-width: 480px;"
          >
            <q-item-section>
              <q-item-label class="text-body1">
                <b>{{ scope.opt.name }}</b> ({{ scope.opt.attribute.name }})
              </q-item-label>
              <q-item-label caption>
                {{ scope.opt.trained ? 'Treinada: Sim' : 'Treinada: Não' }} - {{ scope.opt.penalty ? 'Penalidade: Sim' : 'Penalidade: Não' }}
              </q-item-label>
              <q-item-label class="text-body2">
                {{ scope.opt.description }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
        </template>
      </q-select>
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
          val => val.length === props.options[selection].powers || `Necessário escolher ${props.options[selection].powers} poder(es).`
        ]"
      />
    </template>
  </div>
</template>

<script lang="ts">
// import { CharacterSheetModel } from 'src/models/character-sheet.model'
import { ISkillOrPowerProps } from 'src/types/builder/skill-or-powers.types'
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { ISkillSet, SkillService } from 'src/database/skills/skill.services'

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

  // @Prop({
  //   type: CharacterSheetModel,
  //   required: true
  // })
  // private model:CharacterSheetModel

  private selection: number
  private skills: ISkillSet[]
  private powers: string[]
  private skillService: SkillService

  constructor () {
    super()
    this.selection = 0
    this.skills = <ISkillSet[]>[]
    this.powers = <string[]>[]
    this.skillService = new SkillService()
  }

  @Watch('selection')
  watchOverSelection (value:number) {
    this.skills = <ISkillSet[]>[]
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
