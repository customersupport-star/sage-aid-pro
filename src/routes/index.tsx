import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight, BarChart3, BookOpenCheck, BriefcaseBusiness, CalendarDays,
  Check, ChevronDown, CircleDollarSign, FileCheck2, Landmark, Mail,
  MapPin, Menu, Phone, ShieldCheck, Sparkles, Target, X,
} from "lucide-react";
import logoAsset from "@/assets/kjg-header-logo.png.asset.json";
import heroVideo from "@/assets/hero-office.mp4.asset.json";
import consultationImage from "@/assets/cpa-consultation.jpg";
import taxImage from "@/assets/tax-planning-background.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KJ Gilbertson CPA, LLC | Tax & Accounting Services" },
      { name: "description", content: "KJ Gilbertson CPA, LLC provides professional tax preparation, tax planning, bookkeeping, and financial statement services for small business owners." },
      { property: "og:title", content: "KJ Gilbertson CPA, LLC | Tax & Accounting Services" },
      { property: "og:description", content: "Professional tax preparation, planning, bookkeeping, and financial statements for small business owners." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const nav = [["Home", "#home"], ["About", "#about"], ["Services", "#services"], ["Tax Planning", "#tax-planning"], ["Contact", "#contact"]];

function ButtonLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition duration-300 ${light ? "border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10" : "bg-accent text-accent-foreground shadow-sm hover:-translate-y-0.5 hover:shadow-lg"}`}>{children}</a>;
}

function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 32); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (event.currentTarget.reportValidity()) { setSent(true); event.currentTarget.reset(); } };

  return <main className="overflow-hidden bg-background text-foreground">
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border bg-background/95 py-2 shadow-sm backdrop-blur" : "border-primary-foreground/15 bg-primary/40 py-3 backdrop-blur-sm"}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <a href="#home" className="min-w-0" aria-label="KJ Gilbertson CPA home"><img src={logoAsset.url} alt="KJ Gilbertson CPA, LLC" className={`w-auto object-contain transition-all ${scrolled ? "h-12" : "h-14"}`} /></a>
        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Main navigation" className="flex items-center gap-7">{nav.map(([label, href]) => <a key={label} href={href} className={`text-sm font-medium transition ${scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"}`}>{label}</a>)}</nav>
          <ButtonLink href="#contact">Schedule a Consultation</ButtonLink>
        </div>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className={`grid size-11 shrink-0 place-items-center rounded-sm border lg:hidden ${scrolled ? "border-border bg-background" : "border-primary-foreground/40 text-primary-foreground"}`} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 font-medium">{label}</a>)}<div className="pt-5"><ButtonLink href="#contact">Schedule a Consultation</ButtonLink></div></nav>}
    </header>

    <section id="home" className="relative flex min-h-[92vh] items-center bg-primary pt-24 text-primary-foreground">
      <video className="absolute inset-0 size-full object-cover" autoPlay muted loop playsInline poster={consultationImage}><source src={heroVideo.url} type="video/mp4" /></video>
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <div className="quiet-rise max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-accent"><span className="h-px w-10 bg-accent" /> Accounting clarity for small business</p>
          <h1 className="font-serif text-5xl leading-[1.08] font-medium sm:text-6xl lg:text-7xl">Confident Financial Decisions. Stronger Businesses.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/80">Professional tax preparation, tax planning, bookkeeping, and financial statement services designed to help small business owners stay organized, informed, and financially prepared.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><ButtonLink href="#contact">Schedule a Consultation <ArrowRight size={17} /></ButtonLink><ButtonLink href="#services" light>Explore Our Services</ButtonLink></div>
          <p className="mt-8 flex items-center gap-2 text-sm text-primary-foreground/75"><ShieldCheck size={17} className="text-accent" /> Trusted Accounting & Tax Support for Small Business Owners</p>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to learn more" className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase text-primary-foreground/60"><span>Discover</span><span className="h-8 w-px bg-accent" /></a>
    </section>

    <section id="about" className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-24"><div><p className="text-xs font-semibold uppercase text-primary">Beyond compliance</p><h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-primary sm:text-5xl">Your Business Deserves More Than Just Tax Preparation.</h2></div><p className="self-end text-lg leading-8 text-muted-foreground">KJ Gilbertson CPA, LLC provides ongoing accounting and financial guidance shaped around the needs of small business owners—bringing order to the details and perspective to the decisions ahead.</p></div>
      <div className="mt-16 grid border-y border-border md:grid-cols-3">{[
        [Target, "Clarity", "Understand your financial position with organized, accurate financial information."],
        [ShieldCheck, "Confidence", "Make important business decisions with reliable financial guidance."],
        [CalendarDays, "Preparation", "Stay prepared for tax deadlines, financial obligations, and future business opportunities."],
      ].map(([Icon, title, text], i) => <article key={title as string} className={`group py-9 md:px-8 ${i > 0 ? "border-t border-border md:border-t-0 md:border-l" : ""}`}><Icon className="text-accent transition-transform group-hover:-translate-y-1" size={27} /><h3 className="mt-5 font-serif text-2xl text-primary">{title as string}</h3><p className="mt-3 leading-7 text-muted-foreground">{text as string}</p></article>)}</div>
    </div></section>

    <section id="services" className="bg-muted py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="max-w-2xl"><p className="text-xs font-semibold uppercase text-primary">How we help</p><h2 className="mt-4 font-serif text-4xl text-primary sm:text-5xl">Accounting Services Built Around Your Business</h2></div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[
        [FileCheck2, "Tax Return Preparation", "Professional preparation of individual and business tax returns with an emphasis on accuracy, organization, and compliance."],
        [Landmark, "Tax Planning", "Strategic tax planning designed to help business owners prepare ahead and make informed financial decisions."],
        [BookOpenCheck, "Bookkeeping", "Reliable bookkeeping services that help keep financial records organized, current, and easy to understand."],
        [BarChart3, "Financial Statements", "Clear and professional financial statements that provide valuable insight into the financial health of your business."],
      ].map(([Icon, title, text]) => <article key={title as string} className="group flex min-h-80 flex-col border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"><div className="grid size-11 place-items-center border border-accent/50 text-primary"><Icon size={22} /></div><h3 className="mt-7 font-serif text-2xl text-primary">{title as string}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text as string}</p><a href="#contact" className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-primary">Learn More <ArrowRight size={15} className="transition group-hover:translate-x-1" /></a></article>)}</div>
    </div></section>

    <section className="py-24 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-24 lg:px-8">
      <div className="relative"><img src={consultationImage} loading="lazy" width={1440} height={960} alt="CPA reviewing financial information with a small business owner" className="aspect-[4/3] w-full object-cover" /><div className="absolute -bottom-5 -right-5 hidden h-28 w-28 border-r border-b border-accent md:block" /></div>
      <div><p className="text-xs font-semibold uppercase text-primary">Why KJ Gilbertson CPA</p><h2 className="mt-4 font-serif text-4xl text-primary sm:text-5xl">A Financial Partner for Your Business</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Thoughtful accounting support begins with understanding your business. We focus on the details, provide reliable financial information, and help create the long-term organization small business owners need.</p><ul className="mt-8 grid gap-4 sm:grid-cols-2">{["Personalized service", "Professional expertise", "Attention to detail", "Reliable information", "Small-business focus", "Long-term organization"].map(item => <li key={item} className="flex items-center gap-3 text-sm font-medium"><span className="grid size-5 place-items-center bg-secondary text-primary"><Check size={13} /></span>{item}</li>)}</ul><div className="mt-9"><ButtonLink href="#contact">Let's Talk About Your Business <ArrowRight size={17} /></ButtonLink></div></div>
    </div></section>

    <section className="border-y border-border bg-background py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="text-xs font-semibold uppercase text-primary">Small business focus</p><h2 className="mt-4 font-serif text-4xl text-primary">Built With Small Business Owners in Mind</h2><p className="mt-6 leading-7 text-muted-foreground">Running a small business means making important financial decisions every day. KJ Gilbertson CPA, LLC helps you keep your financial information organized so you can spend more time focusing on your business.</p><div className="mt-8"><ButtonLink href="#contact">Get Started Today</ButtonLink></div></div><div className="grid gap-8 sm:grid-cols-3">{[[BriefcaseBusiness,"Stay Organized","Keep your books and financial records structured and up to date."],[CalendarDays,"Plan Ahead","Prepare for tax obligations and important financial decisions before deadlines arrive."],[CircleDollarSign,"Understand Your Numbers","Use meaningful financial information to better understand your business."]].map(([Icon,title,text]) => <article key={title as string} className="border-t-2 border-accent pt-6"><Icon size={25} className="text-primary"/><h3 className="mt-5 font-serif text-xl text-primary">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p></article>)}</div></div></div></section>

    <section id="tax-planning" className="relative bg-primary py-24 text-primary-foreground lg:py-32"><img src={taxImage} loading="lazy" width={1600} height={912} alt="Organized financial reports in a professional conference room" className="absolute inset-0 size-full object-cover opacity-25"/><div className="absolute inset-0 bg-primary/75"/><div className="relative mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-3xl"><Sparkles className="text-accent"/><h2 className="mt-6 font-serif text-4xl sm:text-5xl">Don't Wait Until Tax Season to Think About Taxes.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/75">Proactive tax planning can help small business owners better prepare for upcoming obligations and make more informed financial decisions throughout the year.</p><div className="mt-9"><ButtonLink href="#contact">Discuss Your Tax Planning Needs <ArrowRight size={17}/></ButtonLink></div></div></div></section>

    <section className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><p className="text-xs font-semibold uppercase text-primary">A thoughtful approach</p><h2 className="mt-4 font-serif text-4xl text-primary sm:text-5xl">A Clear Path Forward</h2></div><div className="relative mt-16 grid gap-0 md:grid-cols-4 md:before:absolute md:before:top-6 md:before:right-[12.5%] md:before:left-[12.5%] md:before:h-px md:before:bg-border">{[["01","Connect","Tell us about your business and accounting needs."],["02","Understand","Review your current financial and tax requirements."],["03","Plan","Identify the services and approach that fit your business."],["04","Move Forward","Get professional accounting support designed around your needs."]].map(([n,title,text], i) => <article key={n} className={`relative grid grid-cols-[auto_1fr] gap-5 py-5 md:block md:px-5 md:text-center ${i ? "border-t border-border md:border-0" : ""}`}><span className="relative z-10 grid size-12 place-items-center rounded-full border border-accent bg-background font-serif text-sm text-primary md:mx-auto">{n}</span><div><h3 className="mt-1 font-serif text-xl text-primary md:mt-5">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div></article>)}</div></div></section>

    <section className="bg-muted py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-xl"><p className="text-xs font-semibold uppercase text-primary">Client perspective</p><h2 className="mt-4 font-serif text-4xl text-primary">What Business Owners Value</h2><p className="mt-4 text-muted-foreground">Client testimonials will be added here after approval.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{["Testimonial placeholder", "Client story placeholder", "Business feedback placeholder"].map((title,i)=><article key={title} className="border border-border bg-card p-7"><p className="text-xs font-semibold uppercase text-accent">Placeholder {i+1}</p><h3 className="mt-6 font-serif text-2xl text-primary">{title}</h3><p className="mt-5 border-t border-border pt-5 text-sm text-muted-foreground">Client name · Business name</p></article>)}</div></div></section>

    <Faq />

    <section className="bg-primary py-20 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-end lg:px-8"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase text-accent">Start a conversation</p><h2 className="mt-4 font-serif text-4xl sm:text-5xl">Let's Bring Clarity to Your Business Finances.</h2><p className="mt-5 text-primary-foreground/70">Whether you need tax preparation, tax planning, bookkeeping, or financial statements, start the conversation with KJ Gilbertson CPA, LLC.</p></div><div className="flex shrink-0 flex-wrap gap-3"><ButtonLink href="#contact">Schedule a Consultation</ButtonLink><ButtonLink href="#contact" light>Contact Us</ButtonLink></div></div></section>

    <section id="contact" className="py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.75fr_1.25fr] lg:gap-24 lg:px-8"><div><p className="text-xs font-semibold uppercase text-primary">Contact</p><h2 className="mt-4 font-serif text-4xl text-primary">Start With a Conversation</h2><p className="mt-5 leading-7 text-muted-foreground">Tell us a little about your business and the support you are looking for.</p><div className="mt-9 space-y-5">{[[Phone,"Phone number available soon"],[Mail,"Email address available soon"],[MapPin,"Office address available soon"],[CalendarDays,"Business hours available soon"]].map(([Icon,text])=><div key={text as string} className="flex items-center gap-4 text-sm text-muted-foreground"><span className="grid size-10 place-items-center border border-border text-primary"><Icon size={18}/></span>{text as string}</div>)}</div></div>
      <form onSubmit={submit} className="border border-border bg-card p-6 shadow-sm sm:p-9" aria-label="Consultation request form"><div className="grid gap-5 sm:grid-cols-2"><Field label="Full Name" name="fullName" required/><Field label="Business Name" name="businessName"/><Field label="Email" name="email" type="email" required/><Field label="Phone" name="phone" type="tel"/><label className="sm:col-span-2"><span className="mb-2 block text-sm font-medium">Service Needed</span><select name="service" required defaultValue="" className="h-12 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/25"><option value="" disabled>Select a service</option>{["Tax Return Preparation","Tax Planning","Bookkeeping","Financial Statements","General Consultation"].map(x=><option key={x}>{x}</option>)}</select></label><label className="sm:col-span-2"><span className="mb-2 block text-sm font-medium">Message</span><textarea name="message" required maxLength={1200} rows={5} className="w-full rounded-sm border border-input bg-background p-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/25"/></label></div><button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">Request a Consultation <ArrowRight size={17}/></button>{sent && <p role="status" className="mt-5 flex items-center gap-2 border-l-2 border-accent bg-secondary p-4 text-sm text-primary"><Check size={18}/> Thank you. Your consultation request has been received.</p>}</form>
    </div></section>

    <footer className="border-t border-primary-foreground/10 bg-primary py-14 text-primary-foreground"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div><p className="font-serif text-2xl">KJ Gilbertson CPA, LLC</p><p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/60">Professional accounting and tax support for small business owners.</p></div><FooterList title="Navigate" items={nav}/><FooterList title="Services" items={[["Tax Preparation","#services"],["Tax Planning","#tax-planning"],["Bookkeeping","#services"],["Financial Statements","#services"]]}/><div><h3 className="text-sm font-semibold">Contact</h3><p className="mt-4 text-sm text-primary-foreground/60">Phone, email, address, and business hours coming soon.</p></div></div><div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-7 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} KJ Gilbertson CPA, LLC. All rights reserved.</p><div className="flex gap-5"><span>Privacy Policy</span><span>Terms of Use</span></div></div></div></footer>
  </main>;
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) { return <label><span className="mb-2 block text-sm font-medium">{label}</span><input name={name} type={type} required={required} maxLength={type === "email" ? 254 : 120} className="h-12 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/25" /></label>; }

