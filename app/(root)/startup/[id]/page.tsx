import { client } from '@/sanity/lib/client'
import { SINGLE_STARTUP_QUERY } from '@/sanity/lib/queries'
import { IStartupPost } from '@/components/startup-card'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import markdownit from 'markdown-it'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import View from '@/components/view'

export const expiremental_ppr = true

const md = markdownit()

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id

  const post: IStartupPost = await client.fetch(SINGLE_STARTUP_QUERY, { id })

  if (!post) {
    return notFound()
  }

  const parsedContent = md.render(post?.pitch || '')

  return (
    <>
      <section className="pink-container !min-h-[230px]">
        <p className="tag">{formatDate(post._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="subheading !max-w-5xl">{post.description}</p>
      </section>
      <section className="section-container">
        <img
          src={post.image}
          alt="thumbnail"
          className={'w-full h-auto max-h-[500px] object-cover rounded-xl'}
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className={'flex gap-2 items-center mb-3'}
            >
              <Image
                src={post.author?.image || ''}
                alt={'avatar'}
                width={74}
                height={74}
                className={'rounded-full drop-shadow-lg'}
              />
              <span className="">
                <span className="text-20-medium block">
                  {post.author?.name}
                </span>
                <span className="text-16-medium block !text-black-300">
                  @{post.author?.username}
                </span>
              </span>
            </Link>
            <div className="category-tag">{post.category}</div>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>
          {parsedContent ? (
            <article
              className={'prose max-w-4xl font-work-sans break-all'}
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided.</p>
          )}
        </div>

        <hr className="divider" />

        {/*{ todo: editor selected startups }*/}

        <Suspense fallback={<Skeleton className={'view-skeleton'} />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  )
}

export default Page
