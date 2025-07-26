import { Target, Users, Code, Zap } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Empowering the Next Generation of Coders
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Oracode, we believe that coding is more than just writing instructions for computers. 
                It's about developing logical thinking, creativity, and problem-solving skills that shape 
                young minds for the future.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Goal-Oriented</h3>
                  <p className="text-sm text-muted-foreground">Structured learning paths</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Community</h3>
                  <p className="text-sm text-muted-foreground">Learn together, grow together</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Hands-On</h3>
                  <p className="text-sm text-muted-foreground">Build real projects</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Interactive</h3>
                  <p className="text-sm text-muted-foreground">Engaging learning experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Code className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Learn. Code. Build.</h3>
                <p className="text-muted-foreground max-w-xs">
                  Join thousands of young coders on their journey to digital literacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}