function FooterList({ title, items }: { title: string; items: string[][] }) { return <div><h3 className="text-sm font-semibold">{title}</h3><ul className="mt-4 space-y-3">{items.map(([label,href])=><li key={label}><a href={href} className="text-sm text-primary-foreground/60 transition hover:text-primary-foreground">{label}</a></li>)}</ul></div>; }

function Faq() {
  const items = [
    ["What accounting services do you provide?", "We offer tax return preparation, proactive tax planning, bookkeeping, and professional financial statement services."],
    ["Do you work with small businesses?", "Yes. Our services are designed around the ongoing accounting and tax needs of small business owners."],
    ["What does tax planning involve?", "Tax planning looks ahead at your business activity and expected obligations so you can prepare before filing deadlines arrive."],
    ["Can you help with bookkeeping?", "Yes. We can help keep your financial records organized, current, and easier to understand."],
    ["What financial statements can you prepare?", "The appropriate statements depend on your business and reporting needs. We can discuss what information will be most useful during a consultation."],
    ["How do I schedule a consultation?", "Complete the consultation request form and share the service you are interested in. Contact details will be added once confirmed."],
  ];
  return <section className="py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.65fr_1.35fr] lg:gap-24 lg:px-8"><div><p className="text-xs font-semibold uppercase text-primary">Frequently asked questions</p><h2 className="mt-4 font-serif text-4xl text-primary">Helpful Answers, Before We Begin</h2></div><div className="divide-y divide-border border-y border-border">{items.map(([q,a])=><details key={q} className="group py-5"><summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 font-medium text-primary"><span>{q}</span><ChevronDown size={19} className="shrink-0 transition group-open:rotate-180"/></summary><p className="max-w-2xl pt-4 pr-10 text-sm leading-7 text-muted-foreground">{a}</p></details>)}</div></div></section>;
}