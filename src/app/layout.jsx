import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import UserProvider from "./user-provider";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Keep friend close in life",
};

export default function RootLayout({ children }) {
  const friendsPromise = fetch('https://b13-a07-gamma.vercel.app/friends.json', {cache: 'no-store'}).then(res => res.json());
  return (
    <html
      lang="en" data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased container mx-auto`}
    >
      <body className="min-h-full flex flex-col">
          <ToastContainer />

         
        <UserProvider friendsPromise={friendsPromise} >

        {children}
        </UserProvider>



      </body>




    </html>
  );
}
