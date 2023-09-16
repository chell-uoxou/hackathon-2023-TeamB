import type { Metadata } from 'next'
import Provider from './provider'

export const metadata: Metadata = {
  title: 'SHAREDRAGON',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
