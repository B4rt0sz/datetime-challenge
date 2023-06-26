import './index.scss'
import { useEffect } from 'react'
import { TIMEZONE_API } from 'index'
import { useAppState } from 'store/store'
import { useTimezoneData } from 'hooks/useTimezoneData'

const TimeZoneInfo = () => {
  const { timezoneState, setTimezoneState } = useAppState()
  const { timezoneData, timezoneDataLoading } = useTimezoneData(
    TIMEZONE_API,
    timezoneState.selectedTimezone
  )

  useEffect(() => {
    if (timezoneData) {
      const date = new Date(timezoneData.datetime)
      setTimezoneState({
        dateTime: date
          .toLocaleString('en-GB', {
            timeZone: timezoneState.selectedTimezone,
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
          })
          .replace('at', ''),
      })
    } else {
      setTimezoneState({ dateTime: '' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timezoneData])

  const infoToShow = timezoneState.selectedTimezone ? (
    <p className='dateTime__showDate-date'>
      The current time for selected timezone is:{' '}
      <span>{timezoneDataLoading ? 'Loading...' : timezoneState.dateTime}</span>
    </p>
  ) : (
    <p className='dateTime__showDate-info'>Select time zone to see its time</p>
  )

  return <div className='dateTime__showDate'>{infoToShow}</div>
}

export default TimeZoneInfo
