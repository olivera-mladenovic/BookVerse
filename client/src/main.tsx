import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import { StoreContext, store } from './app/stores'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './features/account/LoginScreen'
import RegisterScreen from './features/account/RegisterScreen'
import HomeScreen from './features/account/HomeScreen'
import App from './app/layout/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginScreen/>}></Route>
          <Route path='/register' element={<RegisterScreen/>}></Route>
          <Route path='/events' element={<App/>}></Route>
          <Route path='*' element={<HomeScreen/>}></Route>
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>,
)
