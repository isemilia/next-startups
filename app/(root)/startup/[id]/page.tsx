import { client } from '@/sanity/lib/client'
import { SINGLE_STARTUP_QUERY } from '@/sanity/lib/queries'
import { IStartupPost } from '@/components/startup-card'
import { notFound } from 'next/navigation'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id

  const post: IStartupPost = await client.fetch(SINGLE_STARTUP_QUERY, { id })

  if (!post) {
    return notFound()
  }

  console.log(post)

  return (
    <>
      <h1 className="text-3xl">This is {id}</h1>
    </>
  )
}

export default Page
