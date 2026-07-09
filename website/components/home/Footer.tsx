export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-2xl font-bold text-blue-600">
            SOSP
          </h2>

          <p className="mt-2 max-w-sm text-gray-600">
            Student Open Source Program helping developers learn,
            contribute, and grow through open source.
          </p>
        </div>


        <div className="flex gap-8 text-gray-600">
          <a className="hover:text-blue-600">
            GitHub
          </a>

          <a className="hover:text-blue-600">
            Discord
          </a>

          <a className="hover:text-blue-600">
            Contact
          </a>
        </div>

      </div>


      <div className="mx-auto mt-8 max-w-6xl border-t border-gray-200 px-6 pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} SOSP. All rights reserved.
      </div>

    </footer>
  );
}