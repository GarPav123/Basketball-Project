import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return NextResponse.json({ status: 405, message: 'Method not allowed' });
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
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message:</p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ status: 200, message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 200, message: 'Failed to send email' });
  }
}
