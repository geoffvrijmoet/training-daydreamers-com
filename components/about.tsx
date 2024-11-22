import Image from 'next/image'

export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-fredoka text-3xl mb-8">Meet Madeline</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="/requirements/madeline_stanley.webp"
              alt="Madeline Pape with Stanley"
              width={400}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="font-quicksand mb-4">
              With over a decade of experience in dog training, Madeline Pape has helped hundreds of NYC families 
              build better relationships with their dogs. Certified in positive reinforcement techniques and 
              behavioral modification, she specializes in addressing common urban dog challenges.
            </p>
            <p className="font-quicksand">
              Based in New York City, Madeline offers personalized training programs that fit into your busy 
              lifestyle while delivering lasting results for you and your furry family member.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 