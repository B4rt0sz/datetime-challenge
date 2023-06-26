import { TIMEZONE_API } from 'index'
import { useTimezones } from 'hooks/useTimezones'
import TimezoneLoader from './components/TimezoneLoader'
import TimezoneSelect from './components/TimezoneSelect'
import TimeZoneInfo from './components/TimezoneInfo'

const TimeZone = () => {
  const { timezonesLoading } = useTimezones(TIMEZONE_API)

  return (
    <div className='dateTime__container'>
      {timezonesLoading ? (
        <TimezoneLoader />
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
