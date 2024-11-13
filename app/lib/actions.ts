"use server";

import { Resend } from "resend";
import { OfferEmail } from "../../emails/offer";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

type State = { error: string } | { data: string };

export async function send(prevState: State, formData: FormData) {
  const host = headers().get("host");
  const hostname = host?.startsWith("www.") ? host.slice(4) : host;

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const offer = formData.get("offer") as string;

  const { data, error } = await resend.emails.send({
    from: `Resend <${process.env.RESEND_FROM_EMAIL}>`,
    to: [process.env.RESEND_TO_EMAIL],
    subject: "New Offer Received for Your Domain",
    react: OfferEmail({ domain: hostname, name, email, phone, offer }),
  });

  if (error) {
    return { error: error.message };
  }

  console.log(data);

  return { data: "Email sent!" };
}
