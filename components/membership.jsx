'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MembershipPage() {
  const membershipOptions = [
    {
      name: "Drop-In",
      price: "$20",
      duration: "per class",
      features: [
        "Access to any single class",
        "No commitment required",
        "Ideal for occasional practitioners"
      ]
    },
    {
      name: "Monthly Unlimited",
      price: "$120",
      duration: "per month",
      features: [
        "Unlimited access to all classes",
        "Priority booking",
        "10% discount on workshops"
      ]
    },
    {
      name: "10-Class Pack",
      price: "$180",
      duration: "valid for 3 months",
      features: [
        "10 classes of your choice",
        "Flexible usage within 3 months",
        "Shareable with family members"
      ]
    },
    {
      name: "Annual Membership",
      price: "$1200",
      duration: "per year",
      features: [
        "Unlimited access to all classes",
        "2 free private sessions per year",
        "20% discount on workshops and retreats",
        "Exclusive members-only events"
      ]
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
        Membership Options
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-foreground mb-12 text-center"
      >
        Choose the membership option that best fits your yoga journey and lifestyle.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {membershipOptions.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
            className="bg-card p-6  rounded-lg  flex flex-col shadow-md shadow-slate-300"
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">{option.name}</h2>
            {/* <p className="text-3xl font-bold text-primary mb-2">{option.price}</p> */}
            {/* <p className="text-foreground mb-4">{option.duration}</p> */}
            <ul className="text-foreground mb-6 flex-grow">
              {option.features.map((feature, i) => (
                <li key={i} className="mb-2">• {feature}</li>
              ))}
            </ul>
            <Link
            href="/contact"
            className="bg-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-slate-50/80 transition duration-300 bg-slate-50 text-black text-center"
          >
            Choose Plan and join 
          </Link>
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
          Not sure which option is right for you? Book a consultation with one of our yoga experts to find the perfect fit for your practice.
        </p>
        <button className="bg-slate-50 text-black px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition duration-300 hover:bg-slate-50/80">
          Book a Consultation on call
        </button>
      </motion.div>
    </div>
  )
}