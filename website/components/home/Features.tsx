const features = [
    {
        title: "Real Open Source Projects",
        description:
            "Work on meaningful projects and gain practical development experience.",
    },
    {
        title: "Mentorship",
        description:
            "Learn from experienced developers and improve your technical skills.",
    },
    {
        title: "Community",
        description:
            "Connect with developers, contributors, and open source enthusiasts.",
    },
    {
        title: "Career Growth",
        description:
            "Build your GitHub profile, portfolio, and industry-ready skills.",
    },
];

export default function Features() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-6">

                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Why Choose SOSP?
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Everything you need to start your open source journey.
                    </p>
                </div>


                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}