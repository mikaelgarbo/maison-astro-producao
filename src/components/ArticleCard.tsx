export function ArticleCard({ article }: { article: any }) {
  return (
    <a href={`/articles/${article.slug}`} className="group block">
      <div className="overflow-hidden rounded-sm bg-muted/20">
        <img
          src={article.featured_image_url}
          alt={article.title}
          loading="lazy"
          className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground block">
          {article.category || 'Design'}
        </span>
        <h2 className="font-serif text-lg sm:text-xl leading-snug text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {article.title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
      </div>
    </a>
  );
}