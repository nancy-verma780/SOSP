const timeline = [
  {
    step: "01",
    title: "Registration",
    description:
      "Students register for SOSP and become part of the open source community.",
  },
  {
    step: "02",
    title: "Project Selection",
    description:
      "Contributors choose projects based on their interests and skills.",
  },
  {
    step: "03",
    title: "Contribution",
    description:
      "Students collaborate with mentors and make meaningful contributions.",
  },
  {
    step: "04",
    title: "Evaluation",
    description:
      "Contributions are reviewed based on quality and impact.",
  },
  {
    step: "05",
    title: "Recognition",
    description:
      "Successful contributors receive certificates and community recognition.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            How SOSP Works
          </h2>

          <p className="mt-4 text-gray-600">
            Follow the journey from beginner contributor to open source developer.
          </p>
        </div>


        <div className="mt-12 space-y-8">

          {timeline.map((item) => (
            <div
              key={item.step}
              className="flex gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {item.step}
              </div>


              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}