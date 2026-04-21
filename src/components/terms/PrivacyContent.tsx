"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeItem } from "@/components/animations/FadeIn";

const privacySections = [
{
    title: "1. Verantwortlicher / Data Controller",
    content: (
      <div className="space-y-1">
        <p className="font-bold text-slate-900">Arshan UG (haftungsbeschränkt)</p>
        <p>Kolonnenstraße 8, 10827 Berlin</p>
        <p>E-Mail: legal@arshan.de</p>
        <p>Handelsregister: Amtsgericht Charlottenburg, HRB 265415 B</p>
      </div>
    ),
  },
  {
    title: "2. Grundsätze der Datenverarbeitung / Principles",
    content: (
      <div className="space-y-4">
        <p>
          We process personal data only in accordance with the <span className="font-bold">DSGVO (GDPR)</span>, the <span className="font-bold">BDSG</span>, and the <span className="font-bold">DDG</span>. The legal bases for processing are:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-bold">Art. 6 Abs. 1 lit. a DSGVO</span> – Consent
          </li>
          <li>
            <span className="font-bold">Art. 6 Abs. 1 lit. b DSGVO</span> – Performance of a contract
          </li>
          <li>
            <span className="font-bold">Art. 6 Abs. 1 lit. f DSGVO</span> – Legitimate interests
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "3. Hosting / Server",
    content: (
      <div className="space-y-2">
        <p>
          This website is hosted by <span className="font-bold">Hostinger International Ltd.</span>, 61 Lordou Vironos Street, 6023 Larnaca, Cyprus. When you visit the site, your IP address, browser type, operating system, referrer URL, and access time are automatically stored in server log files. Legal basis: <span className="font-bold">Art. 6 Abs. 1 lit. f DSGVO</span> (legitimate interest in secure and functional website operation). Data is deleted after 30 days. A Data Processing Agreement (DPA) is in place with Hostinger.
        </p>
      </div>
    ),
  },
  {
    title: "4. SSL-Verschlüsselung / SSL Encryption",
    content: (
      <div className="space-y-2">
        <p>
          This site uses HTTPS/SSL encryption for all data transmissions. You can verify this by the padlock icon in your browser's address bar. Unencrypted contact via email remains at your own risk.
        </p>
      </div>
    ),
  },
  {
    title: "5. Kontaktformular / Contact Form",
    content: (
      <div className="space-y-4">
        <p>When you submit our contact form, we collect the following data:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name, Email Address, Role, Company/Brand Name, Website URL</li>
          <li>LinkedIn, Instagram, X (Twitter) handles</li>
          <li>Project Scope, Industry, Brand Voice, Capacity Requested, Areas of Interest</li>
        </ul>
        <div className="pt-2 space-y-1">
          <p><span className="font-bold text-slate-900">Purpose:</span> Processing and responding to your enquiry, evaluating potential collaboration.</p>
          <p><span className="font-bold text-slate-900">Legal basis:</span> Art. 6 Abs. 1 lit. b DSGVO (pre-contractual measures) and Art. 6 Abs. 1 lit. f DSGVO (legitimate interest).</p>
          <p><span className="font-bold text-slate-900">Storage:</span> Data is retained for as long as necessary to process your request and for up to <span className="font-bold">3 years</span> for business records, unless a contractual relationship arises.</p>
          <p><span className="font-bold text-slate-900">Recipients:</span> Data is stored in <span className="font-bold">Airtable</span> (see § 12) and processed via <span className="font-bold">Gmail/Google Workspace</span> (see § 11).</p>
        </div>
      </div>
    ),
  },

  {
    title: "6. Google Analytics 4 (GA4)",
    content: (
      <div className="space-y-3">
        <p>
          This website uses <span className=" font-bold">Google Analytics 4</span>, 
          a web analytics service by Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Ireland.
        </p>

        <p>
          GA4 uses cookies to analyse user behaviour. Data collected includes: IP address 
          (anonymised), pages visited, time on site, device/browser type, and referral source.
        </p>

        <div className="space-y-1 pt-2">
          <p>
            <span className="font-bold text-slate-900">Legal basis:</span> Art. 6 Abs. 1 lit. a DSGVO (consent via cookie banner).
          </p>

          <p>
            <span className="font-bold text-slate-900">Data transfer:</span> Data may be transferred to Google LLC servers in the USA. 
            Google LLC is certified under the <span className="font-bold">EU-U.S. Data Privacy Framework</span>.
          </p>

          <p>
            <span className="font-bold text-slate-900">Opt-out:</span> You can withdraw consent anytime via cookie settings or:
            {" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
          </p>

          <p>
            <span className="font-bold text-slate-900">Retention:</span> 14 months (GA4 default).
          </p>

          <p>
            <span className="font-bold text-slate-900">DPA:</span> A Data Processing Agreement is concluded with Google under Art. 28 DSGVO.
          </p>
        </div>
      </div>
    ),
  },
  {
      title: "7. Google Tag Manager",
      content: (
        <div className="space-y-2">
          <p>
            We use <span className=" font-bold">Google Tag Manager</span> by Google Ireland Ltd. to manage tracking scripts on this website. The Tag Manager itself does not set cookies or collect personal data — it only loads other tags (such as GA4, Meta Pixel, LinkedIn Insight Tag) after user consent has been granted.
          </p>
          <p>
            <span className=" text-slate-900 font-bold">Legal basis:</span> Art. 6 Abs. 1 lit. f DSGVO (legitimate interest in efficient tag management).
          </p>
        </div>
      ),
    },
    {
      title: "8. Meta Pixel (Facebook/Instagram)",
      content: (
        <div className="space-y-4">
          <p>
            This website uses the <span className="font-bold">Meta Pixel</span> by Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Ireland.
          </p>
          <p>
            The Meta Pixel tracks user behaviour on this site and enables targeted advertising on Meta platforms (Facebook, Instagram). Data collected includes: IP address, browser information, pages visited, and actions taken on the site.
          </p>
          <div className="space-y-1">
            <p><span className=" text-slate-900 font-bold">Legal basis:</span> Art. 6 Abs. 1 lit. a DSGVO (consent via cookie banner).</p>
            <p><span className=" text-slate-900 font-bold">Data transfer:</span> Data may be transferred to Meta Platforms Inc. in the USA. Meta is certified under the EU-U.S. Data Privacy Framework.</p>
            <p>
              <span className=" text-slate-900 font-bold">Opt-out:</span> Via your cookie settings or at{" "}
              <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                https://www.facebook.com/adpreferences
              </a>
            </p>
            <p><span className="font-bold  text-slate-900">DPA:</span> Standard Contractual Clauses (SCCs) apply for international transfers.</p>
          </div>
        </div>
      ),
    },
    {
    title: "9. LinkedIn Insight Tag",
    content: (
      <div className="space-y-3">
        <p>
          This website uses the <span className="font-bold">LinkedIn Insight Tag</span> 
          by LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Ireland.
        </p>

        <p>
          The Insight Tag enables conversion tracking, retargeting, and analytics for 
          LinkedIn campaigns. Data collected includes: IP address, timestamp, device/browser 
          data, page URL, and LinkedIn member data (for logged-in users).
        </p>

        <div className="space-y-1 pt-2">
          <p>
            <span className="text-slate-900 font-bold">Legal basis:</span> Art. 6 Abs. 1 lit. a DSGVO (consent via cookie banner).
          </p>

          <p>
            <span className="text-slate-900 font-bold">Data transfer:</span> Data may be transferred to LinkedIn Corporation in the USA under the EU-U.S. Data Privacy Framework.
          </p>

          <p>
            <span className="text-slate-900 font-bold">Opt-out:</span> Via your cookie settings or at{" "}
            <a
              href="https://www.linkedin.com/psettings/guest-controls"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.linkedin.com/psettings/guest-controls
            </a>
          </p>

          <p>
            <span className="text-slate-900 font-bold">Retention:</span> Aggregated data deleted within 90 days; hashed data within 180 days.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "10. Newsletter / E-Mail-Marketing (Brevo)",
    content: (
      <div className="space-y-3">
        <p>
          If you subscribe to our newsletter or marketing emails, we use{" "}
          <span className="font-bold">Brevo</span> (Sendinblue SAS), 55 rue d'Amsterdam, 
          75008 Paris, France.
        </p>

        <p>
          Data collected: Name, email address, subscription date, IP address.
        </p>

        <div className="space-y-1 pt-2">
          <p>
            <span className="text-slate-900 font-bold">Legal basis:</span> Art. 6 Abs. 1 lit. a DSGVO 
            (explicit consent — double opt-in procedure).
          </p>

          <p>
            <span className="text-slate-900 font-bold">Withdrawal:</span> You can unsubscribe at any time 
            via the link in every email or by contacting legal@arshan.de.
          </p>

          <p>
            <span className="text-slate-900 font-bold">DPA:</span> A Data Processing Agreement is concluded 
            with Brevo under Art. 28 DSGVO.
          </p>

          <p>
            <span className="text-slate-900 font-bold">Retention:</span> Data is stored until you unsubscribe.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "11. Google Workspace / Gmail",
    content: (
      <div className="space-y-3">
        <p>
          We use <span className="font-bold">Google Workspace (Gmail)</span> by Google Ireland Ltd. 
          for email communication, including the mailbox legal@arshan.de. Emails you send us, 
          including any personal data contained therein, are stored on Google’s servers.
        </p>

        <div className="space-y-1 pt-2">
          <p>
            <span className="text-slate-900 font-bold">Legal basis:</span> Art. 6 Abs. 1 lit. b DSGVO 
            (contract performance / pre-contractual communication) and Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <p>
            <span className="text-slate-900 font-bold">Data transfer:</span> Google LLC is certified under the 
            EU-U.S. Data Privacy Framework.
          </p>

          <p>
            <span className="text-slate-900 font-bold">DPA:</span> A Data Processing Agreement is in place 
            with Google under Art. 28 DSGVO.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "12. Airtable (CRM)",
    content: (
      <div className="space-y-3">
        <p>
          We store and manage client and enquiry data using{" "}
          <span className="font-bold">Airtable</span>, provided by Airtable Inc., 
          799 Market Street, Suite 400, San Francisco, CA 94103, USA.
        </p>

        <p>
          Data stored includes information submitted via the contact form (see § 5).
        </p>

        <div className="space-y-1 pt-2">
          <p>
            <span className="text-slate-900 font-bold">Legal basis:</span> Art. 6 Abs. 1 lit. b DSGVO 
            (contract performance) and Art. 6 Abs. 1 lit. f DSGVO (legitimate interest in organised client management).
          </p>

          <p>
            <span className="text-slate-900 font-bold">Data transfer:</span> Data may be transferred to the USA. 
            Airtable provides safeguards via Standard Contractual Clauses (SCCs).
          </p>

          <p>
            <span className="text-slate-900 font-bold">DPA:</span> A Data Processing Agreement is concluded with Airtable.
          </p>

          <p>
            <span className="text-slate-900 font-bold">Retention:</span> Data is stored as long as necessary for the business relationship and deleted thereafter (typically within 3 years).
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "13. Social Media Links & Buttons",
    content: (
      <div className="space-y-3">
        <p>
          This website contains links and share buttons to social media platforms including{" "}
          <span className="font-bold">LinkedIn, Instagram, and X (Twitter)</span>. 
          These are simple hyperlinks — no data is transmitted to the platforms unless you 
          actively click them and visit the respective platform.
        </p>

        <p>
          No social media plugins that automatically load third-party content are used.
        </p>

        <div className="space-y-1 pt-2">
          <p>
            <span className="text-slate-900 font-bold">Note:</span> When you click on a social media link, 
            personal data such as your IP address may be transmitted to the respective platform.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "14. Cookies",
    content: (
      <div className="space-y-3">
        <p>
          This website uses cookies. Cookies are small text files stored on your device.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="font-semibold">
                <th className="py-2">Cookie Type</th>
                <th className="py-2">Purpose</th>
                <th className="py-2">Legal Basis</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr>
                <td className="py-2">Essential</td>
                <td className="py-2">Website functionality</td>
                <td className="py-2">Art. 6 Abs. 1 lit. f DSGVO</td>
              </tr>
              <tr>
                <td className="py-2">Analytics</td>
                <td className="py-2">GA4 — user behaviour analysis</td>
                <td className="py-2">Art. 6 Abs. 1 lit. a DSGVO (consent)</td>
              </tr>
              <tr>
                <td className="py-2">Marketing</td>
                <td className="py-2">Meta Pixel, LinkedIn Insight Tag</td>
                <td className="py-2">Art. 6 Abs. 1 lit. a DSGVO (consent)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          You can manage or withdraw your consent at any time via the{" "}
          <span className="text-slate-900 font-bold">cookie settings banner</span>.
        </p>
      </div>
    ),
  },
  {
    title: "15. Ihre Rechte / Your Rights",
    content: (
      <div className="space-y-3">
        <p>
          Under GDPR, you have the following rights regarding your personal data:
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li><span className="text-slate-900 font-bold">Art. 15 DSGVO</span> – Right of access</li>
          <li><span className="text-slate-900 font-bold">Art. 16 DSGVO</span> – Right to rectification</li>
          <li><span className="text-slate-900 font-bold">Art. 17 DSGVO</span> – Right to erasure ("right to be forgotten")</li>
          <li><span className="text-slate-900 font-bold">Art. 18 DSGVO</span> – Right to restriction of processing</li>
          <li><span className="text-slate-900 font-bold">Art. 20 DSGVO</span> – Right to data portability</li>
          <li><span className="text-slate-900 font-bold">Art. 21 DSGVO</span> – Right to object</li>
          <li><span className="text-slate-900 font-bold">Art. 7 Abs. 3 DSGVO</span> – Right to withdraw consent at any time</li>
        </ul>

        <p>
          To exercise any of these rights, contact{" "}
          <span className="text-slate-900 font-bold">legal@arshan.de</span>.
        </p>

        <p>
          You also have the right to lodge a complaint with the competent supervisory authority:
        </p>

        <p className="font-bold">
          Berliner Beauftragte für Datenschutz und Informationsfreiheit
        </p>

        <p>
          Friedrichstr. 219, 10969 Berlin
        </p>

        <p>
          <a
            href="https://www.datenschutz-berlin.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://www.datenschutz-berlin.de
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "16. Änderungen dieser Datenschutzerklärung / Changes",
    content: (
      <div className="space-y-3">
        <p>
          We reserve the right to update this Privacy Policy at any time to reflect 
          changes in legal requirements or our services.
        </p>

        <p>
          The current version is always available at{" "}
          <span className="text-slate-900 font-bold">arshan.de/datenschutz</span>. 
          We recommend checking this page regularly.
        </p>

        <div className="space-y-1 pt-2">
          <p>
            <span className="text-slate-900 font-bold">Note:</span> Any changes become effective upon publication on this page.
          </p>
        </div>
      </div>
    ),
  },
];

export default function PrivacyContent() {
  return (
    <div className="space-y-10 md:space-y-12">
      {/* Header with Gold Accent */}
      <FadeItem className="flex items-center gap-4 md:gap-6">
        <div className="w-1 md:w-1.5 h-8 md:h-10 bg-tertiary rounded-full shrink-0" />
        <h2 className={`text-2xl md:text-4xl font-bold tracking-tight ${theme.text.brand}`}>
          Privacy Policy
        </h2>
      </FadeItem>

      {/* Lead Statement */}
      <FadeItem>
        <p className={`text-[15px] md:text-base font-medium md:font-light leading-relaxed ${theme.text.muted} max-w-4xl`}>
          Arshan Business Services UG takes the protection of your personal data very seriously. 
          We treat your personal data confidentially and in accordance with the statutory 
          data protection regulations (GDPR).
        </p>
      </FadeItem>

      {/* Technical Clauses Card */}
      <FadeItem>
        <div className="bg-white border border-slate-100 rounded-xl p-8 md:p-10 shadow-sm space-y-8 md:space-y-10 max-w-4xl">
          {privacySections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              {/* Note: changed to text-xs/sm and removed uppercase to accommodate bilingual titles */}
              <h3 className={`text-sm md:text-base font-bold ${theme.text.brand}`}>
                {section.title}
              </h3>
              <div className={`text-[13px] md:text-sm font-light leading-relaxed ${theme.text.muted}`}>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </FadeItem>
    </div>
  );
}