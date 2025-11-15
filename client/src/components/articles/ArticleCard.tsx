import { Link } from "wouter";
import { formatDate } from "@/lib/utils";
import CategoryBadge from "../shared/CategoryBadge";

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    imageUrl?: string;
    publishDate: string | Date;
    category: {
      id: number;
      name: string;
      slug: string;
    };
  };
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 bg-gray-200">
        {article.imageUrl ? (
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Imagem de fallback em caso de erro
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000";
              target.onerror = null; // Evita loop infinito
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10">
            <span className="text-primary font-medium">Desenrola Direito</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <CategoryBadge category={article.category} />
          <span className="ml-3">{formatDate(new Date(article.publishDate))}</span>
        </div>
        <h4 className="font-bold text-xl mb-3">{article.title}</h4>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <Link href={`/artigos/${article.slug}`} className="text-primary font-medium hover:underline flex items-center">
          Ler artigo
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
