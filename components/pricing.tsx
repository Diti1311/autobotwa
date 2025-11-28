"use client"

import { useRef, useEffect } from "react"
import { Check } from "lucide-react"

const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".pricing-card")
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

  const plans = [
    {
      name: "Starter",
      price: "₹499",
      period: "/month",
      description: "Perfect for small teams just starting out",
      features: [
        "Up to 1,000 messages/month",
        "Basic automation rules",
        "Email support",
        "Single user account",
        "Basic analytics",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth",
      price: "₹1,499",
      period: "/month",
      description: "For businesses scaling their operations",
      features: [
        "Up to 10,000 messages/month",
        "Advanced automation & AI replies",
        "Priority email & chat support",
        "Up to 5 team members",
        "Advanced analytics & reports",
        "Custom templates",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Business",
      price: "₹4,999",
      period: "/month",
      description: "For enterprise-level requirements",
      features: [
        "Unlimited messages",
        "Full API access",
        "Dedicated support",
        "Unlimited team members",
        "Custom integrations",
        "White-label options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-dark relative overflow-hidden">
      <div
        className="spotlight spotlight-cyan animate-spotlightGlow"
        style={{ width: "600px", height: "600px", top: "-150px", right: "-100px", animationDelay: "0.8s" }}
      />
      <div
        className="spotlight spotlight-blue animate-spotlightGlow"
        style={{ width: "500px", height: "500px", bottom: "-100px", left: "15%", animationDelay: "1.8s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <div className="inline-block">
            <p className="text-emerald-400 font-bold text-sm px-4 py-2 bg-emerald-950/30 rounded-full border border-emerald-800/50 backdrop-blur animate-slideInDown">
              💰 Simple, Transparent Pricing
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-100 leading-tight tracking-tight">
            <span className="text-gradient">Choose your plan</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={containerRef} className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card opacity-0 relative rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "md:scale-105 bg-gradient-accent text-slate-950 shadow-2xl hover-glow"
                  : "bg-slate-800/30 border border-slate-700/50 text-slate-100 card-hover backdrop-blur"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-400 text-slate-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-floatSlow">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 font-medium ${plan.popular ? "text-slate-800/70" : "text-slate-400"}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={`text-sm font-semibold ${plan.popular ? "text-slate-800/60" : "text-slate-500"}`}>
                    {plan.period}
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-full font-bold mb-8 transition-all duration-300 overflow-hidden group relative text-base ${
                    plan.popular
                      ? "bg-slate-950 text-cyan-400 hover:text-white border border-slate-800 hover:border-cyan-400 hover-glow"
                      : "bg-gradient-accent text-slate-950 hover-glow"
                  }`}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  {!plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:translate-x-full transition-all duration-500" />
                  )}
                </button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <Check
                        size={20}
                        className={`flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 ${plan.popular ? "text-slate-950" : "text-emerald-400"}`}
                      />
                      <span className={`text-sm font-medium ${plan.popular ? "text-slate-900/90" : "text-slate-300"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
