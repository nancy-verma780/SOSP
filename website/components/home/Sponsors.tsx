export default function Sponsors() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Sponsors & Partners
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          We're building partnerships with organizations that support student
          innovation and open source.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-dashed p-10">
            <h3 className="text-xl font-semibold">Coming Soon</h3>
          </div>

          <div className="rounded-xl border border-dashed p-10">
            <h3 className="text-xl font-semibold">Coming Soon</h3>
          </div>

          <div className="rounded-xl border border-dashed p-10">
            <h3 className="text-xl font-semibold">Coming Soon</h3>
          </div>
        </div>
      </div>
    </section>
  );
}