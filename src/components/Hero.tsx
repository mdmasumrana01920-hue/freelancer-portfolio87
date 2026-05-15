import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-50">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-brand-100 rounded-full blur-3xl opacity-70" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-600 font-semibold tracking-wider uppercase mb-4"
          >
            Digital Craftsman
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-brand-950 leading-tight mb-6"
          >
            Designing Experiences,<br />
            <span className="text-brand-600">Building Digital Future.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed"
          >
            I'm a freelance developer & designer specialized in creating professional, 
            high-converting websites and digital products that help businesses grow.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-600 text-white rounded-full font-semibold hover:bg-brand-700 transition-all flex items-center justify-center gap-2 group"
            >
              Hire Me
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-white text-brand-900 border border-brand-200 rounded-full font-semibold hover:border-brand-600 transition-all text-center"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Visual Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-white shadow-2xl rounded-l-[100px] border-y border-l border-brand-100 overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072" 
          alt="Workspace"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
