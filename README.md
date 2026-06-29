# KaloClair V3 — Radar alimentaire IA

Version KaloClair avec direction visuelle dark futuriste / néon.

## Inclus

- Nom et branding KaloClair
- K-Score
- Radar Score
- Scan produit par code-barres
- Open Food Facts via `/api/product.js`
- Analyse Claude côté serveur via `/api/analyze.js` si `ANTHROPIC_API_KEY` est configurée
- Fallback local automatique si Claude échoue ou si la clé manque
- Comparateur de produits
- Empreinte alimentaire / profil
- Historique local
- PWA installable avec icônes KaloClair

## Variable Vercel

Ajoutez dans Vercel > Project > Settings > Environment Variables :

```text
ANTHROPIC_API_KEY = votre clé Claude
```

Optionnel :

```text
ANTHROPIC_MODEL = claude-haiku-4-5-20251001
```

Sans clé Claude, l’app fonctionne avec le moteur local.
