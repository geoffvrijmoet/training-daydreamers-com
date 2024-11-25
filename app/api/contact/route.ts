import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import { authenticate } from '@google-cloud/local-auth'
import path from 'path'

const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json')
const SCOPES = ['https://www.googleapis.com/auth/gmail.send']

export async function POST(request: Request) {
  try {
    const { name, dogName, dogBirthdate, email, phone, zipCode, message } = await request.json()

    const auth = await authenticate({
      keyfilePath: CREDENTIALS_PATH,
      scopes: SCOPES,
    })

    const gmail = google.gmail({ version: 'v1', auth })
    
    const emailContent = `
From: ${process.env.EMAIL_USER}
To: dogtraining@daydreamersnyc.com
Subject: ${name} is interested in Daydreamers Dog Training!
Content-Type: text/html; charset=utf-8

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
`
    const encodedEmail = Buffer.from(emailContent)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
      },
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