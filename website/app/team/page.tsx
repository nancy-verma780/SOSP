export default function TeamPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-4 text-5xl font-bold">Our Team</h1>

      <p className="mb-12 text-gray-600">
        Meet the people building the Student Open Source Program.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border p-8">
          <h2 className="text-2xl font-bold">Nancy Verma</h2>
          <p className="text-blue-600">Founder</p>
          <p className="mt-4 text-gray-600">
            Second-year CSE (AI & ML) student building SOSP to help students start contributing to open source.
          </p>
        </div>

        <div className="rounded-xl border p-8">
          <h2 className="text-2xl font-bold">Satyam</h2>
          <p className="text-blue-600">Co-Founder</p>
          <p className="mt-4 text-gray-600">
            Working on community building, project management, and mentoring initiatives.
          </p>
        </div>
      </div>
    </main>
  );
}