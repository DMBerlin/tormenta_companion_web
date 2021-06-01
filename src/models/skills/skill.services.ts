import { ATTRIBUTE_LIST } from '../attributes/attribute-list.enum'
import { SKILL_LIST } from './skill-list.enum'
import { AttributeService } from '../attributes/attribute.services'
import { ISkill } from './skill.types'

export class SkillService {
  private readonly skills:ISkill[]
  private readonly attributeService:AttributeService

  constructor () {
    this.attributeService = new AttributeService()
    this.skills = [
      {
        name: SKILL_LIST.ACROBACIA,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
        trained: false,
        penalty: false,
        description: 'Você sabe fazer proezas acrobáticas.',
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
        name: SKILL_LIST.ADESTRAMENTO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.CARISMA),
        trained: false,
        penalty: false,
        description: 'Você sabe lidar com animais.',
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
        name: SKILL_LIST.ATLETISMO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.FORCA),
        trained: false,
        penalty: false,
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
        name: SKILL_LIST.ATUACAO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.CARISMA),
        trained: false,
        penalty: false,
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
        name: SKILL_LIST.CAVALGAR,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
        trained: false,
        penalty: false,
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
        name: SKILL_LIST.CONHECIMENTO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.INTELIGENCIA),
        trained: true,
        penalty: false,
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
      },
      {
        name: SKILL_LIST.CURA,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.SABEDORIA),
        trained: false,
        penalty: false,
        description: 'Você sabe tratar ferimentos, doenças e veneno.',
        abilities: [
          {
            name: 'Cuidados Prolongados',
            cd: 15,
            description: `Você trata
            uma pessoa para que ela se recupere mais rapidamente.
            Se passar, ela recupera o dobro dos PV por descanso
            nesse dia. Este uso leva uma hora e o número máximo
            de pessoas que você pode cuidar é igual ao seu nível.`
          },
          {
            name: 'Necropsia',
            description: `Você examina um cadáver para determinar
            a causa e o momento aproximado da morte.
            A CD é 15 para morte por ferimentos evidentes, 20
            para ferimentos discretos, veneno ou doença e 30
            para venenos ou doenças raros, maldição ou outras
            situações extraordinárias. Este uso leva dez minutos.`
          },
          {
            name: 'Primeiros Socorros',
            cd: 15,
            description: `Você estabiliza
            um personagem que esteja sangrando. Este uso
            gasta uma ação padrão.`
          },
          {
            name: 'Tratamento',
            description: `Você ajuda a vítima de uma
            doença ou veneno com efeito contínuo. Gaste uma
            ação completa e faça um teste de Cura contra a CD
            da doença ou veneno. Se você passar, o paciente
            recebe +5 em seu próximo teste de Fortitude contra
            esse efeito.
            Esta perícia exige um kit de medicamentos. Sem
            ele, você sofre –5 no teste. Você pode usar a perícia
            Cura em si mesmo, mas sofre –5 no teste.`
          }
        ]
      },
      {
        name: SKILL_LIST.DIPLOMACIA,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.SABEDORIA),
        trained: false,
        penalty: false,
        description: 'Você usa lábia e argumentação para convencer outras pessoas.',
        abilities: [
          {
            name: 'Barganha',
            description: `Comprando ou vendendo algo,
            você pode barganhar. Seu teste de Diplomacia é
            oposto pelo teste de Vontade do negociante. Se
            passar, você muda o preço em 10% a seu favor. Se
            passar por 10 ou mais, muda em 20%. Se falhar por 5
            ou mais, você ofende o negociante — ele não voltará
            a tratar com você durante pelo menos uma semana.
            Alguns comerciantes ou estabelecimentos podem
            não ter permissão de baixar seus preços.`
          },
          {
            name: 'Mudar Atitude',
            description: `Você pode mudar a atitude
            de alguém em relação a você ou a outra pessoa uma
            vez por dia (veja o quadro a seguir). Seu teste é oposto
            pelo teste de Vontade do alvo. Se passar, você muda
            a atitude do alvo em uma categoria, para melhor ou
            pior. Se passar por 10 ou mais, muda a atitude em
            até duas categorias. Se falhar por 5 ou mais, a atitude
            do alvo muda uma categoria na direção contrária. O
            teste leva um minuto. Você pode fazê-lo como uma
            ação completa (para evitar uma briga, por exemplo),
            mas sofre uma penalidade de –10.`
          },
          {
            name: 'Pedir Favor',
            description: `Você pode pedir um favor a um
            alvo de atitude indiferente ou melhor. A CD é 20
            para um alvo indiferente, 15 para amistoso e 10 para
            prestativo. Pedidos simples (“Onde fica a taverna
            mais próxima?”) não exigem teste. Pedidos custosos
            (como fornecer uma carona de navio) têm CD +5.
            Pedidos perigosos (como ajudar numa luta) têm CD
            +10 ou falham automaticamente. Pedir um favor
            leva pelo menos uma ação completa, mas pode levar
            mais tempo, de acordo com o mestre.`
          }
        ]
      },
      {
        name: SKILL_LIST.ENGANACAO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.CARISMA),
        trained: false,
        penalty: false,
        description: 'Você engana pessoas com mentiras, falsificações e disfarces.',
        abilities: [
          {
            name: 'Blefar',
            description: `Você faz uma pessoa acreditar em algo
            que não é verdade. Seu teste é oposto pelo teste
            de Intuição da vítima. Mentiras nas quais a pessoa
            deseja acreditar (“Tenho certeza de que você deixou
            cair esses tibares. Não são mesmo seus?”) fornecem
            +5 no teste de Enganação. Já mentiras muito implausíveis
            impõem uma penalidade de –10 (“Por que
            estou com a bolsa de ouro do mestre da guilda? Ora,
            porque ele me pediu para levá-la até ele!”).`
          },
          {
            name: 'Disfarce',
            description: `Com maquiagem e truques, você
            consegue mudar sua aparência ou a de outra pessoa.
            Faça um teste de Enganação oposto pelo teste de
            Percepção de quem prestar atenção no disfarçado.
            Se você passar, a pessoa acredita no disfarce; caso
            contrário, percebe que há algo errado. Disfarces
            complexos impõem penalidades cumulativas: –2
            para sexo oposto, –2 para uma raça diferente e –2
            para idade muito diferente. Como é mais difícil fingir
            ser alguém conhecido, aqueles que conhecem essa
            pessoa recebem bônus em seus testes de Percepção:
            +2 se conhece de vista, +5 para amigo, +10 para
            íntimo. Um disfarce exige pelo menos dez minutos e
            um kit de disfarces. Sem o kit, você sofre uma penalidade
            de –5 nos testes de Enganação para disfarce.`
          },
          {
            name: 'Falsificação',
            description: `Você pode forjar documentos.
            Faça um teste de Enganação oposto pelo teste de
            Percepção de quem examina a falsificação. Se você
            passar, o examinador acredita que o documento
            é válido; caso contrário, ele percebe que é falso.
            Você sofre uma penalidade de –2 se o documento é
            desconhecido, especialmente complexo (como um
            decreto imperial ou ordens militares) ou inclui uma
            assinatura específica. O examinador sofre uma penalidade
            de –2 se nunca viu um documento verdadeiro
            do mesmo tipo, e recebe um bônus de +2 se estiver
            habituado a ver esse tipo de documento ou analisando
            com muita atenção (por exemplo, guardas
            inspecionando criteriosamente os convites para uma
            festa restrita). Os modificadores são cumulativos.
            Usada em conjunto com Ofício, você pode falsificar
            outros objetos (como joias e armas). Use Ofício
            para fabricar a peça e então um teste de Enganação
            para que ela pareça genuína.`
          },
          {
            name: 'Fintar',
            description: `Você pode gastar uma ação padrão e
            fazer um teste de Enganação oposto a um teste de
            Reflexos de uma criatura em alcance curto. Se você
            passar, ela fica desprevenida contra seu próximo
            ataque, mas apenas até o fim de seu próximo turno.`
          },
          {
            name: 'Insinuação',
            cd: 20,
            description: `Você pode falar alguma
            coisa para uma pessoa sem que outras pessoas no
            mesmo ambiente entendam do que você está falando.
            Se você passar, o receptor entende sua mensagem. Se
            falhar por 5 ou mais, você dá a entender algo diferente
            do que queria. Outros personagens podem fazer um
            teste de Intuição oposto ao seu teste de Enganação.
            Se passarem, entendem o que você está dizendo.`
          },
          {
            name: 'Intriga',
            description: `Você pode plantar informações. A CD
            varia de acordo com o quão difícil é acreditar em sua
            intriga: 20 para intrigas prováveis (espalhar que o
            taverneiro local, famoso por ser sovina, está aguando
            a cerveja); 25 para intrigas improváveis (plantar o
            rumor de que uma caverna próxima está repleta de
            tesouros, para esvaziar a cidade de seus aventureiros),
            e 30 para intrigas quase impossíveis (convencer
            o povo de que o clérigo de Khalmyr é um cultista
            de Sszzaas). Este uso exige pelo menos um dia, mas
            pode levar mais tempo, de acordo com o mestre.
            Se você falhar por 5 ou mais, o alvo de sua intriga
            descobre que você está tentando plantar informações
            a respeito dele. Mesmo que você passe, uma pessoa
            pode investigar a fonte da intriga e chegar até você.
            Isso exige um teste de Investigação por parte dela,
            com CD igual ao resultado do seu teste para a intriga.`
          }
        ]
      },
      {
        name: SKILL_LIST.FORTITUDE,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.CONSTITUICAO),
        trained: false,
        penalty: false,
        description: 'Esta perícia mede seu vigor e sua resistêcia física.',
        abilities: [
          {
            name: 'Fôlego',
            cd: 15,
            description: `Você usa Fortitude para manter seu fôlego quando
            está correndo ou sem respirar. Veja os usos corrida e
            natação da perícia Atletismo para mais detalhes. A CD do teste
            aumenta em +1 cada vez que for realizado.`
          },
          {
            name: 'Resistência',
            description: `Você usa Fortitude para resistir
            a efeitos que afetam sua saúde ou vitalidade, como
            venenos e doenças. A CD é determinada pelo efeito.`
          }
        ]
      },
      {
        name: SKILL_LIST.FURTIVIDADE,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
        trained: false,
        penalty: true,
        description: 'Esta perícia mede seu vigor e resistência física.',
        abilities: [
          {
            name: 'Esconder-se',
            description: `Faça um teste de Furtividade
            oposto pelos testes de Percepção de qualquer um que
            possa notá-lo. Criaturas que falharem não conseguem
            percebê-lo (você tem camuflagem total contra elas).
            Esconder-se é uma ação livre, mas você precisa
            terminar seu turno com cobertura ou camuflagem
            — escuridão, folhagens, outras pessoas com as
            quais consiga se misturar etc. Você pode se mover
            à metade de seu deslocamento sem penalidades ou
            ao seu deslocamento normal sofrendo –5 no teste
            (se estiver se escondendo em uma multidão, pode se
            mover ao deslocamento dela sem sofrer penalidade).
            Se atacar, lançar uma magia ou fizer outra ação chamativa,
            sofre uma penalidade de –20 (e, se já estava
            escondido, deve refazer o teste com esta penalidade).`
          },
          {
            name: 'Seguir',
            description: `Faça um teste de Furtividade oposto
            ao teste de Percepção da pessoa sendo seguida. Você
            sofre uma penalidade de –5 se estiver em um lugar
            sem movimento ou sem esconderijos, como um descampado,
            uma rua deserta etc. A vítima recebe +5
            em seu teste de Percepção se tiver motivo para achar
            que está sendo seguida e estiver tomando precauções
            (como olhar para trás de vez em quando). Se você
            passar, segue a pessoa até ela chegar a seu destino.
            Se falhar, a pessoa percebe-o na metade do caminho.`
          }
        ]
      },
      {
        name: SKILL_LIST.GUERRA,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.INTELIGENCIA),
        trained: true,
        penalty: false,
        description: 'Você foi educado em tática, estratégia e logística.',
        abilities: [
          {
            name: 'Analisar Terreno',
            cd: 20,
            description: `Como uma
            ação de movimento, você pode observar o campo de
            batalha. Se passar, descobre uma vantagem, como
            cobertura, camuflagem ou terreno elevado, se houver.`
          },
          {
            name: 'Tática',
            cd: 20,
            description: `Como uma ação padrão, você
            orienta um aliado em alcance médio. Se passar, fornece
            +5 na Iniciativa dele. Se isso fizer com que um
            aliado que ainda não tenha agido nesta rodada fique
            com uma Iniciativa maior do que a sua, ele age imediatamente
            após seu turno. Nas próximas rodadas,
            ele age de acordo com a nova ordem.`
          }
        ]
      },
      {
        name: SKILL_LIST.INICIATIVA,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
        trained: false,
        penalty: false,
        description: 'Esta perícia determina sua velocidade de reação em situações de perigo.',
        abilities: [
          {
            name: 'Agir',
            description: `Quando uma cena de ação começa, cada
            personagem envolvido faz um teste de Iniciativa.
            Eles agem em ordem decrescente dos resultados. Em
            caso de empate, o personagem com o maior bônus de
            Iniciativa age primeiro. Se o empate persistir, outra
            rolagem deve ser feita entre os empatados.`
          }
        ]
      },
      {
        name: SKILL_LIST.INTIMIDACAO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.CARISMA),
        trained: false,
        penalty: false,
        description: 'Vodê pode assustar ou coargir outras pessoas',
        abilities: [
          {
            name: 'Assustar',
            description: `Como uma ação padrão, faça um
            teste de Intimidação oposto pelo teste de Vontade
            de uma criatura em alcance curto. Se você passar, ela
            fica abalada pelo resto da cena (não cumulativo). Se
            você passar por 10 ou mais, ela fica apavorada por
            uma rodada e então abalada pelo resto da cena.`
          },
          {
            name: 'Coagir',
            description: `Você obriga uma pessoa a fazer algo.
            Faça um teste de Intimidação oposto pelo teste de
            Vontade da vítima. Se você passar, ela colabora por
            uma cena. Depois desse tempo, torna-se hostil. Se
            você falhar por 5 ou mais, ela não obedece ou faz o
            oposto do ordenado. Se você mandar a pessoa fazer
            algo perigoso ou que vá contra a natureza dela, ela
            recebe +5 no teste ou passa automaticamente. Este
            uso leva um minuto. Você pode coagir como uma ação
            completa, mas sofre uma penalidade de –10 no teste.
            Bônus ou imunidade a medo se aplicam contra
            Intimidação.`
          }
        ]
      },
      {
        name: SKILL_LIST.INTUICAO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.SABEDORIA),
        trained: false,
        penalty: false,
        description: 'Essa perícia mede seu sexto sentido',
        abilities: [
          {
            name: 'Perceber Blefe',
            description: 'Você descobre se alguém está mentindo (ver perícia Blefe).'
          },
          {
            name: 'Pressentimento',
            cd: 20,
            description: `Você analisa
            uma pessoa, para ter uma ideia de sua índole ou
            caráter, ou uma situação, para perceber qualquer
            comportamento estranho que esteja acontecendo
            (por exemplo, se os frequentadores de uma taverna
            estão muito silenciosos, por estarem sob ameaça de
            um vilão). Este uso apenas indica o comportamento
            estranho; para descobrir o que está acontecendo, veja
            a perícia Investigação. Este uso só pode ser tentado
            se você é treinado em Intuição.`
          }
        ]
      },
      {
        name: SKILL_LIST.INVESTIGACAO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.INTELIGENCIA),
        trained: false,
        penalty: false,
        description: 'Você sabe como descobrir pistas e informações.',
        abilities: [
          {
            name: 'Obter informação',
            description: `Você pode descobrir
            informações interrogando pessoas ou indo para
            um lugar movimentado e mantendo os ouvidos
            atentos. Este uso exige um dia inteiro e algumas
            moedas para bebidas ou subornos. A dificuldade e
            o dinheiro a ser gasto dependem do que você quer
            descobrir. Informações gerais (“Quem é o guerreiro
            mais forte da aldeia?”) têm CD 10 e custam T$
            1d6. Informações específicas (“Quem é o ancião
            que está sempre ao lado do rei?”) têm CD 15 e
            custam T$ 1d10. Informações restritas, que poucas
            pessoas conhecem (“O que fazem naquela torre
            misteriosa?”), têm CD 20 e custam T$ 3d6. Por
            fim, informações protegidas, que podem colocar
            em risco quem responder à pergunta (“Quem é o
            líder da guilda dos ladrões?”), têm CD 25 e custam
            T$ 3d10. Você pode pagar o dobro do dinheiro para
            receber +2 no teste.`
          },
          {
            name: 'Procurar',
            description: `Você pode examinar um local
            para perceber detalhes úteis. Examinar uma área
            de 1,5m gasta uma ação completa. A CD depende
            do que você está procurando: um item específico
            dentro de um baú cheio (CD 10), uma porta
            secreta (CD 20), uma porta secreta muito bem
            escondida (CD 30). Você também pode encontrar
            armadilhas; a CD varia de acordo com a armadilha.
            Você pode encontrar rastros, mas para segui-los
            deve usar Sobrevivência.`
          }
        ]
      },
      {
        name: SKILL_LIST.JOGATINA,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.CARISMA),
        trained: true,
        penalty: false,
        description: 'Você sabe ganhar dinheiro com jogos de azar.',
        abilities: [
          {
            name: 'Apostar',
            description: `Para resolver uma noite de jogatina,
            pague T$ 1d10, faça um teste de perícia e consulte
            a tabela abaixo para determinar quanto você ganha.
            O mestre pode variar o valor da aposta básica. De
            T$ 1d3, para uma taverna no porto frequentada por
            marujos e estivadores, a 1d10 x T$ 1.000, para um
            cassino de luxo em Valkaria.`,
            table: [
              ['Resultado do Teste', 'Ganho'],
              ['9 ou menos', 'nenhum'],
              ['10 a 14', 'metade da aposta'],
              ['15 a 19', 'valor da aposta'],
              ['20 a 29', 'dobro a apost'],
              ['30 a 39', 'triplo da aposta'],
              ['40 ou mais', 'quíntuplo da aposta']
            ]
          }
        ]
      },
      {
        name: SKILL_LIST.LADINAGEM,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
        trained: true,
        penalty: true,
        description: 'Com mãos leves e mente suja, você sabe exercer as tarefas de um ladrão.',
        abilities: [
          {
            name: 'Abrir fechadura',
            description: `Você pode abrir uma fechadura
            trancada. A CD é 20 para fechaduras simples
            (porta de loja), 25 para fechaduras médias (prisão,
            baú) e 30 para fechaduras superiores (cofre, câmara
            do tesouro). Este uso gasta uma ação completa.`
          },
          {
            name: 'Ocultar item',
            description: `Você esconde um objeto em
            seu corpo. Como uma ação padrão, faça um teste
            de Ladinagem oposto pelo teste de Percepção de
            qualquer um que possa vê-lo. Objetos discretos ou
            pequenos fornecem +5 no teste; objetos desajeitados
            ou grandes impõem –5. Se uma pessoa revistar
            você, recebe +10 no teste de Percepção.`
          },
          {
            name: 'Punga',
            cd: 20,
            description: `Você pode surrupiar objetos
            de outras pessoas (ou plantar objetos nas posses
            delas). Como uma ação padrão, faça um teste de
            Ladinagem. Se passar, você pega (ou coloca) o que
            queria. A vítima tem direito a um teste de Percepção
            (CD igual ao resultado de seu teste de Ladinagem).
            Se passar, ela percebe sua tentativa, tenha você
            conseguido ou não.`
          },
          {
            name: 'Sabotar',
            description: `Você pode desabilitar dispositivos
            mecânicos, como fechaduras, veículos e armadilhas.
            Uma ação simples (emperrar uma fechadura, sabotar
            uma roda de carroça para que quebre 1d4 rodadas
            após o uso) tem CD 20. Uma ação difícil (desativar
            uma armadilha) tem CD 25. Por fim, uma ação complexa
            (desativar uma armadilha avançada, sabotar
            um canhão para explodir quando utilizado) tem CD
            30. Se você falhar por 5 ou mais, alguma coisa sai
            errada — uma armadilha se ativa; você acha que um
            mecanismo está desabilitado, mas na verdade ele
            ainda funciona. Usar esta perícia leva 1d4 rodadas.
            Você pode sofrer –5 em seu teste para fazê-lo como
            uma ação completa.
            Os usos abrir fechaduras e sabotar exigem um
            kit de ladrão. Sem ele, você sofre –5 no teste.`
          }
        ]
      },
      {
        name: SKILL_LIST.LUTA,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.FORCA),
        trained: false,
        penalty: false,
        description: 'Esta perícia mede sua capacidade de luta corpo a corpo, seja com armas brancas, seja desarmado.',
        abilities: [
          {
            name: 'Ataque Corpo a Corpo',
            description: `Para fazer um ataque
            corpo a corpo você faz um teste de Luta. A CD
            é a Defesa do alvo. Se você acertar, causa dano de
            acordo com a arma utilizada. Veja o Capítulo 5:
            Jogando para os modificadores aplicáveis a testes
            de ataque.`
          }
        ]
      },
      {
        name: SKILL_LIST.MISTICISMO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.INTELIGENCIA),
        trained: true,
        penalty: false,
        description: 'Esta perícia envolve o conhecimento de magias, itens mágicos e fenômenos sobrenaturais.',
        abilities: [
          {
            name: 'Detectar Magia',
            cd: 15,
            description: `Como uma ação
            completa, você detecta a presença e intensidade de
            auras mágicas (magias ativas e itens mágicos) em
            alcance curto. A intensidade de uma aura mágica
            depende do círculo da magia ou categoria do item
            mágico. Magias de 1º e 2º círculos e itens mágicos
            menores geram uma aura tênue, magias de 3º e 4º
            círculos e itens mágicos médios geram uma aura
            moderada e magias de 5º círculo e itens mágicos
            maiores geram uma aura poderosa. Magias lançadas
            por um deus maior e artefatos geram uma aura
            avassaladora. Caso a aura mágica esteja atrás de
            uma barreira física, você sofre uma penalidade em
            seu teste (–5 para madeira ou pedra, –10 para ferro
            ou chumbo).`
          },
          {
            name: 'Identificar Criatura',
            description: `Com uma ação completa, você pode
            identificar uma criatura mágica (construtos, dragões,
            fadas, mortos-vivos etc.), assim como seus poderes
            e fraquezas. Se passar, lembra uma característica
            da criatura, como um poder ou vulnerabilidade.
            Para cada 5 pontos pelos quais o resultado do teste
            superar a CD, você lembra outra característica. Se
            falhar por 5 ou mais, tira uma conclusão errada (por
            exemplo, acreditar que uma criatura é vulnerável a
            fogo, quando na verdade é vulnerável a frio). CD do
            teste é igual a 15 + ND da criatura.`
          },
          {
            name: 'Identificar Item Mágico',
            description: `Você pode
            gastar uma hora para estudar um item mágico e
            identificar seus poderes, incluindo como ativá-lo
            e quantos PM restam (se for o caso). A CD é 20
            para itens mágicos menores, 25 para médios e 30
            para itens mágicos maiores. Você pode sofrer uma
            penalidade de –10 no teste para diminuir o tempo
            para uma ação completa.`
          },
          {
            name: 'Identificar Magia',
            description: `Quando alguém lança uma magia,
            você pode adivinhar qual é através de seus gestos e
            palavras. Este uso é uma reação. CD é igual a 15 +
            custo em PM da magia.`
          },
          {
            name: 'Informação',
            description: `Você pode responder dúvidas
            relativas a magias, itens mágicos, fenômenos sobrenaturais,
            runas, profecias, planos de existência etc.
            A CD é 10 para questões simples, 20 para questões
            complexas e 30 para mistérios e enigmas.`
          },
          {
            name: 'Lançar Magia de Armadura',
            description: `Lançar uma magia
            arcana usando armadura exige um teste. Esse teste
            sofre penalidade de armadura. Se falhar, a magia não
            funciona, mas gasta pontos de mana mesmo assim. CD é
            igual a 20 + custo em PM da magia.`
          }
        ]
      },
      {
        name: SKILL_LIST.NOBREZA,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.INTELIGENCIA),
        trained: true,
        penalty: false,
        description: 'Você recebeu a educação de um nobre. Sabe desde supervisionar uma colheita a se portar em um baile.',
        abilities: [
          {
            name: 'Etiqueta',
            cd: 15,
            description: 'Você sabe se portar como um nobre, ficando à vontade em ambientes aristocráticos.'
          },
          {
            name: 'Informação',
            description: `Você responde dúvidas relativas a
            leis, tradições, linhagens e heráldica. A CD é 10 para
            questões simples, 20 para questões complexas e 30
            para mistérios e enigmas.`
          }
        ]
      },
      {
        name: SKILL_LIST.OFICIO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.INTELIGENCIA),
        trained: true,
        penalty: false,
        description: `Ofício na verdade são várias perícias diferentes.
        Cada uma permite fabricar itens de uma categoria.
        • Armeiro. Armas, armaduras e escudos.
        • Artesanato. Itens gerais.
        • Alquimia. Itens da categoria Alquimia.
        • Alfaiate. Itens da categoria Vestuário.
        • Culinária. Itens da categoria Alimentação.
        Você pode inventar outros tipos de Ofício, como
        alvenaria, carpintaria, joalheria... Isso inclui profissões
        (fazendeiro, pescador, estalajadeiro, escriba...) e artes
        (escultura, pintura...). Nesses casos, converse com o
        mestre para determinar que usos a perícia terá.`,
        abilities: [
          {
            name: 'Consertar',
            description: `Reparar um item destruído tem a
            mesma CD para fabricá-lo. Cada tentativa consome
            uma hora de trabalho e um sexto do preço original
            do item. Em caso de falha, o tempo e o dinheiro são
            perdidos (mas você pode tentar novamente).`
          },
          {
            name: 'Fabricar',
            description: `Você produz um item gastando
            matéria-prima e tempo de trabalho. A matéria-prima
            custa um terço do preço do item (veja o Capítulo
            3: Equipamento). O tempo de trabalho depende
            do preço do item: um dia para até T$ 10, uma semana
            para até T$ 100, um mês para até T$ 1.000 e três
            meses para mais de T$ 1.000. No fim do período, faça
            um teste de Ofício. Se passar, você produz o item. Se
            falhar, não produz o item, mas pode tentar de novo
            gastando mais um dia. Se falhar por 5 ou mais, você
            estraga a matéria-prima.
            A CD depende do item. Itens simples (tigela de
            barro, jarro, arma simples, armadura leve, escudos...)
            têm CD 15. Itens complexos (fechadura, sino, arma
            marcial, armadura pesada...) têm CD 20. A CD para
            itens de alquimia, alimentação e vestuário é indicada
            após a descrição do item.
            Você pode sofrer uma penalidade de –5 no teste
            para fabricar o item em uma categoria de tempo
            menor (uma hora para itens de até T$ 10, um dia
            para itens de até T$ 100 etc.).`
          },
          {
            name: 'Identificar',
            description: `Você pode identificar um item ligado
            a seu Ofício. A CD é 10 para itens comuns e 20
            para itens raros ou exóticos. Se passar, você descobre
            as propriedades do item e seu preço.`
          },
          {
            name: 'Sustento',
            cd: 15,
            description: `Com uma semana de trabalho
            e um teste de Ofício, você ganha T$ 1, mais T$ 1
            por ponto que seu teste exceder a CD. Por exemplo,
            com um resultado 20, ganha T$ 6 pela semana de
            trabalho. Trabalhadores sem treinamento usam testes
            de atributo para susteto. De acordo com o mestre,
            outras perícias podem ser usadas para sustento, como
            Adestramento, Cura ou Sobrevivência.
            Esta perícia exige um kit de ofício. Sem ele, você
            sofre –5 no teste.`
          }
        ]
      },
      {
        name: SKILL_LIST.PERCEPCAO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.SABEDORIA),
        trained: false,
        penalty: false,
        description: 'Você nota coisas usando os sentidos.',
        abilities: [
          {
            name: 'Observar',
            description: `Você pode notar coisas escondidas.
            O teste é oposto à Furtividade do personagem
            tentando não ser visto. Às vezes o alvo não está se
            escondendo intencionalmente, mas ainda assim
            exige um teste de Percepção para ser notado. Nesses
            casos a dificuldade varia de 5 (uma pessoa em uma
            praça com pouco movimento) até 20 (um soldado
            específico em meio a uma batalha). Você também
            pode perceber disfarces e falsificações (veja a perícia
            Enganação) e ler lábios (CD 20).`
          },
          {
            name: 'Ouvir',
            description: `Você pode escutar barulhos sutis. Uma
            conversa casual próxima tem CD 0 — ou seja, a
            menos que exista alguma penalidade, você passa
            automaticamente. Ouvir pessoas sussurrando tem
            CD 15. Ouvir do outro lado de uma porta aumenta a
            CD em +5. Você pode fazer testes de Percepção para
            ouvir mesmo que esteja dormindo, mas sofre uma
            penalidade de –10; um sucesso faz você acordar.
            Perceber criaturas que não possam ser vistas tem
            CD 20, ou +10 no teste de Furtividade da criatura, o
            que for maior. Mesmo que você passe no teste, ainda
            sofre penalidades normais por lutar sem ver o inimigo.`
          }
        ]
      },
      {
        name: SKILL_LIST.PILOTAGEM,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
        trained: true,
        penalty: false,
        description: 'Você sabe operar veículos como carroças, barcos e balões.',
        abilities: [
          {
            name: 'Conduzir',
            description: `Conduzir um veículo exige uma
            ação de movimento e um teste de Pilotagem por
            turno. A CD é 15 para condições boas (uma estrada,
            para veículos terrestres; clima tranquilo, para veículos
            aquáticos ou aéreos), 20 para condições ruins
            (terreno liso, chuva ou ventania) e 25 para condições
            terríveis (terreno com obstáculos, tempestade).`
          }
        ]
      },
      {
        name: SKILL_LIST.PONTARIA,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
        trained: false,
        penalty: false,
        description: 'Esta perícia mede sua capacidade de mira, seja com armas de arremesso, seja com armas de disparo.',
        abilities: [
          {
            name: 'Ataque a Distância',
            description: `Para fazer um ataque
            à distância você faz um teste de Pontaria. A CD é a
            Defesa do alvo. Se você acertar, causa dano de acordo
            com a arma utilizada. Veja o Capítulo 5: Jogando
            para os modificadores aplicáveis a testes de ataque.`
          }
        ]
      },
      {
        name: SKILL_LIST.REFLEXOS,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.DESTREZA),
        trained: false,
        penalty: false,
        description: 'Esta perícia mede sua capacidade de evitar ameaças que exigem reação rápida.',
        abilities: [
          {
            name: 'Evitar Finta',
            description: `Quando um oponente finta em
            combate, você faz um teste de Reflexos oposto pelo
            teste de Enganação dele. Se você passar, a finta falha.`
          },
          {
            name: 'Resistência',
            description: `Você usa Reflexos para resistir a
            efeitos súbitos e de área. A CD é determinada pelo
            efeito ao qual você está resistindo.`
          }
        ]
      },
      {
        name: SKILL_LIST.RELIGIAO,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.SABEDORIA),
        trained: true,
        penalty: false,
        description: 'Você possui conhecimento sobre os deuses e as religiões de Arton.',
        abilities: [
          {
            name: 'Identificar Criatura',
            description: `Com uma ação completa, você pode
            identificar uma criatura divina (anjos, demônios,
            mortos-vivos etc.). Veja a perícia Misticismo.
            CD 15 + ND da criatura.`
          },
          {
            name: 'Identificar Item Mágico',
            description: 'Você pode identificar um item mágico divino. Veja a perícia Misticismo.'
          },
          {
            name: 'Informação',
            description: `Você pode responder dúvidas
            relativas a deuses, profecias, planos de existência etc.
            A CD é 10 para questões simples, 20 para questões
            complexas e 30 para mistérios e enigmas.`
          },
          {
            name: 'Rito',
            cd: 20,
            description: `Você realiza uma cerimônia
            religiosa, como um batizado, casamento ou funeral.
            Isso inclui a cerimônia de penitência para redimir
            um devoto que tenha descumprido as Obrigações
            & Restrições de sua divindade. Uma cerimônia de
            penitência exige um sacrifício de T$ 100 por nível
            de personagem do devoto ou a realização de uma
            missão sagrada, de acordo com o mestre.`
          }
        ]
      },
      {
        name: SKILL_LIST.SOBREVIVENCIA,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.SABEDORIA),
        trained: false,
        penalty: false,
        description: 'Você pode se guiar nos ermos e reconhecer e evitar perigos da natureza.',
        abilities: [
          {
            name: 'Acampamento',
            description: `Você pode conseguir abrigo e
            alimento nos ermos, caçando, pescando, colhendo
            frutos etc. A CD depende do tipo de terreno: 15
            para planícies e colinas, 20 para florestas e pântanos,
            25 para desertos ou montanhas e 30 para regiões
            planares perigosas ou áreas de Tormenta. Regiões
            especialmente áridas ou estéreis e clima ruim (neve,
            tempestade etc.) impõem uma penalidade de –5
            (cumulativa). Se passar, você garante recuperação
            normal para você e seu grupo (veja a página 106).`
          },
          {
            name: 'Identificar Criatura',
            description: `Com uma ação completa, você pode
            identificar um animal. Veja a perícia Misticismo.
            CD 15 + ND da criatura.`
          },
          {
            name: 'Orientar-se',
            description: `Um personagem viajando pelos
            ermos precisa fazer um teste de Sobrevivência por
            dia para avançar. A CD depende do tipo de terreno
            (veja acima). Se passar, você avança seu deslocamento
            normal. Se falhar, avança apenas metade. Se falhar
            por 5 ou mais, se perde e não avança pelo dia inteiro.
            Num grupo, um personagem deve ser escolhido
            como guia. Personagens treinados em Sobrevivência
            podem fazer testes para ajudá-lo. Entretanto, se mais
            de um personagem quiser fazer o teste por si só,
            todos deverão rolar os dados em segredo. Os jogadores
            devem decidir qual guia seguir antes de verem
            o resultado! O teste é exigido apenas em jornadas
            perigosas (de acordo com o mestre).`
          },
          {
            name: 'Rastrear',
            description: `Você pode identificar e seguir rastros.
            A CD varia de acordo com o solo: 10 para solo macio
            (neve, lama), 15 para solo padrão (grama, terra), 20
            para solo duro (rocha ou piso de interiores).
            A CD diminui em –2 se as criaturas são Grandes,
            em –5 se são Enormes e em –10 se são Colossais.
            Também diminui em –1 para cada três criaturas no
            grupo sendo seguido. Por outro lado, aumenta em
            +2 se as criaturas são Pequenas e em +5 se são Minúsculas.
            Também aumenta em +5 em visibilidade
            precária (noite, chuva, neblina). Você precisa fazer
            um teste para encontrar os rastros e mais um para
            cada dia de perseguição. Enquanto rastreia, seu
            deslocamento é reduzido à metade.
            Se falhar, você pode tentar novamente gastando
            mais um dia. Porém, a cada dia desde a criação dos
            rastros, a CD aumenta em +1. Este uso só pode ser
            tentado se você é treinado em Sobrevivência.`
          }
        ]
      },
      {
        name: SKILL_LIST.VONTADE,
        attribute: this.attributeService.getAttributeByName(ATTRIBUTE_LIST.SABEDORIA),
        trained: false,
        penalty: false,
        description: 'Esta perícia envolve sua concentração e força de vontade.',
        abilities: [
          {
            name: 'Concentração',
            description: `Quando lança uma magia em
            condições adversas, ou quando sofre dano durante a
            execução de uma magia, você precisa fazer um teste
            de Vontade. Veja o Capítulo 4: Magia.`
          },
          {
            name: 'Resistência',
            description: `Você usa Vontade para resistir
            a efeitos mentais, como encantamentos e ilusões. A
            CD é determinada pelo efeito.`
          }
        ]
      }
    ]
  }

  getSkillList ():ISkill[] {
    return this.skills
  }

  getSkillByName (name:SKILL_LIST):ISkill | undefined {
    return this.skills ? this.skills.find((skill) => skill.name === name) : undefined
  }
}
