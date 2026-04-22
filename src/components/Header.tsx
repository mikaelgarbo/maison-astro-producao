export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          <a href="/" className="flex items-center gap-2">
            <h1 className="font-serif text-xl sm:text-2xl tracking-tight text-foreground" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              MAISON
            </h1>
            <span className="hidden sm:inline text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Interiors
            </span>
          </a>

          <nav className="flex items-center gap-6 text-sm tracking-wide uppercase text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors text-foreground">
              Home
            </a>
          </nav>

        </div>
      </div>
      
      <div className="py-3 flex justify-center bg-muted/30">
        <div className="w-[320px] h-[50px] md:w-[728px] md:h-[90px] bg-muted/50 border border-dashed border-border flex items-center justify-center">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Advertisement</span>
        </div>
      </div>
    </header>
  );
}