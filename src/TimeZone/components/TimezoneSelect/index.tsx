import './index.scss'
import { useEffect } from 'react'
import { TIMEZONE_API } from 'index'
import { useAppState } from 'store/store'
import { useTimezones } from 'hooks/useTimezones'

const TimezoneSelect = () => {
  const { timezoneState, setTimezoneState } = useAppState()
  const { timezonesList } = useTimezones(TIMEZONE_API)

  useEffect(() => {
    if (timezonesList) {
      setTimezoneState({ timezonesList })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timezonesList])

  const timeZoneSelectOptions = timezoneState.timezonesList.map((timezone) => (
    <option key={timezone} value={timezone}>
      {timezone}
    </option>
  ))

  return (
    <select
      className='dateTime__timeZone'
      value={timezoneState.selectedTimezone}
      onChange={(e) => setTimezoneState({ selectedTimezone: e.target.value })}
    >
      <option value=''>Select time zone</option>
      {timeZoneSelectOptions}
    </select>
  )
}

export default TimezoneSelect
