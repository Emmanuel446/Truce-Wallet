import { Button } from "@/components/ui/button";
import { Github, ArrowRight, Wallet, Repeat, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/40 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now live on BlockDAG Testnet
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-['Space_Grotesk'] leading-tight">
            Truce Wallet — a smarter{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              multi-chain wallet
            </span>{" "}
            and DEX built on BlockDAG
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Store, swap, stake, and get AI-driven trading insights — all in one secure, 
            non-custodial app. Demo-ready for BlockDAG testnet.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 shadow-glow hover:shadow-glow/80 transition-all"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 border-border/40 hover:bg-accent/50"
              asChild
            >
              <a href="#features">
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="pt-12">
            <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-card bg-card/50 backdrop-blur-sm p-8">
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-muted/50 to-accent/10 rounded-lg flex flex-col items-center justify-center gap-6 p-8">
                <div className="flex items-center gap-4 w-full max-w-2xl">
                  <div className="flex-1 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/40 hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Wallet className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium">Connect</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Link your wallet securely</p>
                  </div>
                  
                  <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
                  
                  <div className="flex-1 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/40 hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Repeat className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium">Swap</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Trade tokens instantly</p>
                  </div>
                  
                  <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
                  
                  <div className="flex-1 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/40 hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium">Confirm</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Fast BlockDAG execution</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Simple three-step process for seamless trading
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
