
import { DM_Sans } from "next/font/google";
import "./globals.css";


const dms = DM_Sans({subsets:['latin']})

export const metadata = {
  title: "Phoenix UX | by Phoenix Interface",
  description: "An updated list of animated components",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${dms.className} text-base tracking-wide`}>{children}</body>
    </html>
  );
}
