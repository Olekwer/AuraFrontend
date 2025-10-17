import { useId } from 'react';

type Props = {
  birthDate: string;
  birthTime: string;
  onChange: (next: { birthDate: string; birthTime: string }) => void;
};

export function BirthDateTime({ birthDate, birthTime, onChange }: Props) {
  const dateId = useId();
  const timeId = useId();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <label className="flex flex-col text-left">
        <span className="mb-1 text-blue-300/80">Birth date</span>
        <input
          id={dateId}
          type="date"
          className="rounded border border-gray-600 bg-transparent px-3 py-2 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={birthDate}
          onChange={(e) => onChange({ birthDate: e.target.value, birthTime })}
          required
        />
      </label>

      <label className="flex flex-col text-left">
        <span className="mb-1 text-blue-300/80">Birth time</span>
        <input
          id={timeId}
          type="time"
          className="rounded border border-gray-600 bg-transparent px-3 py-2 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={birthTime}
          onChange={(e) => onChange({ birthDate, birthTime: e.target.value })}
          required
        />
      </label>
    </div>
  );
}