import * as React from "react";

type ContactNotificationEmailProps = {
  name?: string;
  email: string;
  subject?: string;
  message: string;
};

export default function ContactNotificationEmail(
  props: ContactNotificationEmailProps
) {
  const { name, email, subject, message } = props;
  const messageLines = String(message).split("\n");

  return (
    <div
      style={{
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        color: "#111827",
      }}
    >
      <h2 style={{ margin: "0 0 8px", color: "#111827" }}>
        New contact message
      </h2>
      <p style={{ margin: 0 }}>
        You received a new message via the website contact form.
      </p>
      <div style={{ margin: "12px 0" }}>
        <p style={{ margin: 0 }}>
          <strong>Name:</strong> {name || "N/A"}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Email:</strong> {email}
        </p>
        {subject ? (
          <p style={{ margin: 0 }}>
            <strong>Subject:</strong> {subject}
          </p>
        ) : null}
      </div>
      <p style={{ margin: "8px 0 8px" }}>
        <strong>Message:</strong>
      </p>
      <blockquote
        style={{
          margin: 0,
          padding: "8px 12px",
          background: "#f9fafb",
          borderLeft: "4px solid #111827",
        }}
      >
        {messageLines.map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </blockquote>
    </div>
  );
}

