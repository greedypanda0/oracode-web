import { Users, MessageCircle, Trophy, Heart } from 'lucide-react';

export default function CommunitySection() {
  const stats = [
    {
      icon: Users,
      value: '50K+',
      label: 'Young Coders',
      color: 'text-blue-500'
    },
    {
      icon: MessageCircle,
      value: '25K+',
      label: 'Forum Posts',
      color: 'text-green-500'
    },
    {
      icon: Trophy,
      value: '15K+',
      label: 'Projects Built',
      color: 'text-purple-500'
    },
    {
      icon: Heart,
      value: '100K+',
      label: 'Lines of Code',
      color: 'text-red-500'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Join Our Global Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with young coders from around the world. Share projects, get help, 
            and celebrate achievements together in our supportive community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-current/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 text-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Ready to Start Your Coding Journey?
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who are already learning, creating, and 
              sharing their coding adventures with Oracode.
            </p>
            
            <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
              Join the Movement
              <Users className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}