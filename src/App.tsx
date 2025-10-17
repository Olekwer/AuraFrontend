import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <div id="app-root" className="w-screen h-screen">
      <Outlet />
    </div>
  );
}