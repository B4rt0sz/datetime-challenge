import './index.scss'
import { useAppState } from 'store/store'

const TimezoneSelect = () => {
  const { timezoneState, setTimezoneState } = useAppState()

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
