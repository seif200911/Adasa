import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './Pages/MainLayout/MainLayout'
import { Blog } from './Pages/Blog/Blog'
import { Home } from './Pages/Home/Home'
import { AboutUs } from './Pages/About us/AboutUs'

function App() {

  const routes = createBrowserRouter([
    {
      path: '', element: <MainLayout />, children: [
        { path: '', element: <Home/> },
        { path: 'Blog', element: <Blog/> },
        { path: 'aboutus', element: <AboutUs/> }
      ]
    },
  ])



  return (
    <>
        
        <RouterProvider router={routes} />
    </>
  )
}

export default App
