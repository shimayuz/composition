'use server';

import { redirect } from 'next/navigation';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  privacy: boolean;
}

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      company: formData.get('company') as string || undefined,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      privacy: Boolean(formData.get('privacy')),
    };

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message || !data.privacy) {
      throw new Error('必須項目をすべて入力してください。');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('有効なメールアドレスを入力してください。');
    }

    // In a real implementation, you would send this data to your server
    // For example using an API endpoint or directly to a database
    console.log('Submitting contact form data:', data);

    // For demo purposes, we'll just wait a moment and then redirect
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Redirect to thank you page
    redirect('/contact/thank-you');
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}