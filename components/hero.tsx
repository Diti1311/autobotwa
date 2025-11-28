"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Send, ArrowRight } from "lucide-react"

const Hero = () => {
  const messageRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (messageRef.current && isVisible) {
      const messages = messageRef.current.querySelectorAll(".message")
      messages.forEach((msg, index) => {
        msg.classList.remove("animate-fadeInUp")
        setTimeout(() => {
          msg.classList.add("animate-fadeInUp")
        }, index * 200)
      })
    }
  }, [isVisible])

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-dark overflow-hidden flex items-center"
    >
      <div
        className="spotlight spotlight-blue animate-spotlightGlow"
        style={{ width: "600px", height: "600px", top: "-100px", right: "-200px" }}
      />
      <div
        className="spotlight spotlight-cyan animate-spotlightGlow"
        style={{ width: "500px", height: "500px", bottom: "-100px", left: "10%", animationDelay: "1s" }}
      />
      <div
        className="spotlight spotlight-purple animate-spotlightGlow"
        style={{ width: "400px", height: "400px", top: "40%", right: "15%", animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-cyan-400 font-semibold text-sm px-4 py-2 bg-cyan-950/30 rounded-full border border-cyan-800/50 backdrop-blur animate-slideInLeft">
                  ✨ WhatsApp Automation Made Simple
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-100 leading-tight tracking-tight">
                Automate
                <br />
                <span className="text-gradient-animated">WhatsApp</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Grow Faster
                </span>
              </h1>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed max-w-md font-medium opacity-90">
              AutobotWA helps small businesses manage customer communication, automate messages, and close deals 2x
              faster. No coding required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative px-8 py-3 bg-gradient-accent text-slate-950 rounded-full font-bold hover-glow overflow-hidden transition-all duration-300 text-base shadow-lg">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              <button className="px-8 py-3 bg-slate-800/50 border border-slate-600 text-slate-100 rounded-full font-semibold hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-300 backdrop-blur card-hover">
                View Pricing
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-accent border-2 border-slate-900 animate-floatSlow"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-400 font-medium">Trusted by 500+ small businesses</span>
            </div>
          </div>

          {/* Right Side - Chat UI Mockup */}
          <div className="relative h-96 md:h-full flex items-center justify-center animate-slideInRight">
            <div className="relative w-full max-w-sm">
              {/* Phone Frame */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl shadow-2xl border-8 border-slate-950 aspect-[9/16] flex flex-col overflow-hidden backdrop-blur card-hover">
                {/* Status Bar */}
                <div className="bg-slate-950 text-white px-6 py-2 text-xs flex justify-between items-center">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <span>📶</span>
                    <span>📡</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* Chat Area */}
                <div ref={messageRef} className="flex-1 bg-gradient-dark p-4 flex flex-col justify-between">
                  {/* Messages */}
                  <div className="space-y-3">
                    <div className="message flex gap-2 opacity-100">
                      <div className="w-8 h-8 rounded-full bg-gradient-accent" />
                      <div className="bg-slate-800 rounded-xl rounded-tl-none p-3 shadow-sm max-w-[70%] border border-slate-700">
                        <p className="text-xs text-slate-300">Hi! I&apos;m interested in your product</p>
                      </div>
                    </div>

                    <div className="message flex justify-end gap-2 opacity-100">
                      <div className="bg-gradient-accent text-slate-950 rounded-xl rounded-tr-none p-3 shadow-sm max-w-[70%] font-semibold">
                        <p className="text-xs">Great! Let me send you details</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-accent" />
                    </div>

                    <div className="message flex gap-2 opacity-100">
                      <div className="w-8 h-8 rounded-full bg-gradient-accent" />
                      <div className="bg-slate-800 rounded-xl rounded-tl-none p-3 shadow-sm max-w-[70%] border border-slate-700">
                        <p className="text-xs text-slate-300">Perfect! When can we start?</p>
                      </div>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="flex items-center gap-2 bg-slate-800/50 rounded-full border border-slate-700 px-4 py-2 backdrop-blur">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 outline-none text-xs bg-transparent text-slate-300 placeholder-slate-500"
                      disabled
                    />
                    <button className="p-1 hover:bg-slate-700 rounded-full transition-colors">
                      <Send size={16} className="text-cyan-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg hover-glow transition-all duration-300 animate-floatSlow">
                <MessageCircle size={32} className="text-slate-950" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
