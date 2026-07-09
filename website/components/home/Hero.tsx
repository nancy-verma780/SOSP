export default function Hero() {
    return (
        <section className="flex min-h-[85vh] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 px-6">
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="mb-6 text-6xl font-extrabold text-gray-900">
                    Build Your
                    <span className="text-blue-600"> Open Source Journey</span>
                </h1>

                <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
                    Student Open Source Program (SOSP) helps students contribute to
                    real-world open source projects, learn from mentors, and grow their
                    developer careers.
                </p>

                <div className="flex justify-center gap-4">
                    <button className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
                        Join SOSP
                    </button>

                    <button className="rounded-lg border border-gray-300 px-8 py-3 hover:bg-gray-100">
                        Explore Projects
                    </button>
                </div>
            </div>
        </section>
    );
}