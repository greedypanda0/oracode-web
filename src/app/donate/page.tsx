import DonationSection from "@/src/components/DonationSection";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function DonatePage() {
  return (
    <main className="min-h-screen theme-transition">
      <Header />
      <DonationSection />
      <Footer />
    </main>
  );
}
