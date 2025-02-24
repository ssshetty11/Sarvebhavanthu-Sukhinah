'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/yoga', label: 'Yoga' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.jpeg" // Replace with your logo file path
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full" // Adjust style as needed
            />
            <span className="text-2xl font-bold text-primary">
              Sarvebhavanthu Sukhinah
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition duration-300"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-primary text-primary-foreground"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-foreground">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-foreground hover:text-primary transition duration-300"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
                toggleMenu()
              }}
              className="block w-full text-left text-foreground hover:text-primary transition duration-300"
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header
