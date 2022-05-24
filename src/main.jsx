import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {TransactionProvider} from './context/TransactionContext'
import { MarketProvider } from './context/MarketContext'
import { ViewProvider } from './context/ViewContext'
// import axios from 'axios'

// if (process.env.REACT_APP_API_BASE_URL) {
//   axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider>
    <MarketProvider>
      <ViewProvider>
        {/* <React.StrictMode> */}
          <App />
        {/* </React.StrictMode> */}
      </ViewProvider>
    </MarketProvider>
  </TransactionProvider>
 
)
