export const metadata = {
  title: "Daniel Leonardo Cruz Castro",
  description: "Chief Data Officer · Data Governance & Analytics Leader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
