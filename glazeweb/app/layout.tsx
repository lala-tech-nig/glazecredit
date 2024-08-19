import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import Crisp from './components/Crisp/Crisp';


export const metadata = {
  title: 'Glaze Credit',
  description: 'Glaze Credit, we provide personal, business, and salary loans, along with proof of funds services to boost your account. Our AI-powered platform ensures a seamless and transparent lending experience, helping you make informed financial decisions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/* <Crisp /> */}
        <Footer />
      </body>
    </html>
  )
}
