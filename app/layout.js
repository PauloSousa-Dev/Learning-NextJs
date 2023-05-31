import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "../components/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  viewport: { width: "device-width", initialScale: 1.0 },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
