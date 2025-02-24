'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VirtualTourPage() {
  const tourStops = [
    { name: 'Reception Area', description: 'Our welcoming reception area where you can check in and relax before class.' },
    { name: 'Main Studio', description: 'Our spacious main studio equipped with mats, blocks, and other props for your practice.' },
    { name: 'Meditation Room', description: 'A serene space dedicated to quiet contemplation and meditation.' },
    { name: 'Changing Rooms', description: 'Clean and comfortable changing rooms with lockers for your belongings.' },
    { name: 'Yoga Shop', description: 'Browse our selection of yoga gear, mats, and eco-friendly products.' }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary mb-8 text-center"
      >
        Virtual Studio Tour
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-foreground mb-12 text-center"
      >
        Take a virtual walk through our yoga studio and familiarize yourself with our space before your first visit.
      </motion.p>
      {tourStops.map((stop, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">{stop.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <Image
              src={`/placeholder.svg?text=${stop.name}`}
              alt={stop.name}
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
            <p className="text-foreground">{stop.description}</p>
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center"
      >
        <p className="text-foreground mb-4">
          We hope this virtual tour has given you a good sense of our studio. We cant wait to welcome you in person!
        </p>
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition duration-300">
          Book Your First Class
        </button>
      </motion.div>
    </div>
  )
}

