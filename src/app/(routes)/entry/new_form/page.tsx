'use client'

import PageHeader from '@/app/_components/PageHeader'
import ChakraInputWithTitle from '@/app/_components/ui/ChakraInputWithTitle'
import PrimaryButton from '@/app/_components/ui/PrimaryButton'
import { Box, Center, Flex, HStack, VStack } from '@chakra-ui/react'
import { PlusCircle } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const formChangeHandler = (e: any) => {
    console.log(e)
  }
  const [isSubmitting, setSubmitting] = useState(false)
  const router = useRouter()
  return (
    <>
      <h1>new_form</h1>
      <PageHeader
        title="合計金額を支払う"
        description="スーパーなど、日常的な買い物に"
      />
      <VStack>
        <ChakraInputWithTitle
          title="物品の名前"
          modeId="0"
          placeholder="おにぎりせんべい"
          onChange={formChangeHandler}
        />
        <ChakraInputWithTitle
          title="カテゴリ"
          modeId="0"
          placeholder="食べ物、家具など"
          onChange={formChangeHandler}
        />
        <ChakraInputWithTitle
          title="金額"
          modeId="0"
          placeholder="¥ 100,000"
          onChange={formChangeHandler}
        />
        <ChakraInputWithTitle
          title="日付"
          modeId="0"
          placeholder="yyyy/mm/dd"
          onChange={formChangeHandler}
        />
        <ChakraInputWithTitle
          title="出資ソース"
          modeId="0"
          placeholder="出資者、口座など"
          onChange={formChangeHandler}
        />
        <ChakraInputWithTitle
          title="出資の割合"
          modeId="0"
          placeholder="誰がいくら払いますか？"
          onChange={formChangeHandler}
        />
      </VStack>
      <Flex margin={10} flexDirection={'column'} alignItems={'center'}>
        <PrimaryButton
          isLoading={isSubmitting}
          size={'lg'}
          label="登録する"
          icon={<PlusCircle size={'24px'} />}
          paddingLR={100}
          onClick={() => {
            setSubmitting(true)
            router.push('/entry')
          }}
        />
      </Flex>
    </>
  )
}
