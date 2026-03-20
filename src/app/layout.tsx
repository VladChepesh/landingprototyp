import React from 'react';
import './globals.css'; // <-- ИМЕННО ЭТА СТРОКА ВКЛЮЧАЕТ СТИЛИ
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
