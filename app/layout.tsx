// ─── ROOT LAYOUT ──────────────────────────────────────────────────────────────
// This file wraps every page in the app.
// It sets the <html> and <body> tags + shared metadata (tab title, description).
// ──────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import "./globals.css";

// ─── CHANGE THE PAGE METADATA HERE ───────────────────────────────────────────
// These values appear in the browser tab, search results, and link previews.
export const metadata: Metadata = {
  title: "Brown Analytics Group",                           // ← Tab title
  description:
    "Democratizing data at Brown University through education, consulting, and research.", // ← Description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The body tag inherits global styles from globals.css */}
      <body>{children}</body>
    </html>
  );
}
