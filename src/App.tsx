import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
  Check,
  Building2,
  Home,
  Key,
  ShieldCheck,
  Clock,
  Compass,
  ChevronDown,
  Copy,
  ExternalLink,
  Send,
  Navigation,
} from 'lucide-react';

// High-fidelity generated imagery
import heroImage from './assets/images/hero_manchester_property_1790110985320.jpg';
import consultingImage from './assets/images/property_interior_consulting_1790111005755.jpg';
import architectureImage from './assets/images/manchester_city_architecture_1790111022701.jpg';

const BUSINESS_DATA = {
  name: 'Westmere Properties',
  type: 'Real Estate',
  phoneDisplay: '+44 7304 250183',
  phoneRaw: '447304250183',
  telLink: 'tel:+447304250183',
  whatsappLink: 'https://wa.me/447304250183?text=Hello%20Westmere%20Properties,%20I%20would%20like%20to%20inquire%20about%20your%20property%20services.',
  addressLine1: 'Unit 7, Wilson Business Park',
  facility: 'Westmere Asset Holdings Initial Business Centre',
  city: 'Manchester',
  postcode: 'M40 8WN',
  country: 'United Kingdom',
  fullAddress: 'Westmere Asset Holdings Initial Business Centre, Unit 7 Wilson Business Park, Manchester, United Kingdom, M40 8WN',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Westmere+Asset+Holdings+Initial+Business+Centre+Unit+7+Wilson+Business+Park+Manchester+M40+8WN',
};

const SERVICES = [
  {
    icon: Home,
    title: 'Residential Sales & Acquisitions',
    description:
      'Guiding homeowners and buyers through smooth, transparent transactions across Greater Manchester with realistic market appraisals and diligent oversight.',
    highlights: ['Realistic market valuations', 'Buyer qualification & matching', 'Dedicated sale progression'],
  },
  {
    icon: Key,
    title: 'Property Lettings & Management',
    description:
      'Hands-on letting and tenancy management designed for landlords who value dependable tenants, compliant tenancies, and prompt communication.',
    highlights: ['Tenant screening & referencing', 'Tenancy agreements & deposit protection', 'Prompt repair & maintenance coordination'],
  },
  {
    icon: Building2,
    title: 'Commercial Property & Premises',
    description:
      'Advisory and procurement for commercial units, industrial facilities, and office spaces suited for expanding Manchester businesses.',
    highlights: ['Business park & industrial spaces', 'Commercial lease guidance', 'Occupier & asset advisory'],
  },
  {
    icon: Compass,
    title: 'Valuations & Local Market Appraisals',
    description:
      'Grounded, accurate property assessments based on local transactional evidence and current Manchester demand rather than inflated speculation.',
    highlights: ['No-obligation property reviews', 'Local price trend insights', 'Actionable strategic recommendations'],
  },
];

const TRUST_POINTS = [
  {
    title: 'Direct Local Presence',
    description:
      'Operating from our physical offices at Wilson Business Park (M40 8WN), providing clients with an accessible, verifiable Manchester address for meetings and consultations.',
  },
  {
    title: 'Direct Specialist Access',
    description:
      'You deal directly with dedicated property professionals via phone or WhatsApp—not an outsourced call center or faceless online portal.',
  },
  {
    title: 'Straightforward Transparency',
    description:
      'Honest pricing, realistic property assessments, and transparent advice designed to protect your interests through every stage of the property journey.',
  },
  {
    title: 'Responsive Local Turnaround',
    description:
      'Fast coordination for viewings, property valuations, and client queries across Greater Manchester, ensuring opportunities are never missed.',
  },
];

const REASSURANCE_PILLARS = [
  {
    pillar: 'Strict Regulatory Compliance',
    detail: 'All tenancy, sales documentation, and deposit management adhere strictly to current UK property legislation.',
  },
  {
    pillar: 'Clear, Timely Communication',
    detail: 'We keep property owners, buyers, and tenants consistently informed with direct updates as milestones occur.',
  },
  {
    pillar: 'Grounded Manchester Expertise',
    detail: 'Focused insight into local sub-markets, transport links, and rental yields across the Manchester metropolitan area.',
  },
  {
    pillar: 'Individual Instruction Care',
    detail: 'We take on a deliberate volume of clients to ensure your listing or instruction receives active, personal attention.',
  },
];

