function StatPopup({
  icon,
  iconAlt,
  iconClassName,
  title,
  description,
  bottomText,
  bottomSubText,
  bottomTextColor = 'text-blue-100',
  bottomSubTextColor = 'text-blue-300/60',
  progressPercent,
  isNeedProgressBar = false,
}: {
  icon: string;
  iconAlt: string;
  iconClassName: string;
  title: string;
  description: string;
  bottomText: string;
  bottomSubText: string;
  bottomTextColor?: string;
  bottomSubTextColor?: string;
  progressPercent: number;
  isNeedProgressBar?: boolean;
}) {
  return (
    <div className="flex max-w-sm flex-col gap-1 rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-6 text-blue-100">
      <div className="mb-4 flex items-center justify-start gap-4">
        <div className={iconClassName}>
          <img
            src={icon}
            alt={iconAlt}
            className="h-[21px] w-[21px]"
            style={{ filter: 'invert(100%) brightness(100%)' }}
          />
        </div>
        <div className="text-left">
          <h3 className="text-lg font-medium text-blue-100">{title}</h3>
          <p className={`text-sm ${bottomSubTextColor}`}>{description}</p>
        </div>
      </div>

      <div className="pointer-events-none flex items-center justify-center">
        <span className={`text-3xl font-medium ${bottomTextColor} mb-2`}>
          {bottomText}
        </span>
      </div>

      {isNeedProgressBar && (
        <div className="progress-bar-bg-color relative mt-auto h-[10.5px] w-full overflow-hidden rounded-full">
          <div
            style={{ width: `${progressPercent}%` }}
            className="h-full bg-blue-400 transition-all"
          />
        </div>
      )}
      <div className={`text-center text-sm ${bottomSubTextColor}`}>
        {bottomSubText}
      </div>
    </div>
  );
}

function ActivityRow({
  icon,
  iconAlt,
  text,
  count,
}: {
  icon: string;
  iconAlt: string;
  text: string;
  count: number;
}) {
  return (
    <div className="flex items-center text-sm text-blue-200">
      <img
        src={icon}
        alt={iconAlt}
        className="mr-2 h-[18px] w-[18px]"
        style={{ filter: 'invert(100%) brightness(100%)' }}
      />
      <span>{text}</span>
      <span className="ml-auto font-medium text-blue-100">{count}</span>
    </div>
  );
}

export function StatisticsTab() {
  return (
    <div className="w-full max-w-[1200px] px-4 sm:px-6">
      <h2 className="mb-6 text-left text-2xl font-medium text-blue-100">
        Statystyki i analytics
      </h2>

      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <StatPopup
          icon="/path/statistics/ico1.svg"
          iconAlt="Ogólny postęp"
          iconClassName="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
          title="Ogólny postęp"
          description="Wszystkie aktywności"
          bottomText="0%"
          bottomSubText=""
          progressPercent={0}
          bottomTextColor="text-blue-100"
          bottomSubTextColor="text-blue-300/80"
          isNeedProgressBar={true}
        />
        <StatPopup
          icon="/path/statistics/ico2.svg"
          iconAlt="Dni praktyki"
          iconClassName="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center"
          title="Dni praktyki"
          description="Aktywne dni"
          bottomText="0"
          bottomSubText="dni duchowej praktyki"
          progressPercent={0}
          bottomTextColor="text-green-100"
          bottomSubTextColor="text-green-300/60"
        />
        <StatPopup
          icon="/path/statistics/ico3.svg"
          iconAlt="Osiągnięcia"
          iconClassName="w-12 h-12 rounded-full bg-gradient-to-r from-gold-900 to-yellow-500 flex items-center justify-center"
          title="Osiągnięcia"
          description="Odblokowane"
          bottomText="0"
          bottomSubText="z 8 osiągnięć"
          progressPercent={0}
          bottomTextColor="text-gold-100"
          bottomSubTextColor="text-gold-100/60"
        />
      </div>

      <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-6 text-blue-100">
          <h3 className="mb-6 text-left text-xl font-medium text-blue-100">
            Aktywność w czasie
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-blue-900 pb-2 text-sm text-blue-200">
              <span>Ten tydzień</span>
              <span className="font-medium text-blue-100">0 aktywności</span>
            </div>
            <div className="flex justify-between border-b border-blue-900 pb-2 text-sm text-blue-200">
              <span>Ten miesiąc</span>
              <span className="font-medium text-blue-100">0 aktywności</span>
            </div>
            <div className="flex justify-between text-sm text-blue-200">
              <span>Łącznie</span>
              <span className="font-medium text-blue-100">0 aktywności</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-blue-700/40 bg-gradient-to-r from-slate-800/60 to-blue-900/40 p-6 text-blue-100">
          <h3 className="mb-6 text-left text-xl font-medium text-blue-100">
            Ulubione aktywności
          </h3>
          <div className="space-y-4">
            <ActivityRow
              icon="/path/statistics/activities/ico1.svg"
              iconAlt="Rytuały uzdrowienia"
              text="Rytuały uzdrowienia"
              count={0}
            />
            <ActivityRow
              icon="/path/statistics/activities/ico2.svg"
              iconAlt="Miejsca mocy"
              text="Miejsca mocy"
              count={0}
            />
            <ActivityRow
              icon="/path/statistics/activities/ico3.svg"
              iconAlt="Kamienie"
              text="Kamienie"
              count={0}
            />
            <ActivityRow
              icon="/path/statistics/activities/ico4.svg"
              iconAlt="Napary"
              text="Napary"
              count={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
