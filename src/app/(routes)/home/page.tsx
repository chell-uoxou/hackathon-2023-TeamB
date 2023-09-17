'use client'

import DailyExpenseTrackChart from '@/app/_components/charts/DailyExpenseTrackChart'
import { Box } from '@chakra-ui/react'
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
  return (
    <>
      <h1>home</h1>
      <Box width={'50%'}>
        <DailyExpenseTrackChart />
      </Box>
    </>
  )
}
