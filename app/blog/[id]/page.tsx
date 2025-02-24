// 'use client'

// import React from 'react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useParams } from 'next/navigation'

// // Import the blogPosts array from a shared file or fetch from an API
// import { blogPosts } from '../../../lib/blogPosts'

// const BlogPostPage: React.FC = () => {
//   const params = useParams()
//   const postId = parseInt(params.id as string)
//   const post = blogPosts.find(p => p.id === postId)

//   if (!post) {
//     return <div>Post not found</div>
//   }

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl font-bold text-primary mb-8 text-center"
//       >
//         {post.title}
//       </motion.h1>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="mb-8"
//       >
//         <Image
//           src={post.image}
//           alt={post.title}
//           width={800}
//           height={400}
//           className="w-full h-64 object-cover rounded-lg"
//         />
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="prose prose-lg max-w-none"
//       >
//         <p className="text-foreground mb-4">{post.excerpt}</p>
//         <p className="text-foreground mb-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </p>
//         <p className="text-foreground mb-4">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="mt-8"
//       >
//         <Link
//           href="/blog"
//           className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition duration-300"
//         >
//           Back to Blog
//         </Link>
//       </motion.div>
//     </div>
//   )
// }

// export default BlogPostPage

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPosts } from '../../../lib/blogPosts';

const BlogPostPage: React.FC = () => {
  const params = useParams();
  const postId = parseInt(params.id as string, 10);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <div className="text-center text-xl py-12">Post not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary mb-8 text-center"
      >
        {post.title}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={500}
          className="w-full h-64 object-contain rounded-lg"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="prose prose-lg max-w-none"
      >
        <p className="text-foreground mb-4">{post.excerpt}</p>
        
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/blog"
          className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition duration-300"
        >
          Back to Blog
        </Link>
      </motion.div>
    </div>
  );
};

export default BlogPostPage;
