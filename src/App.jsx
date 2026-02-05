import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './Pages/MainLayout/MainLayout'
import { Blog } from './Pages/Blog/Blog'
import { Home } from './Pages/Home/Home'
import { AboutUs } from './Pages/About us/AboutUs'
import { NotFound } from './Pages/NotFound/NotFound'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { index: true, element: <Home /> },
        { path: 'blog', element: <Blog /> },
        { path: 'aboutus', element: <AboutUs /> }
      ]
    },
    { path: '*', element: <NotFound /> }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
