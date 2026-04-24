import React from "react";
import { motion } from "motion/react";
import { Target, Clapperboard, Rocket, ChevronRight, ArrowRight } from "lucide-react";
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
  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-blue-500/30 font-sans relative">
      {/* Top Navigation Bar */}
      <nav className="h-16 px-6 md:px-12 flex items-center justify-between border-b border-white/5 bg-black/20 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-black text-xs tracking-tighter">KARN</div>
          <span className="font-bold tracking-widest text-[10px] uppercase opacity-60 hidden sm:inline">Marketing Warfare</span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-semibold opacity-70">
          <a href="#" className="hover:opacity-100 transition-opacity">Intelligence</a>
          <a href="#" className="hover:opacity-100 transition-opacity text-blue-400">Operations</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Deployment</a>
        </div>
        <button className="px-4 py-2 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">Book Call</button>
      </nav>

      {/* Background ambient glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
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
              className="absolute top-[20%] left-[10%] px-4 py-2 rounded-full border border-white/10 backdrop-blur-md text-xs font-mono text-blue-300"
            >
              ₹0.91 CPC
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.3, y: [10, -20, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[35%] right-[15%] px-4 py-2 rounded-full border border-white/10 backdrop-blur-md text-xs font-mono text-emerald-300"
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
            className="inline-flex items-center space-x-2 px-3 py-1 pb-1.5 rounded border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-8"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Measurable Growth</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-gray-400 leading-relaxed max-w-2xl mb-4"
          >
            Performance-driven Meta advertising systems powered by Karn.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm text-gray-500 leading-relaxed max-w-2xl mb-12"
          >
            We build high-impact campaigns that combine content, targeting, and strategy to deliver scalable results.
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

        {/* SECTION 2: ABOUT / EXPLANATION */}
        <section className="py-24 border-t border-white/5">
          <FadeIn className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight">
              We turn attention into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">paying customers.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mt-12 pl-4 md:pl-0 border-l border-blue-500/30">
              <div className="pl-6 relative">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-blue-500" />
                <h3 className="text-lg font-bold text-white mb-2">What we do</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We don't just "run ads" or blindly boost posts. We build a complete marketing engine for your business on Meta (Instagram & Facebook). Our goal is to get you the most clicks, views, and sales for the lowest possible cost.
                </p>
              </div>
              <div className="pl-6 relative">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500" />
                <h3 className="text-lg font-bold text-white mb-2">How we do it</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We combine eye-catching videos with precise audience targeting. We test different variations to see what works best, then pour budget into the winners to scale your business predictably.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SECTION 3: CASE STUDY – SAVOIR STUDIO */}
        <section id="case-studies" className="py-24">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 p-6 bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-black/40 p-4">
                  <div className="text-2xl font-bold text-blue-400">
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
              <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                Case Study 01 • Meta Ads Data
              </div>
              <h2 className="text-2xl font-bold">Savoir Studio</h2>
              <p className="text-sm text-white font-medium">Goal: Drive massive website traffic without overspending.</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                We ran highly targeted Meta (Facebook & Instagram) ad campaigns. By constantly testing different creatives and audiences, we optimized the ads to bring in real people for around ₹1 per click.
              </p>
              <div className="p-4 mt-6 bg-black/40 border-l-2 border-blue-400">
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
              <div className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">
                Case Study 02 • Instagram & Facebook Ads
              </div>
              <h2 className="text-2xl font-bold">Casual Clothing Brand</h2>
              <p className="text-sm text-white font-medium">Goal: Make the brand go viral and build a huge audience.</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                We designed ads specifically built to get likes, shares, and clicks. Our targeting was so accurate that nearly 7 out of every 100 people who saw the ad clicked on it—a massive success rate.
              </p>
              <div className="p-4 mt-6 bg-black/40 border-l-2 border-teal-400">
                <p className="text-[12px] text-gray-300 font-medium italic">
                  "We reached over 42,000 potential buyers and generated thousands of clicks, putting the brand's products directly in front of people ready to engage."
                </p>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 hover:border-teal-500/50 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                <div className="bg-black/40 p-4">
                  <div className="text-2xl font-bold text-white">
                    <AnimatedCounter to={5282} />
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Clicks generated</div>
                </div>
                <div className="bg-black/40 p-4">
                  <div className="text-2xl font-bold text-teal-400">
                    <AnimatedCounter to={6.68} decimals={2} suffix="%" />
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">CTR</div>
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
        <section className="py-24 border-t border-white/5">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Content-Led Performance System</h2>
            <p className="text-sm text-gray-400">
              Strategic content boosting designed to drive engagement, traffic, and brand growth.
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
              impact="Efficient traffic generation through content-driven campaigns." 
              delay={0.1}
            />
            <VideoCard 
              index="02"
              views={15846} 
              visits={75} 
              visitsLabel="Profile Visits"
              engagements={795} 
              saves={60} 
              impact="Strong engagement and brand discovery through high-value content." 
              delay={0.2}
            />
            <VideoCard 
              index="03"
              views={24783} 
              visits={90} 
              visitsLabel="Profile Visits"
              engagements={1432} 
              clicks={99} 
              impact="Balanced performance across awareness, engagement, and action." 
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
              impact="High engagement and strong audience interaction with localized targeting." 
              delay={0.4}
            />
          </div>
        </section>

        {/* SECTION 6: THE SYSTEM */}
        <section className="py-24 border-t border-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Simple 3-Step Process</h2>
            <p className="text-gray-400 text-sm">How we turn your ad budget into real business growth.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <FadeIn delay={0.1} className="text-center space-y-4 relative">
              <div className="w-16 h-16 mx-auto bg-black border border-white/10 flex items-center justify-center relative z-10">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <div className="absolute top-8 left-[60%] w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent hidden md:block" />
              <h3 className="text-lg font-bold">1. Precision Targeting</h3>
              <p className="text-sm text-gray-400 px-4">We find exactly who is most likely to buy your product using Meta's powerful data. No wasted money showing ads to the wrong people.</p>
            </FadeIn>

            <FadeIn delay={0.2} className="text-center space-y-4 relative">
              <div className="w-16 h-16 mx-auto bg-black border border-white/10 flex items-center justify-center relative z-10">
                <Clapperboard className="w-6 h-6 text-teal-400" />
              </div>
              <div className="absolute top-8 left-[60%] w-full h-[1px] bg-gradient-to-r from-teal-500/50 to-transparent hidden md:block" />
              <h3 className="text-lg font-bold">2. Winning Content</h3>
              <p className="text-sm text-gray-400 px-4">We help put together videos and images that stop the scroll. We test different versions to see what your audience clicks on the most.</p>
            </FadeIn>

            <FadeIn delay={0.3} className="text-center space-y-4 relative">
              <div className="w-16 h-16 mx-auto bg-black border border-white/10 flex items-center justify-center relative z-10">
                <Rocket className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold">3. Scale & Boost</h3>
              <p className="text-sm text-gray-400 px-4">Once we find an ad that works really well, we safely increase the budget (boost it) to get you even more customers without the costs spiraling out of control.</p>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 7: RESULTS SUMMARY */}
        <section className="py-24 border-t border-white/5 bg-black">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Performance Highlights</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <FadeIn delay={0.1} className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                <AnimatedCounter to={5000} suffix="+" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Clicks Generated</p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                <AnimatedCounter to={90000} suffix="+" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Combined Reach</p>
            </FadeIn>

            <FadeIn delay={0.3} className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                ₹1
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Level CPC Achieved</p>
            </FadeIn>

            <FadeIn delay={0.4} className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent flex items-center justify-center">
                <LayersIcon className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Multi-Layer System</p>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 8: FINAL CTA */}
        <section className="py-24 text-center border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
          
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
    <FadeIn delay={delay} className="bg-white/5 border border-white/10 p-5 hover:border-blue-500/50 transition-colors flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Video {index}</div>
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

