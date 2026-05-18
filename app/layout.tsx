export const metadata = {
  title: 'BulkDirect Dashboards',
  description: 'Admin dashboards for BulkDirect agency',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
