// organizacao.js
// Draws a blueprint of the lab as an SVG, one per floor. Each shelf is a
// clickable <rect>; clicking it opens a panel listing the experiments
// stored on that shelf, each linking to its real experiencia.html page.
//
// FLOORS: real shelf codes and positions, traced from the lab's official
// blueprint (Blueprint Labdemo.pdf). Coordinates are the blueprint's own
// units, so they line up with the real room layout.
//
// SHELF_ASSIGNMENTS (built from SHELF_DETAIL below) holds the real
// shelf-to-experiment mapping from "LabDemo sheets.xlsx".

const FLOORS = [
  {
    id: 1,
    label: "Piso 1",
    width: 960,
    height: 540,
    shelves: [
      { id: "c06", code: "C06", x: 175.7, y: 102.3, w: 83.5, h: 48.9 },
      { id: "door1", code: "Porta", x: 395.9, y: 97.3, w: 150.7, h: 30.8, isDoor: true },
      { id: "a01", code: "A01", x: 612.7, y: 102.3, w: 54.7, h: 79.2 },
      { id: "a02", code: "A02", x: 681.1, y: 102.3, w: 54.7, h: 79.2 },
      { id: "a03", code: "A03", x: 748.8, y: 101.55, w: 108.72, h: 153.39 },
      { id: "c01", code: "C01", x: 289.4, y: 158.4, w: 54.8, h: 90.8 },
      { id: "b05", code: "B05", x: 375.8, y: 158.4, w: 55.5, h: 79.3 },
      { id: "c05", code: "C05", x: 110.9, y: 187.2, w: 54.7, h: 90.8 },
      { id: "c02", code: "C02", x: 289.4, y: 257.1, w: 54.8, h: 90.8 },
      { id: "b04", code: "B04", x: 375.8, y: 246.3, w: 55.5, h: 79.2 },
      { id: "a04", code: "A04", x: 802.8, y: 262.9, w: 54.7, h: 79.2 },
      { id: "b01", code: "B01", x: 612.7, y: 286.6, w: 54.7, h: 167.8 },
      { id: "a05", code: "A05", x: 802.8, y: 347.9, w: 54.7, h: 79.2 },
      { id: "b03a", code: "B03", x: 375.8, y: 334.2, w: 55.5, h: 120.2 },
      { id: "c03", code: "C03", x: 290.2, y: 355.0, w: 54.7, h: 90.1 },
      { id: "c04", code: "C04", x: 206.6, y: 400.4, w: 71.3, h: 44.0 },
      { id: "b02", code: "B02", x: 442.8, y: 400.4, w: 158.4, h: 54.0 },
      { id: "torneira1", code: "Torneira", x: 102.9, y: 415.6, w: 100.2, h: 30.2, isDoor: true },
      { id: "escadas1", code: "Escadas", x: 694.7, y: 429.3, w: 143.5, h: 30.1, isDoor: true }
    ]
  },
  {
    id: 2,
    label: "Piso 2",
    width: 960,
    height: 540,
    shelves: [
      { id: "d06", code: "D06", x: 110.9, y: 103.0, w: 97.9, h: 70.6 },
      { id: "d05", code: "D05", x: 242.6, y: 103.0, w: 98.6, h: 70.6 },
      { id: "d04", code: "D04", x: 375.1, y: 103.0, w: 97.9, h: 70.6 },
      { id: "d03", code: "D03", x: 507.6, y: 103.0, w: 97.9, h: 70.6 },
      { id: "d02", code: "D02", x: 639.4, y: 103.0, w: 97.9, h: 70.6 },
      { id: "d01", code: "D01", x: 771.8, y: 103.0, w: 97.9, h: 70.6 },
      { id: "f04", code: "F04", x: 110.9, y: 252.1, w: 130.3, h: 70.5 },
      { id: "f03", code: "F03", x: 254.9, y: 252.1, w: 130.3, h: 70.5 },
      { id: "f02", code: "F02", x: 398.9, y: 252.1, w: 130.3, h: 70.5 },
      { id: "f01", code: "F01", x: 542.9, y: 252.1, w: 130.3, h: 70.5 },
      { id: "e05", code: "E05", x: 110.9, y: 398.3, w: 105.1, h: 70.5 },
      { id: "e04", code: "E04", x: 225.4, y: 398.3, w: 105.1, h: 70.5 },
      { id: "e03", code: "E03", x: 339.8, y: 398.3, w: 105.2, h: 70.5 },
      { id: "e02", code: "E02", x: 454.3, y: 398.3, w: 105.1, h: 70.5 },
      { id: "e01", code: "E01", x: 568.8, y: 398.3, w: 105.1, h: 70.5 },
      { id: "door2", code: "Porta", x: 707.0, y: 408.4, w: 142.7, h: 30.2, isDoor: true },
      { id: "escadas2", code: "Escadas", x: 707.0, y: 440.8, w: 142.7, h: 30.9, isDoor: true }
    ]
  }
];

