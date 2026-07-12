"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Code2, MessageSquare, CheckCircle2, Zap, Clock, ShieldCheck, Mail, Phone, MonitorSmartphone, PenTool, ExternalLink, Calculator, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mouse Glow Effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  // Calculator State
  const [selectedBase, setSelectedBase] = useState(1);
  const [addons, setAddons] = useState({ seo: false, design: false, rush: false });
  const basePrices = [8000, 15000, 25000, 12000];
  const baseLabels = ["Landing Page", "Business Website", "Custom Web App", "AI Bot"];
  
  const calculateTotal = () => {
    let total = basePrices[selectedBase];
    if (addons.seo) total += 3000;
    if (addons.design) total += 5000;
    if (addons.rush) total += 4000;
    return total;
  };

  return (
    <div className="min-h-screen bg-[#030303] text-slate-300 font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Trailing Cursor Ring (Option 2) */}
      <motion.div 
        className="fixed top-0 left-0 w-10 h-10 border-2 border-purple-500/50 rounded-full pointer-events-none z-50 hidden md:block mix-blend-screen"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(52,211,153,0.8)" : "rgba(168,85,247,0.5)",
          backgroundColor: isHovering ? "rgba(52,211,153,0.1)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/20 blur-[150px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        
        {/* Navbar */}
        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5 backdrop-blur-md sticky top-0 z-40">
          <div className="text-xl font-bold tracking-tighter text-white hover:text-purple-400 transition-colors cursor-pointer">
            DEO ARYAN<span className="text-purple-500">.</span>
          </div>
          <a 
            href="#contact" 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="px-5 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all active:scale-95 text-sm font-medium text-white relative overflow-hidden group"
          >
            <span className="relative z-10">Book a Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </nav>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-medium mb-8 cursor-default transition-transform backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Accepting new clients for 2026
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight max-w-5xl mb-6"
          >
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-500 cursor-default">fast websites</span> <br className="hidden md:block"/>& <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 hover:drop-shadow-[0_0_30px_rgba(52,211,153,0.6)] transition-all duration-500 cursor-default">custom AI bots</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
          >
            No fluff, no corporate jargon. Just clean code, sensible design, and automations that actually save you time and make you money.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="#services" 
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="group relative px-8 py-4 rounded-xl bg-white text-black font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">View Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </a>
            <a 
              href="#contact" 
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="group px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all active:scale-95 flex items-center justify-center gap-2 text-white font-medium backdrop-blur-sm"
            >
              +91 9006340428 <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>
        </section>

        {/* Features / Value Props */}
        <section className="border-y border-white/5 bg-white/[0.01] py-10 backdrop-blur-sm relative z-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="flex flex-col items-center pt-4 md:pt-0 group hover:-translate-y-2 transition-transform duration-300 cursor-default"
            >
              <Zap className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.8)] transition-all duration-300" />
              <h4 className="text-white text-lg font-semibold mb-1 group-hover:text-emerald-300 transition-colors">Blazing Fast</h4>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Next.js architecture for instant loads.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col items-center pt-8 md:pt-0 group hover:-translate-y-2 transition-transform duration-300 cursor-default"
            >
              <ShieldCheck className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-300" />
              <h4 className="text-white text-lg font-semibold mb-1 group-hover:text-purple-300 transition-colors">100% Transparent</h4>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">Flat pricing. No hidden agency fees.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="flex flex-col items-center pt-8 md:pt-0 group hover:-translate-y-2 transition-transform duration-300 cursor-default"
            >
              <Clock className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300" />
              <h4 className="text-white text-lg font-semibold mb-1 group-hover:text-cyan-300 transition-colors">Delivered in 7 Days</h4>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">From concept to live deployment.</p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-32 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-16 md:text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Core Services</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Everything you need to scale digitally, handled by an expert.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
              className="group rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-10 hover:border-purple-500/50 hover:-translate-y-3 hover:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.2)] transition-all duration-500 cursor-default backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-8 border border-purple-500/30 group-hover:scale-110 group-hover:bg-purple-500/30 group-hover:rotate-3 transition-all duration-300">
                <Code2 className="w-8 h-8 text-purple-400 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Premium Web Dev</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                I build custom, high-converting websites that don't just look pretty, but actually drive sales. Built from scratch using modern frameworks—no slow WordPress templates.
              </p>
              <ul className="space-y-4">
                {['Custom Landing Pages', 'E-Commerce Solutions', 'SEO & Performance Optimized', 'Mobile Responsive UI'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-purple-400 shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
              className="group rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-10 hover:border-emerald-500/50 hover:-translate-y-3 hover:shadow-[0_20px_50px_-10px_rgba(52,211,153,0.2)] transition-all duration-500 cursor-default backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-8 border border-emerald-500/30 group-hover:scale-110 group-hover:bg-emerald-500/30 group-hover:-rotate-3 transition-all duration-300">
                <MessageSquare className="w-8 h-8 text-emerald-400 group-hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">AI Bots & Automation</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                Why pay someone to reply to the same 10 WhatsApp messages all day? I build intelligent AI bots that integrate with your CRM and handle customers 24/7.
              </p>
              <ul className="space-y-4">
                {['WhatsApp Sales & Support Bots', 'Telegram Signal Bots', 'Lead Generation Scrapers', 'OpenAI / Groq Integrations'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-all" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
              className="group rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-10 hover:border-cyan-500/50 hover:-translate-y-3 hover:shadow-[0_20px_50px_-10px_rgba(34,211,238,0.2)] transition-all duration-500 cursor-default backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-8 border border-cyan-500/30 group-hover:scale-110 group-hover:bg-cyan-500/30 group-hover:rotate-3 transition-all duration-300">
                <MonitorSmartphone className="w-8 h-8 text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">Custom Web Apps</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                Complex logic handled elegantly. I build custom inventory management systems, internal dashboards, and SaaS MVPs.
              </p>
              <ul className="space-y-4">
                {['React / Next.js Frontends', 'Scalable Node.js Backends', 'Third-Party API Integrations', 'Real-time Dashboards'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
              className="group rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 p-10 hover:border-pink-500/50 hover:-translate-y-3 hover:shadow-[0_20px_50px_-10px_rgba(236,72,153,0.2)] transition-all duration-500 cursor-default backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-8 border border-pink-500/30 group-hover:scale-110 group-hover:bg-pink-500/30 group-hover:-rotate-3 transition-all duration-300">
                <PenTool className="w-8 h-8 text-pink-400 group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">UI/UX & SEO</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                Your brand needs to look expensive to charge premium prices. I design pixel-perfect interfaces and optimize them to rank on Google.
              </p>
              <ul className="space-y-4">
                {['Premium Brand Identity', 'Figma Wireframing', 'Technical SEO Audit', 'Core Web Vitals Optimization'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-pink-400 shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] transition-all" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </section>

        {/* Interactive Demos Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 relative z-20">
          <div className="mb-16 md:text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Interactive Demos</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Don't just take my word for it. Try out the tech.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-purple-500/40 transition-all duration-500 flex flex-col md:flex-row backdrop-blur-sm"
          >
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6 w-max">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Prototype
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">The Fifth Avenue Cafe Menu</h3>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                A premium, interactive digital menu built for a real cafe. Features real-time cart calculation, smooth category filtering, and strict FSSAI compliance markers—all running at blazing speeds.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Next.js', 'React State', 'Framer Motion', 'Tailwind CSS'].map(tech => (
                  <span key={tech} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">{tech}</span>
                ))}
              </div>
              <a href="https://cafe.aryweb.in" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-max px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] active:scale-95 transition-all">
                Try Live Demo <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <div className="md:w-1/2 relative bg-black/40 min-h-[300px] flex items-center justify-center border-t md:border-t-0 md:border-l border-white/5 overflow-hidden group-hover:bg-black/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-emerald-500/10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
              <div className="relative z-10 p-6 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500">
                 <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
                   <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center"><MonitorSmartphone className="text-purple-400 w-6 h-6"/></div>
                   <div><div className="text-white font-bold">Grimaldi's Pizza</div><div className="text-slate-400 text-sm">₹849 • Added to Cart</div></div>
                 </div>
                 <div className="w-48 h-2 bg-white/10 rounded-full mb-2 overflow-hidden"><div className="w-full h-full bg-emerald-500" /></div>
                 <div className="w-32 h-2 bg-white/10 rounded-full" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Founder Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden hover:border-purple-500/30 transition-colors duration-500 backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-700" />
            
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white/10 bg-white/5 flex-shrink-0 flex items-center justify-center relative z-10 group-hover:border-purple-500/40 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-700">
              <img src="/profile.png" alt="Deo Aryan" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Meet the Founder</h2>
              <h3 className="text-2xl text-purple-400 font-medium mb-8">Deo Aryan <span className="text-slate-500 text-lg font-normal">• IIT Jodhpur</span></h3>
              <p className="text-slate-300 leading-relaxed mb-8 text-xl font-light">
                "I started this agency because I saw too many local businesses struggling with outdated websites and losing customers to slow response times. 
                My goal is simple: I build digital systems that make you more money while requiring zero effort from your end."
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="px-8 py-4 rounded-xl bg-white/10 hover:bg-purple-600 text-white font-semibold transition-all duration-300 border border-white/5 hover:border-purple-500 active:scale-95 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Dynamic Pricing Section */}
        <section id="pricing" className="max-w-5xl mx-auto px-6 py-20 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Transparent Pricing</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">No guessing games. Build your package and see the estimated investment instantly.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><MonitorSmartphone className="text-purple-400" /> 1. Select Base Project</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {baseLabels.map((label, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSelectedBase(idx)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedBase === idx ? 'bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                    >
                      <div className="font-semibold text-white">{label}</div>
                      <div className="text-sm text-slate-400 mt-1">Starting at ₹{(basePrices[idx] / 1000)}k</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><Plus className="text-emerald-400" /> 2. Select Add-ons</h3>
                <div className="space-y-4">
                  {[
                    { id: 'seo', name: 'Advanced SEO & Analytics', price: 3000, desc: 'Rank higher on Google and track user behavior.' },
                    { id: 'design', name: 'Premium UI/UX Branding', price: 5000, desc: 'Custom logo, color palette, and bespoke design system.' },
                    { id: 'rush', name: 'Priority 7-Day Rush Delivery', price: 4000, desc: 'Skip the waitlist. Delivered within 7 days guaranteed.' }
                  ].map((addon) => (
                    <div 
                      key={addon.id}
                      onClick={() => setAddons(prev => ({ ...prev, [addon.id]: !prev[addon.id as keyof typeof prev] }))}
                      className={`p-5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${addons[addon.id as keyof typeof addons] ? 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_15px_rgba(52,211,153,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                    >
                      <div>
                        <div className="font-semibold text-white">{addon.name}</div>
                        <div className="text-sm text-slate-400 mt-1">{addon.desc}</div>
                      </div>
                      <div className={`flex items-center justify-center w-6 h-6 rounded-md border transition-colors ${addons[addon.id as keyof typeof addons] ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-white/30 text-transparent'}`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-32 p-8 rounded-3xl bg-gradient-to-b from-purple-900/20 to-[#050505] border border-purple-500/30 backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.1)]">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Estimate</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-slate-300">
                    <span>{baseLabels[selectedBase]}</span>
                    <span>₹{(basePrices[selectedBase]).toLocaleString()}</span>
                  </div>
                  {addons.seo && <div className="flex justify-between text-emerald-400 text-sm"><span>+ Advanced SEO</span><span>₹3,000</span></div>}
                  {addons.design && <div className="flex justify-between text-emerald-400 text-sm"><span>+ Premium UI/UX</span><span>₹5,000</span></div>}
                  {addons.rush && <div className="flex justify-between text-emerald-400 text-sm"><span>+ Rush Delivery</span><span>₹4,000</span></div>}
                </div>
                
                <div className="border-t border-white/10 pt-6 mb-8">
                  <div className="text-sm text-slate-400 mb-2">Estimated Investment</div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
                    ₹{calculateTotal().toLocaleString()} <span className="text-xl text-slate-500 font-normal">to</span> ₹{(calculateTotal() + 5000).toLocaleString()}
                  </div>
                </div>

                <a href="#contact" className="w-full py-4 rounded-xl bg-white text-black font-semibold text-center flex justify-center items-center gap-2 hover:bg-slate-200 transition-colors active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Lock in this price <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-center text-xs text-slate-500 mt-4">*Final price may vary based on exact requirements discussed on the call.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-4xl mx-auto px-6 py-32 relative z-20">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">How it works</h2>
            <p className="text-slate-400 text-xl">A seamless process designed to respect your time.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-purple-500/50 before:via-emerald-500/50 before:to-transparent">
            {/* Step 1 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group cursor-default">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#030303] bg-purple-500 text-white font-bold text-lg shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-500 z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white/[0.02] border border-white/5 group-hover:border-purple-500/50 group-hover:bg-white/[0.05] group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.2)] transition-all duration-500 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Discovery Call</h4>
                <p className="text-slate-400 text-base leading-relaxed">We hop on a quick 15-minute call. You tell me your business bottlenecks, and I propose a technical solution.</p>
              </div>
            </motion.div>
            {/* Step 2 */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group cursor-default">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#030303] bg-emerald-500 text-white font-bold text-lg shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(52,211,153,0.8)] transition-all duration-500 z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white/[0.02] border border-white/5 group-hover:border-emerald-500/50 group-hover:bg-white/[0.05] group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.2)] transition-all duration-500 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Flat Rate Pricing</h4>
                <p className="text-slate-400 text-base leading-relaxed">I give you a clear, flat price and timeline. No hidden hourly fees or agency retainers.</p>
              </div>
            </motion.div>
            {/* Step 3 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group cursor-default">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#030303] bg-cyan-500 text-white font-bold text-lg shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-500 z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-white/[0.02] border border-white/5 group-hover:border-cyan-500/50 group-hover:bg-white/[0.05] group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.2)] transition-all duration-500 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">Delivery & Launch</h4>
                <p className="text-slate-400 text-base leading-relaxed">I build your website or bot, usually within 7 days. We test it, launch it, and watch your business scale.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="border-t border-white/10 bg-[#030303] pt-32 pb-16 relative z-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            >
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">upgrade</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-2xl text-slate-400 mb-16 font-light"
            >
              Don't let your competitors beat you with better tech.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
            >
              <div className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer backdrop-blur-md">
                <Phone className="w-6 h-6 text-purple-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-all" />
                <span className="text-xl text-white font-semibold group-hover:text-purple-300 transition-colors">+91 9006340428</span>
              </div>
              <a href="mailto:b24bs1122@iitj.ac.in" className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(52,211,153,0.4)] transition-all duration-300 active:scale-95 backdrop-blur-md">
                <Mail className="w-6 h-6 text-emerald-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] transition-all" />
                <span className="text-xl text-white font-semibold group-hover:text-emerald-300 transition-colors">Email Me</span>
              </a>
            </motion.div>

            <p className="text-sm text-slate-600 tracking-wider">© 2026 DEO ARYAN. BUILT FOR SCALE.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}
