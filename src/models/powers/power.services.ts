import { ATTRIBUTE_LIST } from '../attributes/attribute-list.enum'
import { AttributeService } from '../attributes/attribute.services'
import { CharacterSheetService } from '../character-sheet/character-sheet.services'
import { SKILL_LIST } from '../skills/skill-list.enum'
import { SkillService } from '../skills/skill.services'
import { COMBAT_POWERS, DESTINY_POWERS, GRANTED_POWERS, MAGIC_POWERS, TORMENT_POWERS } from './power-list.enum'
import { IPower, POWER_ASSESSMENTS } from './power.types'

export class PowerService {
  private readonly powers:IPower[]
  private readonly skillService: SkillService
  private readonly attributeService: AttributeService
  private readonly characterSheetService: CharacterSheetService

  constructor () {
    this.characterSheetService = new CharacterSheetService()
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
          params: [
            { type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA), value: 13 }
          ]
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
            { type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.FORCA), value: 13 },
            { type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_ARREMESSO) }
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
            { type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_DISPARO) },
            { type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_ARREMESSO) }
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
            { type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA), value: 13, required: true },
            { type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_DISPARO) },
            { type: this.getPowerByName(COMBAT_POWERS.ESTILO_DE_ARREMESSO) }
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
      },
      {
        name: COMBAT_POWERS.ESTILO_DE_DUAS_MAOS,
        description: `Se estiver usando uma arma corpo a corpo com
          as duas mãos, você recebe +5 nas rolagens de dano.
          Este poder não pode ser usado com armas leves.`,
        requirement: {
          params: [
            {
              type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.FORCA),
              value: 15
            },
            {
              type: this.skillService.getSkillByName(SKILL_LIST.LUTA)
            }
          ]
        }
      },
      {
        name: COMBAT_POWERS.ESTILO_DE_UMA_ARMA,
        description: `Se estiver usando uma arma corpo a corpo em
          uma das mãos e nada na outra, você recebe +2 na
          Defesa e nos testes de ataque com essa arma (exceto
          ataques desarmados).`,
        requirement: {
          params: [{
            type: this.skillService.getSkillByName(SKILL_LIST.LUTA)
          }]
        }
      },
      {
        name: COMBAT_POWERS.ESTILO_DESARMADO,
        description: `Seus ataques desarmados causam 1d6
          pontos de dano e podem causar dano letal
          ou não letal (sem penalidades).`,
        requirement: {
          params: [{
            type: this.skillService.getSkillByName(SKILL_LIST.LUTA)
          }]
        }
      },
      {
        name: COMBAT_POWERS.FANATICO,
        description: 'Seu deslocamento não é reduzido por usar armaduras pesadas.',
        requirement: {
          params: [
            {
              type: this.getPowerByName(COMBAT_POWERS.ENCOURACADO)
            },
            {
              type: this.characterSheetService,
              value: 12
            }
          ]
        }
      },
      {
        name: COMBAT_POWERS.FINTA_APRIMORADA,
        description: 'Você recebe +2 em testes de Enganação para fintar e pode fintar como uma ação de movimento.',
        requirement: {
          params: [
            { type: this.skillService.getSkillByName(SKILL_LIST.ENGANACAO) },
            { type: this.skillService.getSkillByName(SKILL_LIST.LUTA) }
          ]
        }
      },
      {
        name: COMBAT_POWERS.FOCO_EM_ARMA,
        description: `Escolha uma arma. Você recebe +2 em testes de
          ataque com essa arma. Você pode escolher este poder
          outras vezes para armas diferentes.`,
        requirement: {
          params: [
            { type: this.getPowerByName(COMBAT_POWERS.PROFICIENCIA_ARMAS_MARCIAIS) }
          ]
        }
      },
      {
        name: COMBAT_POWERS.GINETE,
        description: `Você passa automaticamente em testes de
        Cavalgar para não cair da montaria quando sofre
        dano. Além disso, não sofre penalidades para atacar
        à distância ou lançar magias quando montado.`,
        requirement: {
          params: [
            { type: this.skillService.getSkillByName(SKILL_LIST.CAVALGAR) }
          ]
        }
      },
      {
        name: COMBAT_POWERS.INEXPUGNAVEL,
        description: 'Se estiver usando uma armadura pesada, você recebe +2 em todos os testes de resistência.',
        requirement: {
          params: [
            { type: this.characterSheetService, value: 6 },
            { type: this.getPowerByName(COMBAT_POWERS.ENCOURACADO) }
          ]
        }
      },
      {
        name: COMBAT_POWERS.MIRA_APURADA,
        description: `Você pode gastar uma ação de movimento para
          mirar. Se fizer isso, recebe +2 em testes de ataque e
          na margem de ameaça com ataques à distância até
          o fim do turno.`,
        requirement: {
          params: [
            { type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.SABEDORIA), value: 13 },
            { type: this.getPowerByName(COMBAT_POWERS.DISPARO_PRECISO) }
          ]
        }
      },
      {
        name: COMBAT_POWERS.PRESENCA_ATERRADORA,
        description: `Você pode gastar uma ação padrão e 1 PM para assustar todas
          as criaturas a sua escolha em alcance curto. Veja a perícia Intimidação para as regras
          de assustar.`,
        requirement: {
          params: [
            { type: this.skillService.getSkillByName(SKILL_LIST.INTIMIDACAO) }
          ]
        }
      },
      {
        name: COMBAT_POWERS.PROFICIENCIA_ARMADURAS_PEDADAS,
        description: 'Você é proficiente no uso de armaduras pedadas.'
      },
      {
        name: COMBAT_POWERS.PROFICIENCIA_ARMAS_DE_FOGO,
        description: 'Você é proficiente no uso de armas de fogo.'
      },
      {
        name: COMBAT_POWERS.PROFICIENCIA_ARMAS_EXOTICAS,
        description: 'Você é proficiente no uso de armas exóticas.'
      },
      {
        name: COMBAT_POWERS.PROFICIENCIA_ARMAS_MARCIAIS,
        description: 'Você é proficiente no uso de armas marciais.'
      },
      {
        name: COMBAT_POWERS.PROFICIENCIA_ESCUDO,
        description: 'Você é proficiente no uso de escudos.'
      },
      {
        name: COMBAT_POWERS.QUEBRAR_APRIMORADO,
        description: `Você recebe +2 em testes de ataque para quebrar.
          Quando reduz os PV de uma arma para 0 ou
          menos, você pode gastar 1 PM para realizar um ataque
          extra contra o usuário dela. O ataque adicional
          usa os mesmos valores de ataque e dano, mas os
          dados devem ser rolados novamente.`,
        requirement: {
          params: [{
            type: this.getPowerByName(COMBAT_POWERS.ATAQUE_POEROSO)
          }]
        }
      },
      {
        name: COMBAT_POWERS.REFLEXOS_DE_COMBATE,
        description: 'Você ganha uma ação de movimento extra no seu primeiro turno de cada combate.',
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
            value: 13
          }]
        }
      },
      {
        name: COMBAT_POWERS.SAQUE_RAPIDO,
        description: `Você recebe +2 em Iniciativa e pode sacar ou
          guardar itens como uma ação livre (em vez de ação
          de movimento). Além disso, a ação que você gasta
          para recarregar uma arma de disparo diminui em
          uma categoria (ação completa para padrão, padrão
          para movimento, movimento para livre)`,
        requirement: {
          params: [{
            type: this.skillService.getSkillByName(SKILL_LIST.INICIATIVA)
          }]
        }
      },
      {
        name: COMBAT_POWERS.TRESPASSAR,
        description: `Quando você faz um ataque corpo a corpo e reduz
          os pontos de vida do alvo para 0 ou menos, pode
          gastar 1 PM para fazer um ataque adicional contra
          outra criatura dentro do seu alcance. O ataque adicional
          usa os mesmos valores de ataque e dano, mas
          os dados devem ser rolados novamente.`,
        requirement: {
          params: [{
            type: this.getPowerByName(COMBAT_POWERS.ATAQUE_POEROSO)
          }]
        }
      },
      {
        name: COMBAT_POWERS.VITALIDADE,
        description: 'Você recebe +1 PV por nível de personagem e +2 em Fortitude.',
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.CONSTITUICAO),
            value: 13
          }]
        }
      },
      {
        name: DESTINY_POWERS.ACROBATICO,
        description: `Você pode usar seu modificador de Destreza em
          vez de Força em testes de Atletismo. Além disso,
          terreno difícil não reduz seu deslocamento nem o
          impede de realizar investidas.`,
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA), value: 13
          }]
        }
      },
      {
        name: DESTINY_POWERS.AO_SABOR_DO_DESTINO,
        description: `Você recebe diversos benefícios, de acordo com
        seu nível de personagem e a tabela. Os bônus não são cumulativos (os bônus em
          atributos e perícias devem ser aplicados num atributo
          ou perícia diferente a cada vez). Quando você
          utiliza voluntariamente qualquer item mágico (exceto
          poções), perde o benefício deste poder até o fim
          da aventura. Você ainda pode lançar magias, receber
          magias benéficas ou beneficiar-se de itens usados por
          outros — por exemplo, pode “ir de carona” em um
          tapete voador, mas não pode você mesmo conduzi-lo.`,
        rule: [
          new Map(Object.entries({ A0: 'Nivel', B0: 'Benefício' })),
          new Map(Object.entries({ A1: '5', B1: '+2 em uma perícia' })),
          new Map(Object.entries({ A2: '6', B2: '+1 na defesa' })),
          new Map(Object.entries({ A3: '7', B3: '+1 nas rolagens de dano' })),
          new Map(Object.entries({ A4: '8', B4: '+2 em um atributo' })),
          new Map(Object.entries({ A5: '10', B5: '+2 em uma perícia' })),
          new Map(Object.entries({ A6: '11', B6: '+2 na defesa' })),
          new Map(Object.entries({ A6: '12', B6: '+2 nas rolagens de dano' })),
          new Map(Object.entries({ A7: '13', B7: '+2 em atributo' })),
          new Map(Object.entries({ A8: '15', B8: '+2 em uma perícia' })),
          new Map(Object.entries({ A9: '16', B9: '+3 na defesa' })),
          new Map(Object.entries({ A10: '17', B10: '+3 nas rolagens de dano' })),
          new Map(Object.entries({ A11: '18', B11: '+2 em um atributo' })),
          new Map(Object.entries({ A12: '20', B12: '+2 em uma perícia' }))
        ],
        requirement: {
          params: [{
            type: this.characterSheetService,
            value: 5
          }]
        }
      },
      {
        name: DESTINY_POWERS.APARENCIA_INOFENCISA,
        description: `A primeira criatura inteligente (Int 3 ou mais)
        que atacar você em uma cena deve fazer um teste de
        Vontade (CD Car). Se falhar, perderá sua ação. Este
        poder só funciona uma vez por cena; independentemente
        de a criatura falhar ou não no teste, poderá
        atacá-lo nas rodadas seguintes.`,
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.CARISMA), value: 13
          }]
        }
      },
      {
        name: DESTINY_POWERS.ATLETICO,
        description: 'Você recebe +2 em Atletismo e +3m em seu deslocamento.',
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.FORCA), value: 15
          }]
        }
      },
      {
        name: DESTINY_POWERS.ATRAENTE,
        description: 'Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você.',
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.CARISMA), value: 13
          }]
        }
      },
      {
        name: DESTINY_POWERS.COMANDAR,
        description: `Você pode gastar uma ação de movimento e 1
          PM para gritar ordens para seus aliados em alcance
          médio. Eles recebem +1 em testes de perícia até o
          fim da cena.`,
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.CARISMA), value: 13
          }]
        }
      },
      {
        name: DESTINY_POWERS.FOCO_EM_PERICIA,
        description: `Escolha uma perícia. Quando faz um teste dessa
          perícia, você pode gastar 1 PM para rolar dois dados e
          usar o melhor resultado. Você pode escolher este poder
          outras vezes para perícias diferentes. Este poder não
          pode ser aplicado em Luta e Pontaria (mas veja Foco
          em Arma).`
      },
      {
        name: DESTINY_POWERS.INVESTIGADOR,
        description: 'Você recebe +2 em Investigação e soma seu bônus de Inteligência em Intuição.',
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.INTELIGENCIA), value: 13
          }]
        }
      },
      {
        name: DESTINY_POWERS.LOBO_SOLITARIO,
        description: `Você recebe +1 em testes de perícia e Defesa se
        estiver sem nenhum aliado em alcance curto. Você não
        sofre penalidade por usar a perícia Cura em si mesmo.`
      },
      {
        name: DESTINY_POWERS.MEDICINA,
        description: `Você pode gastar uma ação completa para fazer
          um teste de Cura (CD 15) em uma criatura. Se você
          passar, ela recupera 1d6 PV, mais 1d6 para cada 5
          pontos pelos quais o resultado do teste exceder a CD
          (2d6 com um resultado 20, 3d6 com um resultado
          25 e assim por diante). Você só pode usar este poder
          uma vez por dia numa mesma criatura.`,
        requirement: {
          params: [{
            type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.SABEDORIA), value: 13
          }]
        }
      },
      {
        name: DESTINY_POWERS.PARCEIRO,
        description: `Você possui um parceiro animal ou humanoide
          que o acompanha em aventuras. Escolha os detalhes
          dele, como nome, aparência e personalidade. Em
          termos de jogo, é um aliado iniciante de um tipo a sua
          escolha (veja a página 246). O parceiro obedece às
          suas ordens e se arrisca para ajudá-lo. Entretanto, se
          for maltratado, pode parar de segui-lo (de acordo com
          o mestre). Se perder seu parceiro, você recebe outro
          no início da próxima aventura.`,
        requirement: {
          params: [
            {
              type: this.skillService.getSkillByName(SKILL_LIST.ADESTRAMENTO)
            },
            {
              type: this.skillService.getSkillByName(SKILL_LIST.DIPLOMACIA)
            },
            {
              type: this.characterSheetService, value: 6, required: true
            }
          ],
          assessments: POWER_ASSESSMENTS.BETWEEN
        }
      },
      {
        name: DESTINY_POWERS.SENTIDOS_AGUCADOS,
        description: `Você recebe +2 em Percepção, não fica desprevenido
          contra inimigos que não possa ver e, sempre que
          erra um ataque devido a camuflagem ou camuflagem
          total, pode rolar mais uma vez o dado da chance de
          falha.`,
        requirement: {
          params: [
            {
              type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.SABEDORIA), value: 13
            },
            {
              type: this.skillService.getSkillByName(SKILL_LIST.PERCEPCAO)
            }
          ]
        }
      },
      {
        name: DESTINY_POWERS.SORTUDO,
        description: 'Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).'
      },
      {
        name: DESTINY_POWERS.SURTO_HEROICO,
        description: 'Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional.'
      },
      {
        name: DESTINY_POWERS.TORCIDA,
        description: `Você recebe +2 em testes de perícia e Defesa
          quando tem a torcida a seu favor. Entenda-se por
          “torcida” qualquer número de criaturas inteligentes
          em alcance médio que não esteja realizando nenhuma
          ação além de torcer por você.`,
        requirement: {
          params: [
            {
              type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.CARISMA), value: 13
            }
          ]
        }
      },
      {
        name: DESTINY_POWERS.TREINAMENTO_EM_PERICIA,
        description: 'Você se torna treinado em uma perícia a sua escolha. Você pode escolher este poder outras vezes para perícias diferentes.'
      },
      {
        name: DESTINY_POWERS.VENEFICIO,
        description: `Quando usa um veneno, você não corre risco de
          se envenenar acidentalmente. Além disso, a CD para
          resistir aos seus venenos aumenta em +2.`,
        requirement: {
          params: [
            {
              type: this.skillService.getSkillByName(SKILL_LIST.OFICIO)
            }
          ]
        }
      },
      {
        name: DESTINY_POWERS.VONTADE_DE_FERRO,
        description: 'Você recebe +1 PM para cada dois níveis de personagem e +2 em Vontade.',
        requirement: {
          params: [
            {
              type: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.SABEDORIA), value: 13
            }
          ]
        }
      }
    ]
  }

  getPowerList (): IPower[] {
    return this.powers
  }

  getPowerByName (name:COMBAT_POWERS|MAGIC_POWERS|DESTINY_POWERS|GRANTED_POWERS|TORMENT_POWERS):IPower | undefined {
    return this.powers ? this.powers.find((power) => power.name === name) : undefined
  }
}
