import { Hero } from '../components/Hero'
import { Blog } from '../components/Blog'
import { Main } from '../components/Main'
import { GetStaticProps } from 'next'
import { getLatestPostsData } from '../../lib/posts'
import { ProjectsMain } from '../components/ProjectsMain'

import ContainerLayout from '../layouts/Container'
import { getAllProjectsData } from '../../lib/projects'

export default function Index (
  {
    featuredposts,
    latestprojects
  } : {
    featuredposts: object
    latestprojects: object
  }) {
  return (
    <ContainerLayout>
      <Main>
        <Hero />
        <Blog posts={featuredposts} home />
        <ProjectsMain projects={latestprojects} />
      </Main>
    </ContainerLayout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const featuredposts = await getLatestPostsData()
  const latestprojects = await getAllProjectsData()

  return {
    props: {
      featuredposts: featuredposts.posts,
      latestprojects: latestprojects.projects
    },
    revalidate: 60 * 60
  }
}