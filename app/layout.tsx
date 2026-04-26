import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "LMT JOBS | Premium Job Portal & Preparation Platform",
  description: "LMT JOBS is the ultimate destination for job seekers. Find jobs, prepare for DSA, Aptitude, Technical and HR interviews.",
  keywords: "LMT JOBS, job portal, dsa preparation, aptitude practice, technical interview, company hiring process, career guidance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-inter antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10 bg-background transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,var(--color-primary-glow),transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_120%,var(--color-secondary-glow),transparent_50%)]" />
          </div>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <footer className="border-t border-border py-12 mt-20 glass">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-muted-foreground">© 2026 LMT JOBS. All rights reserved. Designed for Excellence.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
