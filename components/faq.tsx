'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import Link from 'next/link'

interface FaqItem {
  question: string
  answer: string
}

const Faq: React.FC = () => {
  const faqs: FaqItem[] = [
    { question: "What should I wear to yoga class?", answer: "Wear comfortable, breathable clothing that allows you to move freely. Yoga is typically practiced barefoot." },
    { question: "Do I need to bring my own mat?", answer: "Yes, we encourage students to bring their own yoga mats and yoga belt for hygiene reasons." },
    { question: "How early should I arrive for class?", answer: "We recommend arriving 5 minutes early to settle in and prepare for class." },
    { question: "I'm not flexible. Can I still do yoga?", answer: "Yoga is for everyone, regardless of flexibility. Regular practice will help improve your flexibility over time." },
    { question: "What are the basic types of yoga?", answer: "There are many types of yoga, but some common styles for beginners include Hatha (gentle, slow-paced), Vinyasa (flow-based), Yin (passive, deep stretching), and Restorative (relaxation-focused). Our studio offers classes in various styles to suit different needs and preferences." },
    { question: "How long does a typical yoga class last?", answer: "Most of our yoga classes are 60 to 75 minutes long. We also offer some shorter 30-45 minute classes for those with busy schedules, as well as longer workshops and special events." },
    { question: "What if I can't do a pose during class?", answer: "It's completely normal and okay if you can't do every pose! Our instructors always offer modifications and alternatives for different poses. You can also rest in Child's Pose at any time during the class if you need a break." },
    { question: "Is yoga a good form of exercise for weight loss?", answer: "While yoga can contribute to weight loss by building muscle and reducing stress, it's most effective when combined with a balanced diet and cardiovascular exercise. Some more vigorous styles of yoga, like Power Yoga or Ashtanga, can be particularly beneficial for weight management." }
  ]

  const [visibleQuestions, setVisibleQuestions] = useState(3)
  const [toggles, setToggles] = useState<boolean[]>(faqs.map(() => false))

  const handleToggle = (index: number) => {
    setToggles((prevToggles) => {
      const newToggles = [...prevToggles]
      newToggles[index] = !newToggles[index]
      return newToggles
    })
  }

  const loadMoreQuestions = () => {
    setVisibleQuestions((prev) => Math.min(prev + 2, faqs.length))
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary mb-8 text-center"
      >
        Welcome to Sarvebhavanthu Sukhinah!
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">What to Expect</h2>
        <p className="text-foreground mb-4">
          Your first yoga class can be an exciting and transformative experience. Here&apos;s what you can expect:
        </p>
        <ul className="list-disc list-inside text-foreground">
          <li>A warm welcome from our instructors and fellow students</li>
          <li>A brief introduction to the class and its focus</li>
          <li>Guidance on proper alignment and modifications for poses</li>
          <li>A peaceful and non-judgmental atmosphere</li>
          <li>Chanting mantras to develop focus, attention, concentration among students to reduces stress and anxiety</li>
          <li>Daily Jnana yoga quiz to  enhance yogic knowledge</li>
          <li>Time for questions and feedback after class</li>
        </ul>
        <h2 className="text-2xl font-semibold text-primary  mt-4 mb-4">What we offer:</h2>
<p className="text-foreground mb-4">
  Explore different yoga practices tailored for specific needs and well-being:
</p>
<ul className="list-disc list-inside text-foreground">
  <li>Yoga for General Wellbeing, Mental Illness, Mental Disorders</li>
  <li>Yoga for Pregnancy</li>
  <li>Therapeutic Yoga</li>
  <li>Yoga for Cardiovascular Disorders, Respiratory Disorders, Gastrointestinal Disorders</li>
  <li>Yoga for Joints and Muscles</li>
  <li>Yoga for Urogenital Disorders</li>
  
</ul>

      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <div className="my-8">
          <div className="py-2 bg-muted rounded-lg">
            <h2 className="text-4xl font-bold font-montserrat my-4 text-primary bg-clip-text bg-gradient-to-r from-primary to-secondary">
              FAQ
            </h2>
            <ul>
              {faqs.slice(0, visibleQuestions).map((item, index) => (
                <motion.li
                  key={index}
                  className="mb-4 "
                  onClick={() => handleToggle(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="border border-primary/20 p-4 rounded-md transition-colors duration-300 cursor-pointer bg-slate-100 hover:bg-slate-50 text-black">
                    <div className="flex justify-between items-center text-md font-montserrat">
                      <span className="text-foreground">{item.question}</span>
                      <button
                        className="p-1.5 hover:bg-primary/20 rounded transition-colors duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleToggle(index)
                        }}
                      >
                        <Plus
                          size={20}
                          className={`transition-transform duration-300 ${
                            toggles[index] ? 'rotate-45' : ''
                          }`}
                        />
                      </button>
                    </div>
                    <AnimatePresence>
                      {toggles[index] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 text-sm font-light text-muted-foreground overflow-hidden"
                        >
                          {item.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.li>
              ))}
            </ul>
            {visibleQuestions < faqs.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center mt-6"
              >
                <button
                  onClick={loadMoreQuestions}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition duration-300"
                >
                  Read More
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-card p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">Special Offer for First-Time Visitors</h2>
        <p className="text-foreground mb-4">
          We&apos;re excited to have you join our yoga community! As a welcome gift, enjoy your first class free.
        </p>
        
        <Link
          href="/contact"
          className="inline-block bg-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-slate-50/80 transition duration-300 bg-slate-50 text-black text-center"
        >
          Choose Your Offer 
        </Link>
      </motion.div> */}
    </div>
  )
}

export default Faq





