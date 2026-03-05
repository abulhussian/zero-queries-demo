
import React from 'react';
import { Language } from '../translations';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface Props {
  t: any;
  lang: Language;
  onSelect: () => void;
}

const Pricing: React.FC<Props> = ({ t, lang, onSelect }) => {
  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-6"
          >
            {t.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 max-w-xl mx-auto"
          >
            {t.subheadline}
          </motion.p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${lang === 'ar' ? 'md:flex-row-reverse' : ''}`}>
          {t.plans.map((plan: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group p-px rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${plan.highlight ? 'bg-gradient-to-b from-blue-500 to-cyan-400' : 'bg-white/5'}`}
            >
              <div className="h-full bg-[#030712] rounded-[2.45rem] p-12 flex flex-col">
                <div className={`mb-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-6 ${plan.highlight ? 'text-blue-400' : 'text-slate-500'}`}>{plan.name}</h3>
                  <div className={`flex items-baseline gap-2 mb-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span className="text-5xl font-extrabold text-white tracking-tighter">{plan.price}</span>
                    <span className="text-slate-500 font-bold text-sm">{plan.period}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
                </div>
                
                <ul className="space-y-6 mb-12 flex-grow">
                  {plan.features.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className={`flex items-center gap-3 text-sm font-bold text-slate-400 group-hover:text-slate-200 transition-colors tracking-tight ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
                      <Check className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-blue-500' : 'text-slate-600'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={onSelect}
                  className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${plan.highlight ? 'bg-blue-600 text-white shadow-2xl hover:bg-blue-700' : 'glass text-white border-white/10 hover:bg-white/5'}`}
                >
                  {plan.button}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
