import { useQuery } from "@tanstack/react-query";
import { useParams, Link, useLocation } from "wouter";
import ArticleCard from "@/components/articles/ArticleCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryArticles() {
  const { slug } = useParams();
  const [, navigate] = useLocation();
  
  const { 
    data: category,
    isLoading: isCategoryLoading,
    error: categoryError
  } = useQuery({
    queryKey: [`/api/categories/${slug}`],
  });

  const { 
    data: articles = [],
    isLoading: isArticlesLoading,
    error: articlesError
  } = useQuery({
    queryKey: [`/api/articles/category/${slug}`],
  });

  const isLoading = isCategoryLoading || isArticlesLoading;
  const error = categoryError || articlesError;

  // Função para obter URL de imagem de fallback baseado no tipo de categoria
  const getFallbackImage = (iconName: string | undefined | null) => {
    switch (iconName) {
      case 'fa-gavel':
        return "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80";
      case 'fa-briefcase':
        return "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80";
      case 'fa-home':
        return "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80";
      case 'fa-users':
        return "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80";
      case 'fa-shield-alt':
        return "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80";
      case 'fa-balance-scale':
        return "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80";
      default:
        return "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80";
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Skeleton className="h-12 w-1/3 mb-2" />
        <Skeleton className="h-6 w-2/3 mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-lg h-96 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !category) {
    navigate("/not-found");
    return null;
  }

  const typedCategory = category as any;
  const typedArticles = articles as any[];

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        {typedCategory.imageUrl && (
          <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6 bg-gradient-to-r from-primary to-[#00A3B4]">
            <img 
              src={typedCategory.imageUrl} 
              alt={typedCategory.name} 
              className="w-full h-full object-cover opacity-70 mix-blend-overlay"
              onError={(e) => {
                // Fallback para imagem padrão se a imagem principal falhar
                const target = e.target as HTMLImageElement;
                target.src = getFallbackImage(typedCategory.iconName);
                target.onerror = null; // Evita loop infinito
              }}
            />
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
          {typedCategory.name}
        </h1>
        <p className="text-lg text-gray-600">{typedCategory.description}</p>
      </header>
      
      {typedArticles.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-4">
            Não encontramos artigos nesta categoria.
          </h2>
          <p className="text-gray-600 mb-8">
            Estamos trabalhando para adicionar mais conteúdo em breve.
          </p>
          <Button asChild>
            <Link href="/">Voltar para o Início</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {typedArticles.map((article: any) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}