// 'use client'

// import { motion } from 'framer-motion'

// const YogaStyles = () => {
//   const yogaStyles = [
//     {
//       name: "Laughter Yoga",
//       description: "A unique concept where laughter is combined with yoga breathing exercises, reducing stress and boosting mood.",
//       benefits: ["Reduces stress", "Boosts mood", "Strengthens immune system"]
//     },
//     {
//       name: "Desk Yoga",
//       description: "Simple yoga poses and stretches designed for desk workers to relieve tension and improve posture.",
//       benefits: ["Improves posture", "Reduces back pain", "Increases focus"]
//     },
//     {
//       name: "Power Yoga",
//       description: "A vigorous, fitness-based approach to vinyasa yoga that emphasizes strength and flexibility.",
//       benefits: ["Builds strength", "Improves flexibility", "Enhances cardiovascular health"]
//     },
//     {
//       name: "Ashtanga Yoga",
//       description: "A dynamic practice that synchronizes breath and movement to create a meditative flow.",
//       benefits: ["Improves stamina", "Strengthens core", "Enhances concentration"]
//     },
//     {
//       name: "Restorative Yoga",
//       description: "A gentle practice using props to support the body, promoting deep relaxation and stress relief.",
//       benefits: ["Promotes relaxation", "Reduces stress", "Improves sleep quality"]
//     },
//   ]

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl font-bold text-primary mb-8 text-center"
//       >
//         Yoga Styles
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="text-xl text-foreground mb-12 text-center"
//       >
//         Explore a variety of yoga styles tailored to suit your needs and preferences.
//       </motion.p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//         {yogaStyles.map((style, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 * index }}
//             className="bg-card p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
//           >
//             <h2 className="text-2xl font-semibold text-primary mb-4">{style.name}</h2>
//             <p className="text-foreground mb-4">{style.description}</p>
//             <h3 className="text-xl font-semibold text-primary mb-2">Benefits:</h3>
//             <ul className="list-disc list-inside text-foreground">
//               {style.benefits.map((benefit, i) => (
//                 <li key={i}>{benefit}</li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default YogaStyles
