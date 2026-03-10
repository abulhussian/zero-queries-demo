
import React from 'react';
import { View } from '../App';
import { Language } from '../translations';
import { Twitter, Linkedin, Github } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
  onNavigate: (view: View) => void;
}

const Footer: React.FC<Props> = ({ t, lang, onNavigate }) => {
  return (
    <footer className="bg-[#020617] pt-40 pb-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row justify-between items-start gap-20 mb-40 ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`max-w-sm ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
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
            <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
              {t.description}
            </p>
            <div className={`flex gap-8 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              {[
                // { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                // { icon: Github, label: 'Github' }
              ].map((s, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-white transition-colors">
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-12 lg:gap-8 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {Object.entries(t.sections).map(([key, section]: [string, any]) => (
              <div key={key}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-8">{section.title}</h4>
                <ul className="space-y-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {section.links.map((link: any, i: number) => (
                    <li key={i}>
                      {typeof link === "string" ? (
                        <span className="hover:text-white transition-colors">
                          {link}
                        </span>
                      ) : (
                        <a
                          href={link.href}
                          onClick={() => onNavigate('home')}
                          className="hover:text-white transition-colors block"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mb-40 p-12 rounded-[3rem] glass border-white/5 bg-gradient-to-br from-blue-500/5 to-transparent">
          <div className={`flex flex-col lg:flex-row justify-between items-center gap-12 ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
            <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
              <h3 className="text-2xl font-bold text-white mb-2">{t.newsletter.title}</h3>
              <p className="text-slate-500">Join 5,000+ data leaders receiving our weekly insights.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-4">
              <input 
                type="email" 
                placeholder={t.newsletter.placeholder}
                className="flex-1 lg:w-80 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all">
                {t.newsletter.button}
              </button>
            </div>
          </div>
        </div> */}

        <div className={`pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 ${lang === 'ar' ? 'md:flex-row-reverse' : ''}`}>
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">{t.copyright}</p>
          <div className={`flex items-center gap-4 px-6 py-2 rounded-full glass border-white/5 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{t.status}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
