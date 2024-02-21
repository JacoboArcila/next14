import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import "app/sass/globals.sass"
import { Roboto } from "next/font/google" //con este paquete podemos traer cualquier fuente que haya en google

const roboto = Roboto({
  weight: ["100", "300", "500", "700"], //asi podemos importar las distintas variaciones que hay en el weight de las fuentes
  subsets: ["latin"], //el tipo de caracteres que va traer la fuente (el idioma)
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
