import { ATTRIBUTE_LIST } from '../attributes/attribute-list.enum'
import { AttributeService } from '../attributes/attribute.services'
import { SKILL_LIST } from '../skills/skill-list.enum'
import { SkillService } from '../skills/skill.services'
import { COMBAT_POWERS, DESTINY_POWERS, GRANTED_POWERS, MAGIC_POWERS, TORMENT_POWERS } from './power-list.enum'
import { IPower, POWER_ASSESSMENTS } from './power.types'

export class PowerService {
  private readonly powers:IPower[]
  private readonly skillService: SkillService
  private readonly attributeService: AttributeService

  constructor () {
    this.attributeService = new AttributeService()
    this.skillService = new SkillService()
    this.powers = [
      {
        name: COMBAT_POWERS.ACUIDADE_COM_ARMA,
        description: `Quando usa uma arma leve de corpo a corpo ou
          uma arma de arremesso, você pode usar seu modificador
          de Destreza em vez de Força nos testes de
          ataque e rolagens de dano.`,
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
            value: 13
          }]
        }
      },
      {
        name: COMBAT_POWERS.ARMA_SECUNDARIA_GRANE,
        description: `Você pode usar duas armas de uma mão com o
          poder Estilo de Duas Armas. Pré-requisito: Estilo de
          Duas Armas.`,
        requirement: {
          params: [{
            type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_DUAS_ARMAS)
          }]
        }
      },
      {
        name: COMBAT_POWERS.ARREMESSO_POTENTE,
        description: `Quando usa uma arma de arremesso, você pode
          usar seu modificador de Força em vez de Destreza
          nos testes de ataque. Se você possuir o poder Ataque
          Poderoso, poderá usá-lo com armas de arremesso.`,
        requirement: {
          params: [
            {
              type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.FORCA),
              value: 13
            },
            {
              type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_ARREMESSO)
            }
          ]
        }
      },
      {
        name: COMBAT_POWERS.ATAQUE_PESADO,
        description: `Quando faz um ataque corpo a corpo com uma
          arma de duas mãos, você pode pagar 1 PM. Se fizer
          isso e acertar o ataque, além do dano você faz uma
          manobra derrubar ou empurrar contra o alvo como
          uma ação livre (use o resultado do ataque como o
          teste de manobra).`,
        requirement: {
          params: [{
            type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_DUAS_MAOS)
          }]
        }
      },
      {
        name: COMBAT_POWERS.ATAQUE_PRECISO,
        description: `Se estiver usando uma arma corpo a corpo em
          uma das mãos e nada na outra, você recebe +2 na
          margem de ameaça e +1 no multiplicador de crítico.`,
        requirement: {
          params: [{
            type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_UMA_ARMA)
          }]
        }
      },
      {
        name: COMBAT_POWERS.BLOQUEIO_COM_ESCUDO,
        description: `Quando é atingido por um ataque, habilidade ou
          magia, você pode gastar 1 PM para receber resistência
          a dano contra este ataque igual ao bônus na Defesa
          que seu escudo fornece. Você só pode usar este poder
          se estiver usando um escudo.`,
        requirement: {
          params: [{
            type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_ARMA_E_ESCUDO)
          }]
        }
      },
      {
        name: COMBAT_POWERS.CARA_DE_CAVALARIA,
        description: `Quando faz uma investida montada, você causa
          +2d8 pontos de dano. Além disso, pode continuar se
          movendo depois do ataque. Você deve se mover em
          linha reta e seu movimento máximo ainda é o dobro
          do seu deslocamento.`,
        requirement: {
          params: [{
            type: this.getPowerByName(COMBAT_POWERS.GINETE)
          }]
        }
      },
      {
        name: COMBAT_POWERS.COMBATE_DEFENSIVO,
        description: `Quando usa a ação atacar, você pode usar este
          poder. Se fizer isso, até seu próximo turno, sofre
          –2 em todos os testes de ataque, mas recebe +5 na
          Defesa.`,
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.INTELIGENCIA),
            value: 13
          }]
        }
      },
      {
        name: COMBAT_POWERS.DERRUBAR_APRIMORADO,
        description: `Você recebe +2 em testes de ataque para derrubar.
          Quando derruba uma criatura com essa manobra,
          pode gastar 1 PM para fazer um ataque extra
          contra ela.`,
        requirement: {
          params: [{
            type: this.getPowerByName(COMBAT_POWERS.COMBATE_DEFENSIVO)
          }]
        }
      },
      {
        name: COMBAT_POWERS.DESARMAR_APRIMORADO,
        description: `Você recebe +2 em testes de ataque para desarmar.
          Quando desarma uma criatura, pode gastar 1 PM
          para arremessar a arma dela para longe. Para definir
          onde a arma cai, role 1d8 para a direção (sendo “1” diretamente
          à sua frente, “2” à frente e à direita e assim
          por diante, em sentido horário) e 1d6 para a distância
          (medida em quadrados de 1,5m a partir da criatura
          desarmada).`,
        requirement: {
          params: [{
            type: this.getPowerByName(COMBAT_POWERS.COMBATE_DEFENSIVO)
          }]
        }
      },
      {
        name: COMBAT_POWERS.DISPARO_PRECISO,
        description: `Você pode fazer ataques à distância contra oponentes
          envolvidos em combate corpo a corpo sem
          sofrer a penalidade padrão de –5 no teste de ataque.`,
        requirement: {
          params: [
            {
              type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_DISPARO)
            },
            {
              type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_ARREMESSO)
            }
          ],
          assessments: POWER_ASSESSMENTS.BETWEEN
        }
      },
      {
        name: COMBAT_POWERS.DISPARO_RAPIDO,
        description: `Se estiver usando uma arma de ataque à distância
          e gastar uma ação completa para atacar, você pode fazer
          um ataque adicional com ela (se puder recarregá-
          -la como ação livre). Se fizer isso, sofre –2 em todos os
          testes de ataque até o seu próximo turno.`,
        requirement: {
          params: [
            {
              type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
              value: 13
            },
            {
              type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_DISPARO)
            },
            {
              type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_ARREMESSO)
            }
          ],
          assessments: POWER_ASSESSMENTS.BETWEEN
        }
      },
      {
        name: COMBAT_POWERS.EMPUNHADURA_PODEROSA,
        description: `Ao usar uma arma feita para uma categoria de tamanho
          maior que a sua, a penalidade que você sofre
          nos testes de ataque diminui para –2 (normalmente,
          uma criatura que use uma arma feita para uma categoria
          de tamanho maior sofre uma penalidade de –5
          nos testes de ataque).`,
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.FORCA)
          }]
        }
      },
      {
        name: COMBAT_POWERS.ENCOURACADO,
        description: `Se estiver usando uma armadura pesada, você recebe
          +2 na Defesa. Esse bônus aumenta em +2 para
          cada outro poder que você possua que tenha Encouraçado
          como pré-requisito.`,
        requirement: {
          params: [{
            type: this.getPowerByName(COMBAT_POWERS.PROFICIENCIA_ARMADURAS_PEDADAS)
          }]
        }
      },
      {
        name: COMBAT_POWERS.ESQUIVA,
        description: 'Você recebe +2 em Defesa e Reflexos.',
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
            value: 13
          }]
        }
      },
      {
        name: COMBAT_POWERS.ESTILO_DE_ARMA_E_ESCUDO,
        description: 'Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2.',
        requirement: {
          params: [
            {
              type: this.skillService.getSkillByName(SKILL_LIST.LUTA)
            },
            {
              type: this.getPowerByName(COMBAT_POWERS.PROFICIENCIA_ESCUDO)
            }
          ]
        }
      },
      {
        name: COMBAT_POWERS.ESTILO_DE_ARREMESSO,
        description: 'Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas.',
        requirement: {
          params: [{
            type: this.skillService.getSkillByName(SKILL_LIST.PONTARIA)
          }]
        }
      },
      {
        name: COMBAT_POWERS.ESTILO_DE_DISPARO,
        description: 'Se estiver usando uma arma de disparo, você soma o bônus de Destreza nas rolagens de dano.',
        requirement: {
          params: [{
            type: this.skillService.getSkillByName(SKILL_LIST.PONTARIA)
          }]
        }
      },
      {
        name: COMBAT_POWERS.ESTILO_DE_DUAS_ARMAS,
        description: `Se estiver usando duas armas (e pelo menos uma
          delas for leve) e fizer a ação atacar, você pode fazer
          dois ataques, um com cada arma. Se fizer isso, sofre
          –2 em todos os testes de ataque até o seu próximo
          turno. Se você possuir Ambidestria, não sofre essa
          penalidade. Pré-requisito: Des 15, treinado em Luta.`,
        requirement: {
          params: [
            {
              type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
              value: 15
            },
            {
              type: this.skillService.getSkillByName(SKILL_LIST.LUTA)
            }
          ]
        }
      }
    ]
  }

  getPowerByName (name:COMBAT_POWERS|MAGIC_POWERS|DESTINY_POWERS|GRANTED_POWERS|TORMENT_POWERS):IPower | undefined {
    return this.powers.find((power) => power.name === name)
  }
}
