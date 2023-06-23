import './index.scss'

type TimezoneErrorProps = {
  timezonesError?: Error
  timezoneDataError?: Error
}

const TimezoneError = ({ timezonesError, timezoneDataError }: TimezoneErrorProps) => {
  return (
    <div className='dateTime__error'>
      <p>
        Something went wrong with the API call:{' '}
        <span>{timezonesError?.message || timezoneDataError?.message}</span>
      </p>
    </div>
  )
}

export default TimezoneError
