import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar />
      <div className="">{children}</div>
    </>
  );
};

export default Layout;
