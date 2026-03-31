/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Clock,
  DollarSign,
  Truck,
  Calendar,
  ChevronRight,
  X
} from "lucide-react";
import { useState, FormEvent } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend or CRM
    console.log("Form submitted");
    setIsModalOpen(false);
    alert("Application received! We will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Hero & VSL Section */}
      <section className="pt-12 pb-20 px-4 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-orange-600 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-orange-500 uppercase bg-orange-500/10 rounded-full border border-orange-500/20">
              Limited Enrollment: 5 Spots Left for April
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              I Make <span className="text-orange-500">$2M a Year</span> With My Moving Company. <br className="hidden md:block" />
              <span className="text-neutral-500">I'll Show You How to Do the Same.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              No fluff. No guru nonsense. Just the exact system I built — open to anyone ready to do the work.
            </p>

            {/* VSL Video Placeholder */}
            <div className="max-w-4xl mx-auto mb-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={handleApply}
                className="relative aspect-video bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-neutral-800 group cursor-pointer"
              >
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-orange-900/40">
                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">FREE TRAINING: The $2M Moving Blueprint</h3>
                  <p className="text-neutral-400 max-w-md">Watch exactly how I scaled from one truck to a multi-million dollar empire (12:45)</p>
                </div>
                
                {/* Video Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Progress Bar Mockup */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10">
                  <div className="w-1/3 h-full bg-orange-600" />
                </div>
              </motion.div>
              <p className="text-center mt-6 text-neutral-500 font-medium italic">
                "This video alone changed the way I look at my business." — Robert K., Student
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={handleApply}
                className="group relative flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-900/40"
              >
                Apply for the Mentorship <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-neutral-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" /> 100% Results-Oriented System
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-12 bg-neutral-900/50 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-white mb-1">$2M+</div>
              <div className="text-sm text-neutral-500 font-medium uppercase tracking-widest">Annual Revenue</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">15k+</div>
              <div className="text-sm text-neutral-500 font-medium uppercase tracking-widest">Moves Completed</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">4.9/5</div>
              <div className="text-sm text-neutral-500 font-medium uppercase tracking-widest">Customer Rating</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="text-sm text-neutral-500 font-medium uppercase tracking-widest">Proven Systems</div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <button 
              onClick={handleApply}
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-900/20"
            >
              Apply for the Mentorship <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-4 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Most Moving Companies Fail Because They're <span className="text-orange-500 italic underline">Buying a Job</span>, Not Building a Business.</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-800/50 p-8 rounded-3xl border border-neutral-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-400">
                <Clock className="w-5 h-5" /> The "Job" Owner
              </h3>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span>You're on every job site because you don't trust your crew.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span>You're answering sales calls at 9 PM on a Sunday.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span>Your profit disappears into repairs and hidden costs.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-600/10 p-8 rounded-3xl border border-orange-600/30">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-400">
                <TrendingUp className="w-5 h-5" /> The Farrell System
              </h3>
              <ul className="space-y-4 text-neutral-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  <span>Automated lead generation that fills your calendar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  <span>Hiring systems that find reliable crews who care.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  <span>High-margin pricing that competitors are too scared to use.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleApply}
              className="flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-900/20"
            >
              Apply for the Mentorship <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Real Results From Real Students</h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-orange-500 text-orange-500" />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mike S.",
                location: "Dallas, TX",
                quote: "I was stuck at $20k/month for two years. After 3 months with John, we hit our first $80k month. The pricing strategy alone paid for the mentorship in a week.",
                result: "+300% Revenue"
              },
              {
                name: "David L.",
                location: "Chicago, IL",
                quote: "The hiring system is a game changer. I finally have a crew I can trust, and I haven't been on a truck in 4 months. I'm finally a business owner.",
                result: "0 Hours on Trucks"
              },
              {
                name: "Sarah J.",
                location: "Phoenix, AZ",
                quote: "Started from zero with John's blueprint. We did $1.2M in our first year. If you're serious about moving, this is the only way to do it.",
                result: "$1.2M Year One"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 relative"
              >
                <div className="absolute -top-4 -right-4 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {testimonial.result}
                </div>
                <p className="text-neutral-400 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-lg text-white">{testimonial.name}</div>
                  <div className="text-neutral-500 text-sm">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleApply}
              className="flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-900/20"
            >
              Apply for the Mentorship <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* The Offer / What's Inside */}
      <section className="py-24 px-4 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Everything You Need to Scale to <span className="text-orange-500">$100k+ Months.</span></h2>
              <div className="space-y-6">
                {[
                  { title: "The Lead Machine", desc: "How to dominate Google and Facebook without wasting thousands on bad ads." },
                  { title: "The 7-Figure Sales Script", desc: "The exact words we use to close 70% of our estimates at premium prices." },
                  { title: "The Crew Architect", desc: "How to find, train, and keep movers who don't break furniture or show up late." },
                  { title: "The Profit Vault", desc: "Hidden ways to squeeze 20% more profit out of every single move." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-neutral-900 p-3 rounded-2xl shadow-sm border border-neutral-800 h-fit">
                      <CheckCircle2 className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1 text-white">{item.title}</h3>
                      <p className="text-neutral-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-neutral-900 rounded-[2rem] p-8 md:p-12 text-white shadow-2xl relative z-10 border border-neutral-800">
                <div className="flex items-center gap-2 text-orange-500 font-bold mb-6 uppercase tracking-widest text-sm">
                  <Users className="w-4 h-4" /> Mentorship Includes:
                </div>
                <ul className="space-y-6 mb-10">
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-orange-500" />
                    <span>Weekly 1-on-1 Strategy Calls with John</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-orange-500" />
                    <span>Access to the Private $2M Inner Circle</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-orange-500" />
                    <span>All My Contracts, Scripts & SOPs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-orange-500" />
                    <span>Direct Access to My Hiring Pipeline</span>
                  </li>
                </ul>


                {/* Application Process Progress Bar */}
                <div className="mb-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4 text-center">Application Process</p>
                  <div className="flex justify-between items-start relative">
                    {/* Progress Line */}
                    <div className="absolute top-4 left-0 w-full h-0.5 bg-white/10 z-0" />
                    
                    {[
                      { label: "Apply", time: "2 min" },
                      { label: "Review", time: "24 hrs" },
                      { label: "Call", time: "15 min" },
                      { label: "Start", time: "Instant" }
                    ].map((step, i) => (
                      <div key={i} className="flex flex-col items-center relative z-10 w-1/4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${i === 0 ? 'bg-orange-600 text-white' : 'bg-neutral-800 text-neutral-500 border border-white/10'}`}>
                          {i + 1}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-tight text-white">{step.label}</span>
                        <span className="text-[9px] text-neutral-500 uppercase">{step.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleApply}
                  className="w-full bg-white text-neutral-900 py-5 rounded-2xl font-black text-xl hover:bg-orange-500 hover:text-white transition-colors shadow-lg shadow-white/5"
                >
                  Apply for the Mentorship →
                </button>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-600 rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-600 rounded-full blur-3xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Success / More Testimonials */}
      <section className="py-24 px-4 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tight text-white">The Wall of Success</h2>
            <p className="text-xl text-neutral-400">Join the hundreds of owners who have escaped the truck.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { name: "Kevin T.", text: "John's system for Google LSA is worth the price of admission alone. My phone hasn't stopped ringing.", result: "24 Leads/Day" },
              { name: "Jason M.", text: "I was terrified to raise my prices. John showed me how to justify it. My profit margin went from 12% to 28% in 30 days.", result: "+16% Margin" },
              { name: "Chris P.", text: "The contracts and SOPs saved me. I had a damage claim that would have cost me $5k, but my new contracts protected me perfectly.", result: "Legal Protection" },
              { name: "Mark R.", text: "Finally hit my first $100k month. I never thought it was possible in a small market like mine.", result: "$100k Month" },
              { name: "Steve W.", text: "The hiring pipeline is insane. I have a waiting list of movers wanting to work for me now.", result: "Full Crew" },
              { name: "Anthony B.", text: "I went from working 80 hours a week to 15. I actually know my kids' names now. Thanks John.", result: "Time Freedom" },
              { name: "Brian L.", text: "Best investment I've ever made in my business. Period.", result: "5-Star Review" },
              { name: "Tom H.", text: "We scaled from 2 trucks to 6 in one season. The systems just work.", result: "3x Fleet Size" },
              { name: "James D.", text: "If you're on the fence, just do it. You're losing money every day you wait.", result: "Highly Recommend" }
            ].map((item, i) => (
              <div key={i} className="break-inside-avoid bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-neutral-400 mb-4 text-sm leading-relaxed">"{item.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white">{item.name}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                    {item.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleApply}
              className="flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-900/20"
            >
              Apply for the Mentorship <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto bg-orange-600 rounded-[3rem] p-12 text-white text-center shadow-2xl shadow-orange-900/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Clock className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">This Is Not For Everyone.</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              I only take on 5 new students a month to ensure everyone gets the attention they need to hit $100k/mo. Once the spots are gone, the doors close until next month.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl font-bold border border-white/30">
                Next Cohort: April 1st
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl font-bold border border-white/30">
                Spots Remaining: 2
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <button 
                onClick={handleApply}
                className="bg-white text-orange-600 hover:bg-neutral-50 px-10 py-5 rounded-2xl text-xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-900/20"
              >
                Apply for the Mentorship →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">Ready to Build a Real Business?</h2>
          <p className="text-xl text-neutral-400 mb-12">
            Stop guessing. Stop struggling. Follow the blueprint that built a $2M/year empire.
          </p>

          {/* Application Process Progress Bar (Light Version) */}
          <div className="max-w-xl mx-auto mb-12 p-8 bg-neutral-900 rounded-3xl border border-neutral-800 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6">Your Path to $2M/Year</p>
            <div className="flex justify-between items-start relative">
              {/* Progress Line */}
              <div className="absolute top-5 left-0 w-full h-0.5 bg-neutral-800 z-0" />
              
              {[
                { label: "Form", time: "2 min" },
                { label: "Vetting", time: "24 hrs" },
                { label: "Call", time: "15 min" },
                { label: "Launch", time: "Instant" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center relative z-10 w-1/4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-3 ${i === 0 ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/40' : 'bg-neutral-800 text-neutral-500 border border-neutral-800'}`}>
                    {i + 1}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tight text-white">{step.label}</span>
                  <span className="text-[10px] text-neutral-500 uppercase">{step.time}</span>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handleApply}
            className="group relative inline-flex items-center gap-4 bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 rounded-2xl text-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-900/40"
          >
            Apply for the Mentorship <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
          <div className="mt-12 flex justify-center items-center gap-8 opacity-30 grayscale invert">
            <Truck className="w-12 h-12" />
            <DollarSign className="w-12 h-12" />
            <Calendar className="w-12 h-12" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 text-sm text-center md:text-left">
          <p>© 2026 Farrell Systems Mentorship. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Lead Capture Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-neutral-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-neutral-800"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-neutral-800 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-neutral-500" />
              </button>

              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-2xl mb-6">
                    <TrendingUp className="w-8 h-8 text-orange-500" />
                  </div>
                  <h2 className="text-3xl font-black mb-2 text-white">Apply for Mentorship</h2>
                  <p className="text-neutral-400">Enter your details below to see if you qualify for the $2M system.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-neutral-400 mb-1 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-neutral-800 border border-neutral-700 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder:text-neutral-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-neutral-400 mb-1 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-neutral-800 border border-neutral-700 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder:text-neutral-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-neutral-400 mb-1 ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full px-6 py-4 bg-neutral-800 border border-neutral-700 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder:text-neutral-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 rounded-2xl font-black text-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-orange-900/40 mt-4"
                  >
                    Get Instant Access →
                  </button>
                  <p className="text-[10px] text-center text-neutral-500 mt-4 uppercase tracking-widest font-bold">
                    <ShieldCheck className="w-3 h-3 inline mr-1" /> Your data is 100% secure & private
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
