import Client from "../components/client";
import { headers } from "next/headers";

export default function Page() {
  const host = headers().get("host");
  const hostname = host?.startsWith("www.") ? host.slice(4) : host;

  return <Client host={hostname} />;
}
