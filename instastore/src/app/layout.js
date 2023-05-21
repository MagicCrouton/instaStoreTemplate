import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import { currencies, footerNavigation, navigation } from './tempdata/tempdata'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BoloLama',
  description: 'ethically sourced clothing from Peru',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header navigation = {navigation} currencies={currencies} />
        {children}
        <Footer footerNavigation={footerNavigation} />
      </body>
    </html>
  )
}
