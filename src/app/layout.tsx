import React from 'react';

export const metadata = {
  title: 'Berlin Service | Дезинсекция',
  description: 'Профессиональная дезинсекция в Берлине',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
