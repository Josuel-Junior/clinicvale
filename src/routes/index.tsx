import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, Contact, Units } from '../pages';
import { AboutWe } from '../pages/About-we';
import { Certification } from '../pages/Certification/Certification';
import { ServicePeople } from '../pages/ServicePeople/ServicePeople';



const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/units",
        element: <Units />
      },
      {
        path: "/aboutwe",
        element: <AboutWe />
      },
      {
        path: "/certification",
        element: <Certification />
      },
      {
        path: "/servicepeople",
        element: <ServicePeople />
      },
      {
        path: '*',
        element: <Home />
      }
    ]
  },


]);