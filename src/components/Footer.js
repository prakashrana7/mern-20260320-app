"use client";
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {
  const pathName = usePathname();
   if (pathName.startsWith("/admin")) return;
  return (
    <div>
      <footer className="bg-primary text-center text-white px-4 py-2">
    ©2026 StepStyle. All rights reserved.
  </footer>
    </div>
  )
}

export default Footer
