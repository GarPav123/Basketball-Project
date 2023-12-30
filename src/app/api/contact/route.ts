'use server'


import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'

import nodemailer from 'nodemailer';
import { env } from 'process';
import ContactForm from '@/app/components/ContactForm';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export  async function POST(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    // return res.status(405).json({ message: 'Method not allowed' });
    return NextResponse.json({status: 405, message: 'Method not allowed' });
  }

  const { name, email, subject, message }: ContactFormData = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'acsx2310@gmail.com',
        pass: 'raix zxmj vvzs kamh',
      },
    });

    const mailOptions = {
      from: 'acsx2310@gmail.com',
      to: 'acsx2310@gmail.com', // Send to yourself
      subject: subject ? `New Contact Form Message: ${subject}` : 'New Contact Form Message',
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message:</p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({status: 200, message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, message: 'Failed to send email' });
  }
}