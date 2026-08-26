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

function groupBySubtopic(experiments) {
  const groups = {};
  experiments.forEach(exp => {
    const key = exp.subtopic || "";
    if (!groups[key]) groups[key] = [];
    groups[key].push(exp);
  });
  return groups;
}

function renderExperimentList() {
  const groups = groupByTopic(EXPERIMENTS);
  const container = document.getElementById("experiment-list");

  const html = Object.entries(groups).map(([topic, experiments]) => {
    const subgroups = groupBySubtopic(experiments);

    const subsectionsHtml = Object.entries(subgroups).map(([subtopic, exps]) => {
      const items = exps
        .map(exp => exp.id
          ? `<li><a href="experiencia.html?id=${exp.id}">${exp.name}</a></li>`
          : `<li>${exp.name}</li>`
        )
        .join("");

      return subtopic
        ? `<div class="subtopic"><h3>${subtopic}</h3><ul>${items}</ul></div>`
        : `<div class="subtopic"><ul>${items}</ul></div>`;
    }).join("");

    return `
      <section id="${slugify(topic)}">
        <h2>${topic}</h2>
        ${subsectionsHtml}
      </section>`;
  }).join("");

  container.innerHTML = html;
}

renderExperimentList();
