import type { Metadata } from "next";

// Prevent indexing of admin panel
export const metadata: Metadata = {
  title: "Admin - Chat Management | SAK Fasteners",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
