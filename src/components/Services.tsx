import { motion } from 'motion/react';
import { Code, Palette, Search, Globe, Smartphone, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Custom React & Next.js websites built for speed, performance, and scalability.',
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful interfaces designed to delight your users and convert visitors.',
  },
  {
    icon: <Globe size={32} />,
    title: 'SEO Strategy',
    description: 'Optimization techniques that help your business rank higher and get noticed on Google.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that provide native performance on iOS and Android.',
  },
  {
    icon: <Search size={32} />,
    title: 'Brand Identity',
    description: 'Creating cohesive visual languages that communicate your values and mission effectively.',
  },
  {
    icon: <BarChart size={32} />,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that increase reach and drive measurable business results.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wider uppercase mb-4">My Services</h2>
          <h3 className="text-4xl font-display font-bold text-brand-950 mb-6">
            What I Can Do For You
          </h3>
          <p className="text-gray-600">
            I offer a wide range of creative and technical services to help your business 
            thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-brand-950 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
