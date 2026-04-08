import { theme } from "@/lib/theme";

const faqs = [
  {
    question: "How does we handle HGB compliance?",
    answer:
      "Our finance team includes specialists who build HGB-compliant systems from the ground up. We ensure your new venture meets all German Commercial Code standards from day one, providing a rock-solid foundation for future audits.",
  },
  {
    question: "Is offshore talent integration difficult to manage?",
    answer:
      "Not with our system. We handle the full lifecycle of offshore talent acquisition in India, from vetting and onboarding to payroll and cultural integration, ensuring they operate as a seamless extension of your local team.",
  },
  {
    question: "What marketing services do you provide?",
    answer:
      "We offer end-to-end digital marketing, including search engine optimization (SEO), social media strategy, and premium content production. Our goal is to create a consistent brand voice across all digital touchpoints.",
  },
  {
    question: "Do you support newly established businesses?",
    answer:
      "Absolutely. We specialize in launching modern business infrastructures. Our team excels at setting up fresh cloud-based systems, allowing for fully digital operations and real-time financial transparency for ambitious new SMBs.",
  },
];

export default function ExpertiseFAQ() {
  return (
    <section className="py-20">
      <div className="w-full mx-auto px-28">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className={`text-4xl font-bold ${theme.text.brand}`}>
            Expertise & Frequently Asked Questions
          </h2>

          <p className={`mt-4 text-lg ${theme.text.muted}`}>
            Providing clarity on how Arshan helps small businesses navigate the
            complexities of global operations.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">

          {faqs.map((faq, index) => (
            <div key={index}>

              <h3 className={`text-lg font-semibold mb-3 ${theme.text.main}`}>
                {faq.question}
              </h3>

              <p className={`leading-relaxed text-sm ${theme.text.muted}`}>
                {faq.answer}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}