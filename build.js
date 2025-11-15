#!/bin/bash
echo "📦 Instalando dependências..."
npm install

echo "🏗️ Fazendo build do projeto..."
cd client
npm install
npm run build
cd ..

echo "✅ Build completo!"
