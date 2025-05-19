import * as React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

interface InternshipsLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const InternshipsLayout: React.FC<InternshipsLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col min-h-screen", className)}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default InternshipsLayout;
