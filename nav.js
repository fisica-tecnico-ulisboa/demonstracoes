// nav.js
// Builds the header + navigation bar and injects it into every page.
// Why: instead of copy-pasting the same <header> HTML into 8+ files,
// we keep ONE definition here. Change a link once, it updates everywhere.

const NAV_LINKS = [
  { label: "Início", href: "index.html" },
  { label: "Funcionamento", href: "funcionamento.html" },
  { label: "Anúncios", href: "anuncios.html" },
  { label: "Contactos", href: "contactos.html" },
  { label: "Experiências", href: "experiencias.html" },
  {
    label: "Cursos e organização",
    href: "cursos.html",
    dropdown: [
      { label: "Física 1 (LEBiol e LEBiom)", href: "cursos.html#fisica1" },
      { label: "Oscilações e Ondas (LEFT)", href: "cursos.html#oscilacoes-ondas" },
      { label: "Mecânica e Ondas (LEQ)", href: "cursos.html#mecanica-ondas" }
    ]
  },
  { label: "Organização", href: "organizacao.html" }
];

function buildHeader() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navHTML = NAV_LINKS.map(link => {
    const isActive = currentPage === link.href.split("#")[0];

    if (link.dropdown) {
      const subLinks = link.dropdown
        .map(sub => `<a href="${sub.href}">${sub.label}</a>`)
        .join("");
      return `
        <div class="dropdown">
          <a href="${link.href}" class="${isActive ? "active" : ""}">${link.label}</a>
          <div class="dropdown-menu">${subLinks}</div>
        </div>`;
    }

    return `<a href="${link.href}" class="${isActive ? "active" : ""}">${link.label}</a>`;
  }).join("");

  return `
    <header class="site-header">
      <div class="top-bar">
        <span>LabDEMO: experiências em aulas teóricas</span>
      </div>
      <nav class="site-nav">${navHTML}</nav>
    </header>`;
}

function buildFooter() {
  return `
    <footer class="site-footer">
      <p>LabDEMO — Departamento de Física, Instituto Superior Técnico</p>
    </footer>`;
}

// Inject into the placeholder <div>s that every page includes.
document.getElementById("site-header").innerHTML = buildHeader();
document.getElementById("site-footer").innerHTML = buildFooter();
