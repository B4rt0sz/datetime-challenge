import { useQuery } from 'react-query'

const fetchTimezoneData = async (apiUrl: string, selectedTimezone: string) => {
  const response = await fetch(`${apiUrl}/${selectedTimezone}`)
  const data = await response.json()
  return data
}

export const useTimezoneData = (apiUrl: string, selectedTimezone: string) => {
  const {
    data: timezoneData,
    isLoading: timezoneDataLoading,
    error: timezoneDataError,
  } = useQuery(
    ['timezoneData', selectedTimezone],
    () => fetchTimezoneData(apiUrl, selectedTimezone),
    {
      enabled: !!selectedTimezone,
      retry: 0,
      refetchInterval: 5000,
    }
  )

  return { timezoneData, timezoneDataLoading, timezoneDataError }
}
