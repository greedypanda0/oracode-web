"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    quote:
      "Oracode made programming so much fun! I built my first game in just two weeks. Now I want to become a software engineer when I grow up.",
    author: "Shivansh",
    age: "14 years old",
    country: "India",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/005/346/410/non_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
  },
  {
    quote:
      "The tutorials are easy to follow and the community is so helpful. I love sharing my projects and seeing what others have created.",
    author: "Shivansh",
    age: "19 years old",
    country: "Uganda",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/005/346/410/non_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
  },
  {
    quote:
      "I never thought I could code, but Oracode showed me that anyone can learn. The step-by-step approach really works!",
    author: "Shivansh",
    age: "17 years old",
    country: "India",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/005/346/410/non_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
  },
];

export function Testimonials() {
  const t = useTranslations("testimonial");

  return (
    <section
      id="reviews"
      className="w-full py-16 flex flex-col items-center justify-center"
    >
      <div className="text-center space-y-4 mb-16 px-4">
        <h2 className="text-4xl font-bold text-foreground">{t("title")}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t("description")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 px-4">
        {testimonials.map(({ quote, author, age, country, avatar }, index) => (
          <div key={index} className="group h-full">
            <div className="bg-card border rounded-2xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative h-full flex flex-col">
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />

              <div className="space-y-6 overflow-auto max-h-[300px] mt-6">
                <p className="text-foreground leading-relaxed text-lg">
                  {quote}
                </p>

                <div className="flex items-center space-x-4">
                  <Image
                    src={avatar}
                    alt={`Photo of ${author}`}
                    width={52}
                    height={52}
                    className="rounded-full object-cover w-13 h-13"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{author}</p>
                    <p className="text-sm text-muted-foreground">{age}</p>
                    <p className="text-sm text-muted-foreground">{country}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
