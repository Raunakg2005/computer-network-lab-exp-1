"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown, Brain, Filter, ArrowRight, Zap, Gauge, Shield, Plug, Network, Router } from "lucide-react"

export default function NetworkBridgeLanding() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    bridge: useRef<HTMLElement>(null),
    howItWorks: useRef<HTMLElement>(null),
    benefits: useRef<HTMLElement>(null),
    comparison: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.2, rootMargin: "-50px" },
    )

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#1E2A5A] to-[#0A192F] text-white font-inter overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#1E2A5A] z-50">
        <div
          className="h-full bg-gradient-to-r from-[#64FFDA] to-[#4ecdc4] transition-all duration-300"
          style={{
            width: `${Math.min(100, (scrollY / (typeof document !== "undefined" ? (document.documentElement.scrollHeight - window.innerHeight) : 1)) * 100)}%`,
          }}
        />
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#64FFDA] rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="network-lines">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#64FFDA] to-transparent opacity-20 animate-pulse"
              style={{
                width: `${200 + Math.random() * 300}px`,
                left: `${Math.random() * 80}%`,
                top: `${20 + Math.random() * 60}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="text-center max-w-7xl mx-auto">
          <div
            className={`mb-8 transition-all duration-1000 ${
              visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-6 py-3 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-sm font-medium backdrop-blur-sm">
              Network Infrastructure
            </span>
          </div>

          <h1
            className={`text-6xl md:text-8xl font-bold mb-8 text-[#64FFDA] transition-all duration-1000 delay-200 ${
              visibleSections.has("hero") ? "glow-text opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Network Bridge
          </h1>

          <p
            className={`text-xl md:text-3xl mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            How Network Bridges Intelligently Reduce Traffic and Boost Performance
          </p>

          {/* Enhanced Central Animation with Connections */}
          <div
            className={`relative max-w-5xl mx-auto mb-20 transition-all duration-1000 delay-600 ${
              visibleSections.has("hero") ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="flex items-center justify-between relative">
              {/* Enhanced Connection Lines */}
              <div className="absolute top-1/2 left-1/4 right-1/4 h-2 bg-gradient-to-r from-[#64FFDA] via-[#64FFDA] to-[#64FFDA] transform -translate-y-1/2 opacity-60 rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#64FFDA] to-transparent animate-pulse rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#64FFDA] rounded-full animate-ping"></div>
              </div>

              {/* Enhanced LAN Segment A */}
              <div className="relative z-10">
                <div className="w-36 h-36 md:w-52 md:h-52 bg-gradient-to-br from-[#1E2A5A] to-[#0A192F] rounded-full border-4 border-[#64FFDA] flex items-center justify-center pulse-animation shadow-2xl shadow-[#64FFDA]/20">
                  <Network className="w-10 h-10 md:w-14 md:h-14 text-[#64FFDA]" />
                </div>
                <p className="text-base md:text-lg mt-6 text-[#64FFDA] font-semibold">LAN Segment A</p>
                {/* Enhanced Computer in Segment A */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#64FFDA] to-[#4ecdc4] rounded-lg opacity-90 pulse-animation shadow-lg shadow-[#64FFDA]/40"></div>
              </div>

              {/* Enhanced Bridge with animated packets */}
              <div className="relative mx-12 z-10">
                <div className="w-24 h-24 md:w-36 md:h-36 bg-gradient-to-br from-[#64FFDA] to-[#1E2A5A] rounded-xl flex items-center justify-center bounce-animation shadow-2xl shadow-[#64FFDA]/30">
                  <Router className="w-8 h-8 md:w-12 md:h-12 text-[#0A192F]" />
                </div>
                <p className="text-base md:text-lg mt-6 text-[#64FFDA] font-bold">Bridge</p>

                {/* Enhanced Animated Data Packets */}
                <div className="absolute inset-0 overflow-visible">
                  <div className="packet packet-1 shadow-lg shadow-[#64FFDA]/50"></div>
                  <div className="packet packet-2 shadow-lg shadow-[#64FFDA]/50"></div>
                  <div className="packet packet-3 shadow-lg shadow-[#64FFDA]/50"></div>
                </div>
              </div>

              {/* Enhanced LAN Segment B */}
              <div className="relative z-10">
                <div className="w-36 h-36 md:w-52 md:h-52 bg-gradient-to-br from-[#1E2A5A] to-[#0A192F] rounded-full border-4 border-[#64FFDA] flex items-center justify-center pulse-animation shadow-2xl shadow-[#64FFDA]/20">
                  <Network className="w-10 h-10 md:w-14 md:h-14 text-[#64FFDA]" />
                </div>
                <p className="text-base md:text-lg mt-6 text-[#64FFDA] font-semibold">LAN Segment B</p>
                {/* Enhanced Computer in Segment B */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#64FFDA] to-[#4ecdc4] rounded-lg opacity-90 pulse-animation shadow-lg shadow-[#64FFDA]/40"></div>
              </div>
            </div>
          </div>

          
          
        </div>
      </section>

      {/* What is a Bridge Section */}
      <section ref={sectionRefs.bridge} id="bridge" className="py-32 px-4 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E2A5A]/20 to-transparent"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div
            className={`mb-6 transition-all duration-1000 ${
              visibleSections.has("bridge") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] text-sm font-medium mb-4">
              Core Concept
            </span>
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold mb-8 text-[#64FFDA] transition-all duration-1000 delay-200 ${
              visibleSections.has("bridge") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            An Intelligent Gatekeeper
          </h2>

          <div
            className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-400 ${
              visibleSections.has("bridge") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              A bridge is a Layer 2 device that connects two or more network segments.
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Think of it as a smart gatekeeper on a private road that only opens the gate if the car's destination is
              on the other side, keeping local traffic contained and reducing congestion.
            </p>
          </div>

          {/* Enhanced Static Diagram */}
          <div
            className={`bg-gradient-to-br from-[#1E2A5A]/80 to-[#0A192F]/80 backdrop-blur-sm rounded-2xl p-12 border border-[#64FFDA]/30 shadow-2xl shadow-[#64FFDA]/10 transition-all duration-1000 delay-600 ${
              visibleSections.has("bridge")
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#64FFDA] to-[#4ecdc4] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#64FFDA]/30">
                  <span className="text-[#0A192F] font-bold text-lg">MAC</span>
                </div>
                <h4 className="text-lg font-semibold text-[#64FFDA] mb-2">Source</h4>
                <p className="text-sm text-gray-300">MAC Address</p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-[#64FFDA] to-[#1E2A5A] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#64FFDA]/30">
                  <Router className="w-10 h-10 text-[#0A192F]" />
                </div>
                <h4 className="text-lg font-semibold text-[#64FFDA] mb-2">Bridge</h4>
                <p className="text-sm text-gray-300">MAC Address Table</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#64FFDA] to-[#4ecdc4] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#64FFDA]/30">
                  <span className="text-[#0A192F] font-bold text-lg">MAC</span>
                </div>
                <h4 className="text-lg font-semibold text-[#64FFDA] mb-2">Destination</h4>
                <p className="text-sm text-gray-300">MAC Address</p>
              </div>
            </div>

            {/* Connection arrows */}
            <div className="hidden md:flex justify-center items-center mt-8 space-x-8">
              <div className="flex items-center">
                <div className="w-16 h-px bg-gradient-to-r from-[#64FFDA] to-transparent"></div>
                <ArrowRight className="w-5 h-5 text-[#64FFDA] mx-2" />
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#64FFDA]"></div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-px bg-gradient-to-r from-[#64FFDA] to-transparent"></div>
                <ArrowRight className="w-5 h-5 text-[#64FFDA] mx-2" />
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#64FFDA]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={sectionRefs.howItWorks}
        id="howItWorks"
        className="py-20 px-4 bg-gradient-to-r from-[#0A192F] to-[#1E2A5A]"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 text-[#64FFDA] transition-all duration-1000 ${
              visibleSections.has("howItWorks") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            How It Works: The 3 Core Functions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Learn */}
            <div
              className={`group transition-all duration-1000 delay-200 ${
                visibleSections.has("howItWorks") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              <div className="bg-gradient-to-br from-[#1E2A5A] to-[#0A192F] rounded-xl p-8 border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#64FFDA]/20">
                <div className="w-16 h-16 bg-[#64FFDA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Brain className="w-8 h-8 text-[#0A192F]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#64FFDA] text-center">Learn</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  A bridge listens to all traffic to learn the MAC address of every device on each segment, building an
                  internal address table.
                </p>
              </div>
            </div>

            {/* Step 2: Filter */}
            <div
              className={`group transition-all duration-1000 delay-400 ${
                visibleSections.has("howItWorks") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              <div className="bg-gradient-to-br from-[#1E2A5A] to-[#0A192F] rounded-xl p-8 border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#64FFDA]/20">
                <div className="w-16 h-16 bg-[#64FFDA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Filter className="w-8 h-8 text-[#0A192F]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#64FFDA] text-center">Filter</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  When a data packet arrives, the bridge checks the destination MAC address. If the destination is on
                  the same segment as the source, it drops the packet.
                </p>
              </div>
            </div>

            {/* Step 3: Forward */}
            <div
              className={`group transition-all duration-1000 delay-600 ${
                visibleSections.has("howItWorks") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              <div className="bg-gradient-to-br from-[#1E2A5A] to-[#0A192F] rounded-xl p-8 border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#64FFDA]/20">
                <div className="w-16 h-16 bg-[#64FFDA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <ArrowRight className="w-8 h-8 text-[#0A192F]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#64FFDA] text-center">Forward</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  If the destination device is on a different segment, the bridge forwards the packet across, and only
                  across, to that specific segment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section ref={sectionRefs.benefits} id="benefits" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 text-[#64FFDA] transition-all duration-1000 ${
              visibleSections.has("benefits") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Why Use a Bridge?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div
              className={`group transition-all duration-1000 delay-200 ${
                visibleSections.has("benefits") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-gradient-to-br from-[#1E2A5A] to-[#0A192F] rounded-xl p-8 border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#64FFDA]/20">
                <div className="w-16 h-16 bg-[#64FFDA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <Zap className="w-8 h-8 text-[#0A192F]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#64FFDA] text-center">Reduced Collisions</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Divides a network into smaller collision domains, drastically reducing data collisions.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div
              className={`group transition-all duration-1000 delay-300 ${
                visibleSections.has("benefits") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-gradient-to-br from-[#1E2A5A] to-[#0A192F] rounded-xl p-8 border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#64FFDA]/20">
                <div className="w-16 h-16 bg-[#64FFDA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <Gauge className="w-8 h-8 text-[#0A192F]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#64FFDA] text-center">Improved Performance</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Less traffic congestion on each segment means a faster, more efficient network for everyone.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div
              className={`group transition-all duration-1000 delay-400 ${
                visibleSections.has("benefits") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-gradient-to-br from-[#1E2A5A] to-[#0A192F] rounded-xl p-8 border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#64FFDA]/20">
                <div className="w-16 h-16 bg-[#64FFDA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <Shield className="w-8 h-8 text-[#0A192F]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#64FFDA] text-center">Enhanced Security</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Isolates traffic between segments, making it harder for issues on one part of the network to affect
                  another.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div
              className={`group transition-all duration-1000 delay-500 ${
                visibleSections.has("benefits") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-gradient-to-br from-[#1E2A5A] to-[#0A192F] rounded-xl p-8 border border-[#64FFDA]/30 hover:border-[#64FFDA] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#64FFDA]/20">
                <div className="w-16 h-16 bg-[#64FFDA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <Plug className="w-8 h-8 text-[#0A192F]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#64FFDA] text-center">Simple Implementation</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Transparent bridges are easy to install and configure, working automatically out of the box.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridges vs Switches Section */}
      <section
        ref={sectionRefs.comparison}
        id="comparison"
        className="py-20 px-4 bg-gradient-to-r from-[#0A192F] to-[#1E2A5A]"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 text-[#64FFDA] transition-all duration-1000 ${
              visibleSections.has("comparison") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            The Modern Successor
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Bridge */}
            <div
              className={`text-center transition-all duration-1000 delay-200 ${
                visibleSections.has("comparison")
                  ? "opacity-100 translate-x-0 rotate-0"
                  : "opacity-0 -translate-x-10 -rotate-3"
              }`}
            >
              <div className="bg-gradient-to-br from-[#1E2A5A] to-[#0A192F] rounded-xl p-8 border border-[#64FFDA]/30">
                <div className="w-24 h-24 bg-[#64FFDA] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Router className="w-12 h-12 text-[#0A192F]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#64FFDA]">Bridge</h3>
                <p className="text-gray-300 leading-relaxed">
                  Connects a small number of network segments with basic filtering and forwarding capabilities.
                </p>
              </div>
            </div>

            {/* Switch */}
            <div
              className={`text-center transition-all duration-1000 delay-400 ${
                visibleSections.has("comparison")
                  ? "opacity-100 translate-x-0 rotate-0"
                  : "opacity-0 translate-x-10 rotate-3"
              }`}
            >
              <div className="bg-gradient-to-br from-[#1E2A5A] to-[#0A192F] rounded-xl p-8 border border-[#64FFDA]/30">
                <div className="w-24 h-24 bg-[#64FFDA] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Network className="w-12 h-12 text-[#0A192F]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#64FFDA]">Switch</h3>
                <p className="text-gray-300 leading-relaxed">
                  A multi-port bridge that operates on the same principles but connects many devices with dedicated
                  paths.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The principles of the bridge paved the way for the high-speed switching technology we rely on today.
              Switches have largely replaced bridges in modern LANs, but the fundamental concepts remain the same.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
