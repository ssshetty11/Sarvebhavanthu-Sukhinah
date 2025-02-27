// import Link from 'next/link'
// import { Instagram, Youtube, Facebook } from 'lucide-react'

// const Footer = () => {
//   return (
//     <footer className="bg-background shadow-md mt-12">
//       <div className="container mx-auto px-6 py-8">
//         <div className="flex flex-wrap justify-between items-center">
//           <div className="w-full md:w-1/3 text-center md:text-left">
//             <h3 className="text-lg font-semibold text-primary">Yoga Mindfulness</h3>
//             <p className="mt-2 text-sm text-foreground">Empowering minds, strengthening bodies</p>
//           </div>
//           <div className="w-full md:w-1/3 mt-4 md:mt-0">
//             <h4 className="text-lg font-semibold text-primary text-center">Quick Links</h4>
//             <ul className="mt-2 flex justify-center space-x-4">
//               <li><Link href="/" className="text-foreground hover:text-primary transition duration-300">Home</Link></li>
//               <li><Link href="/about" className="text-foreground hover:text-primary transition duration-300">About</Link></li>
//               <li><Link href="/achievements" className="text-foreground hover:text-primary transition duration-300">Achievements</Link></li>
//               <li><Link href="/yoga" className="text-foreground hover:text-primary transition duration-300">Yoga</Link></li>
//               <li><Link href="/blog" className="text-foreground hover:text-primary transition duration-300">Blog</Link></li>
//               <li><Link href="/contact" className="text-foreground hover:text-primary transition duration-300">Contact</Link></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 mt-4 md:mt-0 text-center md:text-right">
//             <h4 className="text-lg font-semibold text-primary">Connect With Us</h4>
//             <div className="mt-2 flex justify-center md:justify-end space-x-4">
//               <a href="https://www.instagram.com/sarvebhavanthusukhinah?igsh=MWk1ZWF3NGdmMXZlMA%3D%3D&utm_source=qr" className="text-foreground hover:text-primary transition duration-300" target='_blank'>
//                 <Instagram size={24} />
//               </a>
//               <a href="https://www.youtube.com/@sarvebhavantusukhinah/featured" className="text-foreground hover:text-primary transition duration-300" target='_blank'>
//                 <Youtube size={24} />
//               </a>
//               <a href="https://www.facebook.com/people/YOGA-By-VANI-ARUN-HEGDE/100057255677845/" className="text-foreground hover:text-primary transition duration-300" target='_blank'>
//                 <Facebook size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 text-center text-sm text-foreground">
//           © {new Date().getFullYear()} Yoga Mindfulness. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import Link from 'next/link'
import { Instagram, Youtube, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center text-center md:text-left">
          <div className="w-full sm:w-2/3 md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-primary">Yoga Mindfulness</h3>
            <p className="mt-2 text-sm text-foreground">Empowering minds, strengthening bodies</p>
          </div>
          <div className="w-full sm:w-2/3 md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <ul className="mt-2 flex flex-wrap justify-center sm:space-x-4 space-x-2">
              <li><Link href="/" className="text-foreground hover:text-primary transition duration-300">Home</Link></li>
              <li><Link href="/about" className="text-foreground hover:text-primary transition duration-300">About</Link></li>
              <li><Link href="/achievements" className="text-foreground hover:text-primary transition duration-300">Achievements</Link></li>
              <li><Link href="/yoga" className="text-foreground hover:text-primary transition duration-300">Yoga</Link></li>
              <li><Link href="/blog" className="text-foreground hover:text-primary transition duration-300">Blog</Link></li>
              <li><Link href="/contact" className="text-foreground hover:text-primary transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-2/3 md:w-1/3">
            <h4 className="text-lg font-semibold text-primary">Connect With Us</h4>
            <div className="mt-2 flex justify-center space-x-4">
              <a href="https://www.instagram.com/sarvebhavanthusukhinah?igsh=MWk1ZWF3NGdmMXZlMA%3D%3D&utm_source=qr" className="text-foreground hover:text-primary transition duration-300" target='_blank'>
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/@sarvebhavantusukhinah/featured" className="text-foreground hover:text-primary transition duration-300" target='_blank'>
                <Youtube size={24} />
              </a>
              <a href="https://www.facebook.com/people/YOGA-By-VANI-ARUN-HEGDE/100057255677845/" className="text-foreground hover:text-primary transition duration-300" target='_blank'>
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-foreground">
          © {new Date().getFullYear()} Yoga Mindfulness. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
