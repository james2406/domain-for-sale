import { headers } from "next/headers";

import "./ui/global.css";
import { Toaster } from "./ui/toaster";

export async function generateMetadata() {
  const host = headers().get("host");

  return {
    title: host,
    description: `${host} is for sale`,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
