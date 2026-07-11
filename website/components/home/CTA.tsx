export default function CTA() {
  return (
    <section className="bg-blue-600 px-6 py-20 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold">
          Ready to Start Your Open Source Journey?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Join SOSP and collaborate on real-world projects, learn from mentors,
          and grow as a developer.
        </p>

        <a
          href="/join"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100"
        >
          Join SOSP
        </a>
      </div>
    </section>
  );
}