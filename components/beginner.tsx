'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function BeginnersGuidePage() {
  const basicPoses = [
    { name: 'Mountain Pose (Tadasana)', description: 'The foundation of all standing poses, mountain pose teaches you how to stand with proper alignment.', image: 'tadasana.png' },
    { name: `Child's Pose (Balasana)`, description: `A resting pose that can help you relax and stretch your back, hips, thighs, and ankles.`,image:'balasana.png' },
    { name: 'Downward-Facing Dog (Adho Mukha Svanasana)', description: 'This pose stretches and strengthens the entire body.', image:'pose.png' },
    { name: 'Warrior I (Virabhadrasana I)', description: 'A standing pose that stretches your chest and lungs, shoulders and neck, belly, groins.', image:'virabhadrasana.png' }
  ]

  const tips = [
    "Start slowly and listen to your body",
    "Focus on your breath",
    "Don't compare yourself to others in class",
    "Wear comfortable, breathable clothing",
    "Arrive early to set up and center yourself",
    "Stay hydrated before, during, and after practice"
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary mb-8 text-center"
      >
        Beginner&apos;s Guide to Yoga
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-foreground mb-12 text-center"
      >
        Welcome to your yoga journey! This guide will help you get started with some basic poses and essential tips.
      </motion.p>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary mb-6">Basic Yoga Poses</h2>
        {basicPoses.map((pose, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 5) }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold text-primary mb-2">{pose.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <Image
                src={`/${pose.image}`}
                alt={pose.name}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="text-foreground">{pose.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary mb-6">Essential Tips for Beginners</h2>
        <ul className="list-disc list-inside text-foreground">
          {tips.map((tip, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 10) }}
              className="mb-2"
            >
              {tip}
            </motion.li>
          ))}
        </ul>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center"
      >
        <p className="text-foreground mb-4">
          Remember, yoga is a journey, not a destination. Be patient with yourself and enjoy the process of learning and growing.
        </p>
        
        <Link
            href="/contact"
            className="bg-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-slate-50/80 transition duration-300 bg-slate-50 text-black text-center"
          >
            Join a Beginner&apos;s Class
          </Link>
      </motion.div>
    </div>
  )
}

