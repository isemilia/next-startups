import Ping from '@/components/ping'
import { client } from '@/sanity/lib/client'
import { SINGLE_STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'

const View = async ({ id }: { id: string }) => {
  const { views } = await client
    .withConfig({ useCdn: false })
    .fetch(SINGLE_STARTUP_VIEWS_QUERY, { id })

  // todo: update views

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <div className="view-text">
        <span className={'font-black'}>
          {views} view{views > 1 ? 's' : ''}
        </span>
      </div>
    </div>
  )
}

export default View