// SHELF_DETAIL comes from the lab's "LabDemo sheets.xlsx": the "Parteleiras -
// codigos" tab gives every real sub-parteleira code that exists for a shelf
// (e.g. A01.1..A01.5) and its descriptive category name; the "Mapping
// experiencias" tab gives, per experiment, which exact sub-parteleira(s) it
// is stored in. Each shelf code below lists ALL of its sub-parteleiras, even
// when they share the same category name or have no experiments at all —
// experiments is just [] in that case (rendered with no placeholder text).
// id is null when the experiment has no dedicated subpage yet.
const SHELF_DETAIL = {
  "A01": [
    { subcode: "A01.1", name: "Instrumentos de Medição", experiments: [
      { name: "Instrumentos de medição de várias grandezas em física: massa, comprimento, tempo, corrente elétrica etc", id: "medicao-de-grandezas-em-fisica" },
    ] },
    { subcode: "A01.2", name: "Instrumentos de Medição", experiments: [
      { name: "Instrumentos de medição de várias grandezas em física: massa, comprimento, tempo, corrente elétrica etc", id: "medicao-de-grandezas-em-fisica" },
      { name: "Ação-reação", id: "acao-reacao" },
    ] },
    { subcode: "A01.3", name: "Instrumentos de Medição", experiments: [
      { name: "Instrumentos de medição de várias grandezas em física: massa, comprimento, tempo, corrente elétrica etc", id: "medicao-de-grandezas-em-fisica" },
    ] },
    { subcode: "A01.4", name: "Instrumentos de Medição", experiments: [
      { name: "Instrumentos de medição de várias grandezas em física: massa, comprimento, tempo, corrente elétrica etc", id: "medicao-de-grandezas-em-fisica" },
      { name: "Impulsão e lei de Arquimedes: comparação no ar e na água", id: "impulsao-em-agua-e-no-ar-comparacao" },
    ] },
    { subcode: "A01.5", name: "Instrumentos de Medição", experiments: [
      { name: "Instrumentos de medição de várias grandezas em física: massa, comprimento, tempo, corrente elétrica etc", id: "medicao-de-grandezas-em-fisica" },
    ] },
  ],
  "A02": [
    { subcode: "A02.1", name: "Cinemática", experiments: [
      { name: "Bola em queda livre (posição, velocidade e aceleração)", id: "queda-de-grave-posicao-velocidade-e-aceleracao" },
    ] },
    { subcode: "A02.2", name: "Cinemática", experiments: [
      { name: "Movimento de bolas com densidades uniforme e não uniforme", id: "nocao-de-ponto-material" },
      { name: "Tempos de queda de um grave com diferentes velocidades iniciais", id: "lancamento-de-graves-com-diferentes-componentes-das-velocidades-iniciais" },
      { name: "Projéteis", id: "queda-de-graves" },
    ] },
    { subcode: "A02.3", name: "Oscilações", experiments: [
      { name: "Período de um pêndulo", id: "analise-dimensional-periodo-de-um-pendulo" },
      { name: "Pêndulo cónico", id: "pendulo-conico" },
      { name: "Pêndulo de Newton", id: "pendulo-de-newton" },
      { name: "Oscilações forçadas em massa suspensa em mola", id: "ressonancia-em-sistema-massa-mola" },
      { name: "Ondas transversais em mola", id: null },
      { name: "Polarização de ondas mecânicas em corda", id: "polarizacao-de-ondas-mecanicas" },
    ] },
    { subcode: "A02.4", name: "Colisões", experiments: [
      { name: "Colisões elásticas em calha de ar", id: "colisoes-elasticas-em-calha-de-ar" },
      { name: "Colisões inelásticas em calha de ar", id: "colisoes-inelasticas-em-calha-de-ar" },
      { name: "Oscilações livres de uma massa presa a molas numa calha de ar", id: "oscilacoes-livres-de-uma-massa-presa-a-molas-numa-calha" },
      { name: "Oscilações em calha de ar de massas acopladas", id: "oscilacoes-de-duas-massas-acopladas" },
      { name: "Carro balístico", id: "carro-balistico" },
    ] },
    { subcode: "A02.5", name: "Momento Linear", experiments: [
      { name: "Carro balístico", id: "carro-balistico" },
    ] },
  ],
  "A03": [
    { subcode: "A03.1", name: "Ondas", experiments: [
      { name: "Sobreposição de ondas mecânicas em corda vibrante: guitarra", id: "guitarra" },
      { name: "Ondas sonoras com frequências iguais e ressonância", id: "ondas-com-frequencias-iguais" },
      { name: "Sobreposição de ondas com frequências próximas: batimentos", id: "sobreposicao-de-ondas-sonoras-com-frequencias-proximas-batimentos" },
      { name: "Ondas sonoras: análise de Fourier de um sinal sonoro", id: "ondas-sonoras-transformada-de-fourier-de-um-sinal-sonoro" },
    ] },
    { subcode: "A03.2", name: "Ondas", experiments: [
      { name: "Demonstrador de ondas mecânicas transversais", id: "demonstrador-de-ondas-mecanicas-transversais" },
      { name: "Ondas: noções fundamentais", id: "ondas-transversais-em-corda-nocoes-fundamentais" },
    ] },
    { subcode: "A03.3", name: "Ondas", experiments: [
      { name: "Espetro do sol", id: null },
      { name: "Espectros discretos de lâmpadas de gases", id: "lampadas-espetrais" },
      { name: "Espetro do hélio e espetro do sódio", id: "lampadas-espetrais" },
      { name: "Difração de eletrões: comprimento de onda de eletrões", id: "difracao-de-eletroes" },
    ] },
    { subcode: "A03.4", name: "Ondas", experiments: [
      { name: "Onda transversal em mola e reflexão nas extremidades: solta ou fixa", id: "mola-reflexao-de-onda-em-extremidade-livre-ou-fixa" },
      { name: "Fase da onda refletida: extremidades soltas ou livres", id: "mola-reflexao-de-onda-em-extremidade-livre-ou-fixa" },
      { name: "Figuras de Chladni", id: "figuras-de-chladni" },
    ] },
    { subcode: "A03.5", name: "Ondas", experiments: [] },
  ],
  "A04": [
    { subcode: "A04.1", name: "Corpo Rígido", experiments: [
      { name: "Velocidade tangencial e angular de vários pontos de um disco a rodar sem deslizar", id: null },
      { name: "Velocidade de vários pontos de uma roda a rodar sem deslizar relativamente à superfície de rotação", id: null },
    ] },
    { subcode: "A04.2", name: "Corpo Rígido", experiments: [
      { name: "Força de atrito e coeficiente de atrito em plano inclinado", id: "forca-de-atrito" },
      { name: "Movimento de cilindro oco de metal e cilindro de madeira, massas iguais, em plano inclinado", id: "corpos-rigidos-em-rotacao-em-plano-inclinado" },
    ] },
    { subcode: "A04.3", name: "Momento Angular", experiments: [
      { name: "Velocidade tangencial, velocidade angular e raio da trajetória", id: "velocidade-tangencial-velocidade-angular-e-raio-da-trajetoria" },
      { name: "Força centrípeta", id: "forca-centriipeta" },
      { name: "Giroscópio: precessão e nutação; giroscópio manual", id: "giroscopio-manual" },
    ] },
    { subcode: "A04.4", name: "Momento Angular", experiments: [
      { name: "Centro de massa e 2ª Lei de Newton para o corpo rígido", id: "dinamica-do-corpo-rigido-e-centro-de-massa" },
      { name: "Pião que inverte", id: "piao-que-inverte-a-rotacao-tippe-top-a35" },
      { name: "Equilíbrio de uma estrutura metálica", id: "equilibrio-de-estrutura-metalica" },
    ] },
    { subcode: "A04.5", name: "Centro de Massa", experiments: [] },
  ],
  "A05": [
    { subcode: "A05.1", name: "Caixas de Transporte", experiments: [] },
    { subcode: "A05.2", name: "Vácuo", experiments: [
      { name: "Pressão do ar: hemisférios de Magdeburgo", id: "pressao-do-ar-hemisferios-de-magdeburgo" },
    ] },
    { subcode: "A05.3", name: "Vácuo", experiments: [
      { name: "Queda de pena e esfera em tubo de vácuo", id: null },
      { name: "Impulsão e lei de Arquimedes: impulsão no ar a diferentes pressões", id: "impulsao-do-ar" },
      { name: "Transição de fase água-vapor a baixa pressão", id: "transicao-de-fase-agua-vapor-a-baixa-pressao" },
    ] },
    { subcode: "A05.4", name: "Vácuo", experiments: [
      { name: "Pressão do ar: hemisférios de Magdeburgo", id: "pressao-do-ar-hemisferios-de-magdeburgo" },
    ] },
  ],
  "B01": [
    { subcode: "B01", name: "Queda Livre / Conservação de Energia", experiments: [
      { name: "Projéteis e tiro ao alvo", id: "tiro-ao-alvo" },
      { name: "Molas e coeficiente de elasticidade", id: "lei-de-hooke" },
      { name: "Equilíbrio em roldanas", id: "roldanas" },
      { name: "Pêndulo Balístico", id: "pendulo-balistico" },
      { name: "Modelo mecânico de braço humano", id: "modelo-de-braco-e-lancamento-de-bola" },
      { name: "Conservação de momento angular em sistema com dois discos", id: "conservacao-de-momento-angular-em-sistema-com-dois-discos" },
      { name: "Oscilações livres de uma massa suspensa numa mola", id: "oscilacoes-de-massa-suspensa-a-mola" },
      { name: "Pêndulo: movimento em pequenos ângulos, oscilações livres e amortecidas", id: "pendulo" },
    ] },
  ],
  "B02": [
    { subcode: "B02", name: "Corpo Rígido", experiments: [
      { name: "Calha com looping", id: "calha-com-looping" },
      { name: "Balança de pratos e momento de forças", id: "balanca-e-momento-de-forcas" },
      { name: "Equilíbrio de um corpo rígido suspenso", id: "centro-de-massa-e-equilibrio-de-um-corpo-rigido---1" },
      { name: "Equilíbrio estável e equilíbrio instável. Oscilações", id: "equilibrio-estavel-e-equilibrio-instavel" },
      { name: "Oscilações amortecidas num sistema massa mola", id: "oscilacao-de-massa-suspensa-em-mola---amortecidas" },
    ] },
  ],
  "B03": [
    { subcode: "B03", name: "Ótica", experiments: [
      { name: "Ondas em tina de água: frequência, frente de onda, ondas planas e esféricas", id: "ondas-em-tina-de-ondas-com-agua" },
      { name: "Ondas planas e ondas esféricas em tina de ondas", id: "ondas-em-tina-de-ondas-com-agua" },
      { name: "Dispersão da luz num prisma", id: "dispersao-de-luz" },
      { name: "Interferência de ondas numa tina de ondas: experiência com duas fendas", id: null },
      { name: "Reflexão de luz na superfície de um disco compacto e padrão de interferência", id: "reflexao-de-luz-1d0" },
      { name: "Difração de ondas em tina de água", id: null },
      { name: "Refração da luz num paralelepípedo", id: "refracao-de-luz" },
    ] },
  ],
  "B04": [
    { subcode: "B04", name: "Ótica", experiments: [
      { name: "Rotação de uma roda de bicicleta e o momento angular", id: "rotacao-de-uma-roda-de-bicicleta-e-momento-angular" },
      { name: "Roda de bicicleta, banco rotativo e conservação do momento angular", id: "conservacao-de-momento-angular-com-banco-giratorio" },
      { name: "Conservação do momento angular com banco giratório e pesos", id: "conservacao-de-momento-angular-com-banco-giratorio" },
      { name: "Roda da bicicleta e precessão", id: null },
      { name: "Lei de Snell-Descartes e ângulo crítico na fronteira água-ar", id: "lei-de-snell-decartes-e-angulo-critico-na-fronteira-agua-ar" },
    ] },
  ],
  "B05": [
    { subcode: "B05", name: "Ótica", experiments: [
      { name: "Lançamento de uma massa a partir de um hovercraft e posição do centro de massa", id: null },
      { name: "Lançamento de uma massa por um patinador em repouso e centro de massa", id: null },
      { name: "Banco ótico: sistemas com espelhos e lentes côncavas e convexas", id: "banco-otico-sistemas-com-lentes-concavas-e-convexas" },
    ] },
  ],
  "C01": [
    { subcode: "C01.1", name: "Mecânica de Fluídos", experiments: [
      { name: "Medição da temperatura: termómetro de Galileo, termómetro por infra-vermelho", id: "termometro-de-galileo" },
      { name: "Termómetro de Galileo e a força de Arquimedes a várias temperaturas", id: "termometro-de-galileo" },
    ] },
    { subcode: "C01.2", name: "Mecânica de Fluídos", experiments: [
      { name: "Pressão no interior de um líquido: diabo mergulhador", id: "diabo-mergulhador" },
    ] },
  ],
  "C02": [
    { subcode: "C02.2", name: "Mecânica de Fluídos", experiments: [
      { name: "Princípio de Pascal: elevador hidráulico", id: "elevador-hidraulico" },
    ] },
    { subcode: "C02.3", name: "Mecânica de Fluídos", experiments: [] },
    { subcode: "C02.4", name: "Mecânica de Fluídos", experiments: [] },
  ],
  "C03": [
    { subcode: "C03.1", name: "Mecânica de Fluídos", experiments: [] },
    { subcode: "C03.2", name: "Mecânica de Fluídos", experiments: [] },
    { subcode: "C03.3", name: "Mecânica de Fluídos", experiments: [] },
    { subcode: "C03.4", name: "Mecânica de Fluídos", experiments: [] },
  ],
  "C04": [
    { subcode: "C04", name: "Mecânica de Fluídos", experiments: [
      { name: "Equação de Bernoulli: escoamento de água em tubo; sifão", id: "escoamento-em-tubos" },
    ] },
  ],
  "C05": [
    { subcode: "C05", name: "Experiências Aulas", experiments: [] },
  ],
  "C06": [
    { subcode: "C06", name: "Zona de Montagem / Acessórios", experiments: [] },
  ],
  "D01": [
    { subcode: "D01", name: "Indução EM", experiments: [
      { name: "Eletromagnetismo na matéria: correntes de Foucault e travão magnético", id: null },
    ] },
  ],
  "D02": [
    { subcode: "D02", name: "Circuitos Elétricos", experiments: [
      { name: "Gerador e motor de corrente contínua", id: null },
      { name: "Gerador de corrente alterna e motores", id: null },
      { name: "Lei de Ohm", id: null },
      { name: "Leis de Kirchhoff", id: null },
    ] },
  ],
  "D03": [
    { subcode: "D03", name: "Indução EM", experiments: [
      { name: "Indução eletromagnética de Faraday", id: "inducao-eletromagnetica-de-faraday" },
      { name: "Lei de Lenz em queda de íman através de um tubo de cobre", id: "lei-de-lenz" },
    ] },
  ],
  "D04": [
    { subcode: "D04", name: null, experiments: [
      { name: "Pêndulos acoplados", id: "oscilacoes-de-pendulos-acoplados" },
    ] },
  ],
  "D05": [
    { subcode: "D05", name: "Motores Térmicos", experiments: [
      { name: "Motor a gasolina a 4 tempos", id: null },
      { name: "Motor a Diesel: modelo de demonstração", id: null },
      { name: "Motor a dois tempos: modelo de demonstração", id: null },
    ] },
  ],
  "D06": [
    { subcode: "D06", name: "Corpo Negro", experiments: [] },
  ],
  "E01": [
    { subcode: "E01", name: "Fibras Óticas", experiments: [
      { name: "Fibras óticas", id: "fibras-oticas" },
      { name: "Fibra ótica com água: reflexão total em água corrente", id: "fibra-otica-com-agua" },
    ] },
  ],
  "E02": [
    { subcode: "E02", name: null, experiments: [
      { name: "Cargas, campos e potencial eletrostático", id: "cargas-campos-e-potencial-eletrostatico" },
    ] },
  ],
  "E03": [
    { subcode: "E03", name: "Campo Magnético", experiments: [
      { name: "Linhas de campo magnético provocado por um ou mais ímans (2D)", id: "coijclkn" },
      { name: "Visualização a 3D das linhas do campo magnético criado por um íman", id: "visualizacao-3d-de-linhas-de-campo-magnetico" },
    ] },
  ],
  "E04": [
    { subcode: "E04", name: "Condensadores", experiments: [
      { name: "Condensador plano e capacidade de um condensador plano", id: "dieletricos-e-condensador-plano" },
      { name: "Capacidade de um condensador plano com um dielétrico", id: "dieletricos-e-condensador-plano" },
    ] },
  ],
  "E05": [
    { subcode: "E05", name: null, experiments: [] },
  ],
  "F01": [
    { subcode: "F01", name: "Polarização", experiments: [
      { name: "Polarização de ondas eletromagnéticas e filtros polarizadores; polarização em reflexão", id: "polarizacao-de-ondas-eletromagneticas-e-filtros-polarizadores" },
      { name: "Rede de difração e padrão de interferência para vários comprimentos de onda", id: null },
    ] },
  ],
  "F02": [
    { subcode: "F02", name: "Ótica", experiments: [
      { name: "Interferómetro de Michelson", id: "interferometro-de-michelson" },
    ] },
  ],
  "F03": [
    { subcode: "F03", name: "Ótica", experiments: [
      { name: "Interferómetro de Michelson", id: "interferometro-de-michelson" },
    ] },
  ],
  "F04": [
    { subcode: "F04", name: "Ótica", experiments: [] },
  ],
};

