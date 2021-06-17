import { IJobAbilities } from './job.types'
import { JOB_ABILITIES } from './jobs-list.enum'

export class JobService {
  private readonly abilities:IJobAbilities[]
  constructor () {
    this.abilities = [
      {
        name: JOB_ABILITIES.MAGIAS_ARCANAS,
        description: `Você pode lançar magias arcanas de 1º
          círculo. A cada quatro níveis, pode lançar magias de
          um círculo maior (2º círculo no 5º nível, 3º círculo
          no 9º nível e assim por diante).
          Você começa com três magias de 1º círculo. A
          cada nível, aprende uma magia de qualquer círculo
          que possa lançar.
          Seu atributo-chave para lançar magias é definido
          pelo seu Caminho (veja acima) e você soma o bônus
          do atributo-chave no seu total de PM. Veja o Capítulo
          4 para as regras de magia.`
      },
      {
        name: JOB_ABILITIES.MAGIAS_DIVINAS_CLERIGO,
        description: `Você pode lançar magias divinas de 1º
          círculo. A cada quatro níveis, pode lançar magias de
          um círculo maior (2º círculo no 5º nível, 3º círculo
          no 9º nível e assim por diante).
          Você começa com três magias de 1º círculo. A
          cada nível, aprende uma magia de qualquer círculo
          que possa lançar.
          Seu atributo-chave para lançar magias é Sabedoria
          e você soma seu bônus de Sabedoria no seu total de
          PM. Veja o Capítulo 4 para as regras de magia.`
      },
      {
        name: JOB_ABILITIES.MAGIAS_DIVINAS_DRUIDA,
        description: `Escolha três escolas de magia. Uma vez
          feita, essa escolha não pode ser mudada. Você pode
          lançar magias divinas de 1º círculo que pertençam a
          essas escolas. À medida que sobe de nível, pode lançar
          magias de círculos maiores (2º círculo no 6º nível, 3º
          círculo no 10º nível e 4º círculo no 14º nível).
          Você começa com duas magias de 1º círculo. A
          cada nível par (2º, 4º etc.), aprende uma magia de
          qualquer círculo e escola que possa lançar.
          Seu atributo-chave para lançar magias é Sabedoria
          e você soma seu bônus de Sabedoria no seu total
          de PM. Veja o Capítulo 4 para as regras de magia.`
      }
    ]
  }
}
