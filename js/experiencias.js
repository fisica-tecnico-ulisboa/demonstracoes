// experiencias.js
// Builds the "Experiências" list page by grouping EXPERIMENTS (from data.js)
// by topic. This is the payoff of the data-driven approach: adding a new
// experiment to data.js is enough for it to show up here automatically.

function slugify(text) {
  return text
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // strip accents
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function groupByTopic(experiments) {
  const groups = {};
  experiments.forEach(exp => {
    if (!groups[exp.topic]) groups[exp.topic] = [];
    groups[exp.topic].push(exp);
  });
  return groups;
}

function renderExperimentList() {
  const groups = groupByTopic(EXPERIMENTS);
  const container = document.getElementById("experiment-list");

  const html = Object.entries(groups).map(([topic, experiments]) => {
    const items = experiments
      .map(exp => `<li><a href="experiencia.html?id=${exp.id}">${exp.name}</a></li>`)
      .join("");

    return `
      <section id="${slugify(topic)}">
        <h2>${topic}</h2>
        <ul>${items}</ul>
      </section>`;
  }).join("");

  container.innerHTML = html;
}

renderExperimentList();
