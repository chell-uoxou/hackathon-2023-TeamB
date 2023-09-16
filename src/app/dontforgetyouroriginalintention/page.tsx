import Image from 'next/image'
import style from './page.module.css'

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
        <p>don't forget your original intention</p>
        <p>2023/09/17</p>
      </div>
    </main>
  )
}
