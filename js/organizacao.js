// organizacao.js
// Draws a blueprint of the lab as an SVG, one per floor. Each shelf is a
// clickable <rect>; clicking it opens a panel listing the experiments
// stored on that shelf, each linking to its real experiencia.html page.
//
// FLOORS: real shelf codes and positions, traced from the lab's official
// blueprint (Blueprint Labdemo.pdf). Coordinates are the blueprint's own
// units, so they line up with the real room layout.
//
// SHELF_ASSIGNMENTS is still PLACEHOLDER DATA: which experiment lives on
// which shelf isn't decided yet (that's what the new topic/shelf Excel is
// for). Replace buildDummyShelfAssignments() with the real mapping once
// it's ready — nothing else in this file needs to change.

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

// Dummy round-robin assignment of real experiments to shelf ids, just so the
// click-through demo works end to end with real experiment pages.
function buildDummyShelfAssignments() {
  const allShelfIds = FLOORS
    .flatMap(floor => floor.shelves)
    .filter(shelf => !shelf.isDoor)
    .map(shelf => shelf.id);

  const assignments = {};
  allShelfIds.forEach(id => (assignments[id] = []));

  EXPERIMENTS.forEach((exp, i) => {
    const shelfId = allShelfIds[i % allShelfIds.length];
    assignments[shelfId].push(exp);
  });

  return assignments;
}

const SHELF_ASSIGNMENTS = buildDummyShelfAssignments();

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
  const experiments = SHELF_ASSIGNMENTS[shelf.id] || [];

  document.getElementById("shelf-panel-title").textContent = `Prateleira ${shelf.code}`;
  document.getElementById("shelf-panel-list").innerHTML = experiments.length
    ? experiments.map(exp => `<li><a href="experiencia.html?id=${exp.id}">${exp.name}</a></li>`).join("")
    : "<li>Sem experiências atribuídas.</li>";

  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeShelfPanel() {
  document.getElementById("shelf-panel").hidden = true;
}

document.getElementById("shelf-panel-close").addEventListener("click", closeShelfPanel);

renderFloorTabs();
renderFloorPlan();
