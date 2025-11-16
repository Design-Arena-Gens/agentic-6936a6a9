# TikTok Shop Automation Studio

Dashboard Next.js pour orchestrer la création, l’automatisation et la publication de vidéos TikTok Shop pour chaque produit vitrine.

## 🔥 Fonctionnalités clés

- Vue d’ensemble des performances (volumes de vidéos auto publiées, conversion vitrine, panier moyen TikTok Shop)
- Pipeline d’automatisation illustrant chaque étape (analyse produit → script IA → templates montage → programmation → boost ventes)
- Sélecteur de produits vitrine avec génération instantanée de plan vidéo (scènes, CTA, sous-titres, musiques suggérées)
- Calendrier de diffusion intelligent calculant les prochains créneaux recommandés
- Kanban de tâches agentiques pour suivre l’avancement (scripts, templates CapCut, programmation)

## 🚀 Stack

- [Next.js 14 (App Router)](https://nextjs.org/)
- [React 18](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide Icons](https://lucide.dev/)

## ⚙️ Démarrage local

```bash
npm install
npm run dev
# http://localhost:3000
```

## 🧪 Build de production

```bash
npm run build
npm run start
```

## 📦 Structure

```
app/                 # App Router, layout + page principale
components/          # UI composables (pipeline, cartes métriques, etc.)
data/                # Catalogue produits vitrine
lib/                 # Utilitaires (générateur de scripts vidéo)
styles/              # Tailwind + styles globaux
```

## 🌐 Déploiement

Déployé sur Vercel : https://agentic-6936a6a9.vercel.app
