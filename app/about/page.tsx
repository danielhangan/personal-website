import Image from 'next/image'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'
import AboutImg from '@/public/images/about.png'
import Experience from '@/components/experience'
import ProfileImg from '@/public/images/profile.jpeg'

export const metadata = {
  title: 'Daniel Hangan',
  description: 'Full-Stack Engineer and Founder of Interlinked and PulseView.',
}

export default function About() {
  return (
    <div className="pt-12 pb-16 space-y-8 grow md:flex md:space-y-0 md:space-x-8 md:pt-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">

          <section>
            { /* Page title */}
            <h1 className="mb-5 h1 font-aspekta">Hi. I'm Daniel <span className="relative inline-flex text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">@danielhangan</span> Hangan 🤟</h1>
            <div className='flex items-center justify-center w-full'>
              <Image className="w-96 rounded-xl" src={ProfileImg} width={692} height={390} alt="About" />
            </div>
            { /* Page content */}
            <div className="space-y-8 text-slate-500 dark:text-slate-400">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Short Bio</h2>
                <p>
                  I'm a seasoned software engineer and internet entrepreneur with a strong track record of developing innovative solutions to complex problems in the technology industry. I have a keen interest in pioneering state-of-the-art data-driven technologies and am committed to driving systemic change that promotes global unity and connectivity.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Career</h2>
                <p>
                  In my role as a Lead Software Engineer for <a className="font-medium text-sky-500 hover:underline" href="https://radicleinsights.com/">Radicle Insights</a>, I spearheaded the development and management of Radicle's core technology infrastructure, services, and products, resulting in a robust and efficient system.
                </p>
                <p>
                  I engineered an internal full-stack application that empowered 25 research analysts to query 3 million companies, execute data science scripts, and access third-party API data, enhancing productivity. I streamlined data pipeline integration of 3 sources into the data warehouse, ensuring seamless access to up-to-date information. I also pioneered a semantic search engine using Qdrant and Hugging Face ML models, leading to a 10x improvement in speed and accuracy in identifying relevant companies, significantly augmenting research efficiency.
                </p>
                <p>
                  As the Co-Founder & CTO of <strong className="font-medium text-slate-800 dark:text-slate-100">Interlinked</strong>, I orchestrated the architecture and construction of a data-driven investment platform for Seed and Series A Investors, aggregating and parsing data from multiple sources to enable data-driven investment decisions. I innovated two powerful search engines using Meilisearch (Full-text) and Qdrant (Similarity Search), enhancing the usability and efficiency of the platform. I also automated data pipeline integration of 3 data sources into the data warehouse, ensuring seamless access to up-to-date information.
                </p>
              </div>

              <Experience />

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Let's Connect</h2>
                <p>
                  I'm excited to connect with others via <a className="font-medium text-sky-500 hover:underline" href="mailto:hangandaniel1@gmail.com">email</a> and <a className="font-medium text-sky-500 hover:underline" href="https://twitter.com/HanganDaniel">Twitter</a> to chat about projects and ideas. I'm open on full-time/part-time remote jobs, freelance projects, startup ideas and discussing potentially collaborating if it's a good fit.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">

          <WidgetNewsletter />
          <WidgetSponsor />

        </div>
      </aside>

    </div>
  )
}
