import { useEffect, useRef, useState } from 'react';

type Suggestion = {
  id: string;
  place_name: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
  language?: string;
};

const MIN_INPUT = 2;
const DEBOUNCE_MS = 250;

export function BirthPlace({ value, onChange, language = 'en' }: Props) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const token = import.meta.env.VITE_MAPBOX_TOKEN || '';
  const abortRef = useRef<AbortController | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  useEffect(() => {
    if (!token) return;

    if (timer.current) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }

    if (!value || value.trim().length < MIN_INPUT) {
      setItems([]);
      setOpen(false);
      return;
    }

    timer.current = window.setTimeout(async () => {
      try {
        if (abortRef.current) {
          abortRef.current.abort();
        }
        abortRef.current = new AbortController();

        setLoading(true);
        const url = new URL(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(value)}.json`);
        url.searchParams.set('access_token', token);
        url.searchParams.set('language', language);
        url.searchParams.set('limit', '5');

        const res = await fetch(url.toString(), { signal: abortRef.current.signal });
        if (!res.ok) throw new Error(`Mapbox error ${res.status}`);
        const data = await res.json();
        const features: any[] = data?.features ?? [];
        const suggestions = features.map((f) => ({
          id: f.id as string,
          place_name: f.place_name as string,
        })) as Suggestion[];
        setItems(suggestions);
        setOpen(true);
      } catch (e) {
        if ((e as any)?.name !== 'AbortError') {
          console.error(e);
        }
      } finally {
        setLoading(false);
      }
    }, DEBOUNCE_MS) as unknown as number;
  }, [value, language, token]);

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        className="w-full rounded border border-gray-600 bg-transparent px-3 py-2 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Birth place"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          if (items.length > 0) setOpen(true);
        }}
        autoComplete="off"
      />
      {open && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-blue-700/40 bg-slate-900/90 backdrop-blur-sm">
          {loading && (
            <div className="px-3 py-2 text-sm text-blue-300/80">Loading...</div>
          )}
          {!loading && items.length === 0 && (
            <div className="px-3 py-2 text-sm text-blue-300/80">Nothing was found.</div>
          )}
          {!loading &&
            items.map((it) => (
              <button
                key={it.id}
                type="button"
                className="block w-full px-3 py-2 text-left text-blue-100 hover:bg-blue-800/30"
                onClick={() => {
                  onChange(it.place_name);
                  setOpen(false);
                }}
              >
                {it.place_name}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}