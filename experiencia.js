// experiencia.js
// Renders ONE experiment's page. Which one? Read from the URL query string,
// e.g. experiencia.html?id=pendulo-balistico -> id = "pendulo-balistico".
// This is the same template for all ~70 experiments — only the data changes.

function getExperimentIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderExperiment() {
  const id = getExperimentIdFromURL();
  const experiment = EXPERIMENTS.find(exp => exp.id === id);

  if (!experiment) {
    document.querySelector("main").innerHTML =
      "<h1>Experiência não encontrada</h1><p><a href='experiencias.html'>Voltar à lista de experiências</a></p>";
    return;
  }

  document.getElementById("page-title").textContent = experiment.name + " · LabDEMO";
  document.getElementById("exp-name").textContent = experiment.name;
  document.getElementById("exp-topic").textContent = experiment.topic;
  document.getElementById("exp-objetivo").textContent = experiment.objetivo || "Informação em breve.";
  document.getElementById("exp-equipamento").textContent = experiment.equipamento || "Informação em breve.";
  document.getElementById("exp-procedimento").textContent = experiment.procedimento || "Informação em breve.";
}

renderExperiment();
