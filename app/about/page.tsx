'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
// import YogaStyles from '../'

const AboutPage = () => {
  const expertise = [
    "Therapeutic Yoga",
    "Ashtanga Yoga",
    "Pre post natel - Garbhasanskara",
    "Laughter Yoga",
    "Desk Yoga",
    "Power Yoga",
    "Mindfulness and Meditation",
    "Yogic Diet Management",
    "Weight Management"
  ]

  const qualifications = [
    "M.Sc. Yoga from SVYASA University, Bengaluru",
    "Advanced Yoga Training Course (AYTC)",
    "Yoga Instructor's Course (YIC)",
    "Yoga Instructor Course for Diabetes Mellitus (YIDM)",
    "Certified Garbha Samskar, pre and post pregnancy Yoga Therapist (Ayur Yog Center and hospital, Pune)",
    "Certified Laughter Yoga Therapist from Dr. Madan Kataria University",
    "Convener of Indian Yoga Association Kriya (Karnataka State Chapter)"
  ]

  const offerings = [
    "Corporate Yoga Sessions: Worked with organizations like SureWorks, BlueBridge, and Intas Pharmaceuticals",
    "Group and Public Sessions: Laughter Yoga sessions in collaboration with Shree Yoga Vijnana Kendra and Sri Maruthi International Yoga Academy",
    "Therapeutic Yoga: Integrated yogic therapies for various conditions",
    "Kids Yoga: Weekend sessions focusing on flexibility, memory, focus, and concentration"
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary mb-8 text-center"
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/profilePic.jpeg"
            alt="Vani - Yoga Instructor"
            width={650}
            height={500}
            className="rounded-lg shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Welcome to my yoga journey!</h2>
          <p className="text-foreground mb-4">
            I&apos;m Vani - Yoga therapist(M.Sc in Yoga from SVYASA University, Bengaluru), a passionate and accomplished Yoga Trainer with over a decade of experience in guiding individuals toward holistic wellness. Yoga has not only been an integral part of my life but also an inspiration to live each moment mindfully and with intention.
          </p>
          <p className="text-foreground mb-4">
            My journey began with regular Ashtanga Yoga practice, which deeply influenced my perspective and led me to embrace the noble mission of healing people through the transformative power of yoga.
          </p>
          <p className="text-foreground">
            I believe in blending the authenticity of traditional yoga philosophy with modern scientific understanding to deliver holistic wellness. My goal is to help individuals achieve balance in their body, mind, and soul while fostering an inclusive and supportive community of practitioners.
          </p>
          <p className="text-foreground">
            Sarve Bhavantu Sukhinaha was founded on 15th of April 2020 with the aim of promoting happiness,
            peace, and overall well-being through the practice of yoga during the pandemic. Since then, more than
            100 yoga enthusiasts from different countries have attended online yoga sessions, annual celebrations,
            and special events.
          </p>
          {/*
          <p className='text-foreground'>
          The organization has celebrated various occasions by incorporating yoga into them, such as 108 sun
          salutations during Ratha Saptami, 75 sun salutations 75 th Republic Day, Talk on women’s health during
          Women&#39;s Day, Diwali, and International Yoga Day. In addition, they have collaborated with other yoga
          centers to promote the practice of yoga and its benefits.
          Sarve Bhavantu Sukhinaha has also focused on the holistic approach to yoga by incorporating different
          forms of yoga such as Raja Yoga, Bhakti Yoga, and cleansing techniques like Jalaneti, Vaman Dhauti, and
          Laghu shanka prakshalana. They have also conducted relaxation sessions on Fridays to reduce stress and
          boost immunity.
          </p>
          <p className='text-foreground'>
            Participants of all age groups starting from 10-year-old kids to those aged 60 and above have taken part
            in these sessions and have benefited from them by improving their posture, energy levels, and
            discipline.
          </p> */}
          
          
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary mb-4">Expertise Areas</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {expertise.map((item, index) => (
            <li key={index} className="bg-card p-4 rounded-lg shadow-md shadow-slate-600 hover:shadow-lg hover:shadow-slate-800">{item}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary mb-4">Professional Qualifications</h2>
        <ul className="list-disc list-inside space-y-2">
          {qualifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary mb-4">Classes and Offerings</h2>
        <p className='text-foreground'>
            Sarve Bhavantu Sukhinaha is an organization that aims to promote happiness, peace, and
            overall well-being through the practice of yoga. By incorporating yoga into various occasions and
            collaborating with other yoga centers, they have spread awareness about the benefits of yoga and its
            holistic approach.
          </p>
        <ul className="list-disc list-inside space-y-2">
          {offerings.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary mb-4">Global Reach</h2>
        <p className="text-foreground mb-4">
          My Ashtanga Yoga sessions attract students from all over India, the UK, USA, and Italy, catering to diverse needs for both body and mind rejuvenation.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary mb-4">Philosophy</h2>
        <p className="text-foreground mb-4">
          I live by Bernard Shaw&apos;s timeless saying, &quot;You don&apos;t stop laughing till you grow old, and you grow old when you stop laughing.&quot; My mission is to share the joy, laughter, and healing power of yoga with the world.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary mb-4">Community Engagement</h2>
        <p className="text-foreground mb-4">
          I actively collaborate with several NGOs, conducting public health awareness programs centered around Laughter Yoga to bring smiles and wellness to communities.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold text-primary mb-4">Languages</h2>
        <p className="text-foreground mb-4">
          My classes are conducted in English, Kannada, and Hindi to ensure accessibility and inclusivity.
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="text-center"
      >
        <p className="text-xl font-semibold text-primary">
          Join me on this transformative journey toward a healthier, happier, and more mindful life!
        </p>
      </motion.div>
    </div>
  )
}

export default AboutPage

