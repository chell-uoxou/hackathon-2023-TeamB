'use client'

import Image from 'next/image'
import style from './page.module.css'
import DigitalDateTime from './DigitalDateTime'
import NotificationBell from '@/app/_components/ui/NotificationBell'

export default function Home() {
  return (
    <main>
      <div className={style.centerText}>
        <Image
          src="/images/next.svg"
          width={150}
          height={150}
          alt="next logo"
        ></Image>
        <p>never forget your original intention</p>
        <DigitalDateTime />
        <NotificationBell hasNew={false} />
        {/* あとでいじります */}
      </div>
    </main>
  )
}
