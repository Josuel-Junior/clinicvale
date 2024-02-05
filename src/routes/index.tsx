import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home,Contact } from '../pages';
import { AboutWe } from '../pages/About-we';
export const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/aboutwe",
        element: <AboutWe />
      },
      {
        path: '*',
        element: <Home />
      }
    ]
  },

]);