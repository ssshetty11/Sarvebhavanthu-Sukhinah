'use client'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Facebook, LucideYoutube } from 'lucide-react'
import Link from 'next/link'

const Contact: React.FC = () => {
  

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-primary mb-8 text-center"
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Get in Touch</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <MapPin className="mr-2 text-primary" />
              <span>SD 402, Shriram Surabhi apartment
              Holiday Village resort road , Vajarahalli, Kanakapura Road Bengaluru -560109</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 text-primary" />
              <span>+91 72592 60670</span>
            </li>
            <li className="flex items-center mb-4">
                <Mail className="mr-2 text-primary" />
                <a href="https://mail.google.com/mail/?view=cm&to=vaniarun143@gmail.com" className="hover:underline" target='/blank'>vaniarun143@gmail.com</a>
              </li>
          </ul>

          <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/yogamindfulness" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Instagram size={24} />
            </Link>
            <Link href="https://www.facebook.com/people/YOGA-By-VANI-ARUN-HEGDE/100057255677845/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <Facebook size={24} />
            </Link>
            <Link href="https://www.youtube.com/@sarvebhavantusukhinah/featured" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
              <LucideYoutube size={24} />
            </Link>
          </div>

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Location</h3>
            {/* Placeholder for map */}
          </div>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5945993087584!2d77.52931731482143!3d12.869969990920692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f3c2a2c0f4f%3A0x7c2e3b7f8f8f8f8f!2sShriram%20Surabhi%20Apartment%2C%20Holiday%20Village%20Resort%20Rd%2C%20Vajarahalli%2C%20Bengaluru%2C%20Karnataka%20560109!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/dir//Shriram+Surabhi+Apartment,+Holiday+Village+Resort+Rd,+Vajarahalli,+Bengaluru,+Karnataka+560109"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary my-auto
                px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition duration-300 bg-slate-50 hover:bg-slate-50/80 text-black"
              >
                Get Directions
              </a>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact;



