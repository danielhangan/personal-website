import Image from 'next/image'
import HeroImage from '@/public/images/profile.jpeg'

export default function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <Image className="mb-5 rounded-full" src={HeroImage} width={56} height={56} priority alt="Me" />
          <h1 className="mb-5 h1 font-aspekta">
            I write about coding and being a{' '}
            <span className="relative inline-flex text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
              full-time
            </span>{' '}
            maker.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Full-Stack Engineer and Founder of Interlinked and PulseView. I write about coding, startups, and my journey as a full-time maker.
          </p>
        </div>
      </div>
    </section>
  )
}