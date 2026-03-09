
import React from 'react';
import { View } from '../App';
import { Language } from '../translations';
import { Globe } from 'lucide-react';

interface Props {
    onNavigate: (view: View) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

const Navbar: React.FC<Props> = ({ onNavigate, lang, setLang, t }) => {
  const links = [
    { name: t.product, href: '#features' },
    { name: t.solutions, href: '#solution' },
    { name: t.pricing, href: '#pricing' },
    { name: t.resources, href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 sm:px-6 py-6">
      <div className="max-w-7xl mx-auto glass rounded-[2rem] px-4 sm:px-8 py-3 flex justify-between items-center transition-all duration-500 hover:border-white/20">
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-12 h-12  flex items-center justify-center group-hover:scale-110 transition-transform">
             <img src="/Home/ZQ_APP_icon.png" alt="ZQ Protocol" className="w-16" />
          </div>
          <span className="text-xl font-bold text-white tracking-tighter uppercase hidden sm:block">
           ZeroQueries
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            {links.map(link => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 text-[11px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? 'عربي' : 'English'}</span>
            </button>
            <button 
              onClick={() => onNavigate('auth')}
              className="text-[11px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              {t.signIn}
            </button>
            <button 
              onClick={() => onNavigate('demo')}
              className="bg-white text-black px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all hover:scale-105"
            >
              {t.demo}
            </button>
          </div>
        </div>
        
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Globe className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onNavigate('demo')}
            className="text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
