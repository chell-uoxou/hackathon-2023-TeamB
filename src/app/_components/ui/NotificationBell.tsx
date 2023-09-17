import Image from 'next/image'

type Props = {
  hasNew?: boolean
}

export default function NotificationBell(props: Props) {
  console.log(props.hasNew)
  // console.log(
  // '通知がありますか〜？',
  // props.hasNew ? 'ありま〜〜〜〜す' : '絶対にありません',
  // )
  return (
    <Image
      src={
        props.hasNew
          ? '/images/notification_bell_new.svg'
          : '/images/notification_bell_empty.svg'
      }
      width={32}
      height={32}
      alt="notification bell"
    ></Image>
  )
}
