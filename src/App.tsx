import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Target, Clapperboard, Rocket, ChevronRight, ArrowRight, ArrowUp, Instagram, Video, BarChart, TrendingUp, Zap } from "lucide-react";
import { AnimatedCounter } from "./components/AnimatedCounter";

const ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-brand-primary/30 font-sans relative">
      {/* Top Navigation Bar */}
      <nav className="h-20 md:h-24 px-6 md:px-12 flex items-center justify-between border-b border-white/5 bg-black/20 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-3">
          <img src="https://raw.githubusercontent.com/jagrutipixels/KMW-META-AD-PORTFOLIO/58e8299f75b44b4d743cb88c3d735df5bbd32494/KMW-White-01.png" alt="Karn Marketing Warfare Logo" className="h-16 md:h-20 w-auto" style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }} />
        </div>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-semibold opacity-70">
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#case-studies" className="hover:opacity-100 transition-opacity">Case Studies</a>
          <a href="#boosting" className="hover:opacity-100 transition-opacity">Video Boosting</a>
          <a href="#process" className="hover:opacity-100 transition-opacity">Our Process</a>
          <a href="#proven-ads" className="hover:opacity-100 transition-opacity text-brand-primary">Proven Ads</a>
        </div>
        <button className="px-4 py-2 bg-brand-primary text-black text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">Book Call</button>
      </nav>

      {/* Background ambient glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 layout-grid">
        
        {/* SECTION 1: HERO */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-20 pb-32">
          {/* Floating Performance Metrics in Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.4, y: [20, -10, 20] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] left-[10%] px-4 py-2 rounded-full border border-white/10 backdrop-blur-md text-xs font-mono text-brand-primary"
            >
              ₹0.91 CPC
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.3, y: [10, -20, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[35%] right-[15%] px-4 py-2 rounded-full border border-white/10 backdrop-blur-md text-xs font-mono text-brand-teal"
            >
              6.68% CTR
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.35, y: [15, -15, 15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[25%] left-[20%] px-4 py-2 rounded-full border border-white/10 backdrop-blur-md text-xs font-mono text-zinc-300"
            >
              27K+ Views
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 px-3 py-1 pb-1.5 rounded border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary mb-8"
          >
            <span>Mission Statement</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Turning Attention Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-red">Measurable Growth</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-gray-400 leading-relaxed max-w-2xl mb-4"
          >
            We help you reach the right people on Facebook and Instagram using Meta Ads.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm text-gray-500 leading-relaxed max-w-2xl mb-12"
          >
            By combining great videos, smart targeting, and clear strategies, we bring consistent growth to your business.
          </motion.p>

          <motion.a 
            href="#case-studies"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative inline-flex items-center justify-center px-6 py-3 bg-white text-black text-[11px] font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
          >
            View Case Studies
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </section>

        {/* SECTION 2: ABOUT / EXPLANATION / THE METHODOLOGY */}
        <section id="about" className="py-32 relative border-t border-white/5 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <FadeIn className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span>Our Methodology</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
                We turn attention into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-orange to-brand-red inline-block pb-2">paying customers.</span>
              </h2>
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
                We don't just "run ads". We build a complete performance marketing engine engineered for scale and predictability.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <FadeIn delay={0.1} className="p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-brand-primary/40 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hyper-Targeting</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We use advanced Meta pixel data and custom audiences to put your offer in front of people who are actually ready to buy.
                </p>
              </FadeIn>

              {/* Card 2 */}
              <FadeIn delay={0.2} className="p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-brand-orange/40 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors">
                  <Video className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Creative Engineering</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Eye-catching, direct-response video creatives designed specifically for feed and reels algorithms to hook attention instantly.
                </p>
              </FadeIn>

              {/* Card 3 */}
              <FadeIn delay={0.3} className="p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-brand-red/40 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors">
                  <BarChart className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Rapid Testing</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We launch dozens of ad variations simultaneously, letting data dictate the winners rather than relying on guesswork.
                </p>
              </FadeIn>

              {/* Card 4 */}
              <FadeIn delay={0.4} className="p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-brand-primary/40 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ruthless Scaling</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Once we identify the lowest CPA (Cost Per Acquisition) ads, we pour budget into them to exponentially scale your revenue.
                </p>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.5} className="mt-16 flex flex-col items-center">
               <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl w-full hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-red flex shrink-0 items-center justify-center shadow-[0_0_30px_rgba(255,140,0,0.3)]">
                    <Zap className="w-8 h-8 text-white fill-white" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">The Result: Unfair Advantage</h4>
                    <p className="text-sm md:text-base text-gray-400">Our custom marketing engine consistently delivers views, clicks, and paying customers at the lowest possible cost in your industry.</p>
                  </div>
               </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 3: CASE STUDY – SAVOIR STUDIO */}
        <section id="case-studies" className="py-24">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 p-6 bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-black/40 p-4">
                  <div className="text-2xl font-bold text-brand-primary">
                    <AnimatedCounter prefix="₹" to={0.91} decimals={2} /> 
                    <span className="text-xl text-gray-500 mx-2">-</span> 
                    <AnimatedCounter prefix="₹" to={1.09} decimals={2} />
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Cost Per Click</div>
                </div>
                <div className="bg-black/40 p-4">
                  <div className="text-2xl font-bold text-white">
                    <AnimatedCounter to={800} suffix="+" />
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Link Clicks</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-4">
              <div className="text-[10px] text-brand-primary font-bold uppercase tracking-widest">
                Case Study 01 • Meta Ads Data
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Savoir Studio</h2>
              <p className="text-base text-white font-medium">Goal: Drive massive website traffic without overspending.</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                We ran highly targeted Meta (Facebook & Instagram) ad campaigns. By constantly testing different creatives and audiences, we optimized the ads to bring in real people for around ₹1 per click.
              </p>
              <div className="p-4 mt-6 bg-black/40 border-l-2 border-brand-primary">
                <p className="text-[12px] text-gray-300 font-medium italic">
                  "We got over 800 highly interested people to click through to the website, proving that the right ad shown to the right person dramatically lowers costs."
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SECTION 4: CASE STUDY – CASUAL CLOTHING BRAND */}
        <section className="py-24 border-t border-white/5">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <div className="text-[10px] text-brand-teal font-bold uppercase tracking-widest">
                Case Study 02 • Instagram & Facebook Ads
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Casual Clothing Brand</h2>
              <p className="text-base text-white font-medium">Goal: Make the brand go viral and build a huge audience.</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                We designed ads specifically built to get likes, shares, and clicks. Our targeting was so accurate that nearly 7 out of every 100 people who saw the ad clicked on it—a massive success rate.
              </p>
              <div className="p-4 mt-6 bg-black/40 border-l-2 border-brand-teal">
                <p className="text-[12px] text-gray-300 font-medium italic">
                  "We reached over 42,000 potential buyers and generated thousands of clicks, putting the brand's products directly in front of people ready to engage."
                </p>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 hover:border-brand-teal/50 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                <div className="bg-black/40 p-4">
                  <div className="text-2xl font-bold text-white">
                    <AnimatedCounter to={5282} />
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Clicks generated</div>
                </div>
                <div className="bg-black/40 p-4">
                  <div className="text-2xl font-bold text-brand-teal">
                    <AnimatedCounter to={6.68} decimals={2} suffix="%" />
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Click Rate</div>
                </div>
                <div className="md:col-span-2 bg-black/40 p-4">
                  <div className="text-2xl font-bold text-white">
                    <AnimatedCounter to={42000} suffix="+" />
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Total Reach</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SECTION 5: PERFORMANCE CONTENT SYSTEM */}
        <section id="boosting" className="py-24 border-t border-white/5">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Video Boosting That Works</h2>
            <p className="text-sm text-gray-400">
              We take your best videos and show them to thousands of potential customers to grow your business.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <VideoCard 
              index="01"
              views={9861} 
              visits={374} 
              visitsLabel="Website Visits"
              cost={1.98} 
              clicks={819}
              impact="We brought hundreds of interested visitors to the website easily and cheaply." 
              delay={0.1}
            />
            <VideoCard 
              index="02"
              views={15846} 
              visits={75} 
              visitsLabel="Profile Visits"
              engagements={795} 
              saves={60} 
              impact="Lots of people liked and saved the content, discovering the brand for the first time." 
              delay={0.2}
            />
            <VideoCard 
              index="03"
              views={24783} 
              visits={90} 
              visitsLabel="Profile Visits"
              engagements={1432} 
              clicks={99} 
              impact="A perfect balance of getting attention, likes, and people taking action." 
              delay={0.3}
            />
            <VideoCard 
              index="04"
              views={27959} 
              visits={122} 
              visitsLabel="Profile Visits"
              engagements={2949} 
              clicks={128} 
              follows={7}
              impact="Massive interaction from a local audience, bringing in new followers and customers." 
              delay={0.4}
            />
          </div>
        </section>

        {/* SECTION 6: THE SYSTEM */}
        <section id="process" className="py-24 border-t border-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/10 via-black to-black">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Simple 3-Step Process</h2>
            <p className="text-gray-400 text-sm">How we turn your ad budget into real business growth.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <FadeIn delay={0.1} className="text-center space-y-4 relative">
              <div className="w-16 h-16 mx-auto bg-black border border-white/10 flex items-center justify-center relative z-10">
                <Target className="w-6 h-6 text-brand-primary" />
              </div>
              <div className="absolute top-8 left-[60%] w-full h-[1px] bg-gradient-to-r from-brand-primary/50 to-transparent hidden md:block" />
              <h3 className="text-lg font-bold">1. Precision Targeting</h3>
              <p className="text-sm text-gray-400 px-4">We find exactly who is most likely to buy your product using Meta's powerful data. No wasted money showing ads to the wrong people.</p>
            </FadeIn>

            <FadeIn delay={0.2} className="text-center space-y-4 relative">
              <div className="w-16 h-16 mx-auto bg-black border border-white/10 flex items-center justify-center relative z-10">
                <Clapperboard className="w-6 h-6 text-brand-teal" />
              </div>
              <div className="absolute top-8 left-[60%] w-full h-[1px] bg-gradient-to-r from-brand-teal/50 to-transparent hidden md:block" />
              <h3 className="text-lg font-bold">2. Winning Content</h3>
              <p className="text-sm text-gray-400 px-4">We help put together videos and images that stop the scroll. We test different versions to see what your audience clicks on the most.</p>
            </FadeIn>

            <FadeIn delay={0.3} className="text-center space-y-4 relative">
              <div className="w-16 h-16 mx-auto bg-black border border-white/10 flex items-center justify-center relative z-10">
                <Rocket className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-bold">3. Scale & Boost</h3>
              <p className="text-sm text-gray-400 px-4">Once we find an ad that works really well, we safely increase the budget (boost it) to get you even more customers without the costs spiraling out of control.</p>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 7: RESULTS SUMMARY */}
        <section className="py-24 border-t border-white/5 bg-black">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <FadeIn delay={0.1} className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                <AnimatedCounter to={5000} suffix="+" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Total Clicks</p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-primary bg-clip-text text-transparent">
                <AnimatedCounter to={90000} suffix="+" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">People Reached</p>
            </FadeIn>

            <FadeIn delay={0.3} className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                ₹1
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Lowest Cost Per Click</p>
            </FadeIn>

            <FadeIn delay={0.4} className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent flex items-center justify-center">
                <LayersIcon className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Proven Process</p>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 8: PROVEN ADS (Instagram Links) */}
        <section id="proven-ads" className="py-24 border-t border-white/5">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Proven Ads That Deliver</h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              These are actual working ads that we have created and managed for our clients, reliably turning views into real returns.
            </p>
          </FadeIn>

          <div className="space-y-16">
            {/* Group 1: BNI */}
            <FadeIn delay={0.1}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/50">
                  <Instagram className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold">BNI</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  "https://www.instagram.com/reel/DW0XwczjZYr/?hl=en",
                  "https://www.instagram.com/reel/DW0XN86jUbA/?hl=en",
                  "https://www.instagram.com/reel/DW0VWcICV0R/?hl=en"
                ].map((link, i) => (
                  <InstagramVideoCard key={i} url={link} label={`Ad Video ${i + 1}`} />
                ))}
              </div>
            </FadeIn>

            {/* Group 2: Savoir Studio */}
            <FadeIn delay={0.2}>
              <div className="flex items-center space-x-3 mb-6 mt-12">
                <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center border border-brand-teal/50">
                  <Instagram className="w-5 h-5 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold">Savoir Studio</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  "https://www.instagram.com/reel/DWjJ6sPCGND/?hl=en",
                  "https://www.instagram.com/reel/DVs9fzIk2YP/?hl=en",
                  "https://www.instagram.com/reel/DT2o0x2k7Kh/?hl=en"
                ].map((link, i) => (
                  <InstagramVideoCard key={i} url={link} label={`Ad Video ${i + 1}`} color="brand-teal" />
                ))}
              </div>
            </FadeIn>

            {/* Group 3: Luxe Brow Clinic */}
            <FadeIn delay={0.3}>
              <div className="flex items-center space-x-3 mb-6 mt-12">
                <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center border border-brand-red/50">
                  <Instagram className="w-5 h-5 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold">Luxe Brow Clinic</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  "https://www.instagram.com/p/DPNzdsXj8aH/?hl=en",
                  "https://www.instagram.com/p/DP-c1_HCDJv/?hl=en",
                  "https://www.instagram.com/p/DPERB_ViOwc/?hl=en"
                ].map((link, i) => (
                  <InstagramVideoCard key={i} url={link} label={`Ad Post ${i + 1}`} color="brand-red" />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 9: FINAL CTA */}
        <section className="py-24 text-center border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
          
          <FadeIn className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Brand Like This?</h2>
            <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
              Let’s build a performance-driven system tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors">
                Book a Call
              </button>
              <button className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:border-white transition-colors">
                Learn More
              </button>
            </div>
          </FadeIn>
        </section>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-brand-primary text-black rounded-full shadow-lg hover:opacity-90 transition-opacity"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// Subcomponents

function VideoCard({ 
  index, views, visits, visitsLabel, cost, clicks, engagements, saves, follows, impact, delay 
}: { 
  index: string, views: number, visits?: number, visitsLabel?: string, cost?: number, clicks?: number, 
  engagements?: number, saves?: number, follows?: number, impact: string, delay: number 
}) {
  return (
    <FadeIn delay={delay} className="bg-white/5 border border-white/10 p-5 hover:border-brand-primary/50 transition-colors flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xs font-bold text-brand-primary uppercase tracking-widest">Video {index}</div>
        <span className="text-[9px] font-mono text-zinc-500 bg-black/50 px-2 py-1">Perf_0{index}</span>
      </div>

      <div className="space-y-3 mb-6 flex-grow z-10">
        <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">Views</span>
          <span className="text-sm font-bold text-white"><AnimatedCounter to={views} /></span>
        </div>
        
        {engagements && (
          <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Engagements</span>
            <span className="text-sm font-bold text-white"><AnimatedCounter to={engagements} /></span>
          </div>
        )}

        {visitsLabel && visits && (
          <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">{visitsLabel}</span>
            <span className="text-sm font-bold text-white"><AnimatedCounter to={visits} /></span>
          </div>
        )}

        {clicks && (
          <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Link Clicks</span>
            <span className="text-sm font-bold text-white"><AnimatedCounter to={clicks} /></span>
          </div>
        )}
        
        {cost && (
          <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Cost per Visit</span>
            <span className="text-sm font-bold text-white"><AnimatedCounter prefix="₹" to={cost} decimals={2} /></span>
          </div>
        )}

        {saves && (
          <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Saves</span>
            <span className="text-sm font-bold text-white"><AnimatedCounter to={saves} /></span>
          </div>
        )}
        
        {follows && (
          <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Follows</span>
            <span className="text-sm font-bold text-white"><AnimatedCounter to={follows} /></span>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-white/10 mt-auto z-10">
        <p className="text-[10px] text-gray-400">
          {impact}
        </p>
      </div>
    </FadeIn>
  );
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

function InstagramVideoCard({ url, label, color = "brand-primary" }: { url: string, label: string, color?: string }) {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  const colorStyles: Record<string, { border: string, text: string, groupHover: string }> = {
    'brand-primary': {
      border: 'hover:border-brand-primary/50',
      text: 'text-brand-primary',
      groupHover: 'group-hover:text-brand-primary'
    },
    'brand-teal': {
      border: 'hover:border-brand-teal/50',
      text: 'text-brand-teal',
      groupHover: 'group-hover:text-brand-teal'
    },
    'brand-red': {
      border: 'hover:border-brand-red/50',
      text: 'text-brand-red',
      groupHover: 'group-hover:text-brand-red'
    }
  };

  const theme = colorStyles[color] || colorStyles['brand-primary'];

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { rootMargin: '300px' });
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  const baseUrl = url.split('?')[0].replace(/\/$/, '');
  
  // Use pure embed path without captioned to keep it sleek, add autoplay and muted
  const embedUrl = `${baseUrl}/embed/?autoplay=1&mute=1`;

  // Use a padding-bottom trick for aspect ratio 9:16 (16/9 = 177.77%)
  return (
    <div 
      ref={setRef}
      className={`flex flex-col bg-black border border-white/10 ${theme.border} w-full transition-all rounded-xl overflow-hidden`}
    >
      <div className="flex items-center justify-between p-3 border-b border-white/5 bg-black/80 backdrop-blur z-10 transition-colors">
        <div className="flex items-center space-x-2 text-[11px] font-bold text-gray-200 uppercase tracking-widest">
          <Instagram className={`w-4 h-4 ${theme.text}`} />
          <span>{label}</span>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center p-1">
          <ArrowRight className={`w-4 h-4 text-gray-500 ${theme.groupHover} transition-colors`} />
        </a>
      </div>
      
      <div className="w-full relative bg-zinc-950 overflow-hidden" style={{ paddingBottom: '120%' }}>
        {inView ? (
          <iframe 
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            scrolling="no"
            allow="autoplay; encrypted-media; picture-in-picture"
            title={label}
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full animate-pulse flex flex-col items-center justify-center bg-white/5 space-y-4">
            <Instagram className="w-8 h-8 text-white/20" />
            <span className="text-xs text-white/20 font-medium uppercase tracking-widest">Loading Post...</span>
          </div>
        )}
      </div>
    </div>
  );
}

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  );
}

