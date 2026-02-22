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
