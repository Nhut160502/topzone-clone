import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { privateRouters, publicRouters } from './routes'
import { Provider } from 'react-redux'
import { CustomerStore } from './redux/customerStore'
import { authStore } from './redux/authStore'
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

      <Routes>
        {privateRouters.map((item, idx) => {
          const Page = item.element
          const Layout = item.layout
          return (
            <Route
              key={idx}
              path={item?.path}
              element={
                <Provider store={authStore}>
                  <Layout>
                    <Page />
                  </Layout>
                </Provider>
              }
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
