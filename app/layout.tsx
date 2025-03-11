import React from "react";
import "./globals.css";
import { Metadata } from "next"; 


export const metadata: Metadata = {
  title: "Nexus App", 
  description:
    "Nexus is an app dedicated to technology advancement and tutoring individuals towards the acknowledgment and mastery of cutting-edge tech.", // Description of the app
  keywords: [
    "technology",
    "tech advancement",
    "tutoring",
    "education",
    "innovation",
    "tech skills",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Nexus app</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
