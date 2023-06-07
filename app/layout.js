import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "@/store/notification-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Events",
  description: "Find a lot of great events that allow you to evolve...",
  viewport: { width: "device-width", initialScale: 1.0 },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotificationContextProvider>
          <Layout>{children}</Layout>
        </NotificationContextProvider>
      </body>
    </html>
  );
}
