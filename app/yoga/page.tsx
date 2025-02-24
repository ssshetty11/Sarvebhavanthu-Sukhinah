'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import BeginnersGuidePage from '@/components/beginner'

const galleryImages = [
  { src: "/g1.jpeg", alt: "Yoga Pose 1", width: 1200, height: 800 },
  { src: "/g2.jpeg", alt: "Yoga Pose 2", width: 1200, height: 800 },
  { src: "/g3.jpeg", alt: "Yoga Pose 3", width: 1200, height: 800 },
  { src: "/g4.jpeg", alt: "Yoga Pose 4", width: 1200, height: 800 },
  { src: "/g5.jpeg", alt: "Yoga Pose 5", width: 1200, height: 800 },
  { src: "/g6.jpeg", alt: "Yoga Pose 6", width: 1200, height: 800 },
  { src: "/g7.jpeg", alt: "Yoga Pose 7", width: 1200, height: 800 },
  { src: "/g8.jpeg", alt: "Yoga Pose 8", width: 1200, height: 800 },
  { src: "/g9.jpeg", alt: "Yoga Pose 9", width: 1200, height: 800 },
  { src: "/g23.jpeg", alt: "Yoga Pose 10", width: 1200, height: 800 },
  { src: "/g11.jpeg", alt: "Yoga Pose 11", width: 1200, height: 800 },
  { src: "/g12.jpeg", alt: "Yoga Pose 12", width: 1200, height: 800 },
  { src: "/g13.jpeg", alt: "Yoga Pose 13", width: 1200, height: 800 },
  { src: "/g14.jpeg", alt: "Yoga Pose 14", width: 1200, height: 800 },
  { src: "/g15.jpeg", alt: "Yoga Pose 15", width: 1200, height: 800 },
  { src: "/g21.jpeg", alt: "Yoga Pose 16", width: 1200, height: 800 },
  { src: "/g17.jpeg", alt: "Yoga Pose 17", width: 1200, height: 800 },
  { src: "/g18.jpeg", alt: "Yoga Pose 18", width: 1200, height: 800 },
  { src: "/g19.jpeg", alt: "Yoga Pose 19", width: 1200, height: 800 },
  { src: "/g22.jpeg", alt: "Yoga Pose 20", width: 1200, height: 800 },
]

export default function YogaStyles() {
  // const yogaStyles = [
  //   {
  //     name: "Laughter Yoga",
  //     description: "A unique concept where anyone can laugh for no reason, without relying on humor, jokes, or comedy. It combines laughter exercises with yoga breathing.",
  //     benefits: ["Reduces stress", "Boosts mood", "Strengthens immune system"],
  //     image: "/laughterYoga.png"
  //   },
  //   {
  //     name: "Desk Yoga",
  //     description: "A series of simple yoga poses and stretches that can be done at your desk to relieve tension and stress from long hours of sitting.",
  //     benefits: ["Improves posture", "Reduces back pain", "Increases focus"],
  //     image: "/deskYoga.png"
  //   },
  //   {
  //     name: "Power Yoga",
  //     description: "A fitness-based vinyasa practice that emphasizes strength and flexibility. It's a vigorous, fitness-based approach to vinyasa-style yoga.",
  //     benefits: ["Builds strength", "Increases flexibility", "Improves cardiovascular health"],
  //     image: "/images/power-yoga.jpg"
  //   },
  //   {
  //     name: "Ashtanga Yoga",
  //     description: "A dynamic, physically demanding practice that synchronizes breath and movement to produce an internal heat designed to purify the body.",
  //     benefits: ["Improves stamina", "Develops core strength", "Enhances focus and concentration"],
  //     image: "/images/ashtanga-yoga.jpg"
  //   },
  //   {
  //     name: "Restorative Yoga",
  //     description: "A relaxing style of yoga that uses props to support the body, allowing you to hold poses for longer periods of time.",
  //     benefits: ["Promotes deep relaxation", "Reduces stress", "Improves sleep quality"],
  //     image: "/images/restorative-yoga.jpg"
  //   }
  // ];

  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(0)


  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary mb-8 text-center"
      >
        Yoga Styles 
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-primary mb-12 text-center"
      >
        Explore our diverse range of yoga styles to find the perfect practice for your needs and preferences.
      </motion.p>
      {/* {yogaStyles.map((style, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
          className="mb-8 bg-primary p-6 rounded-lg shadow-md shadow-slate-300 hover:shadow-lg flex flex-col md:flex-row items-center"
        >
          <div className="flex-1 md:pr-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">{style.name}</h2>
            <p className="text-primary mb-4">{style.description}</p>
            <h3 className="text-xl font-semibold text-primary mb-2">Benefits:</h3>
            <ul className="list-disc list-inside text-primary">
              {style.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/3">
            <Image
              src={style.image}
              alt={`${style.name} illustration`}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
          </div>
        </motion.div>
      ))} */}
      <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img, index) => (
          <div key={index} className="relative aspect-[4/3] cursor-pointer">
            <Image
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg"
              onClick={() => {
                setImage(index)
                setOpen(true)
              }}
            />
          </div>
        ))}
      </div>
      <Lightbox open={open} close={() => setOpen(false)} index={image} slides={galleryImages} />
    </div>
      <BeginnersGuidePage/>
    </div>
  );
}

