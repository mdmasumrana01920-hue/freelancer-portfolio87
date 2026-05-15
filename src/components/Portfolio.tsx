import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Web', 'Design', 'Mobile'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Fintech Mobile App',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Creative Agency Branding',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Social Dashboard',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Minimalist Portfolio',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-600 font-semibold tracking-wider uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl font-display font-bold text-brand-950">
              Featured Projects
            </h3>
          </div>
          
          <div className="flex bg-gray-100 p-1 rounded-full overflow-hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-brand-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-950/80 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-brand-500 text-sm font-medium mb-1 uppercase tracking-widest">
                    {project.category}
                  </p>
                  <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                  <a
                    href="#"
                    className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center hover:bg-brand-500 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
