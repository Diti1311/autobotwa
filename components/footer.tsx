"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Mail size={20} />, href: "#", label: "Email" },
  ]

  return (
    <footer
      id="contact"
      className="bg-gradient-dark text-slate-100 py-16 md:py-20 relative overflow-hidden border-t border-slate-800/50"
    >
      <div
        className="spotlight spotlight-blue animate-spotlightGlow"
        style={{ width: "500px", height: "500px", top: "-100px", left: "5%", animationDelay: "0.5s" }}
      />
      <div
        className="spotlight spotlight-cyan animate-spotlightGlow"
        style={{ width: "400px", height: "400px", bottom: "-100px", right: "10%", animationDelay: "1.5s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 animate-fadeInUp">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <span className="text-slate-950 font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-lg text-gradient">AutobotWA</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Automate WhatsApp conversations and grow your business faster.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold mb-4 text-slate-100">Product</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="#features" className="hover:text-slate-100 transition-colors group font-medium">
                  <span className="relative inline-block">
                    Features
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-slate-100 transition-colors group font-medium">
                  <span className="relative inline-block">
                    Pricing
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-100 transition-colors group font-medium">
                  <span className="relative inline-block">
                    Documentation
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-100 transition-colors group font-medium">
                  <span className="relative inline-block">
                    API Reference
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold mb-4 text-slate-100">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="#" className="hover:text-slate-100 transition-colors group font-medium">
                  <span className="relative inline-block">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-100 transition-colors group font-medium">
                  <span className="relative inline-block">
                    Blog
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-100 transition-colors group font-medium">
                  <span className="relative inline-block">
                    Careers
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-100 transition-colors group font-medium">
                  <span className="relative inline-block">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold mb-4 text-slate-100">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="#" className="hover:text-slate-100 transition-colors group font-medium">
                  <span className="relative inline-block">
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-100 transition-colors group font-medium">
                  <span className="relative inline-block">
                    Terms of Service
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-100 transition-colors group font-medium">
                  <span className="relative inline-block">
                    Security
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-slate-500 text-sm font-medium">© {currentYear} AutobotWA. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-gradient-accent hover:text-slate-950 hover:border-gradient-accent transition-all duration-300 hover-glow group font-bold"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
