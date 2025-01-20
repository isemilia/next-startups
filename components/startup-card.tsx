import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Author, Startup } from '@/sanity/types'

export type IStartupPost = Omit<Startup, 'author'> & { author?: Author }

const StartupCard = ({ post }: { post: IStartupPost }) => {
  return (
    <li className={'startup-card group'}>
      <div className="flex-between">
        <p className="startup-card-date">{formatDate(post._createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className={'size-6 text-primary'} />
          <span className={'text-16-medium'}>{post.views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author?._id}`}>
            <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <h3 className="text-26-semibold line-clamp-1">{post.title}</h3>
          </Link>
        </div>
        <Link href={`/user/${post.author?._id}`}>
          <Image
            src={post.author?.image ?? 'https://placehold.co/48x48'}
            width={48}
            height={48}
            className={'rounded-full'}
          />
        </Link>
      </div>
      <Link href={`/startup/${post._id}`}>
        <p className="startup-card-desc">{post.description}</p>

        <img src={post.image} alt="thumbnail" className={'startup-card-img'} />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${post.category?.toLowerCase()}`}>
          <span className="text-16-medium">{post.category}</span>
        </Link>
        <Button className={'startup-card-btn'} asChild>
          <Link href={`/startup/${post._id}`}>Details</Link>
        </Button>
      </div>
    </li>
  )
}

export default StartupCard
