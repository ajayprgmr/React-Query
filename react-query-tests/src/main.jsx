import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query' // Import QueryClient and QueryClientProvider
import App from './App.jsx'

// Create a new instance of QueryClient
const queryClient = new QueryClient()

// Render the app, wrapping it with QueryClientProvider and providing the queryClient instance
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
