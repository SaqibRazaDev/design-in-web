import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./(components)/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Design In Studio | All your designs tools in one place.",
  description: "Developed by: Saqib Raza; All Rights: Design In Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="xyz">
          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}
