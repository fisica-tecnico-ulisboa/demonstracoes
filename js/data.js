// data.js
// The "database" of the site: one JS object per experiment.
// experiencias.html reads this to build the topic list.
// experiencia.html reads this to render a single experiment's page.
//
// Fields left as "" are simply not filled in yet (most experiment pages on
// the real site have this detail — we can add it here whenever we have it,
// without touching any HTML).

const EXPERIMENTS = [
  // --- Dimensões, grandezas e unidades em Física ---
  {
    id: "analise-dimensional-periodo-de-um-pendulo", topic: "Dimensões, grandezas e unidades em Física", subtopic: "Análise dimensional", name: "Análise dimensional: período de um pêndulo",
    objetivo: "Compreender a importância da análise dimensional na abordagem a uma situação do mundo físico. Usar a análise dimensional para perceber a dependência do período de oscilação de um pêndulo relativamente ao comprimento do fio que o suporta.",
    equipamento: "Pêndulo.",
    procedimento: "Usa-se um fio de prumo como pêndulo. O comprimento do fio faz-se variar. Fazendo variar o comprimento do fio, é possível comparar os períodos de oscilação quando o comprimento do fio varia por um fator de 4."
  },
  {
    id: "medicao-de-grandezas-em-fisica", topic: "Dimensões, grandezas e unidades em Física", subtopic: "Instrumentos de medição", name: "Medição de grandezas em física",
    objetivo: "Analisar vários instrumentos de medição. Comparar cada instrumento de medição com o processo físico usado para medição da grandeza e discutir os erros de medição.",
    equipamento: "Balanças, fita métrica, ampulheta, cronómetro, amperímetro, etc.",
    procedimento: "Demonstra-se a utilização dos vários instrumentos de medição. Devem discutir-se os erros de medição associados a cada instrumento."
  },

  // --- Cinemática ---
  {
    id: "nocao-de-ponto-material", topic: "Cinemática", subtopic: "Conceito de ponto material", name: "Noção de ponto material",
    objetivo: "Compreender a diferença entre a noção de ponto material e a noção de corpo rígido.",
    equipamento: "Bola com densidade uniforme e bola com densidade não uniforme.",
    procedimento: "Nesta demonstração são usadas duas bolas: uma bola com densidade constante (amarela na figura), que pode ser aproximada a um ponto material — quando lhe é aplicada uma força instantânea, a bola desloca-se ao longo de uma trajetória retilínea; e uma bola com densidade não uniforme (verde com pentágonos pretos) que, quando sujeita a uma força, tem movimentos com direções variáveis no tempo."
  },
  {
    id: "queda-de-grave-posicao-velocidade-e-aceleracao", topic: "Cinemática", subtopic: "Movimento a uma dimensão", name: "Bola em queda livre",
    objetivo: "Análise do movimento de uma bola em queda livre.",
    equipamento: "Bola, sensor de movimentos sem fios, computador portátil, protetor do sensor.",
    procedimento: "Uma bola é deixada cair sobre um sensor de movimento. O sensor regista a posição e a velocidade da bola em função do tempo, sendo possível estimar a aceleração. A ligação do sensor a um PC permite a visualização em direto dos resultados, que podem ser projetados na sala."
  },
  { id: "queda-de-graves", topic: "Cinemática", subtopic: "Movimento a duas dimensões: retilíneo", name: "Projéteis", objetivo: "", equipamento: "", procedimento: "" },
  {
    id: "lancamento-de-graves-com-diferentes-componentes-das-velocidades-iniciais", topic: "Cinemática", subtopic: "Movimento a duas dimensões: retilíneo", name: "Tempos de queda de um grave com diferentes velocidades iniciais",
    objetivo: "Demonstrar que são iguais os tempos de queda de dois corpos lançados de uma mesma altura, com iguais componentes da velocidade pelo eixo dos yy mas diferentes velocidades na horizontal — o movimento ao longo de um eixo é independente do movimento ao longo do outro.",
    equipamento: "Lançador de duas esferas em simultâneo, duas esferas metálicas, mesa.",
    procedimento: "Duas esferas são colocadas no lançador. O lançador é colocado sobre uma mesa horizontal, perto da lateral da mesa. Dispara-se o lançador carregando na mola. As esferas são lançadas simultaneamente, sendo que uma delas cai sem velocidade inicial e a outra é lançada com velocidade horizontal. As esferas chegam ao chão ao mesmo tempo."
  },
  {
    id: "tiro-ao-alvo", topic: "Cinemática", subtopic: "Movimento a duas dimensões: retilíneo", name: "Projéteis e tiro ao alvo",
    objetivo: "Análise comparativa do movimento de dois projéteis.",
    equipamento: "Lançador de projéteis, alvo, suporte para alvo, bola.",
    procedimento: "Lançamento de um projétil fazendo pontaria a um alvo fixo, usando a mira para garantir que o alvo está no centro da mira. O sistema assegura que o alvo é deixado cair pela \"dropbox\" no mesmo instante em que o projétil é disparado. Verifica-se que o projétil atinge sempre o alvo em queda, desde que a velocidade inicial seja suficiente para que a bola atinja a distância no chão onde está o alvo."
  },
  {
    id: "velocidade-tangencial-velocidade-angular-e-raio-da-trajetoria", topic: "Cinemática", subtopic: "Movimento a duas dimensões: circular", name: "Velocidade tangencial, velocidade angular e raio da trajetória",
    objetivo: "Discussão de conceitos de velocidade angular e velocidade tangencial no movimento circular e sua relação com o raio da trajetória.",
    equipamento: "Tubo oco, pesos, linha.",
    procedimento: "Faz-se passar uma corda fina pelo interior de um tubo. Prende-se um peso a uma extremidade do fio e outro peso à outra extremidade. Coloque óculos de proteção. Faz-se girar o peso num plano horizontal e verifica-se a variação da velocidade tangencial com o raio da trajetória."
  },
  {
    id: "carro-balistico", topic: "Cinemática", subtopic: "Movimento a duas dimensões: retilíneo / Relatividade de Galileu", name: "Carro balístico",
    objetivo: "Compreender que a análise do movimento de um projétil pode ser separada na análise do movimento em cada uma das dimensões.",
    equipamento: "Carro balístico, calha.",
    procedimento: "O carro balístico é colocado numa calha. Coloca-se uma bola no carro fazendo força para que a bola comprima a mola existente no lançador. Ativa-se o sistema de disparo da bola retardado. Imprime-se velocidade inicial ao carro balístico. Verifica-se que a bola sai do carro balístico mas volta a entrar mais à frente, o que se justifica porque a velocidade horizontal da bola e do carro são iguais."
  },

  // --- Dinâmica - Leis de Newton ---
  { id: "lei-de-hooke", topic: "Dinâmica - Leis de Newton", subtopic: "Lei de Hooke", name: "Lei de Hooke", objetivo: "", equipamento: "", procedimento: "" },
  {
    id: "forca-de-atrito", topic: "Dinâmica - Leis de Newton", subtopic: "Força de atrito", name: "Força de atrito",
    objetivo: "Demonstrar que a força de atrito entre duas superfícies depende das propriedades das superfícies. Alertar para a existência de atrito estático e de atrito cinético (ou dinâmico). Verificar que o valor do coeficiente de atrito estático pode variar entre zero e um valor máximo, dependendo o valor máximo das superfícies em contacto.",
    equipamento: "Bloco de madeira que tem superfícies laterais de materiais diferentes. Tábua de madeira a utilizar como plano inclinado.",
    procedimento: "Colocar o bloco de madeira na extremidade da tábua. Elevar essa extremidade da tábua lentamente até que o bloco de madeira comece a deslizar. Consegue verificar-se que o bloco de madeira começa a deslizar para diferentes ângulos de inclinação da tábua, dependendo da superfície do bloco em contacto com a tábua."
  },
  {
    id: "forca-centriipeta", topic: "Dinâmica - Leis de Newton", subtopic: "Leis do movimento circular", name: "Força centrípeta",
    objetivo: "Demonstração da existência de uma força radial (centrípeta) num movimento circular.",
    equipamento: "Tubo oco, pesos, linha.",
    procedimento: "A corda fina passa pelo interior do tubo, com um peso preso em cada extremidade. Durante a experiência, o utilizador faz girar o peso num plano horizontal enquanto observa como a velocidade tangencial varia com o raio da trajetória. É necessário usar óculos de proteção e garantir que os pesos estão bem fixos à corda."
  },
  {
    id: "pendulo-conico", topic: "Dinâmica - Leis de Newton", subtopic: "Leis do movimento circular / Oscilações livres", name: "Pêndulo cónico",
    objetivo: "Analisar o movimento circular de uma massa suspensa num fio de prumo. Relacionar o período do pêndulo cónico com o valor da aceleração da gravidade.",
    equipamento: "Fio de prumo com uma massa.",
    procedimento: "A demonstração envolve fazer rodar a massa em trajetória circular sobre uma mesa, garantindo que não toque a superfície. Observa-se que diferentes velocidades angulares e tangenciais produzem ângulos variados em relação à vertical. Esta variação angular permite prever mudanças correspondentes na tensão da corda conforme o ângulo se altera."
  },
  {
    id: "calha-com-looping", topic: "Dinâmica - Leis de Newton", subtopic: "Conversão de energias cinética e potencial", name: "Calha com looping",
    objetivo: "Discutir as forças que atuam nas várias etapas do movimento circular da esfera na calha. Destacar o ponto mais alto da trajetória e o ponto mais baixo da trajetória, onde inicia o loop. Discutir a variação da energia potencial e da energia cinética durante o movimento da esfera na calha.",
    equipamento: "Calha com loop e esfera.",
    procedimento: "Uma esfera é lançada ao longo de uma calha. Analisando o movimento da esfera na calha pode verificar-se o seguinte: se a esfera for largada de uma altura igual ao ponto mais alto do loop então a esfera não consegue completar a volta. A esfera deve ser lançada de uma altura igual ou superior a H=5/2 R para conseguir dar a volta completa. A experiência permite discutir as forças que atuam numa esfera durante um movimento circular. Adapta-se também ao estudo da conservação de energia mecânica."
  },
  {
    id: "roldanas", topic: "Dinâmica - Leis de Newton", subtopic: "Roldanas", name: "Roldanas",
    objetivo: "Compreender o funcionamento e as vantagens da utilização de sistemas com roldanas.",
    equipamento: "Roldanas, pesos e suportes para as roldanas.",
    procedimento: "Analisam-se várias montagens com roldanas, incluindo sistemas simples e duplos, que permitem a demonstração do modo de funcionamento de uma roldana e a análise da situação de equilíbrio, bem como a comparação do deslocamento das massas quando se usam várias roldanas."
  },
  {
    id: "acao-reacao", topic: "Dinâmica - Leis de Newton", subtopic: "3ª Lei de Newton", name: "Ação-reação",
    objetivo: "Mostrar que as forças de ação-reação têm valores iguais e sentidos contrários.",
    equipamento: "Sensores de forças sem fios, mola ou elástico, computador para visualização dos resultados.",
    procedimento: "Ligam-se dois sensores de força por uma mola ou um elástico. Afastando ou aproximando os sensores vemos que as forças neles aplicadas variam, dependendo da distância entre eles, isto é, do alongamento da mola ou do elástico. As forças indicadas nos dois sensores são sempre iguais em módulo."
  },

  // --- Momento linear e colisões ---
  {
    id: "pendulo-balistico", topic: "Momento linear e colisões", subtopic: "Conversão de energias cinética e potencial", name: "Pêndulo balístico",
    objetivo: "Medição da velocidade de uma bola disparada pelo lançador.",
    equipamento: "Lançador de bola, suporte da caixa, caixa, detetor de rotação portátil com bluetooth e ligação ao projetor.",
    procedimento: "Uma bola é disparada para dentro de uma caixa suspensa, aberta, fazendo rodar a barra de suspensão de um ângulo mensurável, o que permite calcular a velocidade da bola usando princípios de conservação."
  },
  {
    id: "colisoes-elasticas-em-calha-de-ar", topic: "Momento linear e colisões", subtopic: "Colisões elásticas", name: "Colisões elásticas em calha de ar",
    objetivo: "Analisar colisões elásticas em calha de ar. As colisões são ao longo de uma direção.",
    equipamento: "Calha de ar, massas, equipamento para produzir fluxo de ar através da calha de ar.",
    procedimento: "Permite analisar colisões elásticas entre objetos com massas iguais ou diferentes. Antes de começar, verificar se a calha está nivelada e ligar a bomba de ar no nível mínimo para evitar danificar o fusível. Após alguns segundos, aumenta-se o fluxo de ar para o máximo. A massa parada deve ser segurada à mão até imediatamente antes da colisão, para evitar que o ar a desloque."
  },
  {
    id: "pendulo-de-newton", topic: "Momento linear e colisões", subtopic: "Colisões elásticas / Conversão de energias cinética e potencial", name: "Pêndulo de Newton",
    objetivo: "Demonstrar o comportamento de esferas metálicas de massas iguais suspensas quando uma (ou mais) se afasta(m) e se faz(em) colidir com as restantes.",
    equipamento: "Pêndulo de Newton, retroprojetor.",
    procedimento: "Coloca-se o pêndulo de Newton sobre um retroprojetor para melhor visibilidade em auditório. Afasta-se uma das esferas e larga-se, observando que essa esfera fica parada junto às outras enquanto uma esfera na extremidade oposta se afasta. A experiência repete-se afastando duas ou três esferas."
  },
  {
    id: "colisoes-inelasticas-em-calha-de-ar", topic: "Momento linear e colisões", subtopic: "Colisões inelásticas", name: "Colisões inelásticas em calha de ar",
    objetivo: "Analisar colisões inelásticas em calha de ar. As colisões são ao longo de uma direção.",
    equipamento: "Calha de ar, massas, equipamento para produzir fluxo de ar através da calha de ar.",
    procedimento: "A massa parada deve ser segurada à mão até imediatamente antes da colisão, para evitar deslocamento por ação do fluxo de ar. Verificar se a calha está nivelada antes de começar. Ligar a bomba de ar no nível mínimo e, após alguns segundos, aumentar o fluxo para o máximo, de modo a evitar danificar o fusível."
  },

  // --- Corpo rígido ---
  {
    id: "balanca-e-momento-de-forcas", topic: "Corpo rígido", subtopic: "Momento de uma força", name: "Balança e momento de forças",
    objetivo: "Com esta balança é possível demonstrar as noções de momento de uma força, soma de momentos de forças, equilíbrio de um sistema em relação ao momento de forças.",
    equipamento: "", procedimento: ""
  },
  {
    id: "equilibrio-de-estrutura-metalica", topic: "Corpo rígido", subtopic: "Estabilidade de um corpo rígido", name: "Equilíbrio de estrutura metálica",
    objetivo: "Estrutura metálica em que se pode mudar o ângulo de inclinação para analisar a condição limite para o equilíbrio.",
    equipamento: "", procedimento: ""
  },
  {
    id: "dinamica-do-corpo-rigido-e-centro-de-massa", topic: "Corpo rígido", subtopic: "Centro de massa", name: "Dinâmica do corpo rígido e centro de massa",
    objetivo: "Análise do movimento de um corpo rígido de modo a verificar que o movimento se pode separar em movimento do centro de massa, explicado pela 2ª Lei de Newton, e em movimento de rotação.",
    equipamento: "Barra de madeira pintada de preto com o centro de massa pintado com tinta fluorescente, candeeiro com lâmpada emissora de luz ultravioleta, óculos de proteção.",
    procedimento: "A experiência envolve lançar a barra como projétil. Primeiro, realiza-se um lançamento com luz ambiente. Em seguida, reduz-se a iluminação e acende-se a lâmpada UV. Durante o segundo lançamento, sob luz ultravioleta, a audiência pode visualizar que o movimento do centro de massa segue uma trajetória parabólica, apesar da barra girar em torno do centro de massa. Deve garantir-se que a barra não atinge o público, especialmente em luz reduzida, e que as pessoas próximas da lâmpada UV usam óculos protetores."
  },
  {
    id: "corpos-rigidos-em-rotacao-em-plano-inclinado", topic: "Corpo rígido", subtopic: "Energia mecânica de um corpo rígido", name: "Inércia rotacional: corpos rígidos em rotação em plano inclinado",
    objetivo: "Demonstrar o impacto do momento de inércia no movimento de um corpo rígido e responder à pergunta: qual dos dois corpos chega primeiro ao fim do plano inclinado?",
    equipamento: "Cilindro de madeira e cilindro oco de metal com os mesmos raios, massas e alturas; tábua para plano inclinado com largura suficiente para os cilindros rolarem lado a lado; suporte para elevar uma extremidade da tábua.",
    procedimento: "Um cilindro de madeira e um cilindro metálico oco, com a mesma massa, raio e altura, são postos a rodar simultaneamente, sem deslizar, ao longo de um plano inclinado. Observa-se que o corpo com maior inércia rotacional (cilindro oco) demora mais tempo a chegar ao fim."
  },
  {
    id: "rotacao-de-uma-roda-de-bicicleta-e-momento-angular", topic: "Corpo rígido", subtopic: "Momento angular", name: "Rotação de uma roda de bicicleta e momento angular",
    objetivo: "Demonstração qualitativa da conservação do momento angular usando uma roda de bicicleta.",
    equipamento: "Roda de bicicleta.",
    procedimento: "A roda de bicicleta é entregue ao aluno sem rotação. Pede-se que a inverta em 180º, mantendo o plano da roda paralelo ao chão. Em seguida, coloca-se a roda a girar e solicita-se novamente que o aluno a inverta em 180º — os alunos relatam maior dificuldade em realizar a inversão quando a roda está em rotação. Discute-se o sentido do momento angular da roda quando gira em sentido horário ou anti-horário. A experiência pode ter continuidade com o aluno sentado num banco giratório."
  },
  {
    id: "modelo-de-braco-e-lancamento-de-bola", topic: "Corpo rígido", subtopic: "Momento de uma força", name: "Modelo mecânico de braço humano",
    objetivo: "Modelo mecânico que simula os músculos e o movimento de um braço humano real. O modelo é usado para verificar como variam as forças aplicadas nos tendões quando o braço executa o lançamento de uma bola, bem como a relação entre as várias forças nos vários tendões quando o braço segura uma bola.",
    equipamento: "Modelo mecânico de braço, bola, sensores de força e de velocidade angular, computador.",
    procedimento: "Puxa-se um cordel ligado a um sensor de força para ativar o movimento do braço. As mudanças de posição são medidas no ombro e no cotovelo através de potenciómetros e um sensor de ângulo integrados. O aparelho permite avaliar o torque ao levantar objetos, o trabalho realizado ao lançar a bola e a energia cinética resultante transferida para a bola. É possível selecionar diferentes roldanas para ativar vários músculos do braço, e medições de força estática permitem avaliar como a tensão muscular varia em diferentes posições do braço."
  },
  {
    id: "conservacao-de-momento-angular-em-sistema-com-dois-discos", topic: "Corpo rígido", subtopic: "Momento angular", name: "Conservação de momento angular em sistema com dois discos",
    objetivo: "Verificar a variação da velocidade de rotação de um disco quando se deixa cair um disco sobre ele.",
    equipamento: "Discos, sistema de rotação, medidor de velocidade angular, laptop e projetor para projeção dos resultados da velocidade angular em tempo real.",
    procedimento: "Coloca-se um dos discos em rotação no suporte. Verifica-se a velocidade angular de rotação do disco. Deixa-se cair um outro disco sobre o anterior. Verifica-se a diminuição da velocidade angular do sistema composto pelos dois discos."
  },
  {
    id: "conservacao-de-momento-angular-com-banco-giratorio", topic: "Corpo rígido", subtopic: "Momento angular", name: "Conservação de momento angular com banco giratório e pesos",
    objetivo: "Demonstração qualitativa da conservação do momento angular em vários sistemas.",
    equipamento: "Banco giratório, roda de bicicleta, braçadeiras, pesos.",
    procedimento: "Parte I: a roda de bicicleta é oferecida ao aluno sem girar. Solicita-se inversão de 180º com o plano paralelo ao chão. Depois, a roda gira e pede-se nova inversão — nota-se maior dificuldade quando a roda está em rotação. Parte II: repete-se a experiência anterior com o aluno sentado no banco giratório. Observa-se que, ao inverter a roda, o sistema (roda + banco + aluno) adquire rotação. Parte III: colocam-se braçadeiras nos braços do aluno sentado no banco, com pesos levantados à altura dos ombros. Imprime-se rotação ao banco. Ao baixar os braços, a velocidade angular aumenta notoriamente; ao elevar os braços novamente, o aluno \"trava\" (redução da velocidade angular)."
  },
  {
    id: "giroscopio-f4b", topic: "Corpo rígido", subtopic: "", name: "Giroscópio",
    objetivo: "Observar o movimento de um giroscópio.",
    equipamento: "Giroscópio, suporte.",
    procedimento: "Coloca-se o giroscópio a girar e verifica-se a precessão. O centro de massa (Pcm) está marcado no giroscópio, visível apenas para o professor. A direção da precessão depende de o centro de massa ficar acima ou abaixo do ponto de apoio. Se o Pcm coincide com o ponto de apoio, o torque é nulo, o giroscópio permanece em equilíbrio e não há precessão, independentemente do ângulo entre a velocidade angular e o peso."
  },
  {
    id: "piao-que-inverte-a-rotacao-tippe-top-a35", topic: "Corpo rígido", subtopic: "Momento angular", name: "Pião que inverte a rotação: tippe top",
    objetivo: "Verificar a inversão do sentido do momento angular do pião.",
    equipamento: "Pião, modelo tippe top.",
    procedimento: "Coloca-se o pião a girar numa superfície. Verifica-se que o pião inverte ao fim de algum tempo."
  },
  {
    id: "giroscopio-manual", topic: "Corpo rígido", subtopic: "Momento angular", name: "Giroscópio manual",
    objetivo: "Observar o movimento de um giroscópio.",
    equipamento: "Giroscópio, corda, suporte para o giroscópio.",
    procedimento: "Enrolar a corda no corpo central do giroscópio. Depois deve puxar-se a corda para que o giroscópio comece a girar. Coloca-se o giroscópio no suporte. Observa-se a precessão."
  },
  {
    id: "centro-de-massa-e-equilibrio-de-um-corpo-rigido---1", topic: "Corpo rígido", subtopic: "Estabilidade de um corpo rígido", name: "Centro de massa e equilíbrio de um corpo rígido - 1",
    objetivo: "Determinação experimental da localização do centro de massa de um corpo rígido. Verificar as condições para a estabilidade de um corpo rígido: o somatório das forças é zero e o somatório dos momentos das forças é também nulo.",
    equipamento: "Suporte ou quadro magnético, peça com orifícios para suspensão.",
    procedimento: "A peça oscila quando suspensa nos orifícios do suporte através de diferentes pontos. Quando o ponto de suspensão coincide com o centro de massa, todas as forças são aplicadas no centro de massa e o momento de todas as forças é nulo — o sistema fica em equilíbrio independentemente da posição em que seja colocado. O ponto centro de massa está indicado na peça."
  },

  // --- Oscilações ---
  {
    id: "equilibrio-estavel-e-equilibrio-instavel", topic: "Oscilações", subtopic: "Oscilações livres", name: "Equilíbrio estável e equilíbrio instável",
    objetivo: "Compreender que as oscilações surgem na sequência do afastamento de um corpo em relação a um ponto de equilíbrio estável num potencial, quando esse afastamento dá origem a uma força de restituição linear com a distância ao ponto de equilíbrio.",
    equipamento: "Quadro magnético, calha magnética, esfera ou carrinho.",
    procedimento: "Um carrinho ou uma esfera metálica podem ser colocados em vários pontos da calha. Verifica-se: quando são afastados de um ponto que é mínimo local do potencial gravítico, vão oscilar em torno do mínimo; quando são afastados de um ponto que é máximo local do potencial gravítico, então não oscilam, afastam-se simplesmente do ponto de origem sem conseguir regressar."
  },
  {
    id: "oscilacoes-livres-de-uma-massa-presa-a-molas-numa-calha", topic: "Oscilações", subtopic: "Oscilações livres", name: "Oscilações livres de uma massa presa a molas numa calha",
    objetivo: "Analisar o movimento de oscilação de uma massa presa a duas molas numa calha de ar, sem atrito. Verificar que o período de oscilação não depende da amplitude inicial nem da velocidade inicial, mas depende da massa em oscilação.",
    equipamento: "Calha de ar, massas, molas, soprador de ar para a calha, mesa plana nivelada.",
    procedimento: "É essencial garantir que a calha de ar está bem nivelada. Liga-se o equipamento lentamente, começando com um ligeiro fluxo de ar na calha e aumentando-o de forma gradual — movimentos bruscos podem danificar o fusível."
  },
  {
    id: "oscilacoes-livres-em-massa-mola", topic: "Oscilações", subtopic: "", name: "Oscilações livres em massa mola",
    objetivo: "Ilustrar noções fundamentais relacionadas com o movimento de oscilação de uma massa suspensa numa mola.",
    equipamento: "Várias massas e várias molas, para que seja possível verificar que o período de oscilação depende da massa e da constante de elasticidade da mola.",
    procedimento: "Usando massas iguais e molas iguais, verifica-se que o período de oscilação é independente da amplitude de oscilação e das condições iniciais. Usando molas iguais e uma massa 4x maior que a outra, verifica-se a relação entre os períodos de oscilação das duas massas suspensas."
  },
  {
    id: "oscilacoes-de-massa-suspensa-a-mola", topic: "Oscilações", subtopic: "Oscilações livres", name: "Oscilações de massa suspensa a mola",
    objetivo: "Analisar o movimento de oscilação de uma massa suspensa numa mola. Pretende-se ganhar sensibilidade para: o significado de amplitude, período, fase inicial; a relação entre massa, coeficiente de elasticidade da mola, condições iniciais e as características do movimento (período e amplitude).",
    equipamento: "Suportes de molas, molas com cores variáveis e comprimentos iguais, conjuntos de pesos.",
    procedimento: "A montagem permite realizar várias demonstrações: suspender massas iguais em molas diferentes para verificar alongamentos distintos; suspender massas diferentes em molas iguais para confirmar a proporcionalidade com o peso; usar duas massas iguais em duas molas iguais, observando que o período não depende da amplitude nem da velocidade inicial; comparar períodos com massas diferentes (250g vs. 1000g) em molas idênticas para verificar a dependência do período com a massa suspensa."
  },
  {
    id: "oscilacao-de-massa-suspensa-em-mola---amortecidas", topic: "Oscilações", subtopic: "Oscilações harmónicas amortecidas", name: "Oscilação de massa suspensa em mola - amortecidas",
    objetivo: "Analisar o movimento de oscilação de uma massa suspensa numa mola quando está a oscilar dentro de água. Comparar com a oscilação quando esta é no ar.",
    equipamento: "Recipiente com água onde a massa suspensa pode oscilar, sensor de força sem fios.",
    procedimento: "Permite analisar duas situações: oscilações de uma massa suspensa numa mola sem atrito (no ar) e oscilações de uma massa suspensa numa mola com atrito (em água). É essencial manter a massa totalmente submersa durante as oscilações em água. O sensor de força deve funcionar em modo de registo de força, com escala aumentada para melhor visibilidade. Recomenda-se o uso de uma webcam para projeção em sala de aula, de forma a facilitar a visualização."
  },
  {
    id: "ressonancia-em-sistema-massa-mola", topic: "Oscilações", subtopic: "Oscilações forçadas e ressonância", name: "Ressonância em sistema massa-mola",
    objetivo: "Análise do movimento de oscilação de uma massa suspensa numa mola. Oscilações livres. Oscilações forçadas. Ressonância.",
    equipamento: "Massa e mola.",
    procedimento: "A mola é suspensa e segura na mão. Observa-se que a amplitude de oscilação depende das condições iniciais, mas o período de oscilação é independente delas. Movendo a mão verticalmente a diferentes frequências: a frequências elevadas (período inferior a 1 segundo), a amplitude de oscilação da massa é baixa; a uma determinada frequência, a amplitude torna-se muito elevada, demonstrando a ressonância."
  },
  {
    id: "oscilacoes-de-duas-massas-acopladas", topic: "Oscilações", subtopic: "Oscilações acopladas", name: "Oscilações de duas massas acopladas",
    objetivo: "Analisar o movimento de oscilação de duas massas acopladas numa calha de ar, sem atrito. Verificar a transmissão de energia mecânica de uma massa para a outra.",
    equipamento: "Calha de ar, massas, molas, soprador de ar para a calha, mesa plana nivelada.",
    procedimento: "É essencial garantir que a calha de ar está bem nivelada, ligando o fluxo de ar de forma gradual (movimentos bruscos podem danificar o fusível). Podem analisar-se três cenários: uma massa deslocada da posição inicial e largada enquanto a outra permanece em repouso e livre; as duas massas deslocadas da mesma distância em sentidos opostos e largadas simultaneamente; as duas massas deslocadas da mesma distância no mesmo sentido e largadas simultaneamente."
  },
  {
    id: "oscilacoes-de-pendulos-acoplados", topic: "Oscilações", subtopic: "Oscilações acopladas", name: "Oscilações de pêndulos acoplados",
    objetivo: "Analisar o movimento de dois pêndulos acoplados tomando em consideração as seguintes condições iniciais: um pêndulo está inicialmente parado na posição de equilíbrio e o outro é afastado do equilíbrio e largado, verificando-se a alternância de energia mecânica de um pêndulo para o outro; os dois pêndulos são afastados do equilíbrio para o mesmo lado e largados, oscilando em fase; os pêndulos são afastados do equilíbrio no mesmo ângulo mas em sentidos opostos, oscilando desfasados em Pi.",
    equipamento: "", procedimento: ""
  },
  {
    id: "pendulo", topic: "Oscilações", subtopic: "Oscilações livres", name: "Pêndulo",
    objetivo: "Análise do movimento de oscilação de uma massa suspensa. Oscilações livres. Oscilações amortecidas.",
    equipamento: "Massa, corda, suporte, medidor de ângulos e de velocidade angular.",
    procedimento: "A demonstração pode ser feita de forma simples, só com a massa suspensa no fio, ou de forma mais complexa, em que a massa está suspensa no fio e o fio está fixo a um instrumento que mede o ângulo de afastamento da massa em relação à posição de equilíbrio. As condições iniciais (ângulo ou velocidade angular) podem ser variadas para verificar que o período de oscilação é independente das condições iniciais. Ao longo de vários minutos de observação, tornam-se visíveis as oscilações amortecidas. Os dados de ângulo, velocidade angular ou aceleração angular podem ser visualizados em tempo real por ligação Bluetooth a um computador."
  },

  // --- Ondas ---
  {
    id: "ondas-longitudunais-em-mola", topic: "Ondas", subtopic: "Ondas longitudinais e transversais", name: "Ondas longitudinais em mola",
    objetivo: "Visualização da propagação de uma onda longitudinal através de uma mola.",
    equipamento: "Mola. Para melhor visualização em auditório sugere-se a realização da experiência sobre um retroprojetor.",
    procedimento: "A mola é colocada sobre um retroprojetor iluminado. Move-se longitudinalmente uma das extremidades da mola esticada enquanto a outra permanece parada, permitindo observar como a onda longitudinal se propaga através da mola. Discute-se a relação entre a direção de propagação da onda e o movimento de cada espira em relação ao equilíbrio — notando que essas direções coincidem."
  },
  {
    id: "demonstrador-de-ondas-mecanicas-transversais", topic: "Ondas", subtopic: "Ondas mecânicas", name: "Demonstrador de ondas mecânicas transversais",
    objetivo: "Analisar os conceitos fundamentais associados a: propagação de uma onda num meio (frequência, velocidade, comprimento de onda); comportamento de uma onda na fronteira entre dois meios (extremidade fixa e extremidade móvel); sobreposição de ondas e ondas estacionárias; frequência de onda e comprimento de onda em função das propriedades do meio.",
    equipamento: "Demonstrador de ondas transversais.",
    procedimento: "A ativação de uma onda pode ser realizada manualmente ou com um motor. A extremidade do demonstrador pode ser fixa ou deixada livre, permitindo visualizar a relação entre a fase da onda incidente e da onda refletida. Quando se usa o motor, deve ter-se atenção às condições limites: tensão máxima de entrada de 6V e corrente máxima de 1A."
  },
  {
    id: "ondas-em-tina-de-ondas-com-agua", topic: "Ondas", subtopic: "Ondas mecânicas / Princípio de Huygens e propagação de ondas", name: "Ondas em tina de ondas com água",
    objetivo: "Discutir as noções fundamentais sobre ondas.",
    equipamento: "Tina de água, fonte de tensão, acessórios para demonstração de ondas planas e esféricas, acessórios para sobreposição de ondas, fonte de luz estroboscópica.",
    procedimento: "A montagem deve incluir iluminação estroboscópica, permitindo realizar múltiplas demonstrações relacionadas com os temas de ondas apresentados. Os procedimentos devem ser adaptados conforme a demonstração específica a realizar. Recomenda-se diminuir a intensidade da luz ambiente para melhor visualização. É necessário garantir que a fonte de ondas toca uniformemente na superfície da água (para ondas planas), que o espaço está escurecido e que a frequência de onda é testada previamente para melhor adequação à experiência."
  },
  {
    id: "ondas-transversais-em-corda-nocoes-fundamentais", topic: "Ondas", subtopic: "Ondas mecânicas", name: "Ondas transversais em corda: noções fundamentais",
    objetivo: "Analisar os conceitos associados a: propagação de uma onda transversal numa corda vibrante; sobreposição de ondas e ondas estacionárias.",
    equipamento: "Corda.",
    procedimento: "Pede-se a um aluno que segure a corda numa extremidade; o professor segura a corda na outra extremidade. Fazendo movimentos na corda é possível explicar os conceitos de onda transversal, amplitude da onda, velocidade de propagação da onda, movimentos periódicos e frequência de propagação, e a relação entre a velocidade de propagação e a tensão nas extremidades. Durante a execução da experiência, a extremidade da corda que o estudante segura deve ser mantida fixa."
  },
  {
    id: "ondas-sonoras-transformada-de-fourier-de-um-sinal-sonoro", topic: "Ondas", subtopic: "Análise de Fourier de um sinal sonoro", name: "Ondas sonoras: transformada de Fourier de um sinal sonoro",
    objetivo: "Verificar que o som produzido por um diapasão pode ser caracterizado pela frequência e pela intensidade.",
    equipamento: "Dois diapasões, martelo, microfone/sonógrafo sem fios da PASCO, computador com software para analisar o sinal e produzir um sonograma.",
    procedimento: "Produz-se som com um ou dois diapasões. O sonógrafo e o software registam e visualizam as frequências e intensidades dos sons emitidos, com resultados visíveis em tempo real no ecrã. Deve analisar-se o ruído ambiente antes de ativar os diapasões, remover sinais de baixa intensidade do gráfico se necessário, e verificar a carga da bateria do sonógrafo para funcionamento sem fios por Bluetooth."
  },
  { id: "espectroscopia", topic: "Ondas", subtopic: "", name: "Espectroscopia", objetivo: "", equipamento: "", procedimento: "" },
  {
    id: "refracao-de-luz", topic: "Ondas", subtopic: "", name: "Refração da luz. Refração total",
    objetivo: "Demonstração do comportamento da luz na fronteira entre dois meios: refração e ângulo crítico.",
    equipamento: "", procedimento: ""
  },
  {
    id: "dispersao-de-luz", topic: "Ondas", subtopic: "Refração", name: "Dispersão de luz",
    objetivo: "Visualizar a formação de um arco-íris.",
    equipamento: "Prisma com base magnética, quadro magnético, fonte de luz branca com suporte magnético ao quadro, fonte de alimentação.",
    procedimento: "Fixa-se a fonte de luz e o prisma ao quadro magnético. Roda-se o prisma de modo a que um dos feixes de luz branca saídos da fonte produza um arco-íris. A intensidade de luz na sala deve ser diminuída. O arco-íris pode ficar visível no teto da sala ou no chão, dependendo do ângulo entre o feixe e o elemento dispersivo."
  },
  {
    id: "reflexao-de-luz-1d0", topic: "Ondas", subtopic: "Interferência de ondas eletromagnéticas", name: "Reflexão de luz em superfícies espelhadas",
    objetivo: "Visualização da reflexão da luz em superfícies espelhadas.",
    equipamento: "Superfícies espelhadas, planas e curvas.",
    procedimento: ""
  },
  {
    id: "mola-reflexao-de-onda-em-extremidade-livre-ou-fixa", topic: "Ondas", subtopic: "Comportamento de onda na fronteira entre meios: reflexão e refração", name: "Mola - reflexão de onda em extremidade livre ou fixa",
    objetivo: "Analisar o que acontece a uma onda transversal que é refletida na extremidade da mola onde se propaga, nas seguintes situações: extremidade móvel; extremidade fixa.",
    equipamento: "Mola longa com argolas nas extremidades, barra cilíndrica fina com diâmetro superior ao diâmetro da argola da mola.",
    procedimento: "A experiência realiza-se no chão da sala, necessitando de duas pessoas. Passa-se a barra (pode ser um ponteiro) por uma argola numa das extremidades da mola. Duas demonstrações são possíveis: ativa-se uma onda numa das extremidades da mola enquanto a outra extremidade está fixa — é visível que a fase da onda refletida difere em Pi da fase da onda incidente; ativa-se uma onda numa das extremidades enquanto a outra extremidade está livre e pode mover-se livremente na barra — é bem visível que a fase da onda refletida é igual à fase da onda incidente."
  },
  {
    id: "lei-de-snell-decartes-e-angulo-critico-na-fronteira-agua-ar", topic: "Ondas", subtopic: "Refração", name: "Lei de Snell-Descartes e ângulo crítico para a luz na fronteira água-ar",
    objetivo: "Observar o comportamento da luz na fronteira água-ar para vários ângulos de incidência. A reflexão total é bem visível.",
    equipamento: "Demonstrador da lei de Snell-Descartes, fonte de alimentação, água.",
    procedimento: "Deve-se adicionar água antes de ligar a fonte de alimentação. A visibilidade da demonstração melhora significativamente com a redução da luz ambiente. É importante verificar que há água no demonstrador antes de ativar a fonte e garantir que a torneira de escoamento está bem fechada."
  },
  {
    id: "fibra-otica-com-agua", topic: "Ondas", subtopic: "Refração", name: "Fibra ótica com água",
    objetivo: "Demonstrar uma situação de reflexão total da luz no interior de um fio de água, dando origem a confinamento da luz no interior da água.",
    equipamento: "Garrafão com um orifício próximo da base de onde pode sair um fio de água, laser, recipiente para recolher a água que sai do garrafão.",
    procedimento: "Enche-se o garrafão com água. Tapa-se o orifício para que a água não saia. Coloca-se o raio laser de modo a que o feixe atravesse a água no garrafão e atinja o dedo que está a tapar o orifício. Tira-se o dedo que tapa o orifício. Vê-se a luz do laser a ser curvada e a chegar ao recipiente ou a uma mão."
  },
  {
    id: "fibras-oticas", topic: "Ondas", subtopic: "Refração", name: "Fibras óticas",
    objetivo: "Visualização do efeito de reflexão total em fibras óticas.",
    equipamento: "Fibras óticas, fonte de luz (laser).",
    procedimento: "Há duas montagens possíveis. Na montagem com laser, recomenda-se reduzir a luz ambiente para melhor visualização; a fibra deve ser manuseada pelo docente, já que os alunos frequentemente pensam erradamente que ela é oca por dentro. Na montagem com fonte de luz, deve garantir-se que a luz alimentada a pilhas funciona corretamente e reduzir a luz da sala. As fibras podem ser movidas durante a experiência para demonstrar que a luz se propaga no interior da fibra mesmo quando a sua curvatura muda."
  },
  {
    id: "guitarra", topic: "Ondas", subtopic: "Sobreposição de ondas", name: "Guitarra",
    objetivo: "Análise de sons produzidos numa guitarra e sua relação com as características das frequências produzidas numa corda vibrante com as extremidades fixas.",
    equipamento: "Guitarra.",
    procedimento: "Recomenda-se convidar alguém da audiência que saiba tocar guitarra, para melhor relacionar os conceitos conhecidos com os princípios teóricos. Observações-chave incluem: a frequência do som varia quando a tensão nas extremidades da corda aumenta ou diminui; produção de harmónicos pelas várias cordas; processo de afinação da guitarra usando duas cordas, com uma já afinada. Caso ninguém saiba tocar guitarra, a experiência continua viável, ainda que os sons produzidos possam não corresponder a notas musicais — os conceitos básicos podem ainda assim ser testados."
  },
  {
    id: "figuras-de-chladni", topic: "Ondas", subtopic: "Ondas estacionárias a duas dimensões", name: "Figuras de Chladni",
    objetivo: "Visualização de padrões de interferência de ondas numa superfície a 2D.",
    equipamento: "Gerador de sinais, microfone, placa metálica quadrada e placa metálica circular, areia.",
    procedimento: "As placas metálicas quadradas e redondas são colocadas em vibração através de estímulos acústicos emitidos por um altifalante. Quando a frequência da onda corresponde a uma dada frequência própria (modo de vibração natural) da placa, as linhas nodais tornam-se visíveis com areia. A areia é expelida das regiões vibratórias da placa e acumula-se nas linhas, porque estes são os únicos locais onde a amplitude das vibrações é próxima de zero."
  },
  {
    id: "interferometro-de-michelson", topic: "Ondas", subtopic: "Relatividade de Einstein", name: "Interferómetro de Michelson",
    objetivo: "Explorar a interferência de luz, a importância da experiência de Michelson-Morley e a relatividade de Einstein, e a deteção de ondas gravitacionais e deformações do espaço-tempo.",
    equipamento: "",
    procedimento: "A realização desta experiência apresenta um grau de dificuldade mais elevado do que a maioria das experiências."
  },
  {
    id: "ondas-com-frequencias-iguais", topic: "Ondas", subtopic: "Sobreposição de ondas sonoras", name: "Ondas sonoras com frequências iguais",
    objetivo: "Confirmar o fenómeno associado à ressonância com ondas sonoras.",
    equipamento: "2 diapasões (frequência próxima de 440Hz), 1 sonómetro ligado a PC por Bluetooth.",
    procedimento: "Os dois diapasões produzem sons com a mesma frequência. Coloca-se um diapasão a produzir som, verificando-se que o outro diapasão começa também a produzir som e com a mesma frequência. O sonómetro regista a intensidade do som em tempo real. Deve garantir-se que ambos os diapasões estão a produzir sons com a mesma frequência."
  },
  {
    id: "polarizacao-de-ondas-mecanicas", topic: "Ondas", subtopic: "Polarização", name: "Polarização de ondas mecânicas",
    objetivo: "Demonstrar a polarização de ondas mecânicas.",
    equipamento: "Massa e polarizador de ondas mecânicas em corda.",
    procedimento: "A corda passa pela ranhura do polarizador. Duas pessoas seguram a corda em cada extremidade enquanto uma terceira segura o polarizador no lugar. Uma pessoa gera uma onda plana, permitindo observar: a relação entre o plano da onda antes e depois do polarizador, incluindo mudanças de amplitude; quando o plano da onda é perpendicular à ranhura do polarizador, a transmissão da onda é quase bloqueada; quando o plano da onda é paralelo ao polarizador, a onda não é afetada."
  },
  {
    id: "polarizacao-de-ondas-eletromagneticas-e-filtros-polarizadores", topic: "Ondas", subtopic: "Polarização", name: "Polarização de ondas eletromagnéticas e filtros polarizadores",
    objetivo: "Demonstrar fenómenos relacionados com a polarização de ondas eletromagnéticas.",
    equipamento: "Filtros polarizadores lineares, retroprojetor, quadro com imagem que polariza a luz refletida.",
    procedimento: "O experimento envolve duas atividades principais: passa-se luz de um retroprojetor através de um filtro polarizador linear, rodando-o para verificar que a intensidade se mantém constante; em seguida, utilizam-se dois filtros polarizadores lineares — ao rodar um deles, observa-se variação da intensidade projetada, desde um mínimo (sem passagem de luz) até um máximo, determinando-se o ângulo necessário para a transição entre estes estados. Numa segunda atividade, coloca-se um filtro polarizador sobre o quadro que reflete luz polarizada e roda-se o polarizador, observando-se mudanças nas cores da imagem conforme o polarizador é rodado."
  },
  {
    id: "sobreposicao-de-ondas-sonoras-com-frequencias-proximas-batimentos", topic: "Ondas", subtopic: "Sobreposição de ondas sonoras", name: "Sobreposição de ondas sonoras com frequências próximas: batimentos",
    objetivo: "Confirmar o efeito de sobreposição de ondas sonoras com frequências próximas através do registo de batimentos.",
    equipamento: "2 diapasões (produzem sons com frequências próximas de 440Hz), sonómetro ligado a PC por Bluetooth (permite registar a intensidade do som e visualização em tempo real), microfone (recomendado).",
    procedimento: "Colocam-se dois diapasões a produzir sons com frequências próximas. O sonómetro, posicionado entre eles, permite o registo dos batimentos. A experiência também funciona sem sonómetro, escolhendo-se frequências de som próximas que permitam ouvir os batimentos audíveis."
  },

  // --- Banco ótico ---
  {
    id: "banco-otico-sistemas-com-lentes-concavas-e-convexas", topic: "Banco ótico", subtopic: "Refração", name: "Banco ótico: sistemas com lentes côncavas e convexas",
    objetivo: "Demonstrar os efeitos de prismas e lentes côncavas ou convexas na propagação da luz.",
    equipamento: "Lentes côncavas, lentes convexas, prismas, fonte de feixes de lasers vermelhos e verdes.",
    procedimento: "Coloca-se a fonte de luz no quadro magnético. Colocam-se as lentes, os prismas ou os espelhos de modo a conseguir o sistema ótico onde se pretende analisar a propagação dos raios de luz."
  },

  // --- Eletromagnetismo ---
  { id: "cargas-campos-e-potencial-eletrostatico", topic: "Eletromagnetismo", subtopic: "Eletrostática", name: "Cargas, campos e potencial eletrostático", objetivo: "", equipamento: "", procedimento: "" },
  { id: "dieletricos-e-condensador-plano", topic: "Eletromagnetismo", subtopic: "Condensador", name: "Dielétricos e condensador plano", objetivo: "", equipamento: "", procedimento: "" },
  { id: "lei-de-lenz", topic: "Eletromagnetismo", subtopic: "Indução eletromagnética", name: "Lei de Lenz", objetivo: "", equipamento: "", procedimento: "" },
  {
    id: "inducao-eletromagnetica-de-faraday", topic: "Eletromagnetismo", subtopic: "Indução eletromagnética", name: "Indução eletromagnética de Faraday",
    objetivo: "Verificação do fenómeno de indução eletromagnética.",
    equipamento: "Galvanómetro transparente, o que permite a sua utilização com um retroprojetor.",
    procedimento: ""
  },
  {
    id: "coijclkn", topic: "Eletromagnetismo", subtopic: "Campo magnetostático", name: "Linhas de campo magnético",
    objetivo: "Visualização a 2D de linhas de campo magnético criado por ímanes permanentes.",
    equipamento: "",
    procedimento: "Usar um retroprojetor para melhor visualização em auditório."
  },
  {
    id: "visualizacao-3d-de-linhas-de-campo-magnetico", topic: "Eletromagnetismo", subtopic: "Campo magnetostático", name: "Visualização a 3D de linhas de campo magnético criado por um íman",
    objetivo: "",
    equipamento: "Caixa transparente, tendo no interior um líquido onde se encontra limalha de ferro; íman.",
    procedimento: "A caixa e o íman devem ser passados de mão em mão, permitindo observar o campo magnetostático criado por um íman permanente. Experiência de difícil visualização em auditório."
  },

  // --- Termodinâmica e Física estatística ---
  {
    id: "termometro-de-galileo", topic: "Termodinâmica e Física estatística", subtopic: "Instrumentos de medição / Hidrostática", name: "Medição de temperatura com termómetro de Galileo",
    objetivo: "Demonstrar que a impulsão no interior de um líquido depende da temperatura. Este fenómeno pode ser usado para construir um termómetro, como fez Galileu.",
    equipamento: "Termómetro de Galileo.",
    procedimento: "Coloca-se o termómetro de Galileo num ambiente com uma temperatura diferente daquela a que o termómetro estava sujeito. Espera-se e vê-se que os indicadores de temperatura sobem ou descem no interior do tubo, de modo a que, no final, indiquem a temperatura ambiente."
  },
  {
    id: "transicao-de-fase-agua-vapor-a-baixa-pressao", topic: "Termodinâmica e Física estatística", subtopic: "Transições de fase", name: "Transição de fase água-vapor a baixa pressão",
    objetivo: "Analisar o que se passa com a água se diminuirmos a pressão exterior. Consegue visualizar-se que a água entra em ebulição a uma temperatura inferior a 100ºC.",
    equipamento: "Bomba de vácuo e campânula, manómetro, tina com água, termopar.",
    procedimento: "Coloca-se água da torneira (não fervida anteriormente) numa pequena tina. O termopar é inserido na água. A campânula é fechada sobre a tina, e verifica-se a pressão inicial. Ao ligar a bomba de vácuo, a pressão interior diminui significativamente, formam-se bolhas de ar na água até que esta entra em ebulição. Observa-se que a temperatura da água baixou aproximadamente 2°C quando a ebulição iniciou, comparando com a temperatura inicial."
  },

  // --- Mecânica de Fluidos ---
  {
    id: "impulsao-do-ar", topic: "Mecânica de Fluidos", subtopic: "Hidrostática", name: "Impulsão do ar",
    objetivo: "Analisar uma experiência e explicar o resultado com base na existência da força de impulsão do ar.",
    equipamento: "Câmara de vácuo com balança na plataforma, esfera de esferovite e contrapeso nas extremidades da balança, campânula de vidro, bomba de vácuo, manómetro para monitorizar a pressão interior.",
    procedimento: "Coloca-se a balança na plataforma da câmara de vácuo. Posiciona-se a esfera de esferovite numa das extremidades e uma massa na outra. Cobre-se a câmara com a campânula. Verifica-se o equilíbrio inicial da balança. Ativa-se a bomba de vácuo para reduzir a pressão do ar no interior da campânula. Observa-se para que lado a balança se inclina à medida que a pressão do ar diminui, acompanhando a pressão com o manómetro. No final, restitui-se o ar à câmara."
  },
  {
    id: "impulsao-no-interior-de-um-liquido", topic: "Mecânica de Fluidos", subtopic: "", name: "Impulsão no interior de um líquido",
    objetivo: "Verificação da força com que um líquido atua num corpo que se encontra no seu interior.",
    equipamento: "2 medidores de forças, 2 massas iguais, isqueiro a gás, computador portátil, recipiente com água.",
    procedimento: "Suspendem-se as massas nos medidores de força, uma delas em água. Verifica-se que as massas têm o mesmo peso, mas o valor lido no medidor da massa submersa é inferior, com o peso das massas visível no monitor do computador ligado aos sensores."
  },
  {
    id: "pressao-do-ar-hemisferios-de-magdeburgo", topic: "Mecânica de Fluidos", subtopic: "Hidrostática / Pressão, volume e temperatura de um sistema termodinâmico", name: "Pressão do ar: hemisférios de Magdeburgo",
    objetivo: "Demonstrar a existência da pressão do ar. Separar dois hemisférios unidos por um simples contacto e no interior dos quais é diminuída a pressão do ar.",
    equipamento: "Dois hemisférios que se possam unir formando uma bola hermeticamente fechada, bomba de vácuo manual com manómetro.",
    procedimento: "A um dos hemisférios liga-se uma bomba de vácuo manual através de uma válvula. Juntam-se os hemisférios e fecham-se de modo a formar uma bola. Tenta-se separar os hemisférios puxando pela argola que se encontra em cada um — esta ação é de fácil execução. Seguidamente, juntam-se novamente os hemisférios e retira-se ar do seu interior usando a bomba de vácuo manual. Tenta-se separar os hemisférios manualmente — esta ação deve ser impossível de executar. Verifica-se a pressão no interior da bola através do manómetro."
  },
  {
    id: "diabo-mergulhador", topic: "Mecânica de Fluidos", subtopic: "Hidrostática", name: "Diabo mergulhador",
    objetivo: "Mostrar que, ao aumentar a pressão num ponto de um fluido, esse aumento propaga-se no interior do fluido, fazendo com que o diabinho mergulhe.",
    equipamento: "Recipiente com água que possa ser fechado, diabo cartesiano.",
    procedimento: "Enche-se o recipiente com água. Coloca-se o diabo no interior. Tapa-se. A pressão sobre o líquido pode variar-se com uma seringa (no caso da rolha de plástico e tubo de vidro) ou apertando a garrafa (se for garrafa de plástico). É necessário aumentar e diminuir a pressão para que a água comece a entrar e a sair do diabinho, fazendo-o mergulhar."
  },
  {
    id: "impulsao-em-agua-e-no-ar-comparacao", topic: "Mecânica de Fluidos", subtopic: "Hidrostática", name: "Impulsão em água e no ar: comparação",
    objetivo: "Demonstrar que a impulsão na água é superior à impulsão no ar.",
    equipamento: "Medidores de forças, computador portátil, recipientes transparentes onde se coloca um líquido para analisar a impulsão, massas iguais.",
    procedimento: "Suspendem-se as massas. Verifica-se que as massas pesam o mesmo. Coloca-se água num dos recipientes e verifica-se que a força indicada diminui. Usando água salgada em vez de água doce, a força de impulsão aumenta ainda mais."
  },
  {
    id: "elevador-hidraulico", topic: "Mecânica de Fluidos", subtopic: "Hidrostática", name: "Elevador hidráulico",
    objetivo: "Demonstração da relação entre pressão e força num equipamento em que se pode fazer uso da pressão hidráulica para levantar um peso. Pressão no interior de um líquido.",
    equipamento: "Suporte robusto com cilindro e pistão (60 cm³), plataforma de elevação no pistão, sistema de tubagem com 4 bombas manuais simples (volumes de 3 cm³, 6 cm³, 12 cm³, 20 cm³), encaixe de mangueira para sensor de pressão, registador de dados.",
    procedimento: "Podem ser exercidos vários níveis de pressão sobre o pistão utilizando o sistema de tubagem com as 4 bombas manuais de diferentes volumes. Na plataforma de elevação colocam-se pesos para serem elevados. O conjunto permite investigar a transmissão de força hidráulica ou pneumática, a relação entre força, área de superfície e pressão, bem como verificar a lei de Boyle."
  },
  {
    id: "escoamento-em-tubos", topic: "Mecânica de Fluidos", subtopic: "Hidrodinâmica", name: "Escoamento de água e equação de Bernoulli",
    objetivo: "Demonstração experimental da equação de Bernoulli (análise qualitativa); verificar que a velocidade da água à saída do tubo depende do desnível.",
    equipamento: "Quadro magnético com sistema de escoamento fixo, pinça ou mecanismo para bloquear a saída da água, corante para a água.",
    procedimento: "O depósito de água a encher deve estar fechado para evitar saída indesejada durante o enchimento. Após encher o depósito, é possível criar várias situações experimentais: variação do ângulo de saída da água, variação do desnível com verificação da variação da velocidade de saída, e verificação da trajetória da água e do seu alcance."
  },

  // --- Mecânica quântica ---
  {
    id: "lampadas-espetrais", topic: "Mecânica quântica", subtopic: "Ondas eletromagnéticas / Luz como campo eletromagnético / Espetros", name: "Espetros",
    objetivo: "Visualização das riscas espetrais de dois elementos: hélio e sódio.",
    equipamento: "Suporte de lâmpadas espetrais com uma lâmpada de hélio e uma lâmpada de sódio, espectrógrafo sem fios (ou espectrógrafo manual/rede de difração como alternativa).",
    procedimento: "Observam-se as riscas espetrais do hélio e do sódio usando um espectrógrafo sem fios PASCO ligado a um portátil, ou um espectrógrafo manual, para caracterizar os padrões espetrais próprios de cada elemento."
  },
  {
    id: "detecao-de-radiacao-infra-vermelha", topic: "Mecânica quântica", subtopic: "Ondas eletromagnéticas / Luz como campo eletromagnético / Corpo negro", name: "Deteção de radiação infravermelha",
    objetivo: "Observar e comparar a radiação infravermelha emitida por vários corpos com temperaturas diferentes.",
    equipamento: "Câmara térmica FLIR, suporte para a câmara térmica, recipiente com água à temperatura ambiente, recipiente com água quente, equipamento para aquecer a água, computador e projetor para visualização em auditório.",
    procedimento: "Enche-se um recipiente com água fria e outro com água quente (não precisa de estar a ferver). Observa-se na câmara térmica a radiação emitida pelos dois recipientes, verificando-se que o recipiente quente emite muito mais radiação, parecendo uma lâmpada acesa. Nota-se que se está a observar a radiação emitida pelos copos de vidro e não pela água, pois o vidro absorve a radiação infravermelha da água. A demonstração pode ainda mostrar a radiação emitida pelos alunos, evidenciando manchas frias em óculos e zonas mais frias onde há cabelo, explicando por que o vidro não deixa passar infravermelhos e como o cabelo protege do calor."
  },
  {
    id: "radiometro-de-crookes", topic: "Mecânica quântica", subtopic: "Momento linear de fotões / Física estatística / Dualismo onda-partícula", name: "Radiómetro de Crookes",
    objetivo: "Mostrar que os fotões conseguem fazer rodar um sistema com hélices. A explicação deste fenómeno exige considerar que os fotões têm comportamento corpuscular.",
    equipamento: "Radiómetro de Crookes, fonte de luz.",
    procedimento: "Faz-se incidir luz sobre o radiómetro (pode ser luz solar). As duas superfícies opostas de cada hélice são uma preta, absorvendo a radiação incidente, e a outra espelhada, refletindo a radiação incidente. Quando o radiómetro é colocado sob luz incidente, as hélices começam a rodar."
  },
  {
    id: "difracao-de-eletroes", topic: "Mecânica quântica", subtopic: "Dualismo onda-partícula", name: "Dualismo onda-partícula e difração de eletrões",
    objetivo: "Experiência demonstrativa do dualismo onda-partícula usando um tubo de difração de eletrões.",
    equipamento: "Tubo de difração de eletrões.",
    procedimento: "Demonstração da natureza ondulatória dos eletrões através do padrão de interferência provocado por um feixe de eletrões que atravessa uma rede de grafite. A experiência envolve medir o comprimento de onda dos eletrões para vários valores de tensão no ânodo, utilizando a distância entre camadas de grafite no cristal e medindo o raio dos anéis no padrão de interferência criado no alvo."
  },

  // --- Relatividade ---
  {
    id: "principio-de-equivalencia", topic: "Relatividade", subtopic: "Relatividade de Einstein", name: "Princípio de equivalência",
    objetivo: "Comparar a perceção do movimento de um corpo num referencial não inercial com a perceção do movimento desse corpo na ausência/presença de um campo gravitacional.",
    equipamento: "Massa (pode ser o telemóvel), aplicação PHYWE MeasureApp.",
    procedimento: "Instala-se a aplicação PHYWE MeasureApp num dispositivo móvel. Deixa-se cair o telemóvel de uma altura reduzida e segura (cerca de 0,5m) sobre uma superfície almofadada, para evitar danos. Analisa-se a aceleração registada pelo acelerómetro durante a queda: em queda livre, na perspetiva de um referencial não inercial, o somatório das forças é nulo e o corpo parece estacionário, como se nenhuma força atuasse sobre ele."
  },

  // --- Experiências do mapeamento oficial sem subpágina própria ainda (sem link) ---
  {
    id: null, topic: "Dinâmica - Leis de Newton", subtopic: "Forças", name: "Força vetorial, decomposição, soma de forças, equilíbrio de forças: peso suspenso",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Dinâmica - Leis de Newton", subtopic: "Movimento a uma dimensão", name: "Queda de pena e esfera em tubo de vácuo",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Dinâmica - Leis de Newton", subtopic: "Movimento a duas dimensões", name: "Movimento de duas esferas com diferentes velocidades iniciais",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Momento linear e colisões", subtopic: "Centro de massa", name: "Lançamento de uma massa a partir de um hovercraft e posição do centro de massa",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Momento linear e colisões", subtopic: "Centro de massa", name: "Lançamento de uma massa por um patinador em repouso e centro de massa",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Corpo rígido", subtopic: "Movimentos de rotação e translação do corpo rígido", name: "Velocidade tangencial e angular de vários pontos de um disco a rodar sem deslizar",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Corpo rígido", subtopic: "Movimentos de rotação e translação do corpo rígido", name: "Velocidade de vários pontos de uma roda a rodar sem deslizar relativamente à superfície de rotação",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Corpo rígido", subtopic: "Momento de inércia", name: "Inércia rotacional",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Corpo rígido", subtopic: "Momento angular", name: "Roda da bicicleta e precessão",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Ondas eletromagnéticas", name: "Espetro do sol",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Ondas longitudinais e transversais", name: "Ondas transversais em mola",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Propagação de ondas", name: "Corda vibrante",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Propagação de ondas", name: "Modelo para a propagação de uma onda transversal num meio",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Refração", name: "Modelo de olho humano",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Sobreposição de ondas", name: "Sobreposição de ondas em corda vibrante: ondas estacionárias",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Sobreposição de ondas eletromagnéticas", name: "Ondas estacionárias e forno de micro-ondas",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Interferência de ondas", name: "Interferência de ondas numa tina de ondas: experiência com duas fendas",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Interferência de ondas eletromagnéticas", name: "Rede de difração e padrão de interferência para vários comprimentos de onda",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Interferência de ondas eletromagnéticas", name: "Interferência de luz em filme fino: bolas de sabão",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Difração de ondas", name: "Difração de ondas eletromagnéticas",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Difração de ondas", name: "Difração de ondas em tina de água",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Mecânica de Fluidos", subtopic: "Hidrostática", name: "Vasos comunicantes",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Mecânica de Fluidos", subtopic: "Hidrodinâmica", name: "Lei de Torricelli",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Mecânica de Fluidos", subtopic: "Hidrodinâmica", name: "Tubo de Venturi",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Condensador", name: "Condensador esférico",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Lei de Ampère", name: "Visualização do comportamento de bússolas com corrente num circuito",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Lei de Ampère", name: "Força que atua num fio com corrente ao aproximar um íman",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Lei de Ampère", name: "Campo magnetostático em torno de espira e solenoide com corrente elétrica",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Magnetismo na matéria", name: "Modelo 2D",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Indução eletromagnética", name: "Eletromagnetismo na matéria: correntes de Foucault e travão magnético",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Motores", name: "Gerador e motor de corrente contínua",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Motores", name: "Gerador de corrente alterna e motores",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Lei de Ohm",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Leis de Kirchhoff",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Condensadores em paralelo num circuito de corrente contínua",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Condensadores em série num circuito de corrente contínua",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Resistências em paralelo num circuito de corrente contínua",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Resistências em série num circuito de corrente contínua",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Circuito RC, carga e descarga de um condensador",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Importância da bobine num circuito de corrente contínua: circuito RL",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Circuitos em corrente alterna",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Condensador num circuito de corrente alterna",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Bobina num circuito de corrente alterna, fase na bobina",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Resistência num circuito de corrente alterna, fase na resistência",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Circuito RLC em ressonância",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Circuitos elétricos", name: "Transformador e suas propriedades: Vin versus Vout",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Eletromagnetismo", subtopic: "Luz como campo eletromagnético", name: "Espetro contínuo do sol",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "", name: "Gerador de ondas centimétricas",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "", name: "Refração da luz na água e ângulo crítico",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "", name: "Ondas eletromagnéticas e polarizadores",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Óptica geométrica", name: "Lentes, espelhos e prismas",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Ondas", subtopic: "Ótica ondulatória", name: "Interferência e difração de luz em rede de difração",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Termodinâmica e Física estatística", subtopic: "Gases ideais", name: "Variação da pressão do ar com a variação do volume",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Termodinâmica e Física estatística", subtopic: "Transmissão de calor", name: "Condutividade térmica",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Termodinâmica e Física estatística", subtopic: "Transmissão de calor", name: "Transmissão de calor por radiação: radiação infra-vermelha",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Termodinâmica e Física estatística", subtopic: "Transmissão de calor", name: "Transmissão de calor por convecção",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Termodinâmica e Física estatística", subtopic: "Máquinas térmicas", name: "Motor a gasolina a 4 tempos",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Termodinâmica e Física estatística", subtopic: "Máquinas térmicas", name: "Motor a Diesel: modelo de demonstração",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Termodinâmica e Física estatística", subtopic: "Máquinas térmicas", name: "Motor a dois tempos: modelo de demonstração",
    objetivo: "", equipamento: "", procedimento: ""
  },
  {
    id: null, topic: "Mecânica quântica", subtopic: "Efeito foto-elétrico", name: "Painéis solares",
    objetivo: "", equipamento: "", procedimento: ""
  },
];
