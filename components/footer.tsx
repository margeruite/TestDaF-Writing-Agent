
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Mail, Youtube, MessageCircle, Music, Heart } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Writing Assistant', href: '/writing-agent' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ],
  company: [
    { name: 'DSGVO', href: '/dsgvo' },
    { name: 'AGB', href: '/agb' },
  ],
};

const socialLinks = [
  { name: 'YouTube', href: 'https://youtube.com/@germanaiagent', icon: Youtube },
  { name: 'Discord', href: 'https://discord.gg/germanaiagent', icon: MessageCircle },
  { name: 'TikTok', href: 'https://tiktok.com/@germanaiagent', icon: Music },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-petrol-gradient rounded-xl flex items-center justify-center shadow-petrol">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient">GermanAIAgent</h3>
                  <p className="text-sm text-gray-400 -mt-1">TestDaF Writing Coach</p>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Master TestDaF writing with AI-powered feedback in your native language. 
                Get instant corrections, personalized learning plans, and achieve your target TDN score.
              </p>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-petrol-light" />
                <span>hello@germanaiagent.com</span>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 capitalize text-white">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-petrol-light transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-1 text-gray-400 text-sm"
            >
              <span>© 2024 GermanAIAgent. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for German learners worldwide.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-petrol-light transition-colors duration-200"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
