
import React from "react";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";
const Layout = async ({ children }: { children: React.ReactNode }) => {


  return (
    <>
      <Navbar />
    {children}
      <Footer />
    </>
  );
};

export default Layout;
