import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, dogName, dogBirthdate, email, phone, zipCode, message } = await request.json()

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "dogtraining@daydreamersnyc.com",
      subject: `${name} is interested in Daydreamers Dog Training!`,
      text: `
Name: ${name}
Email address: ${email}
Phone number: ${phone}
Zip Code: ${zipCode}

Dog: ${dogName}, born ${dogBirthdate}

Message: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email address:</strong> ${email}</p>
          <p><strong>Phone number:</strong> ${phone}</p>
          <p><strong>Zip Code:</strong> ${zipCode}</p>
          <br>
          <p><strong>Dog:</strong> ${dogName}, born ${dogBirthdate}</p>
          <br>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Failed to send email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 