import './styles/Global.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'

export const TIMEZONE_API = 'https://worldtimeapi.org/api/timezone'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
