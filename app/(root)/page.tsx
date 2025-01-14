import SearchForm from '@/app/components/search-form'

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>
}) {
  const query = (await searchParams)?.query

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
    </>
  )
}
