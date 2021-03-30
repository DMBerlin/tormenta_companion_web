import BonusAttributeSelector from 'src/components/characters/builder/BonusAttributeSelector.vue'
import { IRace } from 'src/types/races/race-select.types'
import { IPlaybookModule } from '.'

export interface IPlaybookState {
  races: IRace[]
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
            componentResolver: BonusAttributeSelector,
            props: {
              attributes: ['Força', 'Constituição', 'Destreza', 'Inteligência', 'Sabedoria', 'Carisma'],
              maxValues: 3,
              bonus: new Map(Object.entries({ Força: 2, Constituição: 2, Destreza: 2, Inteligência: 2, Sabedoria: 2, Carisma: 2 }))
            }
          },
          {
            title: 'Versátil',
            description: `Você se torna treinado em duas perícias
            a sua escolha (não precisam ser da sua classe).
            Você pode trocar uma dessas perícias por um poder
            geral a sua escolha.`,
            componentResolver: null
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
            componentResolver: null
          },
          {
            title: 'Conhecimento das Rochas',
            description: `Você
            recebe visão no escuro e +2 em testes de
            Percepção e Sobrevivência realizados no
            subterrâneo.`,
            componentResolver: null
          },
          {
            title: 'Devagar e Sempre',
            description: `Seu deslocamento é 6m (em
              vez de 9m). Porém, seu
              deslocamento não é reduzido
              por uso de armadura
              ou excesso de carga.`,
            componentResolver: null
          },
          {
            title: 'Duro como Pedra',
            description: `Você recebe +3 pontos de
            vida no 1º nível e +1 por
            nível seguinte.`,
            componentResolver: null
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
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Dahllan',
        image: <File>require('src/assets/avatars/races/race-avatar-dahllan.jpg'),
        info: `Parte humanas, parte fadas, as dahllan são uma
        raça de mulheres com a seiva de árvores correndo nas
        veias. Falam com os animais, controlam as plantas
        — mas também são ferozes em batalha, retorcendo
        madeira para formar armaduras.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Sabedoria +4, Destreza +2, Inteligência –2.',
            componentResolver: null
          },
          {
            title: 'Armadura de Allihanna',
            description: `Você pode gastar
            uma ação de movimento e 1 PM para transformar
            sua pele em casca de árvore, recebendo +2 na Defesa
            até o fim da cena.`,
            componentResolver: null
          },
          {
            title: 'Empatia Selvagem',
            description: `Você pode se comunicar
            com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento para mudar atitude e
            pedir favores de animais
            (veja Diplomacia, na página 117). Caso receba esta
            habilidade novamente,
            recebe +2 em
            Adestramento.`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Elfo',
        image: <File>require('src/assets/avatars/races/race-avatar-elfos.jpg'),
        info: `Elfos são seres feitos
        para a beleza e para a guerra, tão habilidosos com magia quanto com espadas e arcos. Elegantes, astutos, de vidas quase eternas,
        parecem superiores aos humanos em
        tudo.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Inteligência +4, Destreza +2, Constituição –2.',
            componentResolver: null
          },
          {
            title: 'Graça de Glórienn',
            description: 'Seu deslocamento é 12m (em vez de 9m).',
            componentResolver: null
          },
          {
            title: 'Herança Feérica',
            description: 'Você recebe +1 ponto de mana por nível.',
            componentResolver: null
          },
          {
            title: 'Sentidos Élficos',
            description: `Você
            recebe visão na penumbra e +2 em
            Misticismo e Percepção.`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Goblin',
        image: <File>require('src/assets/avatars/races/race-avatar-goblin.jpg'),
        info: `Estes pequenos seres feiosos conseguiram um
        lugar entre os povos do Reinado. Podem ser encontrados em todas as grandes cidades, muitos vivendo
        na imundície, outros prosperando em carreiras que
        quase ninguém tentaria: espiões, aeronautas, engenhoqueiros. Onde o anão teimoso e o elfo empolado
        falham, o goblin pode dar um jeito. Porque ele não
        tem vergonha. Nem orgulho. Nem bom senso.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Destreza +4, Inteligência +2, Carisma –2.',
            componentResolver: null
          },
          {
            title: 'Engenhoso',
            description: `Você não sofre penalidades em
            testes de perícia por não usar kits. Se usar o kit,
            recebe +2 no teste de perícia.`,
            componentResolver: null
          },
          {
            title: 'Espelunqueiro',
            description: `Você recebe visão no escuro
            e deslocamento de escalada igual ao seu deslocamento terrestre.`,
            componentResolver: null
          },
          {
            title: 'Peste Esguia',
            description: `Seu tamanho é Pequeno (veja a
              página 106), mas seu deslocamento se mantém 9m.
              Apesar de pequenos, goblins são rápidos.`,
            componentResolver: null
          },
          {
            title: 'Rato das Ruas',
            description: `Você recebe +2 em
            Fortitude e sua
            recuperação
            de PV e PM
            nunca é
            inferior ao
            seu nível.`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Lefou',
        image: <File>require('src/assets/avatars/races/race-avatar-lefou.jpg'),
        info: `Com a influência macabra da Tormenta permeando cada vez mais o mundo, surgiram os lefou.
        Estes meios-demônios de aparência grotesca passaram a nascer em famílias de outras raças, sendo logo
        sacrificados ou expulsos. Entre os que escapam, por
        sua facilidade em manifestar poderes aberrantes,
        muitos escolhem abraçar o mal, enquanto outros
        decidem combatê-lo.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: '+2 em Três Atributos Diferentes (exceto Carisma), Carisma –2.',
            componentResolver: null
          },
          {
            title: 'Cria da Tormenta',
            description: `Você é uma
            criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e
            pela Tormenta.`,
            componentResolver: null
          },
          {
            title: 'Deformidade',
            description: `Todo
            lefou possui defeitos físicos que, embora desagradáveis, conferem certas vantagens. Você recebe +2 em
            duas perícias a sua escolha. Cada um desses bônus
            conta como um poder da
            Tormenta. Você pode trocar um desses bônus por
            um poder da Tormenta a
            sua escolha. Esta habilidade não causa perda
            de Carisma.`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Minotauro',
        image: <File>require('src/assets/avatars/races/race-avatar-minotauro.jpg'),
        info: `Povo guerreiro, orgulhoso e poderoso,
        criadores de uma civilização avançada,
        com a missão sagrada de proteger e governar os fracos — ou assim se enxergavam. Em seus tempos áureos,
        tomaram grande parte de Arton. Hoje, após a morte de sua divindade e a decadência de seu Império, os
        minotauros lutam para recuperar a glória perdida ou
        encontrar um novo papel no mundo.
        `,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Força +4, Constituição +2, Sabedoria –2.',
            componentResolver: null
          },
          {
            title: 'Chifres',
            description: `Você possui uma arma natural de
            chifres (dano 1d6, crítico x2, perfuração). Quando
            usa a ação atacar, pode gastar 1 PM para fazer um
            ataque corpo a corpo extra com os chifres.`,
            componentResolver: null
          },
          {
            title: 'Couro Rígido',
            description: 'Sua pele é dura como a de um touro. Você recebe +1 na Defesa.',
            componentResolver: null
          },
          {
            title: 'Faro',
            description: `Você tem olfato apurado. Você não
            fica desprevenido e sofre apenas camuflagem (em vez de camuflagem total) contra inimigos em alcance curto
            que não possa ver.`,
            componentResolver: null
          },
          {
            title: 'Medo de Altura',
            description: `Se estiver adjacente a
            uma queda de 3m ou mais
            de altura (como um buraco ou
            penhasco), você fica abalado.`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Qareen',
        image: <File>require('src/assets/avatars/races/race-avatar-qareen.jpg'),
        info: `Descendentes de poderosos gênios, os qareen são
        otimistas, generosos e prestativos, sempre ansiosos
        por ajudar. Consideram-se abençoados pela Deusa da
        Magia, exibindo como evidência a marca de Wynna
        em seus corpos. Sua magia é mais poderosa quando
        usada para realizar desejos de outros.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Carisma +4, Inteligência +2, Sabedoria –2.',
            componentResolver: null
          },
          {
            title: 'Desejo',
            description: `Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia
            diminui em –1 PM. Fazer um desejo ao qareen é uma
            ação livre.`,
            componentResolver: null
          },
          {
            title: 'Resistência Elemental',
            description: `Conforme sua ascendência, você recebe resistência 10 a um tipo de
            dano. Escolha uma: frio (qareen da água), eletricidade (do ar), fogo (do fogo), ácido (da terra), luz (da
            luz) ou trevas (qareen das trevas).`,
            componentResolver: null
          },
          {
            title: 'Tatuagem Mística',
            description: `Você
            pode lançar uma magia de 1º
            círculo a sua escolha (atributo-chave Carisma). Caso
            aprenda novamente essa
            magia, seu custo diminui em –1 PM.`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Golem',
        image: <File>require('src/assets/avatars/races/race-avatar-golem.jpg'),
        info: `Diz-se que estes seres são apenas construtos
        sem vida, criados não pelos deuses, mas por mortais.
        No entanto, são movidos por forças vivas — espíritos elementais selvagens, capturados e lacrados por
        meios mágicos em corpos de pedra e metal. Muitos
        conformam-se com seus papéis como trabalhadores
        e soldados, enquanto outros demonstram alta inteligência, personalidade e iniciativa. Podem fazer tudo
        que outras raças fazem, até mesmo conjurar magias
        arcanas ou divinas. Será que têm alma? Será que
        encontrarão os deuses quando chegar sua hora?`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Força +4, Constituição +2, Carisma –2.',
            componentResolver: null
          },
          {
            title: 'Canalizar Reparos',
            description: `Como uma
            ação completa, você pode gastar pontos
            de mana para recuperar pontos de vida, à
            taxa de 5 PV por PM`,
            componentResolver: null
          },
          {
            title: 'Criatura Artificial',
            description: `Você é uma criatura
            do tipo construto. Recebe visão no escuro e imunidade a doenças, fadiga, sangramento, sono e venenos. Além disso, não precisa respirar, alimentar-se
            ou dormir. Por fim, não recupera pontos de vida
            por descanso e não se beneficia de habilidades de
            cura e itens ingeríveis (comidas, poções etc.). Você
            precisa ficar inerte por oito horas por dia para
            recarregar sua fonte de energia. Se fizer isso,
            recupera PM por descanso em condições normais (golens não são afetados por condições
            boas ou ruins de descanso).`,
            componentResolver: null
          },
          {
            title: 'Espírito Elemental',
            description: `Escolha entre
            água (frio), ar (eletricidade), fogo (fogo) e
            terra (ácido). Você é imune a dano causado
            por essa energia. Se fosse sofrer dano mágico
            dessa energia, em vez disso cura PV em quantidade igual à metade do dano. Por exemplo, se um
            golem com espírito elemental do fogo é atingido
            por uma Bola de Fogo que causa 30 pontos de dano,
            em vez de sofrer esse dano, ele recupera 15 PV`,
            componentResolver: null
          },
          {
            title: 'Sem Origem',
            description: `Como uma criatura artificial,
            você já foi construído “pronto”. Não teve uma
            infância — portanto, não tem direito a escolher
            uma origem e receber benefícios por ela.`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Hynne',
        image: <File>require('src/assets/avatars/races/race-avatar-hynne.jpg'),
        info: `Também conhecidos como halflings ou “pequeninos”, os hynne são apreciadores de boa comida
        e casas aconchegantes, raras vezes escolhendo sair
        pelo mundo em aventuras perigosas. Quando decidem fazê-lo, contudo, recorrem à agilidade e encanto naturais para ludibriar os inimigos — mais de um
        taverneiro ou miliciano deixou-se enganar por suas
        mãos ligeiras e sorrisos inocentes. Foram recentemente forçados a fugir de seu antigo reino natal, sendo então acolhidos pelas Repúblicas Livres de Sambúrdia, onde cultivam
        ervas e especiarias valiosas. Para espanto de todos, também se tornaram astutos mercadores,
        muitos ascendendo a príncipes mercantes.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Destreza +4, Carisma +2, Força –2.',
            componentResolver: null
          },
          {
            title: 'Arremessador',
            description: `Quando faz um ataque à distância com uma funda ou uma arma de arremesso,
            seu dano aumenta em um passo.`,
            componentResolver: null
          },
          {
            title: 'Pequeno e Rechonchudo',
            description: `Seu tamanho é
            Pequeno (veja a página 106) e seu deslocamento é
            6m. Você recebe +2 em Enganação e usa o modificador de Destreza para Atletismo (em vez de Força).`,
            componentResolver: null
          },
          {
            title: 'Sorte Salvadora',
            description: `Quando faz um teste de
            resistência, você pode gastar 1 PM para rolar este
            teste novamente.`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Kliren',
        image: <File>require('src/assets/avatars/races/race-avatar-kliren.jpg'),
        info: `Estes visitantes de outro mundo seriam uma
        combinação entre humanos e gnomos — mas, afinal,
        o que são gnomos? São uma raça que talvez existisse em Arton, não fosse o envolvimento
        criminoso de seu deus Tilliann na criação da própria
        Tormenta. Seja como for, os kliren somam a alta inteligência gnômica e a curiosidade humana, resultando
        em seres de extrema engenhosidade, criatividade e
        talento com aparatos mecânicos. Seriam capazes de
        grandes feitos, talvez até dominar Arton, não fossem
        a impulsividade e imprudência que por vezes abreviam suas vidas...`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Inteligência +4, Carisma +2, Força –2.',
            componentResolver: null
          },
          {
            title: 'Híbrido',
            description: `Sua natureza multifacetada fez com
            que você aprendesse conhecimentos variados. Você
            se torna treinado em uma perícia a sua escolha (não
            precisa ser da sua classe).`,
            componentResolver: null
          },
          {
            title: 'Lógica Gnômica',
            description: `Quando faz um teste de
            atributo ou perícia, você pode gastar 2 PM para substituir o modificador de atributo utilizado por Inteligência. Por exemplo, ao fazer um teste de Atletismo
            você pode gastar 2 PM para usar seu modificador de
            Inteligência em vez do modificador de Força.`,
            componentResolver: null
          },
          {
            title: 'Ossos Frágeis',
            description: `Você sofre 1 ponto de
            dano adicional por dado de dano de impacto.
            Por exemplo, se for atingido
            por uma clava (dano 1d6), sofre 1d6+1 pontos de dano. Se
            cair de 3m de altura (dano 2d6),
            sofre 2d6+2 pontos de dano.`,
            componentResolver: null
          },
          {
            title: 'Vanguardista',
            description: 'Você recebe proficiência em armas de fogo e +2 em testes de Ofício (um qualquer, a sua escolha).',
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Medusa',
        image: <File>require('src/assets/avatars/races/race-avatar-medusa.jpg'),
        info: `Ainda que estas criaturas reclusas
        sejam famosas por transformar suas
        vítimas em pedra com um simples
        olhar, apenas as mais antigas e
        poderosas o fazem. Jovens
        medusas por vezes rejeitam a solidão e
        crueldade racial,
        aventurando-se
        no Reinado, até mesmo fazendo amigos
        ou integrando equipes de heróis. Conseguem se fazer passar por mulheres humanas, quando escondem o cabelo feito de
        serpentes. O único povo que não
        teme medusas são os anões, que
        as consideram belas musas.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Destreza +4, Carisma +2.',
            componentResolver: null
          },
          {
            title: 'Cria de Megalokk',
            description: `Você é uma criatura do
            tipo monstro e recebe visão no escuro.`,
            componentResolver: null
          },
          {
            title: 'Olhar Atordoante',
            description: `Você pode gastar uma
            ação de movimento e 1 PM para forçar uma criatura
            em alcance curto a fazer um teste de Fortitude (CD
            Car). Se a criatura falhar, fica atordoada por 1 rodada.
            Se passar, fica imune a esta habilidade por um dia.`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Osteon',
        image: <File>require('src/assets/avatars/races/race-avatar-osteon.jpg'),
        info: `Esqueletos sempre foram temidos como monstros profanos, movidos por puro rancor pelos vivos. Isso mudou; conhecidos coletivamente
        como osteon, estes esqueletos demonstram a
        mesma inteligência e consciência das raças vivas, sendo capazes de adotar quaisquer de suas
        profissões e devoções. Alguns atribuem seu
        surgimento à queda de Ragnar, antigo Deus
        da Morte; outros dizem ser consequência da
        ascensão de Ferren Asloth como um poderoso lich, transformando a nação de Aslothia
        em um reino necromante.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: '+2 em Três Atributos Diferentes (exceto Constituição), Constituição –2.',
            componentResolver: null
          },
          {
            title: 'Armadura Óssea',
            description: 'Você recebe resistência a corte, frio e perfuração 5.',
            componentResolver: null
          },
          {
            title: 'Memória Póstuma',
            description: `Você se torna
            treinado em uma perícia (não precisa ser
            da sua classe) ou recebe um poder geral a
            sua escolha. Como alternativa, você pode ser
            um osteon de outra raça humanoide que não
            humano. Neste caso, você ganha uma habilidade dessa raça a sua escolha. Se a raça era
            de tamanho diferente de Médio, você também possui sua categoria de tamanho.`,
            componentResolver: null
          },
          {
            title: 'Natureza Esquelética',
            description: `Você é
            uma criatura do tipo morto-vivo. Recebe visão no
            escuro e imunidade a doenças, fadiga, sangramento, sono e venenos. Além disso,
            não precisa respirar, alimentar-se ou
            dormir. Por fim, habilidades mágicas
            de cura causam dano a você e você
            não se beneficia de itens ingeríveis
            (comidas, poções etc.), mas dano de
            trevas recupera seus PV.`,
            componentResolver: null
          },
          {
            title: 'Preço da Não Vida',
            description: `Você precisa passar oito
            horas sob a luz de estrelas ou no subterrâneo. Se
            fizer isso, recupera PV e PM por descanso em condições normais (osteon não são afetados por condições
            boas ou ruins de descanso). Caso contrário, sofre os
            efeitos de fome.`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Sereia',
        image: <File>require('src/assets/avatars/races/race-avatar-sereia.jpg'),
        info: `Sendo chamadas sereias quando femininas e
        tritões quando masculinos, os membros desta raça
        de torso humanoide e corpo de peixe podem adotar
        forma bípede para caminhar em terras emersas —
        algo que têm feito com cada vez mais frequência.
        Enquanto algumas sereias temem ou desprezam
        os humanos, outras enxergam Arton como um
        mundo misterioso, exótico, cheio
        de oportunidades e aventuras.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: '+2 em Três Atributos Diferentes.',
            componentResolver: null
          },
          {
            title: 'Canção dos Mares',
            description: `Você pode lançar duas
            das magias a seguir: Amedrontar, Comando, Despedaçar,
            Enfeitiçar, Hipnotismo ou Sono (atributo-chave Carisma). Caso aprenda novamente uma dessas magias,
            seu custo diminui em –1 PM.`,
            componentResolver: null
          },
          {
            title: 'Mestre do Tridente',
            description: `Para você, o tridente é
            uma arma simples. Além disso, você recebe +2 em
            rolagens de dano com azagaias, lanças e tridentes.`,
            componentResolver: null
          },
          {
            title: 'Transformção Anfíbia',
            description: `Você pode respirar
            debaixo d’água e possui uma cauda que fornece deslocamento de natação 12m. Quando fora d’água, sua
            cauda desaparece e dá lugar a pernas (deslocamento
            9m). Se permanecer mais de um dia sem contato com
            água, você não recupera PM com descanso até voltar
            para a água (ou, pelo menos, tomar um bom banho!).`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Sílfide',
        image: <File>require('src/assets/avatars/races/race-avatar-silfide.jpg'),
        info: `As mais numerosas fadas em Arton são estas
        criaturinhas (alguns diriam “pestes”) esvoaçantes,
        com suas delicadas asas de inseto e grandes olhos
        escuros. Curiosas e brincalhonas, parecem sempre
        à procura de alguma diversão, levando todos a subestimá-las quando o assunto exige seriedade. É verdade que seu entusiasmo e inocência podem causar
        problemas. Também é verdade que gostam de usar
        magias e ilusões para pregar peças. Pensando bem,
        ninguém até hoje encontrou um bom motivo para
        aceitar uma sílfide em um grupo de aventureiros...`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Carisma +4, Destreza +2, Força –4.',
            componentResolver: null
          },
          {
            title: 'Asas de Borboleta',
            description: `Seu tamanho é Minúsculo. Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que
              esteja inconsciente). Você pode gastar 1 PM por rodada para voar com deslocamento de 12m.`,
            componentResolver: null
          },
          {
            title: 'Magia de Fadas',
            description: `Você
            pode lançar duas das magias a seguir (todas atributo-chave Carisma): Criar
            Ilusão, Enfeitiçar, Luz (como uma magia arcana) e Sono. Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.`,
            componentResolver: null
          }
        ],
        dialog: {
          visible: false
        }
      },
      {
        name: 'Suraggel',
        image: <File>require('src/assets/avatars/races/race-avatar-suraggel.jpg'),
        subrace: [
          {
            name: 'Aggelus',
            image: <File>require('src/assets/avatars/races/race-avatar-suraggel.jpg'),
            info: `Descendentes de extraplanares divinos,
            esta raça é formada por seres com traços
            angelicais ou demoníacos — ou ambos.
            Por serem ligados às forças opostas da
            luz e trevas, suraggel têm traços diferentes quando orientados para seu
            lado celestial, sendo então conhecidos como aggelus; ou para o lado
            abissal, assim sendo chamados sulfure. Sua natureza em geral combina com a ascendência, lembrando habitantes dos Mundos dos Deuses, mas
            eles também podem ser surpreendentes
            e contraditórios: não se espante muito ao
            conhecer um aggelus ladino ou um sulfure paladino.`,
            traits: [
              {
                title: 'Atributos Raciais',
                description: 'Sabedoria +4, Carisma +2, Destreza +4.',
                componentResolver: null
              },
              {
                title: 'Herança Divina',
                description: `Você é uma criatura do tipo
                espírito e recebe visão no escuro.`,
                componentResolver: null
              },
              {
                title: 'Luz Sagrada',
                description: `Você recebe +2 em
                Diplomacia e Intuição. Além disso, pode lançar Luz
                (como uma magia divina; atributo-chave Carisma).
                Caso aprenda novamente essa magia, o custo para
                lançá-la diminui em –1 PM.`,
                componentResolver: null
              }
            ],
            dialog: {
              visible: false
            }
          },
          {
            name: 'Sulfure',
            image: <File>require('src/assets/avatars/races/race-avatar-suraggel.jpg'),
            info: `Descendentes de extraplanares divinos,
            esta raça é formada por seres com traços
            angelicais ou demoníacos — ou ambos.
            Por serem ligados às forças opostas da
            luz e trevas, suraggel têm traços diferentes quando orientados para seu
            lado celestial, sendo então conhecidos como aggelus; ou para o lado
            abissal, assim sendo chamados sulfure. Sua natureza em geral combina com a ascendência, lembrando habitantes dos Mundos dos Deuses, mas
            eles também podem ser surpreendentes
            e contraditórios: não se espante muito ao
            conhecer um aggelus ladino ou um sulfure paladino.`,
            traits: [
              {
                title: 'Atributos Raciais',
                description: 'Sabedoria +4, Destreza +4, Inteligência +2.',
                componentResolver: null
              },
              {
                title: 'Herança Divina',
                description: `Você é uma criatura do tipo
                espírito e recebe visão no escuro.`,
                componentResolver: null
              },
              {
                title: 'Sombras Profanas',
                description: `Você recebe
                +2 em Enganação e Furtividade. Além disso, pode
                lançar Escuridão (como uma magia divina; atributochave Inteligência). Caso aprenda novamente essa
                magia, o custo para lançá-la diminui em –1 PM`,
                componentResolver: null
              }
            ],
            dialog: {
              visible: false
            }
          }
        ]
      },
      {
        name: 'Trogg',
        image: <File>require('src/assets/avatars/races/race-avatar-trogg.jpg'),
        info: `Trogloditas (ou “trogs”) são homens-
        -lagarto primitivos e subterrâneos que
        odeiam todos os outros seres — especialmente os que sabem forjar
        aço, aquilo que mais cobiçam.
        Suas tribos tramam incursões
        contra povoados humanos, fazem emboscadas em estradas,
        atacam exploradores em masmorras. Uns poucos, no entanto, divergem da crueldade e selvageria inerentes à raça. Abandonam a tribo
        ou são expulsos. Escolhem caminhos surpreendentes, inesperados; tornam-se druidas,
        ou clérigos, ou bucaneiros, ou
        sabe-se lá o que mais. Enfim,
        acabam aceitos como colegas por
        aventureiros tão estranhos e deslocados
        quanto eles próprios.`,
        traits: [
          {
            title: 'Atributos Raciais',
            description: 'Constituição +4, Força +2, Inteligência –2.',
            componentResolver: null
          },
          {
            title: 'Mau Cheiro',
            description: `Você pode gastar uma ação padrão e 2 PM para expelir um gás fétido. Todas as
            criaturas (exceto trogs) em alcance curto devem
            passar em um teste de Fortitude contra veneno (CD
            Con) ou ficarão enjoadas durante 1d6 rodadas. Uma
            criatura que passe no teste de resistência fica imune
            a esta habilidade por um dia.`,
            componentResolver: null
          },
          {
            title: 'Mordida',
            description: `Você possui uma arma natural de
            mordida (dano 1d6, crítico x2, perfuração). Quando
            usa a ação atacar, pode gastar 1 PM para fazer um
            ataque corpo a corpo extra com a mordida.`,
            componentResolver: null
          },
          {
            title: 'Reptiliano',
            description: `Você é uma criatura do tipo
            monstro e recebe visão no escuro, +1 na Defesa e,
            se estiver sem armadura ou roupas pesadas, +5
            em Furtividade.`,
            componentResolver: null
          },
          {
            title: 'Sangue Frio',
            description: `Você sofre 1 ponto de
            dano adicional por dado de
            dano de frio.`,
            componentResolver: null
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
