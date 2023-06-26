import { useQuery } from 'react-query'

const fetchTimezones = async (apiUrl: string) => {
  const response = await fetch(apiUrl)
  const data = await response.json()
  return data
}

export const useTimezones = (apiUrl: string) => {
  const { data: timezonesList, isLoading: timezonesLoading } = useQuery('timezones', () =>
    fetchTimezones(apiUrl)
  )

  return { timezonesList, timezonesLoading }
}
