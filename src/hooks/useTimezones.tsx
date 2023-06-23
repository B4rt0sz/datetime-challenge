import { useQuery } from 'react-query'

const fetchTimezones = async (apiUrl: string) => {
  const response = await fetch(apiUrl)
  const data = await response.json()
  return data
}

export const useTimezones = (apiUrl: string) => {
  const {
    data: timezonesList,
    isLoading: timezonesLoading,
    error: timezonesError,
  } = useQuery('timezones', () => fetchTimezones(apiUrl), {
    retry: 0,
  })

  return { timezonesList, timezonesLoading, timezonesError }
}
