
import type { Metadata } from "next";

import "./globals.css";
import { UserProvider } from '../lib/UserContext';



export const metadata: Metadata = {
  title: "Voz Segura",
  description: "Plataforma de Apoyo, Conciencia y Acción para Mujeres",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://voz-segura.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body
        className="font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]"
      >
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}