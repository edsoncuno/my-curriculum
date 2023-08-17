import "./globals.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export const metadata = {
  title: "My Curriculum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
