import "./globals.css";

export const metadata = {
  title: "Next-Gen Process Mapping & Fit-Gap in Minutes",
  description: "AI-powered Fit-Gap and process mapping accelerator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
