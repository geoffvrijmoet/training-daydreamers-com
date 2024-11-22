import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Brooklyn",
    text: "Madeline transformed our anxious rescue into a confident, well-behaved dog. Her methods are gentle yet effective.",
    rating: 5
  },
  {
    name: "Michael K.",
    location: "Manhattan",
    text: "The difference in our puppy's behavior after working with Madeline is incredible. She's professional, knowledgeable, and truly cares.",
    rating: 5
  },
  {
    name: "Lisa R.",
    location: "Queens",
    text: "Best investment we've made for our dog. Madeline's training techniques are easy to follow and really work.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Dog Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="text-sm text-gray-600">
                <span className="font-medium">{testimonial.name}</span> • {testimonial.location}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 