import Link from 'next/link'
import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx/mdx'
import PostDate from '@/components/post-date'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'
import WidgetPosts from '@/components/widget-posts'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) return

  const { title, summary: description } = post

  return {
    title,
    description,
  }
}

export default async function SinglePost({ params }: {
  params: { slug: string }
}) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) notFound()

  return (
    <div className="pt-12 pb-16 space-y-8 grow md:flex md:space-y-0 md:space-x-8 md:pt-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          {/* Back */}
          <div className="mb-3">
            <Link
              className="inline-flex border rounded-full text-sky-500 border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30"
              href="/"
            >
              <span className="sr-only">Back</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34">
                <path className="fill-current" d="m16.414 17 3.293 3.293-1.414 1.414L13.586 17l4.707-4.707 1.414 1.414z" />
              </svg>
            </Link>
          </div>

          <article>
            {/* Post header */}
            <header>
              <div className="flex items-center justify-between mb-1">
                {/* Post date */}
                <div className="text-xs uppercase text-slate-500">
                  <span className="text-sky-500">—</span> <PostDate dateString={post.publishedAt} /> <span className="text-slate-400 dark:text-slate-600">·</span> 4 Min read
                </div>
                {/* Share buttons */}
                <ul className="inline-flex">
                  <li>
                    <a
                      className="flex items-center justify-center transition duration-150 ease-in-out text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500"
                      href="#0"
                      aria-label="Twitter"
                    >
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center transition duration-150 ease-in-out text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500"
                      href="#0"
                      aria-label="Facebook"
                    >
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center transition duration-150 ease-in-out text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500"
                      href="#0"
                      aria-label="Share"
                    >
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 14c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .223.029.439.075.649l-3.22 2.012A2.97 2.97 0 0 0 12 13c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.97 2.97 0 0 0 1.855-.661l3.22 2.012c-.046.21-.075.426-.075.649 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3a2.97 2.97 0 0 0-1.855.661l-3.22-2.012c.046-.21.075-.426.075-.649 0-.223-.029-.439-.075-.649l3.22-2.012A2.97 2.97 0 0 0 20 14Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <h1 className="mb-4 h1 font-aspekta">{post.title}</h1>
            </header>
            <Mdx code={post.body.code} />
          </article>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <WidgetNewsletter />
          <WidgetSponsor />
          {/* Temporary fix - ref: https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024 */}
          {/* @ts-expect-error Server Component */}
          <WidgetPosts />
        </div>
      </aside>
    </div>
  )
}
