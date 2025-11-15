import { build } from 'esbuild';
import { execSync } from 'child_process';

// Executar build do frontend
console.log('🏗️ Building frontend...');
execSync('npm run build', { stdio: 'inherit' });

// Build do backend para Vercel
console.log('🚀 Building backend for Vercel...');
await build({
  entryPoints: ['server/vercel-entry.js'],
  platform: 'node',
  bundle: true,
  format: 'esm',
  outdir: '.vercel/output/functions',
  external: ['./node_modules/*']
});

console.log('✅ Build completed!');
