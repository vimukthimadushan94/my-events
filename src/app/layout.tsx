import SiteFooter from './_components/SiteFooter';
import SiteHeader from './_components/SiteHeader';
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Place metadata or external links here */}
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
