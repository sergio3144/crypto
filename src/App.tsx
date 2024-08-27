import { useEffect } from "react"
import { CriptoSearchForm } from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"
import { CryptoPriceDisplay } from "./components/CryptoPriceDisplay"


function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)
  useEffect(() => {
    fetchCryptos()
  }, [])
  return (
    <>
      <main className="container">
        <h1 className="app-title">Cotizador de <span>criptomonedas</span></h1>
        <div className="content">
          <CriptoSearchForm/>
          <CryptoPriceDisplay/>
        </div>
      </main>
    </>
  )
}

export default App
