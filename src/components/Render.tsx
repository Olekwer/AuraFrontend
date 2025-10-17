import { useState, memo, useRef, useMemo } from 'react';

type PoemListProps = {
  poems: readonly string[];
};

const PoemList = memo(function PoemList({ poems }: PoemListProps) {
  console.log('List: render');
  return (
    <ul>
      {poems.map((line, idx) => (
        <li key={idx}>{line}</li>
      ))}
    </ul>
  );
});

export default memo(function PoemCounter() {
  const [count, setCount] = useState<number>(0);

  /*
  const POEMS = useRef<string[]>([
    'У лукоморья дуб зелёный;',
    'Златая цепь на дубе том:',
    'И днём и ночью кот учёный',
    'Всё ходит по цепи кругом;',
  ]);
  */
  
  const POEMS = useMemo(
    () => [
      'У лукоморья дуб зелёный;',
      'Златая цепь на дубе том:',
      'И днём и ночью кот учёный',
      'Всё ходит по цепи кругом;',
    ],
    [],
  );

  console.log('Counter: render');

  return (
    <div className="p-4 text-[#CBD5E1]">
      <h2 className="mb-2 text-xl font-semibold">Счётчик</h2>
      <button
        type="button"
        className="mb-4 rounded bg-blue-600 px-4 py-2 text-white"
        onClick={() => setCount((c) => c + 1)}
      >
        Увеличить: {count}
      </button>

      <h3 className="mb-2 mt-4 text-lg font-medium">Стихи</h3>
      {/*<PoemList poems={POEMS.current} />*/}
      <PoemList poems={POEMS} />
    </div>
  );
});
