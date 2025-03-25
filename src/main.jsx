import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ChampionPage from './assets/components/ChampionPage.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/Champion/:id",
    element: <ChampionPage/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
