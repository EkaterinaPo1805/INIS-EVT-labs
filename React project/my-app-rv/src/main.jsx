import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './app/store.js'
import { Provider } from 'react-redux' 
import './index.css'
import App from './App.jsx'
import { worker } from './api/server' 
import { fetchSellers } from './parts/sellers/sellersSlice'

async function main() {
	await worker.start({ onUnhandledRequest: 'bypass' })
store.dispatch(fetchSellers()) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
		<App />
	</Provider>
  </StrictMode>,
)
}

main()