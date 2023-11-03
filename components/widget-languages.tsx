export default function WidgetLanguages() {
  return (
    <div className="p-5 border rounded-lg border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1">
      <div className="font-aspekta font-[650] mb-3">Languages</div>
      <ul className="space-y-3">
        <li className="flex items-center justify-between">
          <div className="grow inline-flex mr-1.5 truncate">
            <span className="text-base mr-1.5">🇬🇧</span> <span className="font-aspekta font-[650] text-sm truncate">English</span>
          </div>
          <div className="shrink-0 relative w-5 h-5 rounded-full bg-[conic-gradient(theme(colors.sky.500)_100%,0,theme(colors.slate.200)_0)] dark:bg-[conic-gradient(theme(colors.sky.500)_100%,0,theme(colors.slate.700)_0)] after:absolute after:inset-0 after:rounded-full after:w-3 after:h-3 after:m-auto after:bg-white dark:after:bg-slate-800" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="grow inline-flex mr-1.5 truncate">
            <span className="text-base mr-1.5">🇷🇴</span> <span className="font-aspekta font-[650] text-sm truncate">Romanian</span>
          </div>
          <div className="shrink-0 relative w-5 h-5 rounded-full bg-[conic-gradient(theme(colors.sky.500)_100%,0,theme(colors.slate.200)_0)] dark:bg-[conic-gradient(theme(colors.sky.500)_100%,0,theme(colors.slate.700)_0)] after:absolute after:inset-0 after:rounded-full after:w-3 after:h-3 after:m-auto after:bg-white dark:after:bg-slate-800" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="grow inline-flex mr-1.5 truncate">
            <span className="text-base mr-1.5">🇵🇹</span> <span className="font-aspekta font-[650] text-sm truncate">Portugese</span>
          </div>
          <div className="shrink-0 relative w-5 h-5 rounded-full bg-[conic-gradient(theme(colors.sky.500)_25%,0,theme(colors.slate.200)_0)] dark:bg-[conic-gradient(theme(colors.sky.500)_50%,0,theme(colors.slate.700)_0)] after:absolute after:inset-0 after:rounded-full after:w-3 after:h-3 after:m-auto after:bg-white dark:after:bg-slate-800" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
      </ul>
    </div>
  )
}