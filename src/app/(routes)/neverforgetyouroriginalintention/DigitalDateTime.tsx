import React, { useEffect, useState } from 'react'

const DigitalDateTime = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    setInterval(() => {
      let d = new Date()
      let year = d.getFullYear()
      let month = d.getMonth() + 1
      let day = d.getDate()
      setDate(year + '/' + month + '/' + day)

      let hour = d.getHours().toString().padStart(2, '0')
      let minute = d.getMinutes().toString().padStart(2, '0')
      let seconds = d.getSeconds().toString().padStart(2, '0')
      setTime(hour + ':' + minute + ':' + seconds)
    }, 1000)
  }, [])

  return (
    <div className="Digit">
      <p className="digit">{date + ' ' + time}</p>
    </div>
  )
}

export default DigitalDateTime
