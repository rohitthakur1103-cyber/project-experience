const featuredProjects = [
  {
    id: "usl-analysis",
    eyebrow: "Featured project",
    title: "USL League Two League-Wide Analysis",
    status: "Artifact ready",
    statusClass: "",
    summary:
      "A season-wide analytics project focused on extracting useful signals from large sports datasets and turning them into clear, usable findings.",
    metrics: ["850+ matches", "4,500+ players", "SQL + Python"],
    problem:
      "Scouting and pathway decisions were sitting inside raw league data, which made it difficult to compare impact across players, teams, and different points in the season.",
    approach: [
      "Queried official league data with SQL and Python.",
      "Filtered for 300+ minutes so the rankings reflected meaningful contributions.",
      "Compared mid-season and full-season snapshots to test whether early trends held up.",
      "Turned the output into presentation-ready visuals and takeaways for scouts and decision-makers."
    ],
    tools: ["SQL", "Python", "Excel", "Presentation design", "Scouting analysis"],
    changed: [
      "Highlighted scoring windows, age-based development peaks, and late-game patterns with practical scouting value.",
      "Identified players and teams that stood out across goals, assists, and goal involvement.",
      "Created a deck that can be used directly in conversations about recruitment, development, and player pathways."
    ],
    artifactLabel: "Open analysis deck",
    artifactHref: "assets/documents/usl-league-wide-analysis.pptx"
  },
  {
    id: "project-experience",
    eyebrow: "Featured project",
    title: "Project Experience",
    status: "Artifact attached",
    statusClass: "status-secondary",
    summary:
      "A second featured project backed by an uploaded PDF, included here so the work and artifact can be reviewed in the same place.",
    metrics: ["PDF artifact", "Case-study slot", "Presentation-ready"],
    problem:
      "The project already has documentation behind it, but the story still needs a quicker portfolio layer so people can understand the challenge, your role, and the result at a glance.",
    approach: [
      "Kept the original document available as a direct artifact link.",
      "Reserved a featured space on the homepage instead of burying it in a file list.",
      "Structured the case-study view so you can add screenshots, process notes, and outcomes later without redesigning the site."
    ],
    tools: ["Project documentation", "Presentation framing", "Case-study structure"],
    changed: [
      "The work is presentable now instead of waiting for a perfect rewrite.",
      "You have a clean path to expand this project into a richer story later.",
      "The page treats the artifact as real work instead of a loose attachment."
    ],
    artifactLabel: "Open project PDF",
    artifactHref: "assets/documents/project-experience.pdf"
  }
];

const technicalProjects = [
  {
    title: "Job Agent",
    status: "In progress",
    summary:
      "A local job discovery and application workflow that centralizes search, filtering, shortlist generation, and application tracking in one system.",
    prompts: [
      "Normalizes jobs from multiple sources into one schema.",
      "Stores shortlist state in SQLite and supports a daily review workflow.",
      "Includes a local dashboard for moving jobs from discovery to application tracking."
    ],
    projectHref: "projects/job-agent.html",
    localHref: "http://127.0.0.1:8012/",
    publicNote: "Local interactive demo available. Public deployment for this app is not live yet."
  },
  {
    title: "Coaching Decision Research Dashboard",
    status: "Interactive dashboard",
    summary:
      "A multi-page executive decision dashboard built from coach data to support retention, transition, hiring, and comparison decisions.",
    prompts: [
      "Transforms workbook data into browser-ready decision support views.",
      "Includes ranked coach boards, comparison tools, and executive brief workflows.",
      "Designed for front-office review rather than match-day analysis."
    ],
    projectHref: "projects/coaching-decision-research.html",
    localHref: "http://127.0.0.1:8011/index.html",
    publicHref: "https://github.com/rohitthakur1103-cyber/usl-coach-dashboard",
    publicLabel: "Open repository"
  },
  {
    title: "Seaview Crabshack CRM System",
    status: "Live demo",
    summary:
      "A lightweight internal CRM and marketing operations system designed to unify fragmented customer records and support repeatable weekly outreach.",
    prompts: [
      "Centralizes customer records, purchases, touchpoints, and import flows in SQLite.",
      "Supports marketing segmentation, campaign planning, and audience exports.",
      "Built as a CRM layer on top of existing business systems rather than a full POS replacement."
    ],
    projectHref: "projects/seaview-crm.html",
    publicHref: "https://seaview-crm.onrender.com",
    publicLabel: "Open live app"
  }
];

