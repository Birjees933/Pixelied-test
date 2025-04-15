import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HomeView from "@/views/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import toast, { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HomeView />
      <Toaster />
    </QueryClientProvider>
  );
}
