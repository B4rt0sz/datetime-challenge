import { useQuery } from 'react-query'

const fetchTimezoneData = async (apiUrl: string, selectedTimezone: string) => {
  const response = await fetch(`${apiUrl}/${selectedTimezone}`)
  const data = await response.json()
  return data
}

export const useTimezoneData = (apiUrl: string, selectedTimezone: string) => {
  const { data: timezoneData, isLoading: timezoneDataLoading } = useQuery(
    ['timezoneData', selectedTimezone],
    () => fetchTimezoneData(apiUrl, selectedTimezone),
    {
      enabled: !!selectedTimezone,
      refetchInterval: 5000,
    }
  )

  return { timezoneData, timezoneDataLoading }
}
