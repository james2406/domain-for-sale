import { headers } from "next/headers";

import "./ui/global.css";
import { Toaster } from "./ui/toaster";

const domainName = headers().get("host");

export const metadata = {
  title: domainName,
  description: `${domainName} is for sale`,
};

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
