import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, Upload, Database, Layers, ArrowRight, ShieldCheck, Zap, Activity, CircleDot, Play } from 'lucide-react';
import './index.css';

const TopNav = () => (
  <nav className="top-nav">
    <div className="container top-nav-inner">
      <div className="flex items-center gap-xs">
        <div style={{ color: 'var(--colors-primary)' }}>
          <Layers size={24} />
        </div>
        <span className="text-body" style={{ fontWeight: 600 }}>TALENTPARSER</span>
      </div>
      <div className="nav-links">
        <a href="#product">Product</a>
        <a href="#journey">Journey</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="flex items-center gap-sm">
        <button className="btn btn-secondary text-body-sm" style={{ padding: '8px 16px' }}>Contact Sales</button>
        <button className="btn btn-primary text-body-sm" style={{ padding: '8px 16px' }}>Get Started</button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="section text-center">
    <div className="container flex flex-col items-center gap-md">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="status-badge" 
        style={{ border: '1px solid var(--colors-hairline-strong)' }}
      >
        <span className="text-primary mr-2">New</span> CV Matcher V2.0 is live <ChevronRight size={12} style={{ display: 'inline', marginLeft: 4 }} />
      </motion.div>
      
      <motion.h1 
        className="text-display-xl mx-auto" 
        style={{ maxWidth: '1200px' }}
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Eliminate manual screening. Find your top 5% instantly.
      </motion.h1>
      
      <motion.p 
        className="text-subhead text-muted mx-auto" 
        style={{ maxWidth: '640px' }}
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        The Intelligent CV Matcher parses, scores, and compares candidates against your specific Job Descriptions, reducing cognitive load and accelerating time-to-hire.
      </motion.p>
      
      <motion.div 
        className="flex gap-md mt-sm"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button className="btn btn-primary" style={{ padding: '12px 24px' }}>Start free trial</button>
        <button className="btn btn-secondary" style={{ padding: '12px 24px' }}>
          <Play size={16} className="mr-2" /> View demo
        </button>
      </motion.div>

      <motion.div 
        className="product-panel mt-xl mx-auto"
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ padding: '4px', background: 'var(--colors-hairline)', maxWidth: '1200px', width: '100%' }}
      >
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--colors-hairline-strong)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <img src="/hero_image.png" alt="Candidate Dashboard UI" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </motion.div>
    </div>
  </section>
);

const AppJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "JD Baseline Engine",
      desc: "Define strict skill and experience parameters for your open role.",
      img: "/feat1.png"
    },
    {
      id: 1,
      title: "Intelligent Ingestion",
      desc: "Upload bulk CVs. Our engine extracts data points instantly.",
      img: "/feat2.png"
    },
    {
      id: 2,
      title: "Centralized Scoring",
      desc: "View an interactive database scored entirely against your JD.",
      img: "/feat3.png"
    },
    {
      id: 3,
      title: "Deep Comparison",
      desc: "Select candidates and compare experience gaps side-by-side.",
      img: "/feat4.png"
    }
  ];

  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="text-center mb-xl">
          <h2 className="text-display-lg">The hiring mandate, simplified.</h2>
          <p className="text-subhead text-muted mt-sm mx-auto" style={{ maxWidth: '600px' }}>
            A single source of truth for your hiring pipeline. Drop your Job Description, drop the resumes, and let the engine do the rest.
          </p>
        </div>

        <div className="items-start mt-xl" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' }}>
          <div className="flex flex-col gap-xs">
            {steps.map((step, idx) => (
              <div 
                key={step.id}
                style={{ 
                  cursor: 'pointer',
                  padding: '32px',
                  borderRadius: '16px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: activeStep === step.id ? 'var(--colors-surface-1)' : 'transparent',
                  border: activeStep === step.id ? '1px solid var(--colors-hairline-strong)' : '1px solid transparent',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onClick={() => setActiveStep(step.id)}
              >
                {activeStep === step.id && (
                  <motion.div layoutId="activeStepBorder" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: 'var(--colors-primary)' }} />
                )}
                <div className="flex items-start gap-md">
                  <div style={{ 
                    color: activeStep === step.id ? 'var(--colors-primary)' : 'var(--colors-ink-tertiary)',
                    fontWeight: 600, fontSize: '18px',
                    marginTop: '2px'
                  }}>
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-headline" style={{ fontSize: '24px', color: activeStep === step.id ? 'var(--colors-ink)' : 'var(--colors-ink-muted)' }}>{step.title}</h3>
                    <motion.div 
                       initial={false} 
                       animate={{ height: activeStep === step.id ? 'auto' : 0, opacity: activeStep === step.id ? 1 : 0 }} 
                       style={{ overflow: 'hidden' }}
                    >
                      <p className="text-body mt-sm" style={{ color: 'var(--colors-ink-subtle)', lineHeight: 1.6 }}>{step.desc}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center h-full sticky top-0" style={{ top: '120px' }}>
             <div className="product-panel w-full" style={{ padding: '4px', background: 'var(--colors-hairline)', borderRadius: '16px' }}>
               <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--colors-hairline-strong)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', backgroundColor: '#010102' }}>
                 <motion.img 
                   key={activeStep}
                   initial={{ opacity: 0, scale: 1.02 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.6 }}
                   src={steps[activeStep].img} 
                   alt={steps[activeStep].title} 
                   style={{ width: '100%', height: 'auto', display: 'block' }} 
                 />
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureGrid = () => {
  const features = [
    { icon: <Database size={24} />, title: 'Centralized Candidate Repository', desc: 'A live, interactive database of all parsed candidates, serving as the single source of truth for the hiring mandate.' },
    { icon: <ShieldCheck size={24} />, title: 'Intelligent Parsing & Scoring', desc: 'The system ingests bulk candidate CVs, extracts key data points, and assigns a Match Score based entirely on alignment.' },
    { icon: <Activity size={24} />, title: 'Dynamic Filtering & Search', desc: 'Filter the database by Match Score, technical skills, years of experience, or notice period to instantly narrow the talent pool.' },
    { icon: <Layers size={24} />, title: 'Multi-Candidate Comparison', desc: 'Select 2 to 3 candidates and compare their extracted skills, experience gaps, and match scores side-by-side.' },
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="text-display-md mb-xl text-center">Built for scale and precision.</h2>
        <div className="grid-2">
          {features.map((f, i) => (
            <div key={i} className="surface-card flex flex-col gap-sm">
              <div style={{ color: 'var(--colors-primary)' }}>{f.icon}</div>
              <h3 className="text-card-title">{f.title}</h3>
              <p className="text-body text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="section">
      <div className="container text-center">
        <h2 className="text-display-md">Pricing for teams of all sizes.</h2>
        
        <div className="mt-lg mb-xl">
          <div className="pricing-toggle">
            <button 
              className={`pricing-tab ${!annual ? 'active' : ''}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button 
              className={`pricing-tab ${annual ? 'active' : ''}`}
              onClick={() => setAnnual(true)}
            >
              Annually <span className="text-primary ml-1" style={{ fontSize: '12px' }}>Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid-3 text-left items-center">
          <div className="surface-card flex flex-col justify-between" style={{ padding: '32px' }}>
            <div>
              <h3 className="text-headline">Starter</h3>
              <p className="text-body-sm mt-xs">For small hiring teams.</p>
              <div className="mt-md mb-lg">
                <span className="text-display-md">${annual ? '49' : '59'}</span>
                <span className="text-body-sm"> /mo</span>
              </div>
              <div className="flex flex-col gap-sm">
                <div className="flex items-center gap-sm"><CheckCircle2 size={16} className="text-primary" /><span className="text-body-sm">Up to 5 active JDs</span></div>
                <div className="flex items-center gap-sm"><CheckCircle2 size={16} className="text-primary" /><span className="text-body-sm">500 CV parses /mo</span></div>
                <div className="flex items-center gap-sm"><CheckCircle2 size={16} className="text-primary" /><span className="text-body-sm">Basic Candidate Scoring</span></div>
              </div>
            </div>
            <button className="btn btn-secondary mt-xl w-full">Start for free</button>
          </div>

          <div className="surface-card flex flex-col justify-between" style={{ 
            padding: '48px 32px', 
            backgroundColor: 'var(--colors-surface-2)', 
            borderColor: 'var(--colors-primary-focus)',
            transform: 'scale(1.05)',
            boxShadow: '0 0 40px rgba(94, 106, 210, 0.15)',
            zIndex: 10
          }}>
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-headline">Pro</h3>
                <span className="status-badge success" style={{ border: '1px solid var(--colors-semantic-success)', padding: '4px 12px', background: 'rgba(39, 166, 68, 0.15)' }}>Recommended</span>
              </div>
              <p className="text-body-sm mt-xs">For scaling startups.</p>
              <div className="mt-md mb-lg">
                <span className="text-display-md">${annual ? '149' : '179'}</span>
                <span className="text-body-sm"> /mo</span>
              </div>
              <div className="flex flex-col gap-sm">
                <div className="flex items-center gap-sm"><CheckCircle2 size={16} className="text-primary" /><span className="text-body-sm">Unlimited active JDs</span></div>
                <div className="flex items-center gap-sm"><CheckCircle2 size={16} className="text-primary" /><span className="text-body-sm">Unlimited CV parses</span></div>
                <div className="flex items-center gap-sm"><CheckCircle2 size={16} className="text-primary" /><span className="text-body-sm">Multi-Candidate Comparison</span></div>
                <div className="flex items-center gap-sm"><CheckCircle2 size={16} className="text-primary" /><span className="text-body-sm">CSV/Excel Bulk Export</span></div>
              </div>
            </div>
            <button className="btn btn-primary mt-xl w-full">Get Started</button>
          </div>

          <div className="surface-card flex flex-col justify-between" style={{ padding: '32px' }}>
            <div>
              <h3 className="text-headline">Enterprise</h3>
              <p className="text-body-sm mt-xs">For large organizations.</p>
              <div className="mt-md mb-lg">
                <span className="text-display-md">Custom</span>
              </div>
              <div className="flex flex-col gap-sm">
                <div className="flex items-center gap-sm"><CheckCircle2 size={16} className="text-primary" /><span className="text-body-sm">Everything in Pro</span></div>
                <div className="flex items-center gap-sm"><CheckCircle2 size={16} className="text-primary" /><span className="text-body-sm">ATS Integration (Workday, Greenhouse)</span></div>
                <div className="flex items-center gap-sm"><CheckCircle2 size={16} className="text-primary" /><span className="text-body-sm">Automated Engagement API</span></div>
                <div className="flex items-center gap-sm"><CheckCircle2 size={16} className="text-primary" /><span className="text-body-sm">Dedicated Account Manager</span></div>
              </div>
            </div>
            <button className="btn btn-secondary mt-xl w-full">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => (
  <section className="section">
    <div className="container mx-auto" style={{ maxWidth: '800px' }}>
      <div className="mb-lg">
        <span className="text-eyebrow text-primary">Changelog & Roadmap</span>
        <h2 className="text-display-md mt-xs">What's shipping next.</h2>
      </div>
      
      <div className="flex flex-col gap-xs">
        <div className="surface-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="flex items-center gap-sm mb-xs">
              <span className="text-mono">v2.1.0</span>
              <span className="status-badge" style={{ backgroundColor: 'var(--colors-surface-3)' }}>In Progress</span>
            </div>
            <p className="text-body">ATS Integration Hooks (Workday & Greenhouse).</p>
          </div>
          <CircleDot size={20} className="text-subtle" />
        </div>
        
        <div className="surface-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="flex items-center gap-sm mb-xs">
              <span className="text-mono">v2.2.0</span>
              <span className="status-badge" style={{ backgroundColor: 'var(--colors-surface-3)' }}>Planned</span>
            </div>
            <p className="text-body">AI-generated automated outreach templates.</p>
          </div>
          <CircleDot size={20} className="text-subtle" />
        </div>

        <div className="surface-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="flex items-center gap-sm mb-xs">
              <span className="text-mono">v2.3.0</span>
              <span className="status-badge" style={{ backgroundColor: 'var(--colors-surface-3)' }}>Planned</span>
            </div>
            <p className="text-body">Blind Hiring toggles to obscure demographic data.</p>
          </div>
          <CircleDot size={20} className="text-subtle" />
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="section pb-xl">
    <div className="container">
      <div className="surface-card flex flex-col items-center justify-center text-center" style={{ padding: '80px 24px', backgroundColor: 'var(--colors-surface-1)' }}>
        <h2 className="text-display-lg" style={{ maxWidth: '600px' }}>Ready to transform your hiring mandate?</h2>
        <p className="text-subhead text-muted mt-md mb-xl" style={{ maxWidth: '500px' }}>
          Join top engineering teams shipping faster by hiring smarter. Try TalentParser free for 14 days.
        </p>
        <div className="flex gap-md">
          <button className="btn btn-primary" style={{ padding: '12px 24px' }}>Get Started <ArrowRight size={16} /></button>
          <button className="btn btn-secondary" style={{ padding: '12px 24px' }}>Talk to Sales</button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ backgroundColor: 'var(--colors-canvas)', padding: '64px 32px' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '64px', maxWidth: '1000px', margin: '0 auto' }}>
      <div>
        <div className="flex items-center gap-xs mb-md">
          <div style={{ color: 'var(--colors-primary)' }}>
            <Layers size={20} />
          </div>
          <span className="text-body" style={{ fontWeight: 600 }}>TALENTPARSER</span>
        </div>
        <p className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)' }}>
          Designed for modern hiring teams.<br/>
          Built with precision and speed.
        </p>
      </div>
      <div className="flex flex-col gap-sm">
          <span className="text-body" style={{ fontWeight: 500 }}>Product</span>
          <a href="#" className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)', textDecoration: 'none' }}>Features</a>
          <a href="#" className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)', textDecoration: 'none' }}>Integrations</a>
          <a href="#" className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)', textDecoration: 'none' }}>Pricing</a>
          <a href="#" className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)', textDecoration: 'none' }}>Changelog</a>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="text-body" style={{ fontWeight: 500 }}>Company</span>
          <a href="#" className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)', textDecoration: 'none' }}>About</a>
          <a href="#" className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)', textDecoration: 'none' }}>Blog</a>
          <a href="#" className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)', textDecoration: 'none' }}>Careers</a>
          <a href="#" className="text-body-sm" style={{ color: 'var(--colors-ink-subtle)', textDecoration: 'none' }}>Contact</a>
        </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div>
      <TopNav />
      <main>
        <Hero />
        <div className="section-divider" />
        <AppJourney />
        <div className="section-divider" />
        <FeatureGrid />
        <div className="section-divider" />
        <Pricing />
        <div className="section-divider" />
        <Roadmap />
        <div className="section-divider" />
        <CTA />
      </main>
      <div className="section-divider" />
      <Footer />
    </div>
  );
}
