import { useEffect } from 'react';
import { Info } from '../../components/Home/Info';
import { Header } from '../../components/Header/Header';
import './Home.css';
import { useAuthStore } from '../../store/auth';
import PoemCounter from "../../components/Render"

export function Home() {
  const checkAuthFromCookie = useAuthStore((s) => s.checkAuthFromCookie);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  useEffect(() => {
    checkAuthFromCookie();
  }, []);

  return (
    <div
      className={
        `min-h-screen w-full ` +
        (isAuthenticated
          ? 'bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950'
          : 'bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950')
      }
    >
      <Header />
      <main
        className={
          `w-full ` +
          (isAuthenticated
            ? 'mt-7 flex flex-col items-center justify-start'
            : 'flex flex-col items-stretch justify-start')
        }
      >
        <Info/>
        {/*<PoemCounter/>*/}
      </main>
    </div>
  );
}