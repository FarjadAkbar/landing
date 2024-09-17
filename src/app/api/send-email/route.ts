import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, fatherName, age, email, phoneNumber, whatsappNumber, courses } = data;

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false,
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email content
    const mailContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h1 style="text-align: center; color: #197573;">Form Submission Details</h1>
          <p style="font-size: 16px; color: #333333;">Hello ${name},</p>
          <p style="font-size: 16px; color: #333333;">Thank you for submitting your form. Below are the details you provided:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
              <tr>
                <th style="background-color: #197573; color: white; padding: 10px; border: 1px solid #dddddd;">Field</th>
                <th style="background-color: #197573; color: white; padding: 10px; border: 1px solid #dddddd;">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 10px; border: 1px solid #dddddd;">Name</td>
                <td style="padding: 10px; border: 1px solid #dddddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #dddddd;">Father's Name</td>
                <td style="padding: 10px; border: 1px solid #dddddd;">${fatherName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #dddddd;">Age</td>
                <td style="padding: 10px; border: 1px solid #dddddd;">${age}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #dddddd;">Email</td>
                <td style="padding: 10px; border: 1px solid #dddddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #dddddd;">Phone Number</td>
                <td style="padding: 10px; border: 1px solid #dddddd;">${phoneNumber}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #dddddd;">WhatsApp Number</td>
                <td style="padding: 10px; border: 1px solid #dddddd;">${whatsappNumber}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #dddddd;">Selected Course</td>
                <td style="padding: 10px; border: 1px solid #dddddd;">${courses}</td>
              </tr>
            </tbody>
          </table>
          <p style="font-size: 14px; color: #777777; margin-top: 20px;">If any of the above details are incorrect, please contact us at <a href="mailto:${process.env.MAIL_EMAIL}">${process.env.MAIL_EMAIL}</a>.</p>
          <p style="font-size: 14px; color: #777777;">Best regards,<br>${process.env.NEXT_PUBLIC_APP_NAME}</p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: process.env.MAIl_SUBJECT,
      html: mailContent,
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
