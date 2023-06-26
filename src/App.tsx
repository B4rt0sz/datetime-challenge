import TimeZone from 'TimeZone'
import { QueryErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import TimezoneError from 'TimeZone/components/TimezoneError'

function App() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <div className='wrapper'>
          <ErrorBoundary FallbackComponent={TimezoneError} onReset={reset}>
            <TimeZone />
          </ErrorBoundary>
        </div>
      )}
    </QueryErrorResetBoundary>
  )
}

export default App
