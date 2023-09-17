import { HStack, VStack } from '@chakra-ui/react'
import {
  ArrowClockwise,
  Cardholder,
  ChartLine,
  Couch,
  DotsThreeOutline,
  ShoppingCart,
} from '@phosphor-icons/react'
import ModeSelectionItem from './ui/ModeSelectionItem'

export default function ModeSelectionContainer() {
  return (
    <VStack gap={30} marginLeft={12} marginRight={12}>
      <HStack gap={30} width={'100%'} height={'90%'}>
        <ModeSelectionItem
          icon={<ShoppingCart size={100} />}
          modeId="0"
          title="合計金額を支払う"
          description="スーパーなど、日常的な買い物に"
        />
        <ModeSelectionItem
          icon={<Couch size={100} />}
          modeId="0"
          title="ひとつのものを買う"
          description="大型家具など、大きな買い物に"
        />
      </HStack>
      <HStack gap={30} width={'100%'} height={'90%'}>
        <ModeSelectionItem
          icon={<ArrowClockwise size={100} />}
          modeId="0"
          title="定額定期支払い"
          description="家賃やサブスクなどに"
        />
        <ModeSelectionItem
          icon={<ChartLine size={100} />}
          modeId="0"
          title="変動定期支払い"
          description="光熱費などの支払いに"
        />
        <ModeSelectionItem
          icon={<DotsThreeOutline size={100} />}
          modeId="0"
          title="その他"
          description="その他の支払いに"
        />
      </HStack>
    </VStack>
  )
}
