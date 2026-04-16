import emailjs from '@emailjs/browser';

// Replace these with your actual IDs from EmailJS dashboard
const SERVICE_ID = "service_waoi10r";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "0JVb8gLK6MsDRBCRI";

export const sendInquiry = async (
  formData: Record<string, any>, 
  source: 'Marketing' | 'HR' | 'Contact'
) => {
  // We format the data into a readable block for the email template
  const formattedData = Object.entries(formData)
    .map(([key, value]) => `<b>${key.toUpperCase()}:</b> ${value}`)
    .join('<br/>');

  const templateParams = {
    subject: `New ${source} Inquiry - Arshan`,
    to_email: "koushikbabuforwork@gmail.com", // Your testing email
    html_content: formattedData, // This matches the variable in your dashboard
    raw_data: JSON.stringify(formData, null, 2)
  };

  try {
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return { success: true, result };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
};