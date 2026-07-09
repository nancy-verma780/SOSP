export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h1 className="text-5xl font-bold text-gray-900">
          SOSP Projects
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Open-source projects maintained by the SOSP community.
        </p>


        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">

          <h2 className="text-3xl font-semibold text-gray-900">
            Projects Coming Soon
          </h2>

          <p className="mt-4 text-gray-600">
            We are preparing the first set of open-source projects.
            Projects will be published after maintainer review.
          </p>


          <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Become a Maintainer
          </button>

        </div>

      </div>
    </main>
  );
}