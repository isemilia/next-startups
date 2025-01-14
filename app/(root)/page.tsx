import SearchForm from '@/components/search-form'
import StartupCard from '@/components/startup-card'

const posts = [
  {
    _createdAt: 1679616000, // Yesterday
    views: 55,
    author: {
      _id: 1,
      name: 'Alice',
      avatar:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop',
    },
    _id: 1,
    description: 'This is a description',
    image: 'https://images.unsplash.com/photo-1634912314704-c646c586b131?w=800',
    category: 'Robots',
    title: 'We Robots',
  },
  {
    _createdAt: 1679702400, // Today
    views: 120,
    author: {
      _id: 2,
      name: 'Bob',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop',
    },
    _id: 2,
    description: 'Exploring the world of technology',
    image: 'https://images.unsplash.com/photo-1526374873451-46fdbf08d3d6?w=800',
    category: 'Technology',
    title: 'Tech Wonders',
  },
  {
    _createdAt: 1679529600, // Two days ago
    views: 89,
    author: {
      _id: 3,
      name: 'Charlie',
      avatar: null,
    },
    _id: 3,
    description: 'The latest scientific discoveries',
    image: 'https://images.unsplash.com/photo-1556742400-b5dbcb6d48b1?w=800',
    category: 'Science',
    title: 'Discoveries',
  },
]

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
    </>
  )
}
