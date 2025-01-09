import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
