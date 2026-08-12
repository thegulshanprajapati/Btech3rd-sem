import type { Metadata } from "next";
import { ThemeProvider } from "../components/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "NotesPortal — Dynamic Academic Portal",
  description: "Explore structured subject notes, revision guides, and practice interactive mock sets dynamically.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Load FontAwesome Icons from CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
