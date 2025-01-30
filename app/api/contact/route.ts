import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { MongoClient } from 'mongodb'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const { name, dogName, dogBirthdate, email, phone, zipCode, message } = formData

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

    const client = new MongoClient(process.env.MONGODB_URI as string)
    await client.connect()
    
    const db = client.db()
    await db.collection('contact_form_submissions').insertOne({
      ...formData,
      submittedAt: new Date()
    })

    await client.close()

    return NextResponse.json({ message: 'Email sent and data saved successfully' })
  } catch (error) {
    console.error('Operation failed:', error)
    return NextResponse.json(
      { error: 'Operation failed' },
      { status: 500 }
    )
  }
} 