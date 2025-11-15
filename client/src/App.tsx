import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Article from "./pages/Article";
import CategoryArticles from "./pages/CategoryArticles";
import AllArticles from "./pages/AllArticles";
import Search from "./pages/Search";
import NotFound from "./pages/not-found";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Calculators from "./pages/Calculators";
import Contact from "./pages/Contact";
import LegalConsultation from "./pages/LegalConsultation";
import { Toaster } from "@/components/ui/toaster";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/artigos" component={AllArticles} />
          <Route path="/artigos/:slug" component={Article} />
          <Route path="/categorias/:slug" component={CategoryArticles} />
          <Route path="/busca" component={Search} />
          <Route path="/privacidade" component={Privacy} />
          <Route path="/termos" component={Terms} />
          <Route path="/calculadoras" component={Calculators} />
          <Route path="/contato" component={Contact} />
          <Route path="/consulta-juridica" component={LegalConsultation} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
