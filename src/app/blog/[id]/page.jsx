import { blogData } from '@/data/bogData';
import Link from 'next/link';

export default async function ArticleDetailsPage({ params }) {
  const { id } = await params;

  // ID diye blog data khoja
  const article = blogData.find((item) => item.id === id) || {
    title: "Smartwatch Repair Cost Guide for Common Fixes",
    date: "November 11, 2026",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    description: "A cracked smartwatch screen can be frustrating, but the first question most people ask is simple: how much will it cost to repair?"
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      {/* Back Button */}
      <div>
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <span>←</span> All Articles
        </Link>
      </div>

      {/* Featured Banner Image */}
      <div className="w-full h-[320px] sm:h-[420px] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="space-y-4 pt-2">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {article.title}
          </h1>
          <p className="text-sm text-gray-400">
            {article.date}
          </p>
        </div>

        <div className="prose max-w-none text-gray-700 leading-relaxed text-base sm:text-lg pt-4 space-y-4">
          <p>{article.description}</p>
          <p>
            In this detailed breakdown, we explore everything you need to know about pricing, part quality, repair duration, and whether fixing your device makes financial sense compared to buying a brand-new replacement.
          </p>
        </div>
      </article>
    </main>
  );
}