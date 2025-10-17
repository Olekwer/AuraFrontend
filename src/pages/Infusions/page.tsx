import { Header } from '../../components/Header/Header';
import { Info } from '../../components/Infusions/Info';

export function Infusions() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <Header />
      <main className="flex w-full flex-col items-center justify-start">
        <Info />
      </main>
    </div>
  );
}