import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_waoi10r";
const PUBLIC_KEY = "0JVb8gLK6MsDRBCRI";

const TEMPLATE_MAP = {
  Marketing: "template_wg6j1dt", 
  HR: "template_hr_id",               
  Contact: "template_contact_id"       
};

interface EmailPayload {
  html_content: string; 
  subject: string;
  selected_plan?: string;
  fullName?: string;
  [key: string]: any;   
}

export const sendArshanInquiry = async (
  payload: EmailPayload, 
  source: 'Marketing' | 'HR' | 'Contact'
) => {
  
  const templateId = TEMPLATE_MAP[source];

  // CRITICAL: These keys must match the {{variables}} in your EmailJS Dashboard screenshot
  const templateParams = {
    // 1. Matches {{email}} in your "To Email" field
    email: "koushikbabuforwork@gmail.com", 
    
    // 2. Matches {{fullName}} in your "From Name" field
    fullName: payload.fullName || "Arshan Lead",

    // 3. Matches {{selected_plan}} in your Header block
    selected_plan: payload.selected_plan || "Standard",

    // 4. Matches {{{html_content}}} in your Body
    html_content: payload.html_content,

    // 5. Matches {{subject}} if you decide to use the variable in the Subject field
    subject: payload.subject
  };

  try {
    const result = await emailjs.send(
      SERVICE_ID, 
      templateId, 
      templateParams, 
      PUBLIC_KEY
    );
    
    console.log(`✅ ${source} Inquiry sent successfully`);
    return { success: true, result };
  } catch (error: any) {
    // If it fails again, this will log the specific text from the EmailJS server
    console.error(`❌ EmailJS ${source} Error:`, error?.text || error);
    return { success: false, error };
  }
};