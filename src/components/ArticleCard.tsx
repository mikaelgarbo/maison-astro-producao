export function ArticleCard({ article, priority = false }: { article: any, priority?: boolean }) {
  return (
    <a href={`/articles/${article.slug}`} className="group block">
      <div className="overflow-hidden rounded-sm bg-muted/20">
        <img
          // A Mágica acontece aqui: Interceptação e Otimização em Tempo Real via CDN
          src={`https://images.weserv.nl/?url=${article.featured_image_url}&w=800&output=webp&q=80`}
          alt={article.title}
          loading={priority ? "eager" : "lazy"}
          {...(priority ? { fetchPriority: "high" } : {})}
          className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground block">
          {article.category || 'Design'}
        </span>
        <h2 className="font-serif text-lg sm:text-xl leading-snug text-foreground group-hover:text-primary">
          {article.title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
      </div>
    </a>
  );
}