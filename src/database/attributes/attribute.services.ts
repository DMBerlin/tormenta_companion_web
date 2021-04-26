import { ATTRIBUTE_LIST } from './attribute-list.enum'

export interface IAttribute {
  name:string
  description:string
  value:number
  modifier:number
}

export class AttributeService {
  private readonly attributes:IAttribute[]

  constructor () {
    this.attributes = [
      {
        name: 'Força',
        description: `A Força mede seu poder muscular, sua força
        física. O modificador de Força é aplicado em testes
        de Atletismo e Luta; rolagens de dano corpo a corpo
        ou com armas de arremesso, e testes de Força para
        levantar peso, quebrar objetos e atos similares.`,
        value: 0,
        modifier: 0
      },
      {
        name: 'Destreza',
        description: `A Destreza mede agilidade, reflexos, equilíbrio
        e coordenação motora. O modificador de Destreza é
        aplicado na Defesa e em testes de Acrobacia, Cavalgar,
        Furtividade, Iniciativa, Ladinagem, Pilotagem,
        Pontaria e Reflexos.`,
        value: 0,
        modifier: 0
      },
      {
        name: 'Constituição',
        description: `A saúde e o vigor físico do herói são representados
        pela Constituição. Seu modificador é aplicado
        aos pontos de vida iniciais e por nível, e em testes
        de Fortitude. Se o seu modificador de Constituição
        muda, os pontos de vida aumentam ou diminuem
        de acordo.`,
        value: 0,
        modifier: 0
      },
      {
        name: 'Inteligência',
        description: `A capacidade de raciocinar e resolver problemas
        é medida pela Inteligência. Você aplica o modificador
        de Inteligência em testes de Conhecimento, Guerra,
        Investigação, Misticismo, Nobreza e Ofício. Além
        disso, recebe um número de perícias treinadas
        adicionais igual ao seu bônus de Inteligência. Essas
        perícias não precisam ser da sua classe.`,
        value: 0,
        modifier: 0
      },
      {
        name: 'Sabedoria',
        description: `A Sabedoria representa a percepção e a força de
        vontade, além de bom senso e intuição. O modificador
        de Sabedoria é aplicado em testes de Cura, Intuição,
        Percepção, Religião, Sobrevivência e Vontade.`,
        value: 0,
        modifier: 0
      },
      {
        name: 'Carisma',
        description: `Carisma mede sua força de personalidade e
        capacidade de persuasão, além de uma mistura de
        simpatia e beleza física. Seu modificador de Carisma
        será aplicado em testes de Adestramento, Atuação,
        Diplomacia, Enganação, Intimidação e Jogatina.`,
        value: 0,
        modifier: 0
      }
    ]
  }

  getAttributeByName (name:ATTRIBUTE_LIST): IAttribute | null {
    return this.attributes.find(attribute => attribute.name === name) ?? null
  }

  getModifierByValue (value:number):number {
    return Math.floor((value - 10) / 2)
  }
}
