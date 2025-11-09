import { CheckCircle2, Circle } from "lucide-react";

const Roadmap = () => {
  const phases = [
    { 
      phase: "Phase 1", 
      title: "Foundation", 
      description: "Core wallet infrastructure and multi-chain support",
      status: "done" 
    },
    { 
      phase: "Phase 2", 
      title: "DEX Integration", 
      description: "Built-in token swaps and liquidity pools",
      status: "active" 
    },
    { 
      phase: "Phase 3", 
      title: "AI Features", 
      description: "Predictive insights and trading recommendations",
      status: "active" 
    },
    { 
      phase: "Phase 4", 
      title: "Staking & Rewards", 
      description: "Flexible staking mechanisms with competitive APYs",
      status: "upcoming" 
    },
    { 
      phase: "Phase 5", 
      title: "Presale Portal", 
      description: "Token launch platform for community projects",
      status: "upcoming" 
    },
    { 
      phase: "Phase 6", 
      title: "Mainnet Launch", 
      description: "Full production release on BlockDAG mainnet",
      status: "upcoming" 
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk']">
              Product roadmap
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our journey from foundation to full-featured multi-chain platform
            </p>
          </div>

          <div className="space-y-4">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl border transition-all ${
                  phase.status === 'done' 
                    ? 'bg-primary/10 border-primary/40' 
                    : phase.status === 'active'
                    ? 'bg-secondary/10 border-secondary/40 shadow-card'
                    : 'bg-card/50 border-border/40'
                } backdrop-blur-sm`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    phase.status === 'done'
                      ? 'bg-primary text-primary-foreground'
                      : phase.status === 'active'
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {phase.status === 'done' ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <Circle className="h-5 w-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-medium text-primary">
                          {phase.phase}
                        </span>
                        <span className="text-lg font-semibold font-['Space_Grotesk']">
                          {phase.title}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  {phase.status === 'active' && (
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