const experienceHighlights = [
  {
    title: "USL Men's Soccer Pathway Analyst",
    period: "May 2025 - Present",
    problem:
      "Clubs needed clearer visibility into roster context, match trends, and player pathway signals across a large and fragmented set of league data.",
    did:
      "Conducted roster and match analysis across 38 USL Championship and League One teams, evaluated 850+ USL League Two matches and 4,500+ players, and delivered dashboards and visual reports to MLS and USL clubs.",
    tools:
      "SQL, Python, Excel dashboards, Spiideo, Praxis Talent ID, scouting reports",
    changed:
      "Turned scattered performance data into recruiting, scouting, and player-development insights that supported talent identification and pathway planning."
  },
  {
    title: "Software Engineer / IT Intern, W.R. Berkley",
    period: "May 2024 - Aug 2024",
    problem:
      "Underwriting and rating workflows needed tools that were easier to monitor, assess, and act on.",
    did:
      "Built a B2B insurance rater application, developed and tested an underwriting website, and supported technical incident resolution across internal systems.",
    tools:
      "Python, Java, JavaScript, C++, troubleshooting, internal web tooling",
    changed:
      "Improved client metric tracking, surfaced key alerts, and supported stronger system reliability with less downtime."
  },
  {
    title: "SharePoint Site Development Intern, Bright IT Services",
    period: "May 2023 - May 2025",
    problem:
      "Clients needed SharePoint spaces shaped around real workflows instead of generic out-of-the-box pages.",
    did:
      "Developed and deployed 10 SharePoint sites for 4 clients with custom layouts, responsive pages, modern themes, and workflow-aware structures.",
    tools:
      "SharePoint, responsive page design, client delivery, information architecture",
    changed:
      "Delivered tailored internal sites that improved navigation, mobile usability, and overall team productivity."
  },
  {
    title: "Athlete-to-Analyst Perspective",
    period: "Long-term background",
    problem:
      "Domain expertise matters when presenting sports analytics and player pathway work, and that context should be visible instead of assumed.",
    did:
      "Signed a professional contract at 16 with North Carolina FC, made a professional debut at 17, and later competed as an NCAA Division I student-athlete at UNC Chapel Hill and UNC Wilmington.",
    tools:
      "High-performance environments, leadership, communication, player perspective",
    changed:
      "Adds lived credibility to the scouting, development, and performance-analysis work shown elsewhere on the page."
  }
];

const skillGroups = [
  {
    title: "Analytics Stack",
    description:
      "The tools behind the sports and decision-support work on the page.",
    chips: ["SQL", "Python", "Excel", "Dashboards", "Reporting", "Trend analysis"]
  },
  {
    title: "Software & Web",
    description:
      "Languages and platforms that support application work, prototypes, and internal tooling.",
    chips: ["Java", "JavaScript", "C", "C#", "MySQL", "HTML/CSS", "SharePoint"]
  },
  {
    title: "Delivery & Communication",
    description:
      "How the work gets turned into something a stakeholder can actually use.",
    chips: ["Presentation design", "Scouting narratives", "Client delivery", "Testing", "Troubleshooting", "Live walkthroughs"]
  }
];

const featuredGrid = document.querySelector("#featured-grid");
const technicalGrid = document.querySelector("#technical-grid");
const experienceGrid = document.querySelector("#experience-grid");
const skillsGrid = document.querySelector("#skills-grid");
const modal = document.querySelector("#project-modal");
const modalContent = document.querySelector("#modal-content");
const closeButton = document.querySelector(".modal-close");
const isLocalPreview = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";

function buildTechnicalProjectLinks(build) {
  const links = [
    {
      label: "View project page",
      href: build.projectHref
    }
  ];

  if (build.publicHref) {
    links.push({
      label: build.publicLabel || "Open project",
      href: build.publicHref
    });
  }

  if (isLocalPreview && build.localHref) {
    links.push({
      label: "Open local app",
      href: build.localHref
    });
  }

  return links;
}