const FAQS = [
  {
    q: 'How do I arrange a property viewing or valuation?',
    a: 'You can call us directly on +44 7304 250183 or send a quick WhatsApp message. We will confirm a convenient date and time to inspect the property or host a viewing.',
  },
  {
    q: 'Which areas of Manchester do you cover?',
    a: 'Our primary focus is Greater Manchester and surrounding districts, including central Manchester, North Manchester, and key regional business corridors.',
  },
  {
    q: 'Can I visit your office in person?',
    a: 'Yes. Our office is located at Unit 7, Wilson Business Park, Manchester, M40 8WN. We recommend getting in touch by phone or WhatsApp in advance so a team member is prepared to assist you.',
  },
  {
    q: 'How quickly can you respond to inquiries?',
    a: 'Inquiries via phone and WhatsApp are typically handled immediately during business hours, allowing you to discuss your property requirements without delay.',
  },
];

export default function App() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [inquiryType, setInquiryType] = useState('Sales & Valuation');
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    propertyDetails: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_DATA.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) return;
    setFormSubmitted(true);
  };

  const sendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Westmere Properties,\n\nName: ${formState.name || 'Not provided'}\nPhone: ${formState.phone || 'Not provided'}\nInquiry Type: ${inquiryType}\nDetails: ${formState.propertyDetails || 'N/A'}\nMessage: ${formState.message || 'I would like to discuss my property needs.'}`
    );
    window.open(`https://wa.me/${BUSINESS_DATA.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#172A3A] flex flex-col font-sans">
      {/* Top Notification / Trust Micro-Bar */}
      <div className="bg-[#172A3A] text-white text-xs border-b border-[#172A3A]/40 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
            <span>Wilson Business Park, Manchester M40 8WN</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline text-slate-400">Direct Inquiries:</span>
            <a
              href={BUSINESS_DATA.telLink}
              className="font-medium text-[#C6A15B] hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_DATA.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mandatory Top Bar Contract: 3 Zones */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Zone 1: Single text element Brand Zone */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-semibold tracking-tight text-[#172A3A] font-serif hover:opacity-90 transition-opacity"
          >
            Westmere Properties
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-[#172A3A] transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-[#172A3A] transition-colors">
              About
            </a>
            <a href="#trust" className="hover:text-[#172A3A] transition-colors">
              Why Us
            </a>
            <a href="#location" className="hover:text-[#172A3A] transition-colors">
              Location
            </a>
            <a href="#contact" className="hover:text-[#172A3A] transition-colors">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={BUSINESS_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md hover:bg-emerald-100 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <a
              href={BUSINESS_DATA.telLink}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#172A3A] rounded-md hover:bg-[#203a50] transition-colors whitespace-nowrap shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative bg-[#172A3A] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
          {/* Subtle architectural grid pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#C6A15B 1px, transparent 1px), linear-gradient(to right, #C6A15B 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Hero Copy */}
              <div className="lg:col-span-7 space-y-6">
                {/* Local Trust Signal */}
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                  <span>Manchester Real Estate Specialists · M40 8WN</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-balance font-serif">
                  Dedicated Property Advice &amp; Management in Manchester
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
                  Based at Westmere Asset Holdings Initial Business Centre in Wilson Business Park. We provide
                  responsive residential and commercial property sales, lettings, and valuation guidance with genuine
                  local accountability.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={BUSINESS_DATA.telLink}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#172A3A] bg-[#C6A15B] hover:bg-[#d4b06b] rounded-md transition-all shadow-md active:scale-98 whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-[#172A3A]" />
                    <span>Call Now: {BUSINESS_DATA.phoneDisplay}</span>
                  </a>

                  <a
                    href={BUSINESS_DATA.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-md transition-all whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                {/* Practical Local Fact Strip */}
                <div className="pt-4 border-t border-slate-700/70 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                  <div>
                    <div className="text-slate-400 font-medium">Headquarters</div>
                    <div className="text-white font-semibold mt-0.5">Wilson Business Park</div>
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium">Coverage</div>
                    <div className="text-white font-semibold mt-0.5">Greater Manchester</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="text-slate-400 font-medium">Direct Inquiries</div>
                    <div className="text-emerald-400 font-semibold mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Lines Open Now
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Visual Asset */}
              <div className="lg:col-span-5">
                <div className="relative rounded-lg overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                  <img
                    src={heroImage}
                    alt="Westmere Properties Manchester residential and commercial building architecture"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172A3A]/90 via-transparent to-transparent" />
                  
                  {/* Overlay Property Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md text-[#172A3A] p-4 rounded-md border border-slate-200 shadow-lg">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                          Westmere Asset Holdings
                        </div>
                        <div className="text-sm font-semibold text-[#172A3A] mt-0.5">
                          Initial Business Centre, Unit 7
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          Wilson Business Park, Manchester M40 8WN
                        </div>
                      </div>
                      <a
                        href={BUSINESS_DATA.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#172A3A] hover:text-[#C6A15B] flex items-center gap-1 shrink-0 p-1.5 bg-slate-100 rounded"
                        title="Open in Google Maps"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Map</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SERVICES SECTION */}
        <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                Core Competencies
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#172A3A] font-serif mt-1">
                Real Estate Services Tailored to Manchester Clients
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                Whether you are selling an established home, acquiring commercial premises, or seeking dependable
                property management, our team delivers pragmatic, end-to-end guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.title}
                    className="p-6 sm:p-8 rounded-lg bg-[#F8FAFC] border border-slate-200 hover:border-[#C6A15B]/50 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-md bg-[#172A3A] text-[#C6A15B] flex items-center justify-center">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-slate-400 tabular-nums">0{index + 1}</span>
                      </div>

                      <h3 className="text-xl font-medium text-[#172A3A] font-serif mb-2">{service.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.description}</p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/80">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                        Key Deliverables
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {service.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action Band */}
            <div className="mt-12 p-6 sm:p-8 rounded-lg bg-[#172A3A] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-lg font-serif font-medium">Need immediate advice on a Manchester property?</div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Connect directly with our team today on {BUSINESS_DATA.phoneDisplay} to discuss your requirements.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={BUSINESS_DATA.telLink}
                  className="px-5 py-2.5 bg-[#C6A15B] text-[#172A3A] hover:bg-[#d4b06b] text-xs font-semibold rounded-md transition-colors whitespace-nowrap"
                >
                  Call Now
                </a>
                <a
                  href={BUSINESS_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 text-xs font-semibold rounded-md transition-colors whitespace-nowrap"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ABOUT SECTION */}
        <section id="about" className="py-16 sm:py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Collage */}
              <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md bg-white">
                  <img
                    src={consultingImage}
                    alt="Westmere Properties meeting and consulting office in Manchester"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white border border-slate-200">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-[#172A3A] mt-1">Wilson Business Park</div>
                    <div className="text-xs text-slate-500 mt-0.5">Manchester, M40 8WN</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white border border-slate-200">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Focus</div>
                    <div className="text-sm font-semibold text-[#172A3A] mt-1">Real Estate</div>
                    <div className="text-xs text-slate-500 mt-0.5">Commercial &amp; Residential</div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                  About Westmere Properties
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#172A3A] font-serif">
                  A Practical, Accessible Real Estate Practice in Manchester
                </h2>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Westmere Properties operates from Westmere Asset Holdings Initial Business Centre, located at Unit
                    7, Wilson Business Park in Manchester (M40 8WN). We were established to offer property owners,
                    purchasers, landlords, and commercial tenants a direct, dependable alternative to impersonal agency
                    networks.
                  </p>
                  <p>
                    Real estate transactions require precise local knowledge, timely updates, and active
                    problem-solving. Whether handling the sale of a residential home, negotiating commercial leases, or
                    ensuring rental assets meet full regulatory standards, our approach prioritizes straightforward
                    clarity over marketing jargon.
                  </p>
                  <p>
                    By keeping our operational focus anchored in Manchester, we provide our clients with fast
                    turnaround times, accessible face-to-face consultations, and responsive phone and WhatsApp support.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#172A3A] hover:text-[#C6A15B] transition-colors"
                  >
                    <span>Contact our Manchester office</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TRUST / WHY CHOOSE US */}
        <section id="trust" className="py-16 sm:py-20 bg-white border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                Practical Advantages
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#172A3A] font-serif mt-1">
                Why Local Clients Work With Westmere Properties
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Clear, verifiable standards built around direct communication and tangible local presence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TRUST_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="p-6 rounded-lg bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-[#172A3A]/10 text-[#172A3A] flex items-center justify-center mb-4">
                      <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                    </div>
                    <h3 className="text-base font-semibold text-[#172A3A] mb-2">{point.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CREDIBILITY & PROFESSIONAL COMMITMENT (Replacing unprovided testimonials without fabricating) */}
        <section className="py-16 sm:py-20 bg-[#172A3A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                  Professional Integrity
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white font-serif">
                  Our Professional Commitment &amp; Client Standards
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We believe trust is earned through consistency, transparent pricing, and strict adherence to
                  regulatory standards. Here is what every client can depend on when instructing Westmere Properties.
                </p>

                <div className="pt-4">
                  <div className="p-4 rounded-md bg-slate-800/80 border border-slate-700 space-y-2">
                    <div className="text-xs font-medium text-[#C6A15B] uppercase tracking-wider">
                      Direct Accountability
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Every transaction is managed with personal oversight from start to completion. You are never
                      passed off between unfamiliar departments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {REASSURANCE_PILLARS.map((item) => (
                  <div
                    key={item.pillar}
                    className="p-5 rounded-md bg-slate-800/50 border border-slate-700/80 hover:border-[#C6A15B]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2 text-[#C6A15B]">
                      <Check className="w-4 h-4 shrink-0" />
                      <span className="text-sm font-semibold text-white">{item.pillar}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. LOCATION / SERVICE AREA */}
        <section id="location" className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                Manchester Office &amp; Service Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#172A3A] font-serif mt-1">
                Centrally Located at Wilson Business Park
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Easily accessible via Manchester’s key transport corridors, Queens Road, and major orbital routes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Location Details Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-lg bg-[#F8FAFC] border border-slate-200 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        Registered Premises
                      </div>
                      <div className="text-base font-semibold text-[#172A3A] mt-1">
                        Westmere Asset Holdings Initial Business Centre
                      </div>
                      <div className="text-sm text-slate-600 mt-1">
                        Unit 7, Wilson Business Park
                        <br />
                        Manchester, United Kingdom
                        <br />
                        <span className="font-semibold text-[#172A3A]">M40 8WN</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedAddress ? 'Address Copied!' : 'Copy Full Address'}</span>
                    </button>

                    <a
                      href={BUSINESS_DATA.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#172A3A] bg-[#C6A15B]/20 border border-[#C6A15B]/40 rounded hover:bg-[#C6A15B]/30 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Visiting Guidelines
                  </div>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>In-person client appointments can be scheduled by phone or WhatsApp in advance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>On-site parking is available within Wilson Business Park for visiting clients.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Styled Visual Map / Architecture Banner */}
              <div className="lg:col-span-7">
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md bg-white">
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                    <img
                      src={architectureImage}
                      alt="Manchester urban property architecture"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172A3A]/80 via-[#172A3A]/30 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-xs text-[#C6A15B] font-semibold tracking-wider uppercase">
                          Manchester M40 8WN
                        </div>
                        <div className="text-lg font-serif font-medium mt-0.5">
                          Unit 7, Wilson Business Park
                        </div>
                        <div className="text-xs text-slate-200">
                          Serving residential &amp; commercial clients across Greater Manchester
                        </div>
                      </div>

                      <a
                        href={BUSINESS_DATA.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#172A3A] font-semibold text-xs rounded shadow-md hover:bg-slate-100 transition-colors whitespace-nowrap self-start sm:self-auto"
                      >
                        <Navigation className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>Get Directions</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTACT / ACTION */}
        <section id="contact" className="py-16 sm:py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                Immediate Action
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#172A3A] font-serif mt-1">
                Get in Touch With Westmere Properties
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Call our direct line, send a WhatsApp message, or submit an inquiry below for prompt assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Direct Channels */}
              <div className="lg:col-span-5 space-y-4">
                {/* Telephone Card */}
                <div className="p-6 rounded-lg bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-md bg-[#172A3A] text-[#C6A15B] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        Telephone (Direct Line)
                      </div>
                      <a
                        href={BUSINESS_DATA.telLink}
                        className="text-lg font-bold text-[#172A3A] hover:text-[#C6A15B] transition-colors"
                      >
                        {BUSINESS_DATA.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Speak directly to our property team for valuations, viewings, and commercial requirements.
                  </p>
                  <a
                    href={BUSINESS_DATA.telLink}
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#172A3A] hover:bg-[#203a50] text-white text-xs font-semibold rounded transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Call Now</span>
                  </a>
                </div>

                {/* WhatsApp Card */}
                <div className="p-6 rounded-lg bg-white border border-emerald-200 shadow-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-emerald-800 font-semibold">
                        Instant WhatsApp Chat
                      </div>
                      <a
                        href={BUSINESS_DATA.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-emerald-950 hover:underline"
                      >
                        {BUSINESS_DATA.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Send property photos, addresses, or viewing requests instantly via WhatsApp messenger.
                  </p>
                  <a
                    href={BUSINESS_DATA.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                {/* Address Summary */}
                <div className="p-6 rounded-lg bg-white border border-slate-200 shadow-xs text-xs text-slate-600 space-y-1">
                  <div className="font-semibold text-[#172A3A] mb-1">Manchester Office Address:</div>
                  <div>Westmere Asset Holdings Initial Business Centre</div>
                  <div>Unit 7, Wilson Business Park</div>
                  <div>Manchester, M40 8WN, United Kingdom</div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-lg bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-xl font-medium text-[#172A3A] font-serif mb-1">
                    Send a Property Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Fill in your details below and choose whether to submit directly or launch WhatsApp with your inquiry.
                  </p>

                  {formSubmitted ? (
                    <div className="p-6 rounded-md bg-emerald-50 border border-emerald-200 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <div className="text-base font-semibold text-emerald-950">Inquiry Received</div>
                      <p className="text-xs text-emerald-800 max-w-md mx-auto">
                        Thank you, {formState.name}. We have recorded your {inquiryType.toLowerCase()} inquiry. A team
                        member will contact you shortly at {formState.phone}.
                      </p>
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          onClick={() => {
                            setFormSubmitted(false);
                            setFormState({ name: '', phone: '', propertyDetails: '', message: '' });
                          }}
                          className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-50"
                        >
                          Submit Another Inquiry
                        </button>
                        <button
                          onClick={sendViaWhatsApp}
                          className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded flex items-center gap-1.5"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Forward to WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {/* Service selector */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          I am inquiring about:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['Sales & Valuation', 'Lettings', 'Commercial', 'General'].map((type) => (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setInquiryType(type)}
                              className={`px-3 py-2 text-xs font-medium rounded border transition-colors whitespace-nowrap text-center ${
                                inquiryType === type
                                  ? 'bg-[#172A3A] text-white border-[#172A3A]'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Your Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. David Harrison"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#172A3A] focus:border-[#172A3A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 07304 250183"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#172A3A] focus:border-[#172A3A]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Property Address or Postcode (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Manchester M40 or surrounding area"
                          value={formState.propertyDetails}
                          onChange={(e) => setFormState({ ...formState, propertyDetails: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#172A3A] focus:border-[#172A3A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          How can we help? (Brief details)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Please let us know your timeframe, preferred consultation time, or property questions..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#172A3A] focus:border-[#172A3A]"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <button
                          type="submit"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#172A3A] hover:bg-[#203a50] text-white text-xs sm:text-sm font-semibold rounded transition-colors shadow-xs"
                        >
                          <Send className="w-4 h-4 text-[#C6A15B]" />
                          <span>Submit Inquiry</span>
                        </button>

                        <button
                          type="button"
                          onClick={sendViaWhatsApp}
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded transition-colors whitespace-nowrap"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Send via WhatsApp</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. OPTIONAL FAQ */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#172A3A] font-serif mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {FAQS.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={faq.q} className="py-4">
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left gap-4 group"
                    >
                      <span className="text-sm sm:text-base font-medium text-[#172A3A] group-hover:text-[#C6A15B] transition-colors">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#C6A15B]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pt-2 pb-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* 9. FOOTER */}
      <footer className="bg-[#0e1b26] text-white pt-12 pb-24 sm:pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-3">
              <div className="text-xl font-medium font-serif tracking-tight text-white">
                Westmere Properties
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Independent real estate services based at Westmere Asset Holdings Initial Business Centre, Unit 7
                Wilson Business Park, Manchester, M40 8WN.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-2 text-xs">
              <div className="font-semibold text-white uppercase tracking-wider mb-2">Navigation</div>
              <div>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </a>
              </div>
              <div>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </a>
              </div>
              <div>
                <a href="#trust" className="text-slate-400 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </div>
              <div>
                <a href="#location" className="text-slate-400 hover:text-white transition-colors">
                  Office Location
                </a>
              </div>
              <div>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div className="md:col-span-4 space-y-2.5 text-xs text-slate-300">
              <div className="font-semibold text-white uppercase tracking-wider mb-2">Direct Contact</div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                <a href={BUSINESS_DATA.telLink} className="hover:text-[#C6A15B]">
                  {BUSINESS_DATA.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400"
                >
                  WhatsApp: {BUSINESS_DATA.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  Unit 7 Wilson Business Park, Manchester M40 8WN, UK
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2026 Westmere Properties. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Real Estate · Manchester</span>
              <a href={BUSINESS_DATA.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 10. MOBILE FLOATING CONVERSION BAR (<md screens) strictly complying with 15% sticky cap */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#172A3A]/95 backdrop-blur-md border-t border-slate-700/80 px-4 py-2.5 shadow-2xl">
        <div className="flex items-center gap-2.5">
          <a
            href={BUSINESS_DATA.telLink}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#C6A15B] text-[#172A3A] font-bold text-xs rounded transition-colors active:scale-98 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>
          <a
            href={BUSINESS_DATA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 text-white font-bold text-xs rounded transition-colors active:scale-98 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
