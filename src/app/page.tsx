"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Code2, MessageSquare, CheckCircle2, Zap, Clock, ShieldCheck, Mail, Phone, MonitorSmartphone, PenTool, ExternalLink, Calculator, Plus, MoveRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

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

  // Spotlight Text Effect
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [h1MousePos, setH1MousePos] = useState({ x: 0, y: 0 });
  const [isH1Hovered, setIsH1Hovered] = useState(false);

  const handleH1MouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!h1Ref.current) return;
    const rect = h1Ref.current.getBoundingClientRect();
    setH1MousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

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
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-sans selection:bg-white/20 selection:text-white overflow-x-hidden relative">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-50"
        style={{ scaleX }}
      />

      {/* Ambient Cursor Glow */}
      <motion.div 
        className="fixed top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none z-0 hidden md:block mix-blend-screen"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)"
        }}
      />

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15], x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-white blur-[80px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1], x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] rounded-full bg-zinc-400 blur-[80px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        
        {/* Navbar */}
        <nav className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between sticky top-0 z-40 bg-black/50 backdrop-blur-xl border-b border-white/5">
          <div className="text-xl font-bold tracking-tighter text-white transition-colors cursor-pointer">
            DEO ARYAN<span className="text-zinc-500">.</span>
          </div>
          <a 
            href="#contact" 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all active:scale-95 text-sm font-medium text-white"
          >
            Contact Us
          </a>
        </nav>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium mb-12 cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
            Accepting new clients for 2026
          </motion.div>

          <motion.h1 
            ref={h1Ref}
            onMouseMove={handleH1MouseMove}
            onMouseEnter={() => setIsH1Hovered(true)}
            onMouseLeave={() => setIsH1Hovered(false)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] max-w-5xl mb-8 cursor-default"
          >
            {/* Base Layer */}
            <div className="text-zinc-700 transition-colors duration-300">
              I build fast websites <br className="hidden md:block"/>& custom AI bots.
            </div>

            {/* Desktop Spotlight Layer */}
            <motion.div 
              className="hidden md:block absolute inset-0 text-white pointer-events-none drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              animate={{ opacity: isH1Hovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              style={{
                WebkitMaskImage: `radial-gradient(250px circle at ${h1MousePos.x}px ${h1MousePos.y}px, black 10%, transparent 100%)`,
                maskImage: `radial-gradient(250px circle at ${h1MousePos.x}px ${h1MousePos.y}px, black 10%, transparent 100%)`
              }}
            >
              I build fast websites <br className="hidden md:block"/>& custom AI bots.
            </motion.div>

            {/* Mobile Auto-Pulse Layer */}
            <motion.div 
              className="block md:hidden absolute inset-0 text-white pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              I build fast websites <br className="hidden md:block"/>& custom AI bots.
            </motion.div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-14 leading-relaxed font-light"
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
              className="group px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              View Services <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:contact@aryweb.in" 
              className="group px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 flex items-center justify-center gap-3 text-white font-medium"
            >
              Email Us <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

        {/* Features / Value Props */}
        <section className="border-y border-white/5 bg-white/[0.02] py-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center pt-4 md:pt-0">
              <Zap className="w-6 h-6 text-white mb-6" />
              <h4 className="text-white text-lg font-medium mb-2">Blazing Fast</h4>
              <p className="text-sm text-zinc-500">Next.js architecture for instant loads.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center pt-12 md:pt-0">
              <ShieldCheck className="w-6 h-6 text-white mb-6" />
              <h4 className="text-white text-lg font-medium mb-2">100% Transparent</h4>
              <p className="text-sm text-zinc-500">Flat pricing. No hidden agency fees.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center pt-12 md:pt-0">
              <Clock className="w-6 h-6 text-white mb-6" />
              <h4 className="text-white text-lg font-medium mb-2">Delivered in 7 Days</h4>
              <p className="text-sm text-zinc-500">From concept to live deployment.</p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="max-w-6xl mx-auto px-6 py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 md:text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">Core Services</h2>
            <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-light">Everything you need to scale digitally, handled by an expert.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group rounded-3xl bg-white/[0.02] border border-white/5 p-10 hover:bg-white/[0.04] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Web Dev</h3>
              <p className="text-zinc-400 mb-10 leading-relaxed font-light">
                I build custom, high-converting websites that don't just look pretty, but actually drive sales. Built from scratch using modern frameworks—no slow WordPress templates.
              </p>
              <ul className="space-y-4">
                {['Custom Landing Pages', 'E-Commerce Solutions', 'SEO & Performance Optimized', 'Mobile Responsive UI'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group rounded-3xl bg-white/[0.02] border border-white/5 p-10 hover:bg-white/[0.04] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Bots & Automation</h3>
              <p className="text-zinc-400 mb-10 leading-relaxed font-light">
                Why pay someone to reply to the same 10 WhatsApp messages all day? I build intelligent AI bots that integrate with your CRM and handle customers 24/7.
              </p>
              <ul className="space-y-4">
                {['WhatsApp Sales & Support Bots', 'Telegram Signal Bots', 'Lead Generation Scrapers', 'OpenAI / Groq Integrations'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group rounded-3xl bg-white/[0.02] border border-white/5 p-10 hover:bg-white/[0.04] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8">
                <MonitorSmartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Web Apps</h3>
              <p className="text-zinc-400 mb-10 leading-relaxed font-light">
                Complex logic handled elegantly. I build custom inventory management systems, internal dashboards, and SaaS MVPs.
              </p>
              <ul className="space-y-4">
                {['React / Next.js Frontends', 'Scalable Node.js Backends', 'Third-Party API Integrations', 'Real-time Dashboards'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="group rounded-3xl bg-white/[0.02] border border-white/5 p-10 hover:bg-white/[0.04] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">UI/UX & SEO</h3>
              <p className="text-zinc-400 mb-10 leading-relaxed font-light">
                Your brand needs to look expensive to charge premium prices. I design pixel-perfect interfaces and optimize them to rank on Google.
              </p>
              <ul className="space-y-4">
                {['Premium Brand Identity', 'Figma Wireframing', 'Technical SEO Audit', 'Core Web Vitals Optimization'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Interactive Demos Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-20 md:text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">Interactive Demos</h2>
            <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-light">Don't just take my word for it. Try out the tech.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium mb-8 w-max">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> Live Prototype
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">The Fifth Avenue Cafe Menu</h3>
              <p className="text-zinc-400 mb-10 leading-relaxed font-light">
                A premium, interactive digital menu built for a real cafe. Features real-time cart calculation, smooth category filtering, and strict FSSAI compliance markers—all running at blazing speeds.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {['Next.js', 'React State', 'Framer Motion', 'Tailwind CSS'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-400 text-xs">{tech}</span>
                ))}
              </div>
              <a href="https://cafe.aryweb.in" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-max px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
                Try Live Demo <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="md:w-1/2 relative bg-[#050505] min-h-[400px] flex items-center justify-center border-t md:border-t-0 md:border-l border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-20 grayscale" />
              <div className="relative z-10 p-6 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                 <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><MonitorSmartphone className="text-white w-5 h-5"/></div>
                   <div><div className="text-white font-medium">Grimaldi's Pizza</div><div className="text-zinc-500 text-sm mt-1">₹849 • Added to Cart</div></div>
                 </div>
                 <div className="w-48 h-1.5 bg-white/10 rounded-full mb-3 overflow-hidden"><div className="w-full h-full bg-white" /></div>
                 <div className="w-32 h-1.5 bg-white/10 rounded-full" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Founder Section */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-[3rem] bg-white/[0.02] border border-white/5 p-10 md:p-16 flex flex-col md:flex-row items-center gap-16"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/5 bg-white/5 flex-shrink-0 hover:scale-105 transition-all duration-700">
              <img src="/profile.png" alt="Deo Aryan" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">Meet the Founder</h2>
              <h3 className="text-xl text-zinc-400 font-medium mb-8">Deo Aryan <span className="text-zinc-600 font-normal ml-2">• IIT Jodhpur</span></h3>
              <p className="text-zinc-400 leading-relaxed mb-10 text-lg font-light">
                "I specialize in engineering high-performance web applications and intelligent AI automations.<br/><br/>
                No bloated templates or unnecessary meetings. I build bespoke digital systems that look premium, load instantly, and are designed specifically to drive your business forward."
              </p>
              <a href="#contact" className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors inline-block">
                Let's Talk
              </a>
            </div>
          </motion.div>
        </section>

        {/* Dynamic Pricing Section */}
        <section id="pricing" className="max-w-5xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">Transparent Pricing</h2>
            <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-light">No guessing games. Build your package and see the estimated investment instantly.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">1. Select Base Project</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {baseLabels.map((label, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSelectedBase(idx)}
                      className={`p-5 rounded-xl border cursor-pointer transition-all ${selectedBase === idx ? 'bg-white border-white text-black' : 'bg-transparent border-white/10 hover:border-white/30 text-white'}`}
                    >
                      <div className="font-semibold">{label}</div>
                      <div className={`text-sm mt-1 ${selectedBase === idx ? 'text-zinc-600' : 'text-zinc-500'}`}>Starting at ₹{(basePrices[idx] / 1000)}k</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">2. Select Add-ons</h3>
                <div className="space-y-4">
                  {[
                    { id: 'seo', name: 'Advanced SEO & Analytics', price: 3000, desc: 'Rank higher on Google and track user behavior.' },
                    { id: 'design', name: 'Premium UI/UX Branding', price: 5000, desc: 'Custom logo, color palette, and bespoke design system.' },
                    { id: 'rush', name: 'Priority 7-Day Rush Delivery', price: 4000, desc: 'Skip the waitlist. Delivered within 7 days guaranteed.' }
                  ].map((addon) => (
                    <div 
                      key={addon.id}
                      onClick={() => setAddons(prev => ({ ...prev, [addon.id]: !prev[addon.id as keyof typeof prev] }))}
                      className={`p-5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${addons[addon.id as keyof typeof addons] ? 'bg-white/10 border-white text-white' : 'bg-transparent border-white/10 hover:border-white/30 text-white'}`}
                    >
                      <div>
                        <div className="font-semibold">{addon.name}</div>
                        <div className="text-sm text-zinc-500 mt-1">{addon.desc}</div>
                      </div>
                      <div className={`flex items-center justify-center w-6 h-6 rounded-md border transition-colors ${addons[addon.id as keyof typeof addons] ? 'bg-white border-white text-black' : 'border-white/30 text-transparent'}`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-32 p-10 rounded-3xl bg-[#0a0a0a] border border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <Calculator className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-bold text-white">Estimate</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-zinc-300">
                    <span>{baseLabels[selectedBase]}</span>
                    <span>₹{(basePrices[selectedBase]).toLocaleString()}</span>
                  </div>
                  {addons.seo && <div className="flex justify-between text-zinc-400 text-sm"><span>+ Advanced SEO</span><span>₹3,000</span></div>}
                  {addons.design && <div className="flex justify-between text-zinc-400 text-sm"><span>+ Premium UI/UX</span><span>₹5,000</span></div>}
                  {addons.rush && <div className="flex justify-between text-zinc-400 text-sm"><span>+ Rush Delivery</span><span>₹4,000</span></div>}
                </div>
                
                <div className="border-t border-white/10 pt-8 mb-8">
                  <div className="text-sm text-zinc-500 mb-2">Estimated Investment</div>
                  <div className="text-4xl font-bold text-white tracking-tight">
                    ₹{calculateTotal().toLocaleString()} <span className="text-xl text-zinc-600 font-normal">to</span> ₹{(calculateTotal() + 5000).toLocaleString()}
                  </div>
                </div>

                <a href="#contact" className="w-full py-4 rounded-xl bg-white text-black font-semibold text-center flex justify-center items-center gap-2 hover:bg-zinc-200 transition-colors">
                  Lock in this price <MoveRight className="w-4 h-4" />
                </a>
                <p className="text-center text-xs text-zinc-600 mt-6">*Final price may vary based on exact requirements discussed on the call.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-4xl mx-auto px-6 py-32">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">How it works</h2>
            <p className="text-zinc-500 text-xl font-light">A seamless process designed to respect your time.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-white/10">
            {/* Step 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-black bg-white text-black font-bold text-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xl font-bold text-white mb-3">Project Discussion</h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">Shoot me an email with your requirements. We'll discuss your bottlenecks over chat or email, and I'll propose a technical solution.</p>
              </div>
            </motion.div>
            {/* Step 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-black bg-zinc-800 text-white font-bold text-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xl font-bold text-white mb-3">Flat Rate Pricing</h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">I give you a clear, flat price and timeline. No hidden hourly fees or agency retainers.</p>
              </div>
            </motion.div>
            {/* Step 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-black bg-zinc-800 text-white font-bold text-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xl font-bold text-white mb-3">Delivery & Launch</h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">I build your website or bot, usually within 7 days. We test it, launch it, and watch your business scale.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="border-t border-white/5 bg-black pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
            >
              Ready to upgrade?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-xl text-zinc-500 mb-20 font-light"
            >
              Don't let your competitors beat you with better tech.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32"
            >
              <a href="mailto:contact@aryweb.in" className="group flex flex-col items-center justify-center gap-3 px-10 py-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                <Mail className="w-6 h-6 text-white mb-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-lg text-white font-medium">contact@aryweb.in</span>
                <span className="text-sm text-zinc-500">For new projects & inquiries</span>
              </a>
              <a href="mailto:support@aryweb.in" className="group flex flex-col items-center justify-center gap-3 px-10 py-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                <ShieldCheck className="w-6 h-6 text-white mb-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-lg text-white font-medium">support@aryweb.in</span>
                <span className="text-sm text-zinc-500">For existing clients</span>
              </a>
            </motion.div>

            <p className="text-xs text-zinc-700 tracking-widest uppercase">© 2026 DEO ARYAN. BUILT FOR SCALE.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}
