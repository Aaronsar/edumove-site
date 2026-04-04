import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebinarBanner from "@/components/shared/WebinarBanner";
import QuizBannerGlobal from "@/components/shared/QuizBannerGlobal";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <QuizBannerGlobal />
      <Footer />
      <WebinarBanner />
    </>
  );
}
