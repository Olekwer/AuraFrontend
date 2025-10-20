import { cards, Card } from './Card';

export function Info() {
  return (
    <div className="p-6 pt-16 space-y-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-medium text-blue-100">
          Rytuały i Dźwięki Uzdrowienia
        </h1>
        <p className="text-xl text-blue-300/80">
          Odkryj moc świętych ceremonii i częstotliwości uzdrawiających
        </p>
      </div>
      <div>
        <h2 className="mb-6 flex gap-2 items-center text-2xl font-medium text-blue-100">
          <img
            src="/path/achievements/ico1.svg"
            alt="star icon"
            className="h-[21px] w-[21px] filter"
            style={{
              filter: 'invert(100%) brightness(100%)',
            }}
          />
          Twoje spersonalizowane rytuały
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map(
            (
              {
                icon,
                title,
                description,
                time,
                statusType,
                dayPart,
                isFavourite,
              },
              idx,
            ) => (
              <Card
                key={idx}
                icon={icon}
                title={title}
                description={description}
                time={time}
                statusType={statusType}
                dayPart={dayPart}
                isFavourite={isFavourite}
              />
            ),
          )}
        </div>
      </div>
      <div>
        <h2 className="mb-6 flex items-center text-2xl font-medium text-blue-100">
          <img
            src="/ico10.svg"
            alt="headphones icon"
            className="h-[21px] w-[21px] filter"
            style={{
              filter: 'invert(100%) brightness(100%)',
            }}
          />
          Biblioteka dźwięków uzdrowienia
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/*musicCard*/}
        </div>
      </div>
      <div>
        <h2 className="mb-6 text-2xl font-medium text-blue-100">
          Dodatkowe rytuały
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/*additionalRitualCard*/}
        </div>
      </div>
    </div>
  );
}
