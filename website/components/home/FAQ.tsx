const questions = [
  {
    question: "What is SOSP?",
    answer:
      "SOSP (Student Open Source Program) is a student-driven initiative that helps developers contribute to real-world open source projects.",
  },
  {
    question: "Who can participate?",
    answer:
      "Any student interested in learning, coding, and contributing to open source can participate.",
  },
  {
    question: "Do I need previous open source experience?",
    answer:
      "No. Beginners can start with guidance from mentors and gradually improve their skills.",
  },
  {
    question: "Will contributors get certificates?",
    answer:
      "Yes, contributors who successfully complete the program requirements will receive recognition.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Everything you need to know about SOSP.
          </p>
        </div>


        <div className="mt-12 space-y-6">

          {questions.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-gray-200 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.question}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}