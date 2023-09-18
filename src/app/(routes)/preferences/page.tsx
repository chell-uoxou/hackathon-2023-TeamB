import PageHeader from '@/app/_components/PageHeader'
import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

export default function Page() {
  return (
    <>
      <PageHeader title="設定" />
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          ドラゴンモード
        </FormLabel>
        <Switch id="email-alerts" />
      </FormControl>
    </>
  )
}
