"use client";
import React, { useEffect } from "react";
import { Heart } from "lucide-react";
import { toast } from "react-hot-toast";
import Script from "next/script";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import PaymentSection from "@/components/paymentSection";

function DonateSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const success = searchParams.get("success");
    const canceled = searchParams.get("canceled");
    if (success) {
      toast("Thank you for your donation!");
      router.replace(pathname);
    }

    if (canceled) {
      toast.error("Donation was canceled. Please try again.");
      router.replace(pathname);
    }
  }, [searchParams]);

  const [isDonate, setIsDonate] = React.useState(false);

  const topDonators = [
    { name: "Full Name", amount: 0, rank: 1 },
    { name: "Full Name", amount: 0, rank: 2 },
    { name: "Full Name", amount: 0, rank: 3 },
    { name: "Full Name", amount: 0, rank: 4 },
    { name: "Full Name", amount: 0, rank: 5 },
  ];

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-950/20 dark:via-pink-950/20 dark:to-red-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full mb-4">
              <Heart className="h-8 w-8 text-rose-600 dark:text-rose-400" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Help Us Shape Tomorrow's
              <span className="text-rose-600 dark:text-rose-400">
                {" "}
                Innovators
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your donation directly impacts young minds around the world. Every
              contribution helps us provide free, quality coding education to
              children who might not otherwise have access.
            </p>
          </div>

          <div className="text-center mb-16">
            <button
              className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
              onClick={() => setIsDonate(!isDonate)}
            >
              <Heart className="h-6 w-6 mr-3" />
              Make a Donation
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              isDonate
                ? "max-h-screen opacity-100 transform translate-y-0"
                : "max-h-0 opacity-0 transform -translate-y-4"
            }`}
          >
            <PaymentSection />
          </div>

          <div className="max-w-2xl mx-auto my-12 text-center">
            <div className="mb-4">
              <span className="text-lg text-muted-foreground font-medium">
                Goal
              </span>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              ₹5,00,000
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: "0%" }}
              ></div>
            </div>
            <p className="text-muted-foreground">
              <span className="font-semibold text-green-600">₹0</span> raised •{" "}
              <span className="font-semibold">₹5,00,000</span> remaining
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
                Top Donators
              </h3>
              <div className="space-y-4">
                {topDonators.map((donator) => (
                  <div
                    key={donator.rank}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">
                        #{donator.rank}
                      </span>
                      <span className="font-medium text-foreground">
                        {donator.name}
                      </span>
                    </div>
                    <span className="font-bold text-rose-600 dark:text-rose-400">
                      ₹{donator.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Your Impact in Action
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-rose-50">
                    <strong>Immediate Access:</strong> Your donation instantly
                    unlocks premium features for children in underserved
                    communities.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-rose-50">
                    <strong>Long-term Growth:</strong> Funds go toward
                    developing new courses, improving our platform, and
                    expanding our reach.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-rose-50">
                    <strong>Future Innovation:</strong> Every Penny helps us
                    build the next generation of problem-solvers and creators.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Can't donate right now? You can still help by sharing our mission
              with others.
            </p>
            <button className="px-6 py-3 border border-muted text-muted-foreground rounded-xl hover:bg-muted hover:text-foreground transition-colors">
              Share Oracode
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DonateSection;
