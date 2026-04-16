import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_waoi10r";
const TEMPLATE_ID = "template_wg6j1dt"; // Your primary reusable template
const PUBLIC_KEY = "0JVb8gLK6MsDRBCRI";

interface EmailPayload {
  html_content: string; 
  subject: string;
  selected_plan?: string;
  fullName?: string;
  inquiry_id?: string;
  [key: string]: any;   
}

/**
 * Arshan Unified Inquiry Protocol
 * Sends all data (HR, Marketing, Contact) through a single institutional template.
 */
export const sendArshanInquiry = async (
  payload: EmailPayload, 
  source: 'Marketing' | 'HR' | 'Contact'
) => {
  
  const templateParams = {
    // Target inbox (Matches {{email}} in EmailJS Dashboard)
    email: "koushikbabuforwork@gmail.com", 
    
    // Sender context (Matches {{fullName}})
    fullName: payload.fullName || `Arshan ${source} Lead`,

    // Header context (Matches {{selected_plan}})
    // For Contact forms, this can be "General Inquiry"
    selected_plan: payload.selected_plan || `${source} Service`,

    // Dynamic HTML injection (Matches {{{html_content}}})
    html_content: payload.html_content,

    // Metadata & Subject
    subject: payload.subject,
    inquiry_id: payload.inquiry_id || `ARS-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
  };

  try {
    const result = await emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID, 
      templateParams, 
      PUBLIC_KEY
    );
    
    console.log(`✅ [${source}] Handshake successful. ID: ${templateParams.inquiry_id}`);
    return { success: true, result };
  } catch (error: any) {
    console.error(`❌ [${source}] Transmission Error:`, error?.text || error);
    return { success: false, error };
  }
};