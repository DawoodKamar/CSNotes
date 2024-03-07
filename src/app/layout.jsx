import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

// Some meta data information for SEO optimization
export const metadata = {
  title: "CSNotes",
  description: "Created by Dawood Kamar",
};

// Main layout of the web application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the app with the auth provider to pass on the user state to all the components of the app */}
        <AuthProvider>
          {/* Pass on the users theme choices */}
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
        </AuthProvider>
      </body>
    </html>
  );
}
