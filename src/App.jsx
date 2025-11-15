import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            🚀 Desenrola Direito
          </h1>
          <p className="text-gray-600 mt-2">
            Plataforma de Educação Jurídica - Em Breve
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Site em Desenvolvimento
            </h2>
            <p className="text-gray-600 mb-6">
              Estamos preparando uma plataforma completa de educação jurídica 
              com calculadoras, artigos e recursos legais.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-600 text-lg font-semibold">📚 Artigos</div>
                <p className="text-sm text-gray-600">Conteúdo jurídico educacional</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-green-600 text-lg font-semibold">🧮 Calculadoras</div>
                <p className="text-sm text-gray-600">Ferramentas jurídicas</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-purple-600 text-lg font-semibold">⚖️ Recursos</div>
                <p className="text-sm text-gray-600">Materiais de apoio</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>© 2024 Desenrola Direito. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
