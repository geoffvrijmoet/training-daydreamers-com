'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    dogName: '',
    dogBirthdate: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', phone: '', zipCode: '', dogName: '', dogBirthdate: '', message: '' })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-fredoka text-center mb-8">Get in Touch</h2>
        <Card className="max-w-2xl mx-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                Zip Code
              </label>
              <Input
                id="zipCode"
                type="tel"
                value={formData.zipCode}
                onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                required
              />
            </div>
            <div>
              <label htmlFor="dogName" className="block text-sm font-medium mb-2">
                Dog Name
              </label>
              <Input
                id="dogName"
                value={formData.dogName}
                onChange={(e) => setFormData({...formData, dogName: e.target.value})}
                required
              />
            </div>
            <div>
              <label htmlFor="dogBirthdate" className="block text-sm font-medium mb-2">
                Dog Birthdate
              </label>
              <Input
                id="dogBirthdate"
                type="date"
                value={formData.dogBirthdate}
                onChange={(e) => setFormData({...formData, dogBirthdate: e.target.value})}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full min-h-[100px] p-2 border rounded-md"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-brand-pink hover:bg-brand-pink/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
} 