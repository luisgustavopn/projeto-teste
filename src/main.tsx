import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import {App} from './App'
import { queryClient } from './services/queryClient'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
