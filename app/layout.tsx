import { headers } from "next/headers";

import "./ui/global.css";
import { Toaster } from "./ui/toaster";

export async function generateMetadata() {
  const host = headers().get("host");
  const hostname = host?.startsWith("www.") ? host.slice(4) : host;

  return {
    title: hostname,
    description: `${hostname} is for sale`,
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
