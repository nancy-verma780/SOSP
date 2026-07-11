export default function ProjectsPage() {
  const projects = [
    {
      title: "SOSP Website",
      level: "Beginner",
      tech: "Next.js • TypeScript • Tailwind CSS",
      description:
        "Contribute to the official SOSP website and improve the user experience.",
    },
    {
      title: "Community Dashboard",
      level: "Intermediate",
      tech: "React • Node.js",
      description:
        "Build features for mentors, contributors, and program management.",
    },
    {
      title: "Open Source Starter Kit",
      level: "Beginner",
      tech: "Git • GitHub",
      description:
        "Help beginners learn Git, GitHub, and open source contribution.",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-3 text-5xl font-bold">Projects</h1>

      <p className="mb-12 text-gray-600">
        Explore open-source projects available in the Student Open Source Program.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>

            <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
              {project.level}
            </span>

            <p className="mt-4 text-gray-600">{project.description}</p>

            <p className="mt-6 font-medium">
              Tech Stack:
              <span className="font-normal"> {project.tech}</span>
            </p>

            <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              View Project
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}