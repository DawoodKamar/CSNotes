import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSNotes",
  description: "Created by Dawood Kamar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
        <div className="container">
          <Navbar />
          <main className="main">
            {children}
          </main>
          <Footer />
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
