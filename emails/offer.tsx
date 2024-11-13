import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type OfferEmailProps = {
  domain: string;
  name: string;
  email: string;
  phone: string;
  offer: string;
};

export const OfferEmail: React.FC<OfferEmailProps> = ({
  domain,
  name,
  email,
  phone,
  offer,
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Offer Received for Your Domain</Preview>
      <Body>
        <Container>
          <Heading>You've Received a New Offer!</Heading>
          <Section>
            <Text>
              <strong>Domain:</strong> {domain}
            </Text>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text>
              <strong>Offer:</strong> ${offer}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default OfferEmail;
