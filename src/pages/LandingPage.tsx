import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Brain,
  BarChart3,
  Tags,
  FileText,
  Search,
  Layers,
  ArrowRight,
  Upload,
  Cpu,
  Eye,
  Download,
  Check,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const features = [
  { icon: Brain, title: "Sentiment Analysis", desc: "Detect polarity, emotions, and sentence-level sentiment breakdowns in real-time." },
  { icon: Layers, title: "Topic Modeling", desc: "Extract themes using LDA with interactive topic distribution visualizations." },
  { icon: Tags, title: "Entity Recognition", desc: "Identify people, organizations, locations, and custom entities automatically." },
  { icon: FileText, title: "Text Classification", desc: "Classify documents with pre-trained or custom-trained models." },
  { icon: Search, title: "Keyword Extraction", desc: "Extract ranked keywords using RAKE and TF-IDF scoring algorithms." },
  { icon: BarChart3, title: "Summarization", desc: "Generate extractive and abstractive summaries with length control." },
];

const steps = [
  { icon: Upload, title: "Upload Text", desc: "Paste text, upload files, or scrape URLs" },
  { icon: Cpu, title: "Configure & Analyze", desc: "Choose NLP pipeline options and run" },
  { icon: Eye, title: "Visualize Results", desc: "Interactive charts, word clouds, graphs" },
  { icon: Download, title: "Export Reports", desc: "Download as PDF, CSV, Excel, or JSON" },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Perfect for exploring",
    features: ["5 analyses/day", "Basic sentiment analysis", "Word frequency charts", "Text export"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For researchers & teams",
    features: ["Unlimited analyses", "All NLP features", "Custom models", "API access", "Priority support", "Batch processing"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For organizations at scale",
    features: ["Everything in Pro", "Dedicated infrastructure", "Custom integrations", "SLA guarantee", "SSO & RBAC", "On-premise option"],
    cta: "Contact Sales",
    popular: false,
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 backdrop-blur-xl bg-hero/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            <span className="text-lg font-heading font-bold text-hero-foreground">TextMine</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" className="text-hero-muted hover:text-hero-foreground hover:bg-hero-foreground/10">
                Log In
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="hero" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 opacity-0 animate-fade-in">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Powered by Advanced NLP</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-hero-foreground leading-tight mb-6 opacity-0 animate-fade-in-delay-1">
              Transform Text Into
              <span className="block text-accent">Actionable Insights</span>
            </h1>
            <p className="text-lg text-hero-muted max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-delay-2">
              Upload, analyze, and visualize English text data with powerful NLP techniques.
              From sentiment analysis to topic modeling — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-3">
              <Link to="/dashboard">
                <Button variant="hero" size="xl">
                  Start Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/analysis">
                <Button variant="hero-outline" size="xl">
                  Try Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-delay-3">
            <div className="rounded-2xl overflow-hidden border border-border/10 shadow-2xl">
              <img src={heroDashboard} alt="TextMine Dashboard Preview" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Powerful NLP Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to extract meaningful insights from text data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 shadow-soft hover:shadow-glow-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-card-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">Four simple steps from raw text to insights.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px border-t-2 border-dashed border-primary/30" />
                )}
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 relative">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Simple Pricing
            </h2>
            <p className="text-muted-foreground">Start free, scale as you grow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? "border-primary bg-card shadow-glow-primary scale-105"
                    : "border-border bg-card shadow-soft hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-heading font-bold text-card-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-card-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-card-foreground">
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-hero py-12 px-4 border-t border-border/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="font-heading font-bold text-hero-foreground">TextMine</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Docs</a>
              <a href="#" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">API</a>
              <a href="#" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Contact</a>
            </div>
            <p className="text-xs text-hero-muted">© 2026 TextMine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
