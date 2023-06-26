import './index.scss'
import { FallbackProps } from 'react-error-boundary'

const TimezoneError = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className='dateTime__error'>
      <p>
        Something went wrong with the API call: <span>{error.message}</span>
      </p>
      <button onClick={resetErrorBoundary}>Reload aplication</button>
    </div>
  )
}

export default TimezoneError
