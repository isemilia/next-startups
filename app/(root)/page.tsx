import SearchForm from '@/components/search-form'
import StartupCard, { IStartupPost } from '@/components/startup-card'
import { STARTUPS_QUERY } from '@/sanity/lib/queries'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'

// sanity typegen npm commands:
// npx sanity@latest schema extract --path=./sanity/extract.json
// npx sanity@latest typegen generate

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>
}) {
  const query = (await searchParams)?.query
  const params = { search: query || null }

  // const posts = await client.fetch(STARTUPS_QUERY)
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params })

  return (
    <>
      <section className={'pink-container'}>
        <h1 className={'heading'}>
          Pitch Your Startup, <br />
          Connect with Entrepreneurs
        </h1>
        <p className={'subheading !max-w-3xl'}>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All startups'}
        </p>
        <ul className="mt-7 card-grid">
          {posts?.length ? (
            posts.map((post: IStartupPost) => {
              return <StartupCard key={post._id} post={post} />
            })
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  )
}
