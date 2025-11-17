const YouTubeBlock = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-foreground/90 text-center mb-12">
          YouTube канал
        </h2>
        <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/20">
          <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground font-light">Вставьте ссылку на YouTube</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeBlock;
