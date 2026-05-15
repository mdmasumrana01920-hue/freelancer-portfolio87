import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-3xl font-display font-bold text-brand-900 block mb-4">
              ALEX<span className="text-brand-600">.</span>
            </a>
            <p className="text-gray-500 max-w-sm">
              Creating high-impact digital solutions for ambitious brands and individuals. 
              Let's build something amazing together.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all shadow-sm">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all shadow-sm">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all shadow-sm">
              <Github size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all shadow-sm">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Alex Rivet. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-brand-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-brand-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
