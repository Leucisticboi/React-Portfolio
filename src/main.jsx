import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import Resume from './pages/Resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      { 
        path: '/about', 
        element: <About /> 
      },
      { 
        path: '/projects', 
        element: <Projects /> 
      },
      { 
        path: '/contact', 
        element: <Contact /> 
      },
      { 
        path: '/resume', 
        element: <Resume /> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)