import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                className="rounded-2xl shadow-2xl w-full max-w-md"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold">8+</p>
                <p className="text-sm uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wider uppercase mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-950 mb-6">
              Passionate Maker of <br />
              Digital Products.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am a multidisciplinary freelancer based in London, specializing in web development, 
              UI/UX design, and digital strategy. My goal is to bridge the gap between aesthetics 
              and functionality.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With over 8 years of experience working with startups and established brands, 
              I bring a unique perspective to every project, ensuring that the end result 
              is not just beautiful, but also performs exceptionally.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <p className="text-3xl font-bold text-brand-900">120+</p>
                <p className="text-gray-500 uppercase text-xs tracking-widest mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-900">95%</p>
                <p className="text-gray-500 uppercase text-xs tracking-widest mt-1">Client Satisfaction</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-brand-600 text-brand-600 rounded-full font-bold hover:bg-brand-600 hover:text-white transition-all uppercase tracking-wider text-sm"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
