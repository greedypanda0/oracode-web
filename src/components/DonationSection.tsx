import { Heart } from "lucide-react";

export default function DonationSection() {
  return (
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
          <button className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
            <Heart className="h-6 w-6 mr-3" />
            Make a Donation
          </button>
        </div>

        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">₹5,00,000</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-1000 ease-out"
              style={{ width: "20%" }}
            ></div>
          </div>
          <p className="text-muted-foreground">
            <span className="font-semibold text-green-600">₹1,00,000</span>
            {" "}raised • <span className="font-semibold">₹4,00,000</span> remaining
          </p>
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
                  <strong>Long-term Growth:</strong> Funds go toward developing
                  new courses, improving our platform, and expanding our reach.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">3</span>
                </div>
                <p className="text-rose-50">
                  <strong>Future Innovation:</strong> Every Penny helps us build
                  the next generation of problem-solvers and creators.
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
  );
}