function buildShelfAssignments() {
  const assignments = {};

  FLOORS.forEach(floor => {
    floor.shelves.forEach(shelf => {
      if (shelf.isDoor) return;
      assignments[shelf.id] = SHELF_DETAIL[shelf.code] || [];
    });
  });

  return assignments;
}

const SHELF_ASSIGNMENTS = buildShelfAssignments();

// Flat index of every experiment, used by the search bar to find which
// shelf(es) it's stored in.
function buildSearchIndex() {
  const index = [];
  FLOORS.forEach(floor => {
    floor.shelves.forEach(shelf => {
      if (shelf.isDoor) return;
      (SHELF_ASSIGNMENTS[shelf.id] || []).forEach(sub => {
        sub.experiments.forEach(exp => {
          index.push({ floorId: floor.id, shelfId: shelf.id, shelfCode: shelf.code, expName: exp.name });
        });
      });
    });
  });
  return index;
}

const SEARCH_INDEX = buildSearchIndex();

let activeFloorId = FLOORS[0].id;

function renderFloorTabs() {
  const container = document.getElementById("floor-tabs");
  container.innerHTML = FLOORS.map(floor =>
    `<button data-floor="${floor.id}" class="${floor.id === activeFloorId ? "active" : ""}">${floor.label}</button>`
  ).join("");

  container.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeFloorId = Number(btn.dataset.floor);
      renderFloorTabs();
      renderFloorPlan();
      closeShelfPanel();
    });
  });
}

