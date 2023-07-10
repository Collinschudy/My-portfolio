import Footer from "@components/Footer";
import Header from "@components/Header";
import "@styles/globals.css";

export const metadata = {
  title: "Collinschudy",
  description: "Frontend Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-lexend">
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Header />
          {children}
          <Footer />
          </main>
      </body>
    </html>
  );
}