function renderFeaturedProjects() {
  featuredGrid.innerHTML = featuredProjects
    .map(
      (project, index) => `
        <article class="case-card reveal" style="--delay:${index * 90}ms">
          <div class="card-topline">
            <span class="badge">${project.eyebrow}</span>
            <span class="status-pill ${project.statusClass}">${project.status}</span>
          </div>
          <h3>${project.title}</h3>
          <p class="case-summary">${project.summary}</p>
          <ul class="project-metrics">
            ${project.metrics.map((metric) => `<li>${metric}</li>`).join("")}
          </ul>
          <div class="card-actions">
            <button class="card-button" type="button" data-project="${project.id}">View case study</button>
            <a class="button button--ghost" href="${project.artifactHref}" target="_blank" rel="noreferrer">${project.artifactLabel}</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTechnicalProjects() {
  technicalGrid.innerHTML = technicalProjects
    .map(
      (build, index) => {
        const links = buildTechnicalProjectLinks(build);

        return `
        <article class="mini-card reveal" style="--delay:${index * 90}ms">
          <div class="card-topline">
            <span class="badge">Project slot</span>
            <span class="status-pill status-secondary">${build.status}</span>
          </div>
          <h3>${build.title}</h3>
          <p>${build.summary}</p>
          <ul class="mini-list">
            ${build.prompts.map((prompt) => `<li>${prompt}</li>`).join("")}
          </ul>
          ${build.publicNote ? `<p class="project-note">${build.publicNote}</p>` : ""}
          ${
            links.length
              ? `<div class="card-actions">${links
                  .map((link) =>
                    `<a class="button button--ghost" href="${link.href}" ${link.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${link.label}</a>`
                  )
                  .join("")}</div>`
              : ""
          }
        </article>
      `;
      }
    )
    .join("");
}

function renderExperienceHighlights() {
  experienceGrid.innerHTML = experienceHighlights
    .map(
      (item, index) => `
        <article class="experience-card reveal" style="--delay:${index * 80}ms">
          <span class="experience-meta">${item.period}</span>
          <h3>${item.title}</h3>
          <p class="experience-field"><strong>Problem:</strong> ${item.problem}</p>
          <p class="experience-field"><strong>What I did:</strong> ${item.did}</p>
          <p class="experience-field"><strong>Tools:</strong> ${item.tools}</p>
          <p class="experience-field"><strong>What changed:</strong> ${item.changed}</p>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  skillsGrid.innerHTML = skillGroups
    .map(
      (group, index) => `
        <article class="skill-card reveal" style="--delay:${index * 80}ms">
          <div class="skill-topline">
            <span class="badge">Method set</span>
          </div>
          <h3>${group.title}</h3>
          <p>${group.description}</p>
          <div class="skill-chips">
            ${group.chips.map((chip) => `<span class="chip">${chip}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderModal(project) {
  modalContent.innerHTML = `
    <div class="detail-header">
      <p class="section-kicker">${project.eyebrow}</p>
      <h2 id="modal-title">${project.title}</h2>
      <p>${project.summary}</p>
    </div>
    <div class="detail-grid">
      <section class="detail-block">
        <h3>Problem</h3>
        <p>${project.problem}</p>
      </section>
      <section class="detail-block">
        <h3>Tools</h3>
        <ul class="detail-list">
          ${project.tools.map((tool) => `<li>${tool}</li>`).join("")}
        </ul>
      </section>
      <section class="detail-block">
        <h3>What I did</h3>
        <ul class="detail-list">
          ${project.approach.map((step) => `<li>${step}</li>`).join("")}
        </ul>
      </section>
      <section class="detail-block">
        <h3>What changed</h3>
        <ul class="detail-list">
          ${project.changed.map((outcome) => `<li>${outcome}</li>`).join("")}
        </ul>
      </section>
    </div>
    <div class="detail-footer">
      <a class="button button--primary" href="${project.artifactHref}" target="_blank" rel="noreferrer">${project.artifactLabel}</a>
    </div>
  `;
}

function openModal(projectId) {
  const project = featuredProjects.find((item) => item.id === projectId);
  if (!project) {
    return;
  }

  renderModal(project);
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.hidden = true;
  modalContent.innerHTML = "";
  document.body.classList.remove("modal-open");
}

function setupInteractions() {
  featuredGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-project]");
    if (!trigger) {
      return;
    }

    openModal(trigger.dataset.project);
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.dataset.close === "true") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

renderFeaturedProjects();
renderTechnicalProjects();
renderExperienceHighlights();
renderSkills();
setupInteractions();
setupReveal();
