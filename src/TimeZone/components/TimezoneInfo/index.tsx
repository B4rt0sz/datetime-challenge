import './index.scss'
import { useAppState } from 'store/store'

const TimeZoneInfo = () => {
  const { timezoneState } = useAppState()

  const infoToShow = timezoneState.dateTime ? (
    <p>
      The current time for selected timezone is: <span>{timezoneState.dateTime}</span>
    </p>
  ) : (
    <span>Select time zone to see its time</span>
  )

  return <div className='dateTime__showDate'>{infoToShow}</div>
}

export default TimeZoneInfo
