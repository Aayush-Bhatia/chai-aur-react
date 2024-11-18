import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'

import Home from './compponents/Home/Home.jsx'
import About from './compponents/About/About.jsx'
import Contact from './compponents/Contact/Contact.jsx'
import User from './compponents/User/User.jsx'
import Github, { githubInfoLoader } from './compponents/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path:'/',
//         element: <Home />
//       },
//       {
//         path: '/header',
//         element: <Header />
//       },
//       {
//         path: '/footer',
//         element: <Footer />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='/user/:userid' element={<User />} />
      <Route 
      loader ={githubInfoLoader}
      path='github' 
      element={<Github />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
