import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { env } from 'process';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message }: ContactFormData = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.EMAIL_ADDRESS,
        pass: env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: env.EMAIL_ADDRESS,
      to: env.EMAIL_ADDRESS, // Send to yourself
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message:</p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}