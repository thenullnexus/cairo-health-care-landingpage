import Header from "@/components/header";
import Footer from "@/components/footer";
import TermsAndConditions from "@/components/terms-and-conditions";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white">
      <Header />
      <div className="pt-20">
        <TermsAndConditions />
      </div>
      <Footer />
    </main>
  );
}
