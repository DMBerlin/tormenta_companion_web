import { IRaceSelect } from 'src/interfaces/race/race-select.interface'
import { IPlaybookModule } from '.'

export interface IPlaybookState {
  races: IRaceSelect[]
}

function state ():IPlaybookModule {
  return {
    races: [
      {
        name: 'Humano',
        image: <File>require('src/assets/avatars/races/race-avatar-human.jpg'),
        info: `O povo mais numeroso em Arton, humanos
              são considerados os escolhidos dos deuses, aqueles
              que governam o mundo. Em sua variedade e
              adaptabilidade, são encontrados em quase todos os
              pontos do continente — dos vales férteis do Reinado
              às vastidões áridas do Deserto da Perdição. São
              exploradores e desbravadores ambiciosos, sempre
              buscando algo além.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: '+2 em três atributos diferentes.',
            rule: null
          },
          {
            title: 'Versátil',
            description: `Você se torna treinado em duas perícias
            a sua escolha (não precisam ser da sua classe).
            Você pode trocar uma dessas perícias por um poder
            geral a sua escolha.`,
            rule: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Anão',
        image: <File>require('src/assets/avatars/races/race-avatar-anao.jpg'),
        info: `Não existe nada mais confiável em Arton que um anão.
        Cachorros também são confiáveis, mas eu não compararia os
        dois em frente a um anão se fosse você.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Constituição +4, Sabedoria +2, Destreza –2.',
            rule: null
          },
          {
            title: 'Conhecimento das Rochas',
            description: `Você
            recebe visão no escuro e +2 em testes de
            Percepção e Sobrevivência realizados no
            subterrâneo.`,
            rule: null
          },
          {
            title: 'Devagar e Sempre',
            description: `Seu deslocamento é 6m (em
              vez de 9m). Porém, seu
              deslocamento não é reduzido
              por uso de armadura
              ou excesso de carga.`,
            rule: null
          },
          {
            title: 'Duro como Pedra',
            description: `Você recebe +3 pontos de
            vida no 1º nível e +1 por
            nível seguinte.`,
            rule: null
          },
          {
            title: 'Tradição de Heredrimm',
            description: `Para você,
            todos os machados,
            martelos, marretas e
            picaretas são armas
            simples. Você recebe
            +2 em ataques com
            essas armas.`,
            rule: null
          }
        ],
        dialog: {
          visible: false
        }
      }
    ]
  }
}

export default state
