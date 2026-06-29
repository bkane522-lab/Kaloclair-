# KaloClair V2.1 — Scan IA

Inclus :
- design dark néon
- bouton hero qui scrolle vers le champ de scan
- scan caméra via BarcodeDetector si disponible
- saisie manuelle du code-barres en fallback
- /api/product vers Open Food Facts
- /api/analyze vers Claude si ANTHROPIC_API_KEY est configurée
- fallback local automatique
- comparaison de 2 produits
- stats animées
- historique local
- PWA installable

Vercel > Project > Settings > Environment Variables :
ANTHROPIC_API_KEY = votre clé API Claude
Optionnel : ANTHROPIC_MODEL = claude-haiku-4-5-20251001

Sans clé API, l'application fonctionne quand même avec le moteur local.

Tests :
- Nutella : 3017624010701
- Coca-Cola : 5449000000996
