import { Inter , Cormorant_Upright , Open_Sans } from "next/font/google";
import './index.css'

const cormorant = Cormorant_Upright({ subsets: ["latin"] , 
                                      weight : ['300' , '400' , '500' , '600' , '700'] , 
                                      variable: '--font-base' })
const openSans = Open_Sans({ subsets: ["latin"] , variable: '--font-alt' })
export const metadata = {
  title: "Gericht",
  description: "A restaurant website template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${openSans.variable}`}>{children}</body>
    </html>
  );
}
