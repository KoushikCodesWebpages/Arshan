import Link from "next/link";
import { theme } from "@/lib/theme";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "EXPERTISE",
      links: [
      { name: "Social Management", path: "/marketing/#expertise" },
      { name: "Content Strategy", path: "/marketing/#expertise" },
      { name: "Account Maintenance", path: "/marketing/#expertise" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { name: "Our Process", path: "/finance/process" },
        { name: "Privacy Policy", path: "/terms" },
        { name: "Careers", path: "/contact-us" }
      ],
    },
    {
      title: "CONTACT",
      links: [
        { name: "info@arshan.consulting", path: "mailto:inquiries@arshan.de" },
      ],
    },
  ];

  return (
    /* We use bg-white here so the footer block is clearly 
       distinct from the bg-gray-100 body.
    */
    <footer className="bg-slate-50 border-t border-gray-200 mt-auto font-sans">
      <div className="w-full mx-auto px-28 pt-20 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <h2 className={`${theme.text.brand} text-3xl uppercase tracking-tighter`}>
              ARSHAN
            </h2>
            <p className={`${theme.text.muted} text-sm leading-relaxed max-w-xs font-medium`}>
              Professional social media management and content design for brands seeking digital authority and consistent growth.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-primary mb-8 uppercase opacity-80">
                  {section.title}
                </h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        {/* Using <a> instead of <Link> forces a hard refresh.
                            This ensures the browser catches the #hash even if you're already on the page.
                        */}
                        <a
                          href={link.path}
                          className={`${theme.text.muted} hover:text-primary transition-colors duration-300 text-[14px] font-medium`}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  
                  {section.title === "CONTACT" && (
                    <div className="flex items-center space-x-5 pt-4">
                      <button className="text-primary hover:text-tertiary transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </button>
                      <button className="text-primary hover:text-tertiary transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.15em] text-text-muted uppercase font-semibold">
            © {currentYear} ARSHAN CONSULTING GROUP. ALL RIGHTS RESERVED.
          </p>
          
        <div className="flex items-center space-x-10">
          {[
            { label: "TERMS", id: "terms" },
            { label: "POLICY", id: "privacy" },
            { label: "COMPLIANCE", id: "impressum" }
          ].map((item) => (
            <a 
              key={item.label} 
              href={`/terms#${item.id}`} 
              className="text-[10px] tracking-[0.15em] text-text-muted hover:text-primary uppercase transition-colors duration-300 font-semibold"
            >
              {item.label}
            </a>
          ))}
        </div>
        </div>
      </div>
    </footer>
  );
}