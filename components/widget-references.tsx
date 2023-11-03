import Image from 'next/image'

import LucasImg from '@/public/images/lucas.jpeg'
import DanImg from '@/public/images/danberbec.jpeg'
import JamesImg from '@/public/images/jamesmao.jpeg'

export default function WidgetReferences() {
  return (
    <div className="p-5 border rounded-lg border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1">
      <div className="font-aspekta font-[650] mb-3">References</div>
      <ul className="space-y-3">
        <li>
          <a className="flex items-center justify-between space-x-2 group" href="https://www.linkedin.com/in/jamesslmao/">
            <div className="flex items-center space-x-3 truncate grow">
              <Image className="rounded-full" src={JamesImg} width={32} height={32} alt="Mr. Mark Smularkov" />
                <div className="truncate">
                  <div className="font-aspekta font-[650] text-sm truncate mb-1">James Mao</div>
                  <div className="text-xs truncate text-slate-500 dark:text-slate-400">Director of Research, Radicle Insights</div>
                </div>
            </div>
            <div className="shrink-0 text-sky-500">
              <svg className="transition-transform ease-out -rotate-45 fill-current group-hover:rotate-0" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a className="flex items-center justify-between space-x-2 group" href="https://www.linkedin.com/in/danberbec/">
            <div className="flex items-center space-x-3 truncate grow">
              <Image className="rounded-full" src={DanImg} width={32} height={32} alt="Dan Berbec" />
                <div className="truncate">
                  <div className="font-aspekta font-[650] text-sm truncate mb-1">Dan Berbec</div>
                  <div className="text-xs truncate text-slate-500 dark:text-slate-400">Business Development, Sherlock.xyz</div>
                </div>
            </div>
            <div className="shrink-0 text-sky-500">
              <svg className="transition-transform ease-out -rotate-45 fill-current group-hover:rotate-0" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a className="flex items-center justify-between space-x-2 group" href="https://www.linkedin.com/in/lucas-schweiger-93597ba7/">
            <div className="flex items-center space-x-3 truncate grow">
              <Image className="rounded-full" src={LucasImg} width={32} height={32} alt="Lucas Schweiger" />
                <div className="truncate">
                  <div className="font-aspekta font-[650] text-sm truncate mb-1">Lucas Schweiger</div>
                  <div className="text-xs truncate text-slate-500 dark:text-slate-400">VP of Content, Sygnum Bank</div>
                </div>
            </div>
            <div className="shrink-0 text-sky-500">
              <svg className="transition-transform ease-out -rotate-45 fill-current group-hover:rotate-0" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
              </svg>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}