import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_waoi10r";
const TEMPLATE_ID = "template_wg6j1dt";
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
 * Dispatches institutional data through a centralized template architecture.
 */
export const sendArshanInquiry = async (
  payload: EmailPayload, 
  source: 'Marketing' | 'HR' | 'Strategy' | 'Contact'
) => {
  
  const templateParams = {
    // Matches Dashboard Variable: {{email}}
    email: "Inquiries@arshan.de", 
    
    // Matches Dashboard Variable: {{fullName}}
    fullName: payload.fullName || `Arshan ${source} Partner`,

    // Matches Dashboard Variable: {{selected_plan}}
    selected_plan: payload.selected_plan || `${source} Deployment`,

    // Matches Dashboard Variable: {{{html_content}}}
    html_content: payload.html_content,

    // Matches Dashboard Variable: {{subject}}
    subject: payload.subject || `[SYSTEM] New ${source} Handshake`,

    // Matches Dashboard Variable: {{inquiry_id}}
    inquiry_id: payload.inquiry_id || `ARS-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
  };

  try {
    const result = await emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID, 
      templateParams, 
      PUBLIC_KEY
    );
    
    console.log(`✅ [${source}] Handshake successful. Trace: ${templateParams.inquiry_id}`);
    return { success: true, result };
  } catch (error: any) {
    console.error(`❌ [${source}] Protocol Error:`, error?.text || error);
    return { success: false, error };
  }
};