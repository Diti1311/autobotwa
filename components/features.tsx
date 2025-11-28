"use client"

import { useEffect, useRef } from "react"
import { MessageSquare, Zap, BarChart3, Users } from "lucide-react"

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".feature-card")
            cards.forEach((card, index) => {
              card.classList.remove("animate-fadeInUp")
              setTimeout(() => {
                card.classList.add("animate-fadeInUp")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Automated Messaging",
      description: "Schedule messages, set up triggers, and let AutobotWA handle customer conversations automatically.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart AI Replies",
      description: "AI-powered quick responses with customizable templates to save time and maintain consistency.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Track response rates, customer engagement, and conversion metrics with real-time insights.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-Agent Support",
      description: "Manage multiple team members, assign conversations, and collaborate seamlessly in one platform.",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-dark relative overflow-hidden">
      <div
        className="spotlight spotlight-blue animate-spotlightGlow"
        style={{ width: "500px", height: "500px", top: "10%", left: "-100px", animationDelay: "0.5s" }}
      />
      <div
        className="spotlight spotlight-cyan animate-spotlightGlow"
        style={{ width: "400px", height: "400px", bottom: "-50px", right: "5%", animationDelay: "1.5s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <div className="inline-block">
            <p className="text-green-400 font-bold text-sm px-4 py-2 bg-green-950/30 rounded-full border border-green-800/50 backdrop-blur animate-slideInDown">
              🚀 Powerful Features
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-100 leading-tight tracking-tight">
            Everything you need to <span className="text-gradient">automate</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Built for small businesses. Powerful enough for enterprise. Simple enough for anyone.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card opacity-0 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-slate-600 card-hover transition-all duration-300 backdrop-blur group`}
            >
              {/* Icon Background */}
              <div
                className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110`}
              >
                {feature.icon}
              </div>

              <h3 className="font-bold text-slate-100 mb-2 text-lg group-hover:text-gradient transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">{feature.description}</p>

              {/* Bottom accent - animated */}
              <div
                className={`h-1.5 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} rounded-full mt-4 transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
