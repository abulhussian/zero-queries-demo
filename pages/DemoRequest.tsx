
import React, { useState } from 'react';
import { Language, translations } from '../translations';
import { CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

interface Props {
  onBack: () => void;
  lang: Language;
}

const DemoRequest: React.FC<Props> = ({ onBack, lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const t = translations[lang].demo;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 animate-reveal">
        <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-500/20">
          <CheckCircle2 className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">{t.form.success.title}</h2>
        <p className="text-slate-400 mb-10 max-w-sm mx-auto font-light">
          {t.form.success.description}
        </p>
        <button 
          onClick={onBack}
          className="btn-premium px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs"
        >
          {t.form.success.button}
        </button>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
      <div className={lang === 'ar' ? 'lg:order-2' : ''}>
        <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
          {t.title.split(' ').map((word: string, i: number) => (
            <React.Fragment key={i}>
              {word === 'Protocol.' || word === 'البروتوكول.' ? <span className="premium-gradient">{word}</span> : word}{' '}
              {i === 1 && <br/>}
            </React.Fragment>
          ))}
        </h2>
        <p className="text-slate-400 leading-relaxed mb-8 font-light">
          {t.description}
        </p>
        <div className="space-y-4">
          <div className={`flex gap-4 items-center group ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-sm text-slate-300 font-bold uppercase tracking-widest">{t.features[0]}</span>
          </div>
          <div className={`flex gap-4 items-center group ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-sm text-slate-300 font-bold uppercase tracking-widest">{t.features[1]}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={`space-y-5 ${lang === 'ar' ? 'lg:order-1' : ''}`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          <input required type="text" className={`w-full glass bg-white/5 px-5 py-4 rounded-2xl text-white text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-700 ${lang === 'ar' ? 'text-right' : 'text-left'}`} placeholder={t.form.name} />
          <input required type="email" className={`w-full glass bg-white/5 px-5 py-4 rounded-2xl text-white text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-700 ${lang === 'ar' ? 'text-right' : 'text-left'}`} placeholder={t.form.email} />
        </div>
        <div className="relative">
          <select className={`w-full glass bg-slate-900 px-5 py-4 rounded-2xl text-white text-sm appearance-none outline-none focus:border-blue-500/50 transition-all ${lang === 'ar' ? 'text-right pr-5 pl-12' : 'text-left pl-5 pr-12'}`}>
            <option>PostgreSQL</option>
            <option>MySQL</option>
            <option>Snowflake</option>
            <option>BigQuery</option>
          </select>
          <div className={`absolute ${lang === 'ar' ? 'left-5' : 'right-5'} top-1/2 -translate-y-1/2 pointer-events-none text-slate-500`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
        <button className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/5">
          {t.form.submit}
        </button>
      </form>
    </div>
  );
};

export default DemoRequest;
