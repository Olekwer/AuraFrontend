import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home/page';
import { Auth } from './pages/Auth/page';
import { Map } from './pages/Map/page';
import { PrivateRoute } from './components/PrivateRoute';
import { Profile } from './pages/Profile/page';
import { Stone } from './pages/Stone/page'
import { Path } from './pages/Path/page';
import { Infusions } from './pages/Infusions/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/auth', element: <Auth /> },
      {
        element: <PrivateRoute />,
        children: [
          { path: '/map', element: <Map /> },
          { path: '/profile', element: <Profile /> },
          { path: '/stone', element: <Stone /> },
          { path: '/path', element: <Path /> },
          { path: '/infusions', element: <Infusions /> },
        ],
      },
    ],
  },
]);
