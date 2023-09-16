import type { Metadata } from 'next'
import Provider from './Provider'
import { Box, Flex } from '@chakra-ui/react'
import Sidebar from './_components/NavigationMenu'

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
        <Provider>
          <Flex>
            {' '}
            {/* Chakra UIのFlexコンポーネントを使用してレイアウトを作成 */}
            <Sidebar /> {/* サイドバーを追加 */}
            <Box flex="1">
              {' '}
              {/* メインコンテンツエリア */}
              {children}
            </Box>
          </Flex>
        </Provider>
      </body>
    </html>
  )
}
