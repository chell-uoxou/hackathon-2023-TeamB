'use client'

import ModeSelectionContainer from '@/app/_components/ModeSelectionContainer'
import PageHeader from '@/app/_components/PageHeader'

export default function Page() {
  return (
    <>
      <PageHeader title="新規作成" />
      <PageHeader description="支払いの項目に合わせて5つのモードから選択" />
      <ModeSelectionContainer />
    </>
  )
}
