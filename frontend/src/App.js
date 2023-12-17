import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRouters } from './routes'
import { Provider } from 'react-redux'
import { CustomerStore } from './redux/customerStore'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRouters.map((item, idx) => {
          return (
            <Route
              key={idx}
              element={
                <Provider store={CustomerStore}>
                  <item.layout>
                    <item.element />
                  </item.layout>
                </Provider>
              }
              path={item.path}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
