
export interface ISkillSet {
  name:string
  attribute:string
  trained:boolean
  abilities?:ISkillAbility[]
}

export interface ISkillSetAbility {
  name:string
  cd:number
  description?:ISkillAbility[]
}

export interface ISkillAbility {
  name:string
  cd?:number
  trained?:boolean
  description:string
}

export const SkillSet:ISkillSet[] = [
  {
    name: 'Acrobacia',
    attribute: 'DEX',
    trained: false,
    abilities: [
      {
        name: 'Amortecer queda',
        cd: 15,
        trained: true,
        description: `Quando cai,
        você pode fazer um teste de Acrobacia para reduzir
        o dano como uma reação. Se passar, reduz o dano da
        queda em 1d6, mais 1d6 para cada 5 pontos pelos
        quais o resultado do teste exceder a CD. Se reduzir o
        dano a zero, você cai de pé.`
      },
      {
        name: 'Equilíbrio',
        description: `Se estiver andando por superfícies
        precárias, você precisa fazer testes de Acrobacia para
        não cair. Cada ação de movimento exige um teste.
        Se passar, você avança metade do seu deslocamento.
        Se falhar, não avança. Se falhar por 5 ou mais, você
        cai. A CD é 10 para piso escorregadio, 15 para uma
        superfície estreita (como o topo de um muro) e
        20 para uma superfície muito estreita (como uma
        corda esticada). Você pode sofrer –5 em seu teste
        para avançar seu deslocamento total. Quando está
        se equilibrando você fica desprevenido e, se sofrer
        dano, deve fazer um novo teste de Acrobacia; se
        falhar, você cai.`
      },
      {
        name: 'Escapar',
        description: `Você pode escapar de amarras. A dificuldade
        varia: cordas (CD igual ao resultado do teste
        de Destreza de quem o amarrou +10), redes (CD 20),
        algemas (CD 30). Este uso gasta uma ação completa.`
      },
      {
        name: 'Levantar-se rapidamente',
        cd: 20,
        trained: true,
        description: `Se
        estiver caído, você pode fazer um teste de Acrobacia
        como uma ação livre para ficar de pé. Você só pode
        tentar isso uma vez por rodada.`
      },
      {
        name: 'Passar por espaço apertado',
        cd: 25,
        trained: true,
        description: `Você pode se espremer por espaços estreitos, suficientes
        para criaturas uma categoria de tamanho menor.
        Você gasta uma ação completa e avança metade
        do deslocamento.`
      },
      {
        name: 'Passar por inimigo',
        description: `Você pode atravessar um
        espaço ocupado por um inimigo como parte de seu
        movimento. Faça um teste de Acrobacia oposto ao
        teste de Acrobacia, Iniciativa ou Luta do oponente (o
        que for melhor). Se você passar, atravessa o espaço;
        se falhar, não atravessa e sua ação de movimento
        termina. Um espaço ocupado por um inimigo conta
        como terreno difícil.`
      }
    ]
  }
]
