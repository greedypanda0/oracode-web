import { ExternalLink, Star, User } from 'lucide-react';

export default function FeaturedProjects() {
  const projects = [
    {
      title: 'Weather App',
      author: 'aarav',
      country: 'US',
      description: 'Interactive weather dashboard with beautiful animations',
      image: 'https://img.freepik.com/premium-photo/flat-lay-composition-stylish-office-desk_77417-4713.jpg',
      rating: 4.9
    },
    {
      title: 'Math Game',
      author: 'shivansh',
      country: 'IN',
      description: 'Fun multiplication game with progressive difficulty',
      image: 'https://img.freepik.com/premium-photo/flat-lay-composition-stylish-office-desk_77417-4713.jpg',
      rating: 4.8
    },
    {
      title: 'Story Builder',
      author: 'shivansh',
      country: 'IN',
      description: 'Creative writing tool with character generator',
      image: 'https://img.freepik.com/premium-photo/flat-lay-composition-stylish-office-desk_77417-4713.jpg',
      rating: 4.9
    },
    {
      title: 'Green Garden',
      author: 'shivansh',
      country: 'US',
      description: 'Plant care tracker with growth simulation',
      image: 'https://img.freepik.com/premium-photo/flat-lay-composition-stylish-office-desk_77417-4713.jpg',
      rating: 4.7
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Amazing Projects by Our Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what incredible projects our young coders have built. Get inspired and 
            share your own creations with the community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{project.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{project.country}</span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{project.author}</p>
                      </div>
                    </div>
                    
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105 font-semibold text-lg">
            Submit Your Project
            <ExternalLink className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}