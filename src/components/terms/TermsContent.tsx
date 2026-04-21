"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeItem } from "@/components/animations/FadeIn";

const terms = [
  {
    n: "1",
    t: "Geltungsbereich (Scope)",
    c: "These Terms and Conditions apply to all contracts concluded between Arshan UG (haftungsbeschränkt), Kolonnenstraße 8, 10827 Berlin (\"Provider\") and its clients (\"Client\") via arshan.de. Deviating terms of the Client shall not apply unless expressly confirmed in writing by the Provider.\n\nThese Terms apply exclusively to business customers (B2B) within the meaning of § 14 BGB.",
  },
  {
    n: "2",
    t: "Leistungsgegenstand (Services)",
    c: "Arshan UG provides the following services via arshan.de:\n\n• Finance and bookkeeping advisory services\n• Social media marketing services\n• HR and payroll solutions using partner applications\n\nThe specific scope of services, deliverables, and timelines shall be agreed upon individually per engagement or service order.",
  },
  {
  n: "3",
  t: "Vertragsschluss (Contract Formation)",
  c: "1. Service inquiries submitted via the website constitute a non-binding offer by the Client.\n2. The contract is concluded when the Provider sends a written order confirmation or begins performing the service.\n3. The Provider reserves the right to decline orders without giving reasons.",
},
{
  n: "4",
  t: "Mitwirkungspflichten des Kunden (Client Obligations)",
  c: "The Client shall:\n\n• Provide all information, documents, and access necessary for service delivery in a timely manner\n• Notify the Provider immediately of any changes relevant to the engagement\n• Ensure that content and data provided do not infringe third-party rights\n\nThe Provider shall not be liable for delays or deficiencies caused by the Client's failure to cooperate.",
},
{
  n: "5",
  t: "Vergütung und Zahlung (Fees and Payment)",
  c: "1. Fees are agreed upon individually per engagement unless a fixed price list is published on the website.\n2. Invoices are due and payable within 14 days of the invoice date without deduction.\n3. In the event of late payment, statutory default interest pursuant to § 288 BGB applies.\n4. All prices are net prices plus applicable VAT, where applicable.",
},
{
  n: "6",
  t: "Laufzeit und Kündigung (Term and Termination)",
  c: "1. Project-based engagements end upon delivery of the agreed service.\n2. Ongoing service agreements may be terminated by either party with 30 days' written notice to the end of the month, unless otherwise agreed.\n3. The right to extraordinary termination for good cause remains unaffected.\n4. Termination must be in text form (email is sufficient) pursuant to § 126b BGB.",
},
{
  n: "7",
  t: "Haftung (Liability)",
  c: "1. The Provider is liable without limitation for damages resulting from intent or gross negligence, and for injury to life, body, or health.\n2. For simple negligence, liability is limited to foreseeable, contract-typical damages in the event of a breach of a cardinal obligation (wesentliche Vertragspflicht).\n3. Liability for simple negligence in the case of non-cardinal obligations is excluded.\n4. The above limitations also apply in favour of the Provider's employees and agents.",
},
{
  n: "8",
  t: "Datenschutz (Data Protection)",
  c: "The Provider processes personal data exclusively in accordance with applicable data protection law, in particular the DSGVO (GDPR) and BDSG. Details are set out in the separate Privacy Policy (Datenschutzerklärung) available at arshan.de/datenschutz.\n\nWhere the Provider processes personal data on behalf of the Client, a separate Data Processing Agreement (Auftragsverarbeitungsvertrag, AVV) pursuant to Art. 28 DSGVO shall be concluded.",
},
{
  n: "9",
  t: "Geistiges Eigentum (Intellectual Property)",
  c: "1. All work results, concepts, and deliverables created by the Provider remain the intellectual property of the Provider until full payment is received.\n2. Upon full payment, the Client receives a non-exclusive, non-transferable right of use for the agreed purpose.\n3. The Client warrants that all materials provided to the Provider are free of third-party rights.",
},
{
  n: "10",
  t: "Vertraulichkeit (Confidentiality)",
  c: "Both parties agree to treat all confidential information of the other party as strictly confidential, and not to disclose it to third parties without prior written consent. This obligation survives the termination of the contract for a period of 3 years.",
},
{
  n: "11",
  t: "Schlussbestimmungen (Final Provisions)",
  c: "1. Applicable Law: These Terms are governed exclusively by German law, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).\n2. Jurisdiction: The exclusive place of jurisdiction for all disputes is Berlin, provided the Client is a merchant (Kaufmann) within the meaning of the HGB.\n3. Severability: Should any provision be invalid, the remaining provisions shall remain in full force and effect. The invalid provision shall be replaced by the nearest legally permissible provision.\n4. Amendments: The Provider reserves the right to amend these Terms with 30 days' prior notice in text form. Continued use of the services after the notice period constitutes acceptance.",
},
{
  n: "12",
  t: "Streitbeilegung (Dispute Resolution)",
  c: "Wir sind weder bereit noch verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. (We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.)",
},
];

export default function TermsContent() {
  return (
    <div className="space-y-10 md:space-y-12">
      {/* Header with Gold Accent */}
      <FadeItem className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
        <div className="w-1 md:w-1.5 h-8 md:h-10 bg-tertiary rounded-full shrink-0" />
        <h2 className={`text-2xl md:text-4xl font-bold tracking-tight ${theme.text.brand}`}>
          Terms and Conditions
        </h2>
      </FadeItem>

      {/* Terms Grid/List */}
      <div className="space-y-8 md:space-y-10">
        {terms.map((item) => (
          <FadeItem key={item.n} className="space-y-3 md:space-y-4 max-w-4xl">
            <h3 className={`text-lg md:text-xl font-bold tracking-tight ${theme.text.brand}`}>
              <span className="text-tertiary mr-2">{item.n}.</span>
              {item.t}
            </h3>
            <p className={`text-[14px] md:text-base font-light leading-relaxed ${theme.text.muted}`}>
              {item.c}
            </p>
          </FadeItem>
        ))}
      </div>
    </div>
  );
}