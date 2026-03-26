import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebinarBanner from "@/components/shared/WebinarBanner";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WebinarBanner />
    </>
  );
}
