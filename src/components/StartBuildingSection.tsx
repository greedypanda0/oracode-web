import { ArrowRight, BookOpen, Code2, Rocket } from 'lucide-react';

export default function StartBuildingSection() {
  const tutorials = [
    {
      title: 'Web Development',
      description: 'Learn HTML, CSS, and JavaScript through fun projects',
      icon: Code2,
      color: 'bg-blue-500'
    },
    {
      title: 'Game Development',
      description: 'Create your own games with visual programming',
      icon: Rocket,
      color: 'bg-green-500'
    },
    {
      title: 'Mobile Apps',
      description: 'Build mobile applications that solve real problems',
      icon: BookOpen,
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Start Building Your Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive tutorials designed specifically for young minds. 
            Each lesson builds upon the previous one, ensuring steady progress and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="group">
              <div className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 ${tutorial.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <tutorial.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {tutorial.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tutorial.description}
                </p>
                
                <button className="flex items-center text-primary hover:text-primary/80 font-semibold group">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
            Start Building
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}