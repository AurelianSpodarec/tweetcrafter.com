import Footer from "./_components/Footer"
import Header from "./_components/Header"

function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default WebLayout
