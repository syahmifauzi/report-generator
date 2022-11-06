import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import AppProvider from '@/contexts/AppContext'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: { minWidth: '50%', fontSize: '14px' }
        }}
      />
    </AppProvider>
  )
}
