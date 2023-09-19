import styles from "./styles.module.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/global.css"

export default function RootLayout({ children }) {
 return (
    <html>
      <body className={styles.container}>
      <Header/>
      <main>{children}</main>
      <Footer/>
      </body>
    </html>
  )
}