function renderFloorPlan() {
  const floor = FLOORS.find(f => f.id === activeFloorId);
  const container = document.getElementById("floor-plan-container");

  const shelvesSVG = floor.shelves.map(shelf => `
    <g class="shelf-group" data-shelf="${shelf.id}">
      <rect class="shelf ${shelf.isDoor ? "door" : ""}"
            x="${shelf.x}" y="${shelf.y}" width="${shelf.w}" height="${shelf.h}" rx="6" />
      <text class="shelf-label" x="${shelf.x + shelf.w / 2}" y="${shelf.y + shelf.h / 2}">${shelf.code}</text>
    </g>
  `).join("");

  container.innerHTML = `
    <svg viewBox="0 0 ${floor.width} ${floor.height}" width="100%">
      ${shelvesSVG}
    </svg>`;

  container.querySelectorAll(".shelf-group").forEach(group => {
    const shelfId = group.dataset.shelf;
    const shelf = floor.shelves.find(s => s.id === shelfId);
    if (shelf.isDoor) return;
    group.addEventListener("click", () => openShelfPanel(shelf));
  });
}

function openShelfPanel(shelf) {
  const panel = document.getElementById("shelf-panel");
  const subshelves = SHELF_ASSIGNMENTS[shelf.id] || [];

  // When a shelf has just one sub-parteleira, show its name in the title
  // instead of repeating it as a section header below.
  const title = subshelves.length === 1 && subshelves[0].name
    ? `Prateleira ${shelf.code} — ${subshelves[0].name}`
    : `Prateleira ${shelf.code}`;
  document.getElementById("shelf-panel-title").textContent = title;

  const renderExpItem = exp => exp.id
    ? `<li><a href="experiencia.html?id=${exp.id}">${exp.name}</a></li>`
    : `<li>${exp.name}</li>`;

  let html;
  if (!subshelves.length) {
    html = "<li>Sem parteleiras registadas.</li>";
  } else if (subshelves.length === 1) {
    html = subshelves[0].experiments.map(renderExpItem).join("");
  } else {
    // Show every sub-parteleira (e.g. A01.1..A01.5), even when several
    // share the same name or have no experiments assigned.
    html = subshelves.map(sub => {
      const header = sub.name ? `${sub.subcode} — ${sub.name}` : sub.subcode;
      return `<li class="shelf-category">${header}</li>${sub.experiments.map(renderExpItem).join("")}`;
    }).join("");
  }

  document.getElementById("shelf-panel-list").innerHTML = html;

  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeShelfPanel() {
  document.getElementById("shelf-panel").hidden = true;
}

function clearShelfHighlights() {
  document.querySelectorAll(".shelf-group.shelf-highlight").forEach(g => g.classList.remove("shelf-highlight"));
}

function highlightShelves(shelfIds) {
  shelfIds.forEach(id => {
    const group = document.querySelector(`.shelf-group[data-shelf="${id}"]`);
    if (group) group.classList.add("shelf-highlight");
  });
}

function searchExperiment(query) {
  const feedback = document.getElementById("shelf-search-feedback");
  clearShelfHighlights();

  const q = query.trim().toLowerCase();
  if (!q) {
    feedback.textContent = "";
    return;
  }

  const matches = SEARCH_INDEX.filter(entry => entry.expName.toLowerCase().includes(q));
  if (!matches.length) {
    feedback.textContent = `Nenhuma experiência encontrada para "${query}".`;
    return;
  }

  const floorIds = [...new Set(matches.map(m => m.floorId))];
  if (!floorIds.includes(activeFloorId)) {
    activeFloorId = floorIds[0];
    renderFloorTabs();
    renderFloorPlan();
  }

  const shelfIdsOnActiveFloor = [...new Set(matches.filter(m => m.floorId === activeFloorId).map(m => m.shelfId))];
  highlightShelves(shelfIdsOnActiveFloor);

  const codes = [...new Set(matches.map(m => m.shelfCode))].join(", ");
  const hasOtherFloor = floorIds.length > 1;
  feedback.textContent = hasOtherFloor
    ? `Encontrado em: ${codes} (existem resultados em mais do que um piso).`
    : `Encontrado em: ${codes}`;
}

document.getElementById("shelf-panel-close").addEventListener("click", closeShelfPanel);

const shelfSearchInput = document.getElementById("shelf-search-input");
shelfSearchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchExperiment(shelfSearchInput.value);
  }
});

renderFloorTabs();
renderFloorPlan();
