"use client"

import { useRef, useEffect } from "react"
import { Star } from "lucide-react"

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".testimonial-card")
            cards.forEach((card, index) => {
              card.classList.remove("animate-fadeInUp")
              setTimeout(() => {
                card.classList.add("animate-fadeInUp")
              }, index * 150)
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

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "Delhi Fashion Co.",
      avatar: "👩‍💼",
      quote:
        "AutobotWA cut our response time by 75%. Our customers love the instant replies and we close deals way faster now.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      company: "Tech Support Plus",
      avatar: "👨‍💼",
      quote:
        "Best investment for our small team. We handle 5x more inquiries without hiring extra staff. The automation is a game-changer.",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      company: "E-commerce Hub",
      avatar: "👩‍🔬",
      quote:
        "The analytics dashboard gives us insights we never had before. We can now optimize our sales funnel with real data.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-dark relative overflow-hidden">
      <div
        className="spotlight spotlight-purple animate-spotlightGlow"
        style={{ width: "550px", height: "550px", top: "-100px", right: "-150px", animationDelay: "0.3s" }}
      />
      <div
        className="spotlight spotlight-blue animate-spotlightGlow"
        style={{ width: "450px", height: "450px", bottom: "-50px", left: "10%", animationDelay: "1.2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <div className="inline-block">
            <p className="text-cyan-400 font-bold text-sm px-4 py-2 bg-cyan-950/30 rounded-full border border-cyan-800/50 backdrop-blur animate-slideInDown">
              💬 What Our Users Say
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-100 leading-tight tracking-tight">
            Loved by small <span className="text-gradient">business owners</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 bg-slate-800/20 border border-slate-700/50 p-8 rounded-2xl card-hover backdrop-blur transition-all duration-300 group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-6 leading-relaxed text-sm font-medium italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-100 text-sm">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
