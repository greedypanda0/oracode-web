import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Oracode made programming so much fun! I built my first game in just two weeks. Now I want to become a software engineer when I grow up.",
      author: "shivansh",
      age: "14 years old",
      country: "India",
      avatar: "https://static.vecteezy.com/system/resources/previews/005/346/410/non_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
    },
    {
      quote: "The tutorials are easy to follow and the community is so helpful. I love sharing my projects and seeing what others have created.",
      author: "shivansh",
      age: "19 years old",
      country: "Uganda",
      avatar: "https://static.vecteezy.com/system/resources/previews/005/346/410/non_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
    },
    {
      quote: "I never thought I could code, but Oracode showed me that anyone can learn. The step-by-step approach really works!",
      author: "shivansh",
      age: "17 years old",
      country: "India",
      avatar: "https://static.vecteezy.com/system/resources/previews/005/346/410/non_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from young coders who are already building amazing things with Oracode
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative">
                <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
                
                <div className="space-y-6">
                  <p className="text-foreground leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}