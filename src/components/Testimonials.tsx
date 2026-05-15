import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO at TechStream',
    content: 'Alex is an exceptional developer. He took our rough ideas and turned them into a stunning, high-performance platform that our clients love.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Product Manager at Pulse',
    content: "The attention to detail and design sensibility Alex brings to the table is rare. He's not just a coder, he's a true creative partner.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Founder of Bloom Creative',
    content: 'Working with Alex was the best decision for our rebranding. The website is beautiful, fast, and has significantly increased our conversion rate.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-950 text-white overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-800 rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-600 rounded-full blur-[120px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-semibold tracking-wider uppercase mb-4">Testimonials</h2>
          <h3 className="text-4xl font-display font-bold mb-6">What My Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-900/40 border border-brand-800 p-8 rounded-3xl relative"
            >
              <Quote className="text-brand-500 mb-6 opacity-40" size={40} />
              <p className="text-gray-300 leading-relaxed italic mb-8 relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-800"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-brand-500 text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
