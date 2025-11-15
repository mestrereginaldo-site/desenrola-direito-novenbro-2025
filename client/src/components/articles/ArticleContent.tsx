import { formatDate } from "@/lib/utils";
import CategoryBadge from "../shared/CategoryBadge";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import ReactMarkdown from 'react-markdown';

interface ArticleContentProps {
  article: {
    title: string;
    content: string;
    publishDate: string | Date;
    imageUrl?: string | null;
    category: {
      id: number;
      name: string;
      slug: string;
    };
  };
}

export default function ArticleContent({ article }: ArticleContentProps) {
  const shareUrl = window.location.href;
  
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <CategoryBadge category={article.category} className="mb-3" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>{formatDate(new Date(article.publishDate))}</span>
          <span className="mx-2">•</span>
          <span>Por Equipe Desenrola Direito</span>
        </div>
        
        {article.imageUrl ? (
          <div className="rounded-lg overflow-hidden mb-8 h-96">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Tenta usar uma imagem de fallback se a original falhar
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000";
                target.onerror = null; // Evita loop infinito
              }}
            />
          </div>
        ) : (
          // Se não tiver imagem, mostra um placeholder
          <div className="rounded-lg overflow-hidden mb-8 h-96 bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold text-lg">Desenrola Direito</span>
          </div>
        )}
        
        <div className="flex items-center space-x-4 mb-8">
          <span className="text-sm text-gray-600">Compartilhe:</span>
          <a 
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
            aria-label="Compartilhar no Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a 
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${article.title}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
            aria-label="Compartilhar no Twitter"
          >
            <FaTwitter size={18} />
          </a>
          <a 
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${article.title}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
            aria-label="Compartilhar no LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a 
            href={`https://api.whatsapp.com/send?text=${article.title} ${shareUrl}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
            aria-label="Compartilhar no WhatsApp"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </article>
  );
}
