import Image from "next/image";
import FintechAcceleratorImg from '@/public/images/fintechmoldova.jpeg'


export default function Awards() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Awards</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start mb-1">
            <div className="absolute left-0 flex items-center justify-center bg-white border rounded-full h-14 w-14 border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 dark:bg-slate-900">
              <Image src={FintechAcceleratorImg} alt="fintechaccelerator" width={24} height={24} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs uppercase text-slate-500">2021</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Winners Fintech Hackaton</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Fintech Moldova</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Gathered a team of 4 people to build the infrastructure Layer for connecting traditional banking system with crypto.</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}