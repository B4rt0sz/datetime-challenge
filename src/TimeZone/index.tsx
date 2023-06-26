import { TIMEZONE_API } from 'index'
import { useTimezones } from 'hooks/useTimezones'
import TimezoneLoader from './components/TimezoneLoader'
import TimezoneSelect from './components/TimezoneSelect'
import TimeZoneInfo from './components/TimezoneInfo'

import { useAppState } from 'store/store'
import { useTimezoneData } from 'hooks/useTimezoneData'
import TimezoneError from './components/TimezoneError'

const TimeZone = () => {
  const { timezoneState } = useAppState()
  const { timezonesLoading, timezonesError } = useTimezones(TIMEZONE_API)
  const { timezoneDataError } = useTimezoneData(TIMEZONE_API, timezoneState.selectedTimezone)

  return (
    <div className='dateTime__container'>
      {timezonesLoading ? (
        <TimezoneLoader />
      ) : timezonesError || timezoneDataError ? (
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
