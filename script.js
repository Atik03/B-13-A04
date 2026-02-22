const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "not-applied",
  },
  {
    id: 2,
    companyName: "TechWave Ltd",
    position: "Frontend Engineer",
    location: "Dhaka",
    type: "Full-time",
    salary: "$90,000 - $110,000",
    description:
      "Develop scalable frontend systems using modern JavaScript frameworks.",
    status: "not-applied",
  },
  {
    id: 3,
    companyName: "SoftTech",
    position: "QA Engineer",
    location: "Khulna",
    type: "Hybrid",
    salary: "$60,000 - $75,000",
    description: "Ensure application quality through automation and testing.",
    status: "not-applied",
  },
  {
    id: 4,
    companyName: "NextGen Solutions",
    position: "Backend Developer",
    location: "Chittagong",
    type: "Full-time",
    salary: "$80,000 - $100,000",
    description:
      "Work on server-side applications and APIs for enterprise clients.",
    status: "not-applied",
  },
  {
    id: 5,
    companyName: "Cloudify Inc",
    position: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$95,000 - $120,000",
    description: "Manage cloud infrastructure and deployment pipelines.",
    status: "not-applied",
  },
  {
    id: 6,
    companyName: "DataWorks",
    position: "Data Analyst",
    location: "Dhaka",
    type: "Part-time",
    salary: "$50,000 - $70,000",
    description:
      "Analyze data trends and prepare insightful reports for clients.",
    status: "not-applied",
  },
  {
    id: 7,
    companyName: "AI Labs",
    position: "Machine Learning Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "Develop AI models and ML solutions for various industries.",
    status: "not-applied",
  },
  {
    id: 8,
    companyName: "WebWorks",
    position: "UI/UX Designer",
    location: "Sylhet",
    type: "Hybrid",
    salary: "$40,000 - $60,000",
    description:
      "Design user-friendly interfaces and improve user experiences.",
    status: "not-applied",
  },
];

const container = document.getElementById("jobsContainer");

function statusBadge(status) {
  if (status === "interview")
    return `<span class="text-xs font-medium px-3 py-1 rounded bg-green-100 text-green-600">INTERVIEW</span>`;
  if (status === "rejected")
    return `<span class="text-xs font-medium px-3 py-1 rounded bg-red-100 text-red-600">REJECTED</span>`;
  return `<span class="text-xs font-medium px-3 py-1 rounded bg-blue-100 text-blue-600">NOT APPLIED</span>`;
}

function renderJobs(tab = "all") {
  container.innerHTML = "";

  let filtered = tab === "all" ? jobs : jobs.filter((j) => j.status === tab);

  document.getElementById("tabCount").innerText = filtered.length + " Jobs";

  if (filtered.length === 0) {
    document.getElementById("emptyState").classList.remove("hidden");
  } else {
    document.getElementById("emptyState").classList.add("hidden");
  }

  filtered.forEach((job) => {
    const card = document.createElement("div");
    card.className = "bg-white border border-gray-200 rounded-lg p-5 shadow-sm";

    card.innerHTML = `
      <div class="flex justify-between items-start mb-2">
        <div>
          <h3 class="text-lg font-semibold text-gray-800">${job.companyName}</h3>
          <p class="text-sm text-gray-500">${job.position}</p>
        </div>

        <div class="flex items-center gap-3">
          ${statusBadge(job.status)}
          <button class="text-gray-400 hover:text-red-500 delete">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>

      <p class="text-sm text-gray-500 mb-3">
        ${job.location} · ${job.type} · ${job.salary}
      </p>

      <p class="text-sm text-gray-600 mb-4">
        ${job.description}
      </p>

      <div class="flex gap-3">
        <button class="border border-green-500 text-green-600 px-4 py-1 rounded text-sm interview">
          INTERVIEW
        </button>
        <button class="border border-red-500 text-red-600 px-4 py-1 rounded text-sm reject">
          REJECTED
        </button>
      </div>
    `;
    card.querySelector(".interview").onclick = () => {
      job.status = "interview";
      updateCounts();
      renderJobs(tab);
    };

    card.querySelector(".reject").onclick = () => {
      job.status = "rejected";
      updateCounts();
      renderJobs(tab);
    };

    card.querySelector(".delete").onclick = () => {
      const index = jobs.findIndex((j) => j.id === job.id);
      jobs.splice(index, 1);
      updateCounts();
      renderJobs(tab);
    };

    container.appendChild(card);
  });
}

function updateCounts() {
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = jobs.filter(
    (j) => j.status === "interview",
  ).length;
  document.getElementById("rejectedCount").innerText = jobs.filter(
    (j) => j.status === "rejected",
  ).length;
}
