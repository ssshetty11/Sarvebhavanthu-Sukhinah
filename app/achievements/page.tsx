'use client'

import { motion } from 'framer-motion'

const achievements = [
  {
    title: "Championing Senior Citizen Wellness",
    description: "Conducted 52 free camps for senior citizens to enhance awareness and spread wellness which benifited over 600 people"
  },
  {
    title: "Promoting Joy Through Laughter Yoga",
    description: "Organized 42 laughter yoga sessions for all age groups"
  },
  {
    title: "Mass Celebration of Yoga Day",
    description: "Successfully conducted the INTERNATIONAL DAY OF YOGA Protocol 2022 in Yelahanka, Bengaluru with 2500 public gathering"
  },
  {
    title: "Empowering Young Minds Through Yoga",
    description: "Conducted 9 kids summer camps for children from India and UK, benefiting about 110 kids"
  },
  {
    title: "Global Covid Awareness Initiative",
    description: "Provided free Covid prevention and awareness sessions for 450 participants worldwide"
  },
  {
    title: "Visionary Leadership for Global Senior Citizen Wellness",
    description: "Planning a conference on August 21, 2025 (World Senior Citizens Day) with support from Indian Yoga Association"
  }
];


const qualifications = [
  "10 years of experience in the corporate field",
  "MSc Yoga from SVYASA University Bangalore",
  "Advanced Yoga Training course (AYTC)",
  "Yoga Instructor's Course (YIC)",
  "YIDM (Yoga Instructor Course for Diabetes Mellitus)",
  "Certified Laughter yoga therapist (Dr Madan Kataria University)",
  "Certified Garbha Samskar, pre and post pregnancy Yoga Therapist",
  "Convener of Indian Yoga Association (Kriya Karnataka State Chapter)"
]

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary mb-8 text-center"
      >
        Achievements of Vani A Hegde
      </motion.h1>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary mb-4">Experience and Qualifications</h2>
        <ul className="list-disc list-inside space-y-2">
          {qualifications.map((qualification, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-foreground"
            >
              {qualification}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary mb-4">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card p-6 rounded-lg shadow-md transform  shadow-slate-600 hover:shadow-lg hover:shadow-slate-800"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{achievement.title}</h3>
              <p className="text-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center"
      >
        <p className="text-xl font-semibold text-primary">
          Vani A Hegde continues to make significant contributions to the field of yoga and wellness,
          touching lives and promoting health across all age groups.
        </p>
      </motion.section>
    </div>
  )
}

