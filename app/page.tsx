import Image from 'next/image'
import Header from '@/components/header'
import ContactFormClient from '@/components/contact-form-client'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* About Section */}
        <section className="w-full bg-white">
          <div className="max-w-[1400px] mx-auto px-6 py-8">
            <h2 className="font-fredoka font-semibold text-6xl mb-3 text-accent-orange">Madeline Pape</h2>
            <p className="text-secondary font-fredoka text-2xl mb-8">Certified Professional Dog Trainer - CPDT-KA</p>
            
            <div className="flex flex-col md:flex-row gap-8 justify-between">
              <div className="md:w-1/2">
                <div className="mb-6">
                  <h4 className="font-fredoka text-2xl mb-2 text-accent-orange">Private Training</h4>
                  <div className="ml-4">
                    <h5 className="font-fredoka text-xl mb-2 text-secondary">Basic Manners Training</h5>
                    <p className="text-lg mb-4">One-on-one sessions tailored to your dog&apos;s specific needs</p>
                    
                    <h5 className="font-fredoka text-xl mb-2 text-secondary">Behavior Therapy Training</h5>
                    <p className="text-lg mb-4">Specialized help for reactivity, resource guarding, anxiety/fear related issues, and more</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-fredoka text-2xl mb-2 text-accent-orange">Day Training</h4>
                  <p className="text-lg mb-4">Let me work with your dog solo, then pass those skills onto you</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-fredoka text-2xl mb-2 text-accent-orange">Puppy Training</h4>
                  <p className="text-lg mb-4">Early education and socialization for puppies</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-fredoka text-2xl mb-2 text-accent-orange">Group Classes</h4>
                  <p className="text-lg mb-4">Structured training in a social environment</p>
                </div>
                
                <div className="mb-4 p-4 bg-accent-peach rounded-lg">
                  <h3 className="font-fredoka text-2xl mb-2 text-secondary">Additional Certifications</h3>
                  <ul className="list-disc list-inside text-lg">
                    <li>Family Dog Mediation (FDM)</li>
                    <li>Catch Certified Trainer (CCDT)</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <Image
                  src="/images/madeline_stanley.webp"
                  alt="Madeline with Stanley"
                  width={500}
                  height={500}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="w-full bg-accent-orange">
          <div className="max-w-[1400px] mx-auto px-6 py-16">
            <h2 className="font-fredoka font-semibold text-5xl mb-8 text-white">Madeline&apos;s Training Philosophy</h2>
            <div className="space-y-6 text-white">
              <p className="text-lg">
                Dog training is a completely unregulated field. That means any rando off the street with a shock collar and unscientific, 
                outdated views on dog behavior can proclaim they are a dog trainer! (Talking to you, Dog Daddy and Cesar Milan…)
              </p>
              <p className="text-lg">
                To me, this is absurd. Dogs are complex beings with intricate emotional lives! There&apos;s a lot at stake. 
                That&apos;s why I prioritized receiving a formal education on Learning Theory, and Behavior Science before beginning 
                my career as a dog trainer. I studied at Catch Canine Trainers Academy, and learned about the science of dog training. 
                I use a LIMA (Least Intrusive, Minimally Aversive) approach to dog training, and I would be more than happy to discuss 
                the science behind this with you.
              </p>
              <p className="text-lg">
                Why train using fear, when you can train with love and continue building a beautiful relationship with your dog? 
                At the end of the day your relationship with your dog is what matters most.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full bg-main">
          <div className="max-w-[1400px] mx-auto px-6 py-8">
            <h2 className="font-fredoka font-semibold text-6xl mb-10 text-secondary">Contact Me</h2>
            {/* random comment */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <p className="text-xl mb-8">
                  To get started on your training journey please fill out this form. 
                  I will get in touch with you asap for a Free Consultation, and we 
                  will discuss the training options that are best for you and your pup.
                </p>

                <div className="space-y-3 mb-8">
                  <p className="text-xl">dogtraining@daydreamersnyc.com</p>
                  <p className="text-xl">(646) 961-3707</p>
                  <p className="text-xl">Brooklyn, NY</p>
                </div>

                <p className="text-xl italic">
                  Please note: For in person sessions I service most of Brooklyn and Manhattan. 
                  Please reach out via this form to confirm you are in my service zone.
                </p>
              </div>
              
              <div className="md:w-2/3">
                <ContactFormClient />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
