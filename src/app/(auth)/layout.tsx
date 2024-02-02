import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

export const metadata = {
  title: "Threads clone",
  description: "A Next JS 14 Threads clone",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <h1>Auth layout</h1>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
