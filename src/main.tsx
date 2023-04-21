import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import MainLayout from './layout/Main/MainLayout.tsx'

import { Provider } from 'react-redux'
import { store } from './store/store.js'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <MainLayout>
      <App />
    </MainLayout>
  </Provider>
)
