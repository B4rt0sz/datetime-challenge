import './index.scss'
import { useState, useEffect } from 'react'

const TIMEZONE_API = 'http://worldtimeapi.org/api/timezone'

const TimeZoneSelect = () => {
  const [timezonesList, setTimezonesList] = useState<string[]>([])
  const [selectedTimezone, setSelectedTimezone] = useState('')
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    fetch(TIMEZONE_API)
      .then((response) => response.json())
      .then((data) => setTimezonesList(data))
  }, [])

  useEffect(() => {
    if (selectedTimezone) {
      const updateTime = () => {
        fetch(`${TIMEZONE_API}/${selectedTimezone}`)
          .then((response) => response.json())
          .then((data) => {
            const date = new Date(data.datetime)
            setDateTime(
              date
                .toLocaleString('en-GB', {
                  timeZone: selectedTimezone,
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: 'numeric',
                  second: 'numeric',
                  hour12: true,
                })
                .replace('at', '')
            )
          })
      }
      updateTime()
      const interval = setInterval(updateTime, 5000)
      return () => clearInterval(interval)
    } else {
      setDateTime('')
    }
  }, [selectedTimezone])

  const timeZoneSelectOptions = timezonesList.map((timezone) => (
    <option key={timezone} value={timezone}>
      {timezone}
    </option>
  ))

  const infoToShow = dateTime ? (
    <p>
      The current time for selected timezone is: <span>{dateTime}</span>
    </p>
  ) : (
    <span>Select time zone to see its time</span>
  )

  return (
    <div className='dateTime__container'>
      <select
        className='dateTime__timeZone'
        value={selectedTimezone}
        onChange={(e) => setSelectedTimezone(e.target.value)}
      >
        <option value=''>Select time zone</option>
        {timeZoneSelectOptions}
      </select>
      <div className='dateTime__showDate'>{infoToShow}</div>
    </div>
  )
}

export default TimeZoneSelect
