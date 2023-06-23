import './index.scss'
import { useEffect } from 'react'
import TimezoneSelect from './components/TimezoneSelect'
import TimeZoneInfo from './components/TimezoneInfo'
import { useAppState } from 'store/store'
import { useTimezones } from 'hooks/useTimezones'
import { useTimezoneData } from 'hooks/useTimezoneData'
import TimezoneError from './components/TimezoneError'

const TIMEZONE_API = 'https://worldtimeapi.org/api/timezone'

const TimeZone = () => {
  const { timezoneState, setTimezoneState } = useAppState()
  const { timezonesList, timezonesError } = useTimezones(TIMEZONE_API)
  const { timezoneData, timezoneDataError } = useTimezoneData(
    TIMEZONE_API,
    timezoneState.selectedTimezone
  )

  useEffect(() => {
    if (timezonesList) {
      setTimezoneState({ timezonesList })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timezonesList])

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

  return (
    <div className='dateTime__container'>
      {timezonesError || timezoneDataError ? (
        <TimezoneError
          timezonesError={timezonesError as Error}
          timezoneDataError={timezoneDataError as Error}
        />
      ) : (
        <>
          <TimezoneSelect />
          <TimeZoneInfo />
        </>
      )}
    </div>
  )
}

export default TimeZone
