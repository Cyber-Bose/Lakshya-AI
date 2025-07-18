import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "Lakshya-AI – AI-Career Roadmap Generator",
  description: "Lakshya-AI helps you create AI-powered career roadmaps with resume, cover letter, and interview preparation tools.",
};

export default function RootLayout({ children }) {
  return (<ClerkProvider appearance={{baseTheme:dark}}>
    <html lang="en" suppressHydrationWarning  >
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
           
            <Header />

            <main className="flex-1">{children}</main>
            <Toaster richColors/>

            {/* Footer stays at bottom */}
            <footer className="bg-muted/50 py-8">
              <div className="max-w-4xl mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>
                  Made by <span className="font-semibold">Sarthak Bose</span>
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
