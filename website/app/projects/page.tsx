import { supabase } from "@/lib/supabase";

export default async function Projects() {
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-5xl font-bold text-gray-900">
          Explore SOSP Projects
        </h1>

        <p className="mt-4 text-center text-lg text-gray-600">
          Contribute to real-world open source projects and collaborate with
          experienced maintainers.
        </p>

        {projects?.length === 0 && (
          <div className="mt-16 rounded-xl bg-white p-10 text-center shadow">
            <h2 className="text-2xl font-semibold">
              No approved projects yet
            </h2>

            <p className="mt-3 text-gray-500">
              Approved projects will appear here once reviewed by the SOSP team.
            </p>
          </div>
        )}

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold">
                {project.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {project.description}
              </p>

              <div className="mt-6 space-y-2 text-sm text-gray-700">
                <p>
                 <strong>Tech Stack:</strong> {project.techstack}
                </p>

                
              </div>

              <div className="mt-6 flex gap-3">
               {project.githuburl && (
                  <a
                   href={project.githuburl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
                  >
                    GitHub
                  </a>
                )}

                <a
                  href={`/apply?project=${project.id}`}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}