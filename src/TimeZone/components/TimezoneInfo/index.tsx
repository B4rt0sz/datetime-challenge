import './index.scss'
import { useAppState } from 'store/store'

type TimeZoneInfoProps = {
  isDateTimeLoading: true | false
}

const TimeZoneInfo = ({ isDateTimeLoading }: TimeZoneInfoProps) => {
  const { timezoneState } = useAppState()

  const infoToShow = timezoneState.selectedTimezone ? (
    <p>
      The current time for selected timezone is:{' '}
      <span>{isDateTimeLoading ? 'Loading...' : timezoneState.dateTime}</span>
    </p>
  ) : (
    <span>Select time zone to see its time</span>
  )

  return <div className='dateTime__showDate'>{infoToShow}</div>
}

export default TimeZoneInfo
