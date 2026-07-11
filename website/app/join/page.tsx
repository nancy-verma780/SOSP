export default function JoinPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-3 text-5xl font-bold">Join SOSP</h1>

      <p className="mb-10 text-gray-600">
        Become a part of the Student Open Source Program and start your
        open-source journey.
      </p>

      <form className="space-y-6 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-lg border p-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="GitHub Username"
          className="w-full rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="College"
          className="w-full rounded-lg border p-3"
        />

        <textarea
          placeholder="Why do you want to join SOSP?"
          rows={5}
          className="w-full rounded-lg border p-3"
        />

        <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
          Submit Application
        </button>
      </form>
    </main>
  );
}