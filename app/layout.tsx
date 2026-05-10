import './globals.css';

export const metadata = {
  title: 'Nhà Tiện Lợi',
  description: 'Nhà lắp ghép nghỉ dưỡng sinh thái',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}