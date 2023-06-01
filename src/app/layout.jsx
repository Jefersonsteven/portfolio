import "./globals.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Jefferson Steven",
  description: "This is the porfolio of Jeffer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} theme--dark`}>{children}</body>
    </html>
  );
}
