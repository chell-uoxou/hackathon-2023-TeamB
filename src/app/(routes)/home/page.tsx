'use client'

import PageHeader from '@/app/_components/PageHeader'
import PageSubtitle from '@/app/_components/PageSubtitle'
import DailyExpenseTrackChart from '@/app/_components/charts/DailyExpenseTrackChart'
import TodaysEvents, {
  avatarData,
} from '@/app/_components/home_widgets/TodaysEvents'
import { Box, HStack, VStack } from '@chakra-ui/react'
import { Card, Title, LineChart } from '@tremor/react'

const chartdata = [
  {
    year: 1970,
    'Export Growth Rate': 2.04,
    'Import Growth Rate': 1.53,
  },
  {
    year: 1971,
    'Export Growth Rate': 1.96,
    'Import Growth Rate': 1.58,
  },
  {
    year: 1972,
    'Export Growth Rate': 1.96,
    'Import Growth Rate': 1.61,
  },
  {
    year: 1973,
    'Export Growth Rate': 1.93,
    'Import Growth Rate': 1.61,
  },
  {
    year: 1974,
    'Export Growth Rate': 1.88,
    'Import Growth Rate': 1.67,
  },
  //...
]

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}%`

export default function Page() {
  const dummyAvatars: avatarData[] = [
    {
      name: 'Segun Adebayo',
      avatarUrl: 'https://bit.ly/sage-adebayo',
    },
    {
      name: 'Segun Adebayo',
      avatarUrl: 'https://bit.ly/sage-adebayo',
    },
    {
      name: 'Segun Adebayo',
      avatarUrl: 'https://bit.ly/sage-adebayo',
    },
    {
      name: 'Segun Adebayo',
      avatarUrl: 'https://bit.ly/sage-adebayo',
    },
    {
      name: 'Segun Adebayo',
      avatarUrl: 'https://bit.ly/sage-adebayo',
    },
  ]

  return (
    <>
      <PageHeader title="おはようございます、瀬谷さん" description="ぎゃおー" />
      <PageSubtitle title="今月の出費ペース" />
      <Box width={'50%'} marginLeft={12}>
        <DailyExpenseTrackChart />
      </Box>
      <PageSubtitle title="今日の予定" />
      <VStack gap={4} marginLeft={12} marginRight={12}>
        <TodaysEvents avatars={dummyAvatars.slice(3)} eventTitle={'外泊'} />
        <TodaysEvents
          avatars={dummyAvatars.slice(2)}
          eventTitle={'バイト 夜ご飯不要'}
        />
        <TodaysEvents
          avatars={dummyAvatars.slice(4)}
          eventTitle={'みそきん買う'}
        />
      </VStack>
    </>
  )
}
