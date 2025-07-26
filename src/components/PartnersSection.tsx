export default function PartnersSection() {
  const partners = [
    {
      name: 'Young Minds',
      logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Oracode',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Oraload',
      logo: 'https://images.pexels.com/photos/3584996/pexels-photo-3584996.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Oracodeee',
      logo: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Oracoode',
      logo: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Meta',
      logo: 'https://images.pexels.com/photos/3584997/pexels-photo-3584997.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Trusted by Educational Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with leading educational organizations to bring quality coding 
            education to children worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-card border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
              </div>
              <p className="mt-3 text-center text-sm text-muted-foreground font-medium">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}