'use client'

import { useState } from 'react'

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: '',
    dogName: '',
    dogBirthdate: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          dogName: '',
          dogBirthdate: '',
          email: '',
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="mb-3">
        <label className="block mb-1 text-lg">Your Name</label>
        <input 
          type="text" 
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full border border-gray-400 p-1.5 rounded-md" 
          required 
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 text-lg">Dog&apos;s Name</label>
        <input 
          type="text" 
          value={formData.dogName}
          onChange={(e) => setFormData(prev => ({ ...prev, dogName: e.target.value }))}
          className="w-full border border-gray-400 p-1.5 rounded-md" 
          required 
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 text-lg">Dog&apos;s Birthdate (or best guess)</label>
        <input 
          type="date" 
          value={formData.dogBirthdate}
          onChange={(e) => setFormData(prev => ({ ...prev, dogBirthdate: e.target.value }))}
          className="w-full border border-gray-400 p-1.5 rounded-md" 
          required 
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 text-lg">Email</label>
        <input 
          type="email" 
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full border border-gray-400 p-1.5 rounded-md" 
          required 
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 text-lg">Phone</label>
        <input 
          type="tel" 
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full border border-gray-400 p-1.5 rounded-md" 
          required 
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 text-lg">Street Address</label>
        <input 
          type="text" 
          value={formData.streetAddress}
          onChange={(e) => setFormData(prev => ({ ...prev, streetAddress: e.target.value }))}
          className="w-full border border-gray-400 p-1.5 rounded-md" 
          placeholder="123 Main Street"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        <div>
          <label className="block mb-1 text-lg">City</label>
          <input 
            type="text" 
            value={formData.city}
            onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
            className="w-full border border-gray-400 p-1.5 rounded-md" 
            placeholder="New York"
          />
        </div>
        
        <div>
          <label className="block mb-1 text-lg">State</label>
          <input 
            type="text" 
            value={formData.state}
            onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
            className="w-full border border-gray-400 p-1.5 rounded-md" 
            placeholder="NY"
            maxLength={2}
          />
        </div>
        
        <div>
          <label className="block mb-1 text-lg">Zip Code</label>
          <input 
            type="text" 
            pattern="[0-9]*"
            maxLength={5}
            value={formData.zipCode}
            onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
            className="w-full border border-gray-400 p-1.5 rounded-md" 
            placeholder="10001"
            required 
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-lg">Message</label>
        <textarea 
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="w-full border border-gray-400 p-1.5 h-24 rounded-md" 
          required
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="border border-gray-400 px-6 py-1.5 text-lg rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <p className="mt-4 text-green-600">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
      )}
    </form>
  )
} 