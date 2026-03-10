
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Process from './components/Process';
import Features from './components/Features';
import Security from './components/Security';
import UseCases from './components/UseCases';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TrustBar from './components/TrustBar';
import ProblemDeepDive from './components/ProblemDeepDive';
import Architecture from './components/Architecture';
import Integrations from './components/Integrations';
import ROICalculator from './components/ROICalculator';
import CustomerStories from './components/CustomerStories';
import Compliance from './components/Compliance';
import ComparisonMatrix from './components/ComparisonMatrix';
import DemoPreview from './components/DemoPreview';
import Governance from './components/Governance';
import Benchmarks from './components/Benchmarks';
import Developer from './components/Developer';
import IndustrySolutions from './components/IndustrySolutions';
import ResourceCenter from './components/ResourceCenter';
import DemoRequest from './pages/DemoRequest';
import Auth from './pages/Auth';
import { Language, translations } from './translations';

export type View = 'home' | 'demo' | 'auth';

const App: React.FC = () => {
  const [overlay, setOverlay] = useState<View>('home');
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  useEffect(() => {
    if (overlay !== 'home') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [overlay]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className={`relative min-h-screen bg-[#030014] text-slate-200 font-sans ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar
        onNavigate={(v) => setOverlay(v)}
        lang={lang}
        setLang={setLang}
        t={t.nav}
      />

      <main className="relative">
        <Hero onCta={() => setOverlay('demo')} t={t.hero} lang={lang} />

        <TrustBar t={t.trustBar} lang={lang} />

        <section id="problem">
          <Problem t={t.problem} lang={lang} />
        </section>

        <section id="problem-deep-dive">
          <ProblemDeepDive t={t.problemDeepDive} lang={lang} />
        </section>

        <section id="solution">
          <Solution t={t.solution} lang={lang} />
        </section>

        <section id="process">
          <Process t={t.demoFlow} lang={lang} />
        </section>

        <section id="features">
          <Features t={t.features} lang={lang} />
        </section>

        {/* <Integrations t={t.integrations} lang={lang} /> */}

        <section id="security">
          <Security t={t.security} lang={lang} />
        </section>

        {/* <Governance t={t.governance} lang={lang} /> */}

        <section id="architecture">
          <Architecture t={t.architecture} lang={lang} />
        </section>

        {/* <Compliance t={t.compliance} lang={lang} /> */}
        <section id="benchmarks">
          <Benchmarks t={t.benchmarks} lang={lang} />
        </section>

        <section id="use-cases">
          <UseCases t={t.useCases} lang={lang} />
        </section>

        <section id="industry-solutions">
          <IndustrySolutions
            t={t.industrySolutions}
            lang={lang}
            onDemoClick={() => setOverlay('demo')}
          />
        </section>

        <Pricing
          t={t.pricing}
          lang={lang}
          onSelect={() => window.location.href = "https://chat.zeroqueries.com"}
        />

        <section id="comparison">
          <Comparison t={t.roi} lang={lang} />
        </section>

        <section id="comparison-matrix">
          <ComparisonMatrix t={t.comparisonMatrix} lang={lang} />
        </section>

        <section id="roi-calculator">
          <ROICalculator t={t.roiCalculator} lang={lang} />
        </section>


        <section id="customer-stories">
          <CustomerStories t={t.customerStories} lang={lang} />
        </section>


        {/* <DemoPreview t={t.demoPreview} lang={lang} /> */}

        <section id="faq">
          <FAQ t={t.faq} lang={lang} />
        </section>

        {/* <Developer t={t.developer} lang={lang} /> */}

        {/* <section id="resource-center">
          <ResourceCenter t={t.resourceCenter} lang={lang} />
        </section> */}

        <section className="py-40 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-10 tracking-tighter">
              {t.finalCta.headline}
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              {t.finalCta.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setOverlay('demo')}
                className="btn-premium px-12 py-5 rounded-full font-bold text-lg w-full sm:w-auto"
              >
                {t.finalCta.button}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={(v) => setOverlay(v)} t={t.footer} lang={lang} />

      {/* Premium Responsive Overlay System */}
      {overlay !== 'home' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-fade-in"
            onClick={() => setOverlay('home')}
          />
          <div className="relative w-full max-w-4xl glass rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col animate-reveal">
            <button
              onClick={() => setOverlay('home')}
              className={`absolute top-2 ${lang === 'ar' ? 'left-6' : 'right-6'} z-[210] p-2 text-slate-400 hover:text-white transition-colors`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex-1 overflow-y-auto scrollbar-hide py-12 px-6 sm:px-12">
              {overlay === 'demo' ? <DemoRequest onBack={() => setOverlay('home')} lang={lang} /> : <Auth onBack={() => setOverlay('home')} lang={lang} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
