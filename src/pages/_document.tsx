import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="dark">
      <Head />
      <body className="bg-gray-50 dark:bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
