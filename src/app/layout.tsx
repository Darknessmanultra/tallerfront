import "@/app/globals.css";
import MainNav from "@/components/Mycomponents/MainNav";
import Footer from "@/components/Mycomponents/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainNav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
