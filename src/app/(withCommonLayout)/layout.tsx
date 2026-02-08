import Footer from "@/src/components/Footer/Footer";
import { Navbar } from "@/src/components/UI/navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default layout;
