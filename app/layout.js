import Header from "@components/Header";
import "@styles/globals.css";
// import { Lexend } from "next/font/google";

// const lexend = Lexend({ subsets: ["vietnamese"] });

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
          </main>
      </body>
    </html>
  );
}
