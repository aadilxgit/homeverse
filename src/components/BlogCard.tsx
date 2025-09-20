import React from 'react'
import { Calendar, User, Tag } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  image_url: string
  category: string
  author: string
  published_at: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <article className="bg-white rounded-lg shadow-custom-2 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={post.image_url} 
          alt={post.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-cadet">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4 text-orange-soda" />
            <span>by: {post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-4 h-4 text-orange-soda" />
            <span>{post.category}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-dark-jungle-green mb-3 hover:text-orange-soda transition-colors cursor-pointer line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-cadet text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 text-sm text-cadet">
            <Calendar className="w-4 h-4 text-orange-soda" />
            <time dateTime={post.published_at}>
              {formatDate(post.published_at)}
            </time>
          </div>
          <button className="text-orange-soda text-sm font-semibold hover:text-orange-600 transition-colors uppercase">
            Read More
          </button>
        </div>
      </div>
    </article>
  )
}