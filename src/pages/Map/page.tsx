import { Header } from '../../components/Header/Header';
import { Info } from '../../components/Map/Info';
import './Map.css';

export function Map() {
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"
    >
      <Header />
      <main className="mt-8 flex flex-col items-center justify-start w-full">
        <h1 className="text-center text-4xl font-medium text-blue-100 mb-4">
          Mapa Miejsc Mocy
        </h1>
        <p className="text-xl text-blue-300/80 mb-6">Odkryj święte miejsca dostrojone do Twojej energii</p>
        <div className="w-full max-w-6xl p-4">
          <Info />
        </div>
      </main>
    </div>
  );
}