import Image from "next/image";

const revs = [
  {
    name: "rajnish",
    age: "14 years old",
    text: "Oracode made programming so much fun! I built my first game in just two weeks. Now I want to become a software engineer when I grow up.",
    pfp: "https://i.pinimg.com/736x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg",
  },
  {
    name: "rajnish",
    age: "14 years old",
    text: "Oracode made programming so much fun! I built my first game in just two weeks. Now I want to become a software engineer when I grow up.",
    pfp: "https://i.pinimg.com/736x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg",
  },
  {
    name: "rajnish",
    age: "14 years old",
    text: "Oracode made programming so much fun! I built my first game in just two weeks. Now I want to become a software engineer when I grow up.",
    pfp: "https://i.pinimg.com/736x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg",
  },
  {
    name: "rajnish",
    age: "14 years old",
    text: "Oracode made programming so much fun! I built my first game in just two weeks. Now I want to become a software engineer when I grow up.",
    pfp: "https://i.pinimg.com/736x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg",
  },
  {
    name: "rajnish",
    age: "14 years old",
    text: "Oracode made programming so much fun! I built my first game in just two weeks. Now I want to become a software engineer when I grow up.",
    pfp: "https://i.pinimg.com/736x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg",
  },
  {
    name: "rajnish",
    age: "14 years old",
    text: "Oracode made programming so much fun! I built my first game in just two weeks. Now I want to become a software engineer when I grow up.",
    pfp: "https://i.pinimg.com/736x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="w-full md:h-screen md:py-16 flex flex-col items-center justify-center"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          What Our Students Say
        </h1>
        <p className="text-sm md:text-base text-muted-foreground text-balance">
          Hear from young coders who are already building amazing things with
          Oracode
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6 mt-12 px-2 md:px-4">
        {revs.map((item, index) => (
          <div
            key={index}
            className="border border-primary/70 text-card-foreground rounded-xl shadow-md w-90 p-4 flex flex-col justify-between hover:-translate-y-2 transition-all duration-200"
          >
            <p className="text-sm font-semibold mb-4 line-clamp-4 leading-relaxed">
              {item.text}
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={item.pfp}
                width={40}
                height={40}
                alt={`${item.name} profile`}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm  font-bold">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
