// 'use client'

// import React from 'react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'

// // This would typically come from a database or API
// const blogPosts = [
//   {
//     id: 1,
//     title: "Yoga for Beginners: Getting Started",
//     excerpt: "Learn the basics of yoga and how to start your practice...",
//     date: "2023-06-01",
//     image: "/images/yoga-beginners.jpg"
//   },
//   {
//     id: 2,
//     title: "The Benefits of Meditation in Daily Life",
//     excerpt: "Discover how incorporating meditation into your routine can improve your overall well-being...",
//     date: "2023-06-15",
//     image: "/images/meditation-benefits.jpg"
//   },
//   {
//     id: 3,
//     title: "Understanding the Different Types of Yoga",
//     excerpt: "Explore various yoga styles and find the one that suits you best...",
//     date: "2023-07-01",
//     image: "/images/yoga-types.jpg"
//   },
//   {
//     id: 4,
//     title: "Yoga Poses for Better Sleep",
//     excerpt: "Try these relaxing yoga poses to improve your sleep quality...",
//     date: "2023-07-15",
//     image: "/images/yoga-sleep.jpg"
//   },
//   {
//     id: 5,
//     title: "Mindfulness Techniques for Stress Relief",
//     excerpt: "Learn practical mindfulness exercises to manage stress in your daily life...",
//     date: "2023-08-01",
//     image: "/images/mindfulness-stress.jpg"
//   }
// ]

// const BlogPage: React.FC = () => {
//   return (
//     <div className="container mx-auto px-6 py-12">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl font-bold text-primary mb-8 text-center"
//       >
//         Blog & Events
//       </motion.h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogPosts.map((post, index) => (
//           <motion.div
//             key={post.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-card rounded-lg shadow-md overflow-hidden"
//           >
//             <Image
//               src={post.image}
//               alt={post.title}
//               width={400}
//               height={200}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h2 className="text-xl font-semibold text-primary mb-2">
//                 {post.title}
//               </h2>
//               <p className="text-foreground mb-4">
//                 {post.excerpt}
//               </p>
//               <div className="flex justify-between items-center">
//                 <Link
//                   href={`/blog/${post.id}`}
//                   className="text-primary hover:underline transition duration-300"
//                 >
//                   Read More
//                 </Link>
//                 <span className="text-sm text-muted-foreground">{post.date}</span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default BlogPage

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../lib/blogPosts';

const BlogList: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <Link key={post.id} href={`/blog/${post.id}`} passHref>
            <div className="card cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition">
              <Image
                src={post.image2}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-600">{post.excerpt.substring(0, 120)+'....'}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

