import Education from '@/components/education'
import Experience from '@/components/experience'
import Awards from '@/components/awards'
import Recommendations from '@/components/recommendations'
import WidgetSkills from '@/components/widget-skills'
import WidgetLanguages from '@/components/widget-languages'
import WidgetReferences from '@/components/widget-references'


export const metadata = {
  title: 'Daniel Hangan',
  description: 'Full-Stack Engineer and Founder of Interlinked and PulseView.',
}

export default function Resume() {
  return (
    <div className="pt-12 pb-16 space-y-8 grow md:flex md:space-y-0 md:space-x-8 md:pt-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">

          <section>
            {/* Page title */}
            <h1 className="mb-12 h1 font-aspekta">My resume</h1>
            {/* Page content */}
            <div className="space-y-12 text-slate-500 dark:text-slate-400">

              <Education />
              <Experience />
              <Awards />
              {/* <Recommendations /> */}

            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">

          <WidgetSkills />
          <WidgetLanguages />
          <WidgetReferences />

        </div>
      </aside>

    </div>
  )
}
