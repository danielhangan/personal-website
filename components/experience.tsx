import Image from "next/image"
import DealroomImg from '@/public/images/dealroom.jpeg'
import RadicleImg from '@/public/images/radicle.jpeg'
import BlockdataImg from '@/public/images/blockdata.jpeg'
import InterlinkedImg from '@/public/images/interlinked.jpeg'

export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Work Experience</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 flex items-center justify-center bg-white border rounded-full h-14 w-14 border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 dark:bg-slate-900">
              <Image src={RadicleImg} alt="radicle" width={24} height={24} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs uppercase text-slate-500">Jan 2020 <span className="text-slate-400 dark:text-slate-600">·</span> Present</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Lead Software Engineer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Radicle Insights</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">As the Lead Software Engineer at Radicle Insights, I've developed and managed Radicle's core technology infrastructure, services, and products, enhancing productivity and research efficiency</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 flex items-center justify-center bg-white border rounded-full h-14 w-14 border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 dark:bg-slate-900">
              <Image src={InterlinkedImg} alt="interlinked" width={52} height={52} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs uppercase text-slate-500">Oct 2022 <span className="text-slate-400 dark:text-slate-600">·</span> Sept 2023</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Founder & CTO</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Interlinked</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">As the Founder & CTO of Interlinked, I've architected a data-driven investment platform for Seed and Series A Investors, enhancing the platform's usability and efficiency.</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 flex items-center justify-center bg-white border rounded-full h-14 w-14 border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 dark:bg-slate-900">
              <Image src={BlockdataImg} alt="blockdata" width={24} height={24} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs uppercase text-slate-500">Jan 2019 <span className="text-slate-400 dark:text-slate-600">·</span> Jun 2020</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Research Analyst</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">BLOCKDATA (Sold to CB Insights)</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">As one of the first employees I was responsible for building a database of blockchain projects/protocols.</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 flex items-center justify-center bg-white border rounded-full h-14 w-14 border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 dark:bg-slate-900">
              <Image src={DealroomImg} alt="dealroom" width={28} height={28} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs uppercase text-slate-500">Sept 2018 <span className="text-slate-400 dark:text-slate-600">·</span> Dec 2018</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Research Analyst</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Dealroom.co</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Created startup market intelligence reports for VC funds (Lake star, Balderton, Accel) and Corporations (Unilever, Schibsted)</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}