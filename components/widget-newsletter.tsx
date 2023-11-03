import Image from 'next/image'
import Avatar01 from '@/public/images/avatar-01.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'
import Avatar05 from '@/public/images/avatar-05.jpg'

export default function WidgetNewsletter() {
  return (
    <div className="p-5 border rounded-lg border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1">
      <div className="mb-1 text-center">
        <div className="inline-flex -space-x-3 -ml-0.5">
          <Image
            className="box-content border-2 border-white rounded-full dark:border-slate-800"
            src={Avatar01}
            width={24}
            height={24}
            alt="Avatar 01"
          />
          <Image
            className="box-content border-2 border-white rounded-full dark:border-slate-800"
            src={Avatar02}
            width={24}
            height={24}
            alt="Avatar 02"
          />
          <Image
            className="box-content border-2 border-white rounded-full dark:border-slate-800"
            src={Avatar03}
            width={24}
            height={24}
            alt="Avatar 03"
          />
          <Image
            className="box-content border-2 border-white rounded-full dark:border-slate-800"
            src={Avatar04}
            width={24}
            height={24}
            alt="Avatar 04"
          />
          <Image
            className="box-content border-2 border-white rounded-full dark:border-slate-800"
            src={Avatar05}
            width={24}
            height={24}
            alt="Avatar 05"
          />
        </div>
      </div>
      <div className="mb-8 text-center">
        <div className="font-aspekta font-[650] mb-1">Never miss an update!</div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Subscribe and join 100+ developers and entrepreneurs.</p>
      </div>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="40a2faae-46d2-412f-9cb3-9004864bd9be" />
        <div className="mb-2">
          <label className="sr-only" htmlFor="newsletter">
            Your email…
          </label>
          <input id="newsletter" type="email" className="w-full py-1 form-input" name="email-danielhangan.com" placeholder="Your email…" />
        </div>
        <button className="w-full btn-sm text-slate-100 bg-sky-500 hover:bg-sky-600" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  )
}

// 40a2faae-46d2-412f-9cb3-9004864bd9be
