import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Img,
  Button,
} from "@react-email/components";

type CareersAcknowledgementEmailProps = {
  name?: string;
  logoUrl?: string;
  siteUrl?: string;
};

export default function CareersAcknowledgementEmail(
  props: CareersAcknowledgementEmailProps
) {
  const { name, logoUrl, siteUrl } = props;

  const darkGreen = "#091E19";
  const buttonGold = "#e8c468";
  const resolvedLogo =
    logoUrl ||
    (process.env.NEXT_PUBLIC_BASE_URL
      ? `${process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "")}/Icon.png`
      : "");
  const resolvedSite =
    siteUrl || process.env.NEXT_PUBLIC_BASE_URL || "https://";

  return (
    <Html>
      <Head />
      <Preview>
        Thank you for your application — we've received it and will be in touch.
      </Preview>
      <Body style={{ backgroundColor: "#f6f8f7", margin: 0 }}>
        <Container style={{ padding: "24px 16px" }}>
          <Section
            style={{
              backgroundColor: "#ffffff",
              border: `2px solid ${darkGreen}`,
              overflow: "hidden",
              maxWidth: 560,
              margin: "0 auto",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Section
              style={{
                backgroundColor: darkGreen,
                padding: 32,
                textAlign: "center",
              }}
            >
              <Img
                src={resolvedLogo}
                alt="Bunbury Wellness Remedial Massage Logo"
                width={100}
                height={100}
                style={{
                  display: "block",
                  borderRadius: 8,
                  margin: "0 auto",
                }}
              />
              <Heading
                as="h1"
                style={{
                  color: "#ffffff",
                  margin: "16px 0 0",
                  fontWeight: 600,
                  fontSize: "24px",
                }}
              >
                Bunbury Wellness
              </Heading>
              <Text
                style={{
                  color: "#ffffff",
                  margin: "4px 0 0",
                  fontWeight: 400,
                  fontSize: "16px",
                  opacity: 0.9,
                }}
              >
                Remedial Massage
              </Text>
            </Section>

            <Section style={{ padding: 32 }}>
              <Heading
                as="h2"
                style={{
                  color: darkGreen,
                  margin: "0 0 16px",
                  fontWeight: 600,
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                {`Thank you${name ? ", " + name : ""} for your application!`}
              </Heading>

              <Text
                style={{
                  color: "#374151",
                  margin: "0 0 24px",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  textAlign: "center",
                }}
              >
                We've received your job application and our team will review it
                shortly. We'll get back to you as soon as possible.
              </Text>

              <Section style={{ textAlign: "center", marginTop: 24 }}>
                <Button
                  href={resolvedSite}
                  style={{
                    backgroundColor: buttonGold,
                    color: "#ffffff",
                    padding: "14px 24px",
                    borderRadius: 0,
                    textDecoration: "none",
                    display: "inline-block",
                    fontWeight: 700,
                    fontSize: "16px",
                    border: `2px solid ${buttonGold}`,
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Visit Our Website
                </Button>

                <Text
                  style={{
                    marginTop: 24,
                    color: darkGreen,
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  Warm regards,
                </Text>
                <Text
                  style={{
                    color: darkGreen,
                    margin: "0 0 4px",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  Bunbury Wellness Remedial Massage
                </Text>
                <Text style={{ color: "#6b7280", margin: 0, fontSize: "14px" }}>
                  Fuko & Tan
                </Text>
              </Section>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
