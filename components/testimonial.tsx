'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Testimonial() {
  const testimonials = [
    {
      name: "Maryanne",
      age: 66,
      occupation: "English Lecture, Universita di Siena",
      image: "/maryanneProfile.jpeg",
      quote: `I started yoga at 58, lacking flexibility, and now at 66, it remains my challenge. Yet, that’s the beauty of yoga—it meets you where you are. Yoga has improved my posture, balance, and eased stiffness. Thanks to Vani’s welcoming and supportive classes, even someone like me, with zero flexibility, feels empowered. Her expertise, patience, and ability to tailor practices make all the difference. Yoga with Vani isn’t about perfect poses but connecting with your body and mindfulness. After 8 years of her guidance, I’m grateful for this journey and highly recommend her classes to anyone, regardless of age or ability.`,
      yogaJourney: "Yoga at 66: A Journey of Transformation"
    },
    {
      name: "Ranjitha Shashikant",
      age: 42,
      occupation: "Software Engineer",
      image: "/ranjithaProfile.jpeg",
      quote: `I have been practicing yoga for almost four years, and it has been one of the best decisions of my life. I never truly understood the incredible benefits of yoga until I started experiencing them myself. Yoga has significantly improved my body’s flexibility, calmed my mind, and enhanced my overall well-being. Vani is an exceptionally dedicated teacher whose clear instructions and constant motivation inspire us to push our limits and achieve more. I am so grateful to be part of her class`,
      yogaJourney: "it’s been a transformative journey!"
    },
    {
      name: "Deepika Sanjeeth",
      age: 28,
      occupation: "Senior centralized monitoring lead, IQVIA",
      image: "/deepikaProfile.jpeg",
      quote: `I bow to the lotus feet of Guru Vani Hegde, who has guided me to true self-awareness and bliss. Joining her yoga sessions has been a blessing. After my hysterectomy, I was advised to stay active, and despite initial doubts, I joined Vani’s online classes through a friend. Her personal attention, corrections, and well-structured sessions, including prayers, warm-ups, asanas, and breathing exercises, have greatly improved my flexibility. Each class is unique and engaging, becoming an essential part of my daily routine. Vani’s motivation and guidance have been invaluable, even allowing me to lead sessions and feature in asana videos.`,
      yogaJourney: "Started with Laughter Yoga, now explores various styles"
    },
    {
      name: "Priya P",
      age: 55,
      occupation: "Retired Athlete",
      image: "/priyaProfile.jpeg",
      quote: `Vani Mam is an extraordinary yoga instructor. Since my daughter began attending her classes, I’ve observed remarkable improvements not only in her flexibility but also in her overall behavior and mindfulness. The transformative power of yoga on both physical health and mental well-being is undeniable, and we are immensely grateful for Vani Mam’s guidance in fostering these positive changes.`,
      yogaJourney: "Embarked on a yoga journey to complement a high-intensity fitness regime, discovering a profound balance between flexibility, strength, and mindfulness."
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary mb-8 text-center"
      >
        Testimonials and Success Stories
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-foreground mb-12 text-center"
      >
        Discover how yoga has transformed the lives of our students.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
            className="bg-card p-6 rounded-lg shadow-md bg-slate-100 hover:bg-slate-50 text-black"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold text-primary">{testimonial.name}</h2>
                <p className="text-foreground">{testimonial.occupation}</p>
              </div>
            </div>
            <p className="text-foreground mb-4 italic text-center content-center">{testimonial.quote}</p>
            <p className="text-foreground">
              <span className="font-semibold">Yoga Journey:</span> {testimonial.yogaJourney}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-foreground mb-4">
          Ready to start your own yoga journey? Join us for a class and experience the benefits for yourself!
        </p>
        <Link
            href="/contact"
            className="bg-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-slate-50 transition duration-300 bg-slate-300 text-black text-center"
          >
            Book Your First Class 
          </Link>
      </motion.div>
    </div>
  )
}
