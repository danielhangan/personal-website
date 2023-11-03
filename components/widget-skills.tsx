export default function WidgetSkills() {
  return (
    <div className="p-5 border rounded-lg border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1">
      <div className="font-aspekta font-[650] mb-3">Technical Skills</div>
      <ul className="space-y-3">
        <li className="flex items-center justify-between">
          <div className="inline-flex mr-1 truncate grow">
            <span className="mr-2 text-sky-500">—</span> <a className="font-aspekta font-[650] text-sm truncate">Python</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[100%]" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex mr-1 truncate grow">
            <span className="mr-2 text-sky-500">—</span> <a className="font-aspekta font-[650] text-sm truncate">TypeScript</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[100%]" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex mr-1 truncate grow">
            <span className="mr-2 text-sky-500">—</span> <a className="font-aspekta font-[650] text-sm truncate">GCP</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[100%]" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex mr-1 truncate grow">
            <span className="mr-2 text-sky-500">—</span> <a className="font-aspekta font-[650] text-sm truncate">React/Nextjs</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[100%]" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex mr-1 truncate grow">
            <span className="mr-2 text-sky-500">—</span> <a className="font-aspekta font-[650] text-sm truncate">Postgres</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[90%]" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex mr-1 truncate grow">
            <span className="mr-2 text-sky-500">—</span> <a className="font-aspekta font-[650] text-sm truncate">MongoDB/Firebase</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[75%]" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
        <li className="flex items-center justify-between">
          <div className="inline-flex mr-1 truncate grow">
            <span className="mr-2 text-sky-500">—</span> <a className="font-aspekta font-[650] text-sm truncate">Go</a>
          </div>
          <div className="shrink-0 relative w-20 h-1.5 bg-slate-200 dark:bg-slate-700 before:absolute before:inset-0 before:bg-sky-500 before:w-[60%]" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
        </li>
      </ul>
    </div>
  )
}