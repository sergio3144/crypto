import { create } from "zustand"
import { devtools } from "zustand/middleware";
import { Cryptocurrency, CryptoPrice, Pair } from "./types";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[]
  result: CryptoPrice,
  fetchCryptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>,
  loading: boolean,
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],

  result: {
    IMAGEURL: '',
    PRICE: '',
    HIGHDAY: '',
    LOWDAY: '',
    CHANGEPCT24HOUR: '',
    LASTUPDATE:'',
  },

  loading: false,

  fetchCryptos: async () => {
    const cryptocurrencies = await getCryptos()
    set(() => ({
      cryptocurrencies
    }))
  },

  fetchData: async (pair) => {
    set(() => ({
      loading: true,
    }))
    const result = await fetchCurrentCryptoPrice(pair)
    set(() => ({
      result,
      loading: false
    }))
  }
})))
