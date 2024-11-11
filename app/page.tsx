import Client from "../components/client";
import { headers } from "next/headers";

export default function Page() {
  const host = headers().get("host");

  return <Client host={host} />;
}
