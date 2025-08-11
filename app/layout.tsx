import "./globals.css";

export const metadata = {
  title: "Ariel Zhou — Portfolio",
  description: "Fashion Marketing Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


