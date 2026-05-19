import { motion } from "framer-motion";
import { ArrowRight, Scale, Shield, Briefcase, Landmark, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif font-semibold text-xl tracking-tight">
            BARRISTER ROBERT JOHNSON
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#approach" className="hover:text-accent transition-colors">Approach</a>
            <a href="#practice-areas" className="hover:text-accent transition-colors">Practice Areas</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            <Button asChild variant="default" className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-serif tracking-wide px-6">
              <a href="#contact">Consultation</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-office.png" 
            alt="Law office interior" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-background" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-primary-foreground">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeIn} className="text-accent font-serif italic text-xl mb-6">
              Uncompromising representation.
            </motion.p>
            <motion.h1 variants={fadeIn} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              When everything <br className="hidden md:block" />
              is on the line.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl max-w-2xl mx-auto font-light text-primary-foreground/80 mb-12">
              Barrister Robert Johnson is a trial lawyer dedicated to complex litigation. 
              Fewer cases. Deep preparation. Relentless execution.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-none bg-accent hover:bg-accent/90 text-white font-serif tracking-wide text-lg px-8 h-14 w-full sm:w-auto">
                <a href="#contact">Schedule a Consultation</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-serif tracking-wide text-lg px-8 h-14 w-full sm:w-auto">
                <a href="#practice-areas">Explore Practice Areas</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Approach */}
      <section id="approach" className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                A different kind of <br />law firm.
              </h2>
              <div className="w-16 h-1 bg-accent mb-8" />
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  Most law firms operate on volume. They take on as many cases as possible, delegating the actual work to junior associates while the named partners make appearances only when necessary.
                </p>
                <p>
                  <strong className="text-primary font-medium">I do not operate on volume.</strong>
                </p>
                <p>
                  I selectively choose the clients I represent. When I take your case, you get my complete attention, my decades of trial experience, and my uncompromising commitment to securing the best possible outcome.
                </p>
              </div>
              <div className="mt-10">
                <a href="#about" className="inline-flex items-center gap-2 text-accent font-serif italic text-lg hover:gap-3 transition-all">
                  Read more about my background <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative z-10">
                <img 
                  src="/images/scales.png" 
                  alt="Scales of Justice" 
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary z-0" />
              <div className="absolute -top-8 -right-8 w-64 h-64 border border-border z-0" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Areas of Practice</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-lg text-primary-foreground/70 font-light">
              Focused representation in complex, high-stakes litigation where experience and strategic foresight are paramount.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Briefcase className="w-8 h-8 mb-6 text-accent" />,
                title: "Commercial Litigation",
                description: "Resolving complex business disputes involving breach of contract, partnership conflicts, and fiduciary duty."
              },
              {
                icon: <Shield className="w-8 h-8 mb-6 text-accent" />,
                title: "White Collar Defense",
                description: "Fierce representation for individuals and corporations facing government investigations and regulatory action."
              },
              {
                icon: <Landmark className="w-8 h-8 mb-6 text-accent" />,
                title: "Appellate Practice",
                description: "Handling high-stakes appeals in state and federal courts with meticulous legal analysis and persuasive advocacy."
              },
              {
                icon: <Scale className="w-8 h-8 mb-6 text-accent" />,
                title: "Civil Rights",
                description: "Vindicating the rights of those who have suffered abuses of power and unconstitutional treatment."
              }
            ].map((area, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="bg-background/5 border border-primary-foreground/10 p-8 hover:bg-background/10 transition-colors group"
              >
                {area.icon}
                <h3 className="font-serif text-xl font-bold mb-4 group-hover:text-accent transition-colors">{area.title}</h3>
                <p className="text-primary-foreground/70 font-light leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4]">
                <img 
                  src="/images/portrait.png" 
                  alt="Barrister Robert Johnson" 
                  className="w-full h-full object-cover shadow-xl grayscale contrast-125"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 font-serif italic text-xl shadow-lg">
                "Preparation is the only advantage."
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="lg:col-span-7 lg:pl-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                Barrister Robert Johnson
              </h2>
              <p className="text-accent font-serif italic text-xl mb-8">Lead Counsel</p>
              
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed mb-10">
                <p>
                  For over twenty-five years, Barrister Robert Johnson has stood in state and federal courtrooms, fighting for clients whose reputations, businesses, and liberty were in jeopardy. 
                </p>
                <p>
                  A former federal prosecutor, Robert understands how the opposition builds their case. He dissects evidence with surgical precision, anticipating arguments before they are made. His reputation as a formidable trial lawyer means that many cases settle favorably before trial—but he prepares every case as if it will go to a jury.
                </p>
                <p>
                  He graduated with honors from Georgetown University Law Center and is admitted to practice before the United States Supreme Court.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 border-t border-border pt-8">
                <div>
                  <h4 className="font-serif font-bold text-primary mb-2">Education</h4>
                  <ul className="space-y-2 text-muted-foreground font-light">
                    <li>J.D., Georgetown University, <i className="font-serif">cum laude</i></li>
                    <li>B.A., University of Virginia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary mb-2">Admissions</h4>
                  <ul className="space-y-2 text-muted-foreground font-light">
                    <li>New York State Bar</li>
                    <li>U.S. Supreme Court</li>
                    <li>Second Circuit Court of Appeals</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Results / Testimonials */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">Representative Matters</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                result: "$12.4M",
                label: "Jury Verdict",
                description: "Secured for a minority shareholder in a complex breach of fiduciary duty and fraud trial."
              },
              {
                result: "Acquittal",
                label: "Federal Trial",
                description: "Full acquittal on all 14 counts of wire fraud and conspiracy for a healthcare executive."
              },
              {
                result: "Dismissed",
                label: "SEC Investigation",
                description: "Persuaded the SEC to close a multi-year investigation into a tech startup without filing charges."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="bg-card p-10 shadow-sm border border-border text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-4xl font-serif font-bold text-accent mb-2">{item.result}</div>
                <div className="text-sm uppercase tracking-widest font-semibold text-primary mb-6">{item.label}</div>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground italic">
              Prior results do not guarantee a similar outcome. Each case is unique.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground relative">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Confidential Consultation</h2>
              <div className="w-16 h-1 bg-accent mb-8" />
              <p className="text-lg text-primary-foreground/70 font-light mb-12 max-w-md leading-relaxed">
                Contact the firm to schedule a confidential discussion regarding your legal matter. 
                Please do not include sensitive information in this form.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-1">Office</h4>
                    <p className="text-primary-foreground/70 font-light">
                      209 W 4th St<br />
                      Vinton, IA 52349
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-1">Phone</h4>
                    <p className="text-primary-foreground/70 font-light">
                      (434) 207-8236
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-1">Email</h4>
                    <p className="text-primary-foreground/70 font-light">
                      Robertjohnson@usa.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-background p-8 md:p-10 shadow-2xl text-foreground"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">First Name</label>
                    <Input className="rounded-none border-border focus-visible:ring-accent bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Last Name</label>
                    <Input className="rounded-none border-border focus-visible:ring-accent bg-background" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Phone</label>
                    <Input type="tel" className="rounded-none border-border focus-visible:ring-accent bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Email</label>
                    <Input type="email" className="rounded-none border-border focus-visible:ring-accent bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Brief Description of Matter</label>
                  <Textarea className="rounded-none border-border focus-visible:ring-accent min-h-[120px] bg-background resize-y" />
                </div>

                <Button className="w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-serif tracking-wide text-lg h-14">
                  Request Consultation
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Submitting this form does not create an attorney-client relationship.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-primary-foreground/10 text-primary-foreground/60 py-12 text-sm font-light">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-serif font-bold text-lg text-primary-foreground mb-4">
              BARRISTER ROBERT JOHNSON
            </div>
            <p>
              Strategic, trial-ready representation for individuals and corporations in high-stakes matters.
            </p>
          </div>
          <div className="md:text-center">
            <p className="mb-2 hover:text-primary-foreground transition-colors cursor-pointer">Attorney Advertising</p>
            <p className="hover:text-primary-foreground transition-colors cursor-pointer">Privacy Policy</p>
          </div>
          <div className="md:text-right">
            <p>&copy; {new Date().getFullYear()} Barrister Robert Johnson</p>
            <p className="mt-2">All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;