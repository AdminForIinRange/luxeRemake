import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      {/* <FAQ type="general" />
      <Footer /> */}
    </>
  );
};

export default Layout;
