// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import Testimonial from '../components/testimonial'
// // import MembershipPage from '../components/membership'
// import Faq from '@/components/faq'
// import { blogPosts } from '@/lib/blogPosts'

// export default function Home() {
//   const recentPosts = blogPosts.slice(0, 3) // Get the 3 most recent posts
//   return (
//     <div className="container mx-auto px-6 ">
//       <section className="py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
//             Discover Inner Peace Through Yoga
//           </h1>
//           <p className="text-xl text-foreground mb-8">
//             Join Sarvebhavanthu Sukhinah family and transform your body and mind
//           </p>
//           <Link
//             href="/contact"
//             className="bg-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-slate-200 transition duration-300 bg-slate-300 hover:bg-slate-50/80 text-black"
//           >
//             Start Your Journey
//           </Link>
//         </motion.div>
//       </section>
// {/* <StartUpPage/> */}
//       <section className="py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Link
//               href="/about"
//               className="text-primary  transition duration-300"
//             >
//             <h2 className="text-3xl font-bold text-primary mb-4">Hi Vani here,</h2>
//             <p className="text-foreground mb-4">
//               With over a decade of experience, I&apos;m dedicated to helping you find balance,
//               strength, and inner peace through the practice of yoga.
//             </p>
            
//               Click and Learn More About My Journey
//             </Link>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Link
//               href="/about"
//               className="text-primary  transition duration-300"
//             >
//             <Image
//               src="/profilePic.jpeg"
//               alt="Yoga Instructor"
//               width={400}
//               height={400}
//               className="rounded-lg shadow-md"
//             />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="text-center"
//         >
//           <h2 className="text-3xl font-bold text-primary mb-8">Latest Blog Posts</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//             {recentPosts.map((post) => (

//               <Link href={`/blog/${post.id}`} key={post.id}>

//                 <motion.div 

//                   className="bg-slate-100 hover:bg-slate-50 text-black rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 h-[400px]"

//                   whileHover={{ scale: 1.03 }}

//                   transition={{ duration: 0.2 }}

//                 >

//                   <Image

//                     src={post.image2}

//                     alt={post.title}

//                     width={400}

//                     height={200}

//                     className="w-full h-48 object-cover"

//                   />

//                   <div className="p-6">

//                     <h3 className="text-xl font-semibold text-primary mb-2">

//                       {post.title}

//                     </h3>

//                     <p className="text-foreground mb-4">

//                       {post.excerpt.substring(0, 50)+'....'}

//                     </p>

//                     <span className="text-primary hover:underline transition duration-300">

//                       Read More

//                     </span>

//                   </div>

//                 </motion.div>

//               </Link>

//             ))}

//           </div>

//           <Link

//             href="/blog"

//             className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition duration-300"

//           >

//             View All Posts

//           </Link>
          
//         </motion.div>
//       </section>
//       {/* <MembershipPage/> */}
//       <Testimonial/>
//       <Faq/>
//     </div>
//   )
// }

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Testimonial from '../components/testimonial'
// import MembershipPage from '../components/membership'
import Faq from '@/components/faq'
import { blogPosts } from '@/lib/blogPosts'

export default function Home() {
  const recentPosts = blogPosts.slice(0, 3) // Get the 3 most recent posts
  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <section className="py-20 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4">
            Discover Inner Peace Through Yoga
          </h1>
          <p className="text-lg sm:text-xl text-foreground mb-8">
            Join Sarvebhavanthu Sukhinah family and transform your body and mind
          </p>
          <Link
            href="/contact"
            className="bg-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-slate-200 transition duration-300 bg-slate-300 hover:bg-slate-50/80 text-black"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </section>
      
      <section className="py-20 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/about" className="text-primary transition duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Hi Vani here,</h2>
              <p className="text-foreground mb-4 text-sm sm:text-base">
                With over a decade of experience, I&apos;m dedicated to helping you find balance,
                strength, and inner peace through the practice of yoga.
              </p>
              Click and Learn More About My Journey
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link href="/about" className="text-primary transition duration-300">
              <Image
                src="/profilePic.jpeg"
                alt="Yoga Instructor"
                width={300}
                height={300}
                className="rounded-lg shadow-md w-72 sm:w-96"
              />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <motion.div 
                  className="bg-slate-100 hover:bg-slate-50 text-black rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 h-auto sm:h-[400px]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={post.image2}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
                      {post.title}
                    </h3>
                    <p className="text-foreground mb-4 text-sm sm:text-base">
                      {post.excerpt.substring(0, 50)+'....'}
                    </p>
                    <span className="text-primary hover:underline transition duration-300">
                      Read More
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition duration-300"
          >
            View All Posts
          </Link>
        </motion.div>
      </section>
      
      <Testimonial/>
      <Faq/>
    </div>
  )
}

