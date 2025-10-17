import { Header } from '../../components/Header/Header';
import { Info } from '../../components/Profile/Info';

export function Profile() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <Header />
      <main className="mt-8 flex w-full flex-col items-center justify-start">
        <Info />
      </main>
    </div>
  );
}