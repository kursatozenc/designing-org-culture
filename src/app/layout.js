import "./globals.css";

export const metadata = {
  title: "Designing Org Culture",
  description:
    "A Stanford d.school course on human-centered organizational culture design — current cohort, past years, and partner organizations, all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
