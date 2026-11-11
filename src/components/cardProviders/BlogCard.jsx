import Link from 'next/link';

export default function BlogCard({ 
  id,
  image, 
  title, 
  description, 
  date, 
  className = "" 
}) {
  return (
    <Link 
      href={`/blog/${id}`}
      className={`group flex flex-col sm:flex-row items-center gap-6 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 w-full block ${className}`}
    >
      {/* Image Container */}
      <div className="w-full sm:w-48 h-36 shrink-0 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 space-y-3">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <p className="text-sm text-gray-400 font-normal">
          {date}
        </p>
      </div>
    </Link>
  );
}