"use client";
import "./styles/globals.css";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function RootLayout({ children }) {
   const [collapsed, setCollapsed] = useState(false);
  return (
    <html lang="en">
      <body>
       <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
             <div className="flex">
               <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
               <main className="flex-1 p-6">{children}</main>
             </div>
      </body>
    </html>
  );
}
