import { CHARACTER_ATTRIBUTE, getCharacterAttribute, IAttribute } from '../attributes'

export interface ISkillSet {
  name:string
  attribute:IAttribute | null
  description?:string
  trained?:boolean
  penalty?:boolean
  abilities?:ISkillAbility[]
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
    description: 'Você sabe fazer proezas acrobáticas.',
    attribute: getCharacterAttribute(CHARACTER_ATTRIBUTE.DESTREZA),
    trained: false,
    abilities: [
      {
        name: 'Amortecer queda',
        cd: 15,
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
        description: `Se
        estiver caído, você pode fazer um teste de Acrobacia
        como uma ação livre para ficar de pé. Você só pode
        tentar isso uma vez por rodada.`
      },
      {
        name: 'Passar por espaço apertado',
        cd: 25,
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
  },
  {
    name: 'Adestramento',
    description: 'Você sabe lidar com animais.',
    attribute: getCharacterAttribute(CHARACTER_ATTRIBUTE.CARISMA),
    trained: false,
    abilities: [
      {
        name: 'Acalmar Animal',
        description: `Você acalma um
        animal nervoso ou agressivo. Isso permite a você
        controlar um cavalo assustado ou convencer um lobo
        a não devorá-lo. Este uso gasta uma ação completa.s`,
        trained: false,
        cd: 25
      },
      {
        name: 'Comandar Animal',
        cd: 20,
        description: `Você transfere
        um aliado animal de você para outro personagem em
        alcance curto. Este uso gasta uma ação de movimento.`
      },
      {
        name: 'Manejar Animal',
        cd: 15,
        description: `Você faz um animal
        realizar uma tarefa para a qual foi treinado (como
        “atacar”, “sentar”, “vigiar”...). Isso permite usar
        Adestramento como Pilotagem para veículos com tração
        animal. Este uso gasta uma ação de movimento.`
      }
    ]
  },
  {
    name: 'Atletismo',
    attribute: getCharacterAttribute(CHARACTER_ATTRIBUTE.FORCA),
    description: `Esta perícia é utilizada para realizar façanhas
    atléticas, como escalar montanhas, cruzar rios e
    saltar sobre desfiladeiros.`,
    abilities: [
      {
        name: 'Corrida',
        description: `Gaste uma ação completa e faça um
        teste de Atletismo. Você avança o resultado do teste
        x 1,5m. Assim, se somar 20 no teste, avança 30m (20
        x 1,5m). Para facilitar as contas, você pode pensar
        em “quadrados de 1,5m”, avançando um número de
        quadrados igual ao resultado do teste. Você recebe
        um modificador de +/–2 para cada 1,5m de deslocamento
        acima ou abaixo de 9m que possua. Assim,
        um elfo (deslocamento 12m) recebe +4 em testes de
        Atletismo para correr, enquanto um anão (deslocamento
        6m) sofre uma penalidade de –4.
        Você só pode correr em linha reta e não pode
        correr através de terreno difícil. Você pode manter a
        corrida por um número de rodadas igual a 1 + seu
        modificador de Constituição. Após isso, deve fazer
        um teste de Fortitude por rodada (CD 15 +1 por
        teste anterior). Se falhar, fica fatigado.`
      },
      {
        name: 'Escalar',
        description: `Você pode subir superfícies inclinadas
        ou verticais. Gaste uma ação de movimento e
        faça um teste de Atletismo. Se passar, você avança
        metade do seu deslocamento. Se falhar, não avança.
        Se falhar por 5 ou mais, você cai. A CD é 10 para
        superfícies com apoios para os pés e mãos (como o
        cordame de um navio), 15 para uma árvore, 20 para
        um muro com reentrâncias (como o de uma ruína)
        e 25 para um muro liso (como o de um castelo).
        Você pode sofrer –5 em seu teste para avançar seu
        deslocamento total. Quando está escalando você fica
        desprevenido e, se sofrer dano, deve fazer um novo
        teste de Atletismo; se falhar, você cai.
        Se um personagem adjacente a você estiver
        escalando e cair, você pode tentar pegá-lo. Faça um
        teste de Atletismo contra a CD da superfície +10. Se
        passar, segura o personagem. Se falhar por 5 ou mais,
        você também cai!`
      },
      {
        name: 'Natação',
        description: `Se estiver na água, você precisa
        gastar uma ação de movimento e fazer um teste de
        Atletismo por rodada para não afundar. A CD é 10
        para água calma, 15 para agitada e 20 ou mais para
        tempestuosa. Se passar, você pode avançar metade
        de seu deslocamento. Se falhar, consegue boiar, mas
        não avançar. Se falhar por 5 ou mais, você afunda. Se
        quiser avançar mais, você pode gastar uma segunda
        ação de movimento na mesma rodada para outro
        teste de Atletismo.
        Se você estiver submerso (seja por ter falhado no
        teste de Atletismo, seja por ter mergulhado intencionalmente),
        deve prender a respiração. Você pode
        prender a respiração por um número de rodadas igual
        a 1 + seu modificador de Constituição. Após isso,
        deve fazer um teste de Fortitude por rodada (CD 15
        +1 por teste anterior). Se falhar, se afoga (é reduzido
        a 0 pontos de vida). Se continuar submerso, sofre
        3d6 pontos de dano por rodada até ser tirado da água
        ou morrer.
        Você sofre penalidade de armadura em testes de
        Atletismo para nadar.`
      },
      {
        name: 'Saltar',
        description: `Você pode pular sobre buracos ou obstáculos
        ou alcançar algo elevado. Para um salto longo,
        a CD é 5 por quadrado de 1,5m (CD 10 para 3m, 15
        para 4,5m, 20 para 6m e assim por diante). Para um
        salto em altura, a CD 15 é por quadrado de 1,5m (30
        para 3m, 45 para 4,5m e assim por diante). Você deve
        ter pelo menos 6m para correr e pegar impulso (sem
        esse espaço, a CD aumenta em +10). Saltar é parte de
        seu movimento e não exige uma ação.`
      }
    ]
  },
  {
    name: 'Atuação',
    attribute: getCharacterAttribute(CHARACTER_ATTRIBUTE.CARISMA),
    description: `Você sabe fazer apresentações artísticas, incluindo
    música, dança e dramaturgia.`,
    abilities: [
      {
        name: 'Apresentação',
        cd: 20,
        description: `Você pode se apresentar
        para ganhar dinheiro. Faça um teste. Se passar,
        você recebe T$ 1d6, mais T$ 1d6 para cada 5 pontos
        pelos quais o resultado do teste exceder a CD. Este
        uso leva metade de um dia. Os valores recebidos
        pressupõem que você está se apresentando em um
        lugar propício, como o palco de uma taverna. De
        acordo com o mestre, você pode receber metade do
        valor, se estiver em um lugar inadequado (as ruas de
        uma cidade, um acampamento militar), ou o dobro,
        se estiver em um lugar especialmente propício (um
        festival, os salões de um palácio).`
      },
      {
        name: 'Impressionar Plateia',
        description: `Faça um teste de
        Atuação oposto pelo teste de Vontade de quem você
        está tentando impressionar. Se você passar, recebe
        +2 em qualquer teste de perícia baseada em Carisma
        contra essa pessoa no mesmo dia. Se falhar, não pode
        tentar de novo no mesmo dia. Se estiver tentando
        impressionar mais de uma pessoa, o mestre faz
        apenas um teste pela plateia toda, usando o melhor
        bônus. Este uso leva de alguns minutos (canto ou
        dança) até algumas horas (apresentação teatral).`
      }
    ]
  },
  {
    name: 'Cavalgar',
    attribute: getCharacterAttribute(CHARACTER_ATTRIBUTE.DESTREZA),
    description: `Você sabe conduzir animais de montaria, como
    cavalos, trobos e grifos. Ações simples não exigem
    testes — você pode encilhar, montar, cavalgar em
    terreno plano e desmontar automaticamente. Ações
    perigosas, entretanto, exigem testes da perícia.`,
    abilities: [
      {
        name: 'Conduzir',
        description: `Cavalgar através de obstáculos exige
        testes de Cavalgar. A CD é 15 para terreno ruim e
        obstáculos pequenos (planície pedregosa, vala estreita)
        e 20 para terreno perigoso ou obstáculos grandes
        (encosta nevada, pântano traiçoeiro). Se você falhar,
        cai da montaria e sofre 1d6 pontos de dano. Conduzir
        é parte de seu movimento e não exige uma ação.`
      },
      {
        name: 'Galopar',
        description: `Gaste uma ação completa e faça um
        teste de Cavalgar. Você avança o resultado do teste x
        1,5m. Seu teste sofre um modificador de +/–2 para
        cada 1,5m de deslocamento acima ou abaixo de 9m
        que você possua.`
      },
      {
        name: 'Montar Rapidamente',
        cd: 20,
        description: `Você pode
        montar ou desmontar como uma ação livre (o normal
        é gastar uma ação de movimento). Se falhar por 5 ou
        mais, você cai no chão.
        Animais não adequados para montaria, como
        touros, leões e avestruzes, impõem uma penalidade
        de –5 em testes de Cavalgar.`
      }
    ]
  },
  {
    name: 'Conhecimento',
    attribute: getCharacterAttribute(CHARACTER_ATTRIBUTE.INTELIGENCIA),
    trained: true,
    description: `Você é um estudioso de assuntos gerais, como
    história e geografia.`,
    abilities: [
      {
        name: 'Idiomas',
        description: `Você pode entender idiomas desconhecidos.
        A CD é 15 para diálogos e textos simples
        e 25 para diálogos e textos complexos. Cada sucesso
        equivale a algumas frases ou uma página de texto. Se
        falhar por 5 ou mais, você tira uma conclusão falsa.
        Idiomas exóticos ou antigos têm CD +5.`
      },
      {
        name: 'Informação',
        description: `Você pode responder dúvidas
        relativas a assuntos gerais. A CD é 10 para questões
        simples, 20 para questões complexas e 30 para mistérios
        e enigmas.`
      }
    ]
  }
]
