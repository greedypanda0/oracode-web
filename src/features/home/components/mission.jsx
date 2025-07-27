import { Code } from "lucide-react";

export function Mission() {
  return (
    <section
      id="mission"
      className="w-full flex flex-col md:flex-row px-4 gap-6 h-[50vh] justify-center items-center"
    >
      {/* Left section  */}
      <div className="w-1/2 flex flex-col gap-2">
        <h1 className="text-xl md:text-3xl font-bold">
          Empowering the Next Generation of Coders
        </h1>
        <p className="text-sm md:text-xl font-semibold text-primary leading-relaxed">
          At Oracode, we believe that coding is more than just writing
          instructions for computers. It's about developing logical thinking,
          creativity, and problem-solving skills that shape young minds for the
          future.
        </p>
      </div>

      {/* Right section  */}
      <div className="w-1/2 flex justify-center items-center flex-col gap-2">
        <div className="bg-primary p-6 rounded-full">
          <Code size={50} />
        </div>
        <h1 className="text-xl md:text-3xl font-extrabold">
          Learn. Code. Build.
        </h1>
        <p className="text-sm md:text-xl leading-relaxed text-center">
          Join thousands of young coders on their journey to digital literacy
        </p>
      </div>
    </section>
  );
}
