import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { MongoClient } from 'mongodb'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const { name, dogName, dogBirthdate, email, phone, streetAddress, city, state, zipCode, message } = formData

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Build address string from components
    const addressParts = [streetAddress, city, state, zipCode].filter(part => part && part.trim())
    const fullAddress = addressParts.length > 0 ? addressParts.join(', ') : 'Not provided'
    
    // Create Google Maps URL if address exists
    const googleMapsUrl = addressParts.length > 0 
      ? `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}`
      : null

    const client = new MongoClient(process.env.MONGODB_URI as string)
    await client.connect()
    
    const db = client.db()
    const result = await db.collection('contact_form_submissions').insertOne({
      ...formData,
      submittedAt: new Date()
    })

    await client.close()

    const documentId = result.insertedId.toString()

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "dogtraining@daydreamersnyc.com",
      subject: `${name} is interested in Daydreamers Dog Training!`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email address:</strong> ${email}</p>
          <p><strong>Phone number:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${googleMapsUrl ? `<a href="${googleMapsUrl}" target="_blank" style="color: #1a73e8; text-decoration: none;">${fullAddress}</a>` : fullAddress}</p>
          <p><strong>Dog:</strong> ${dogName}, born ${dogBirthdate}</p>
          <p><strong>Message:</strong> ${message}</p>
          <br>
          <p><a href="https://admin.training.daydreamersnyc.com/new-training-inquiries/${documentId}" target="_blank" style="color: #1a73e8; text-decoration: none; font-weight: bold;">View this submission in your dashboard</a></p>
        </div>
      `,
    })

    return NextResponse.json({ message: 'Email sent and data saved successfully' })
  } catch (error) {
    console.error('Operation failed:', error)
    return NextResponse.json(
      { error: 'Operation failed' },
      { status: 500 }
    )
  }
} 