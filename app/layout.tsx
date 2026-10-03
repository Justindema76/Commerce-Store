import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commerce Store",
  description: "Independent commerce storefront and rental-ready selling platform."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}
