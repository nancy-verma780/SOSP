export default function Join() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="mx-auto max-w-5xl px-6">

        <h1 className="text-center text-5xl font-bold text-gray-900">
          Join SOSP
        </h1>

        <p className="mt-6 text-center text-lg text-gray-600">
          Start your open-source journey with the SOSP community.
        </p>


        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold">
              1. Join Community
            </h2>

            <p className="mt-3 text-gray-600">
              Connect with developers, contributors, and maintainers.
            </p>
          </div>


          <div className="rounded-xl bg-white p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold">
              2. Choose Project
            </h2>

            <p className="mt-3 text-gray-600">
              Explore available projects and find where you can contribute.
            </p>
          </div>


          <div className="rounded-xl bg-white p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold">
              3. Contribute
            </h2>

            <p className="mt-3 text-gray-600">
              Create issues, submit pull requests, and collaborate.
            </p>
          </div>

        </div>


        <div className="mt-12 rounded-xl bg-white p-8 text-center shadow-sm border">

          <h2 className="text-3xl font-bold">
            Ready to contribute?
          </h2>

          <p className="mt-3 text-gray-600">
            Follow our guidelines and become part of the community.
          </p>

          <button className="mt-6 rounded-lg bg-blue-600 px-8 py-3 text-white">
            Get Started
          </button>

        </div>


      </div>

    </main>
  );
}