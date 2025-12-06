import Header from "@/components/header";
import Footer from "@/components/footer";
import PrivacyPolicy from "@/components/privacy-policy";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white">
      <Header />
      <div className="pt-20">
        <PrivacyPolicy />
      </div>
      <Footer />
    </main>
  );
}
