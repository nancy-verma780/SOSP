export default function Hero() {

  return (

    <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center px-6">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-950 via-purple-900 to-black" />

      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-600/30 rounded-full blur-3xl" />


      <div className="max-w-5xl text-center text-white">


        <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur mb-8">

          🚀 4 Week Open Source Program

        </span>



        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

          Build.
          Learn.
          <span className="text-purple-300">
            Contribute.
          </span>

        </h1>



        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">

          SOSP is a student-driven open source ecosystem where
          developers collaborate on real-world projects,
          improve skills and grow together.

        </p>



        <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">


          <a
            href="/join"
            className="bg-white text-purple-900 font-semibold px-8 py-3 rounded-xl hover:scale-105 transition"
          >

            Join SOSP

          </a>



          <a
            href="/projects"
            className="border border-white/30 bg-white/10 backdrop-blur px-8 py-3 rounded-xl hover:bg-white/20 transition"
          >

            Explore Projects

          </a>


        </div>



        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">


          <div>
            <h3 className="text-3xl font-bold">
              4+
            </h3>
            <p className="text-gray-400">
              Weeks
            </p>
          </div>


          <div>
            <h3 className="text-3xl font-bold">
              50+
            </h3>
            <p className="text-gray-400">
              Projects
            </p>
          </div>


          <div>
            <h3 className="text-3xl font-bold">
              500+
            </h3>
            <p className="text-gray-400">
              Developers
            </p>
          </div>


        </div>


      </div>


    </section>

  )

}