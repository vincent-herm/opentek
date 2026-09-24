#!/bin/sh
# Contrôle de la charte opentek.fr — à lancer avant chaque publication : sh scripts/check-charte.sh
cd "$(dirname "$0")/.." || exit 1
FILES=$(find src -type f \( -name '*.astro' -o -name '*.json' \) ! -name 'shop.astro' ! -name 'test.astro')
bad=0
check() { # $1 = message, $2 = motif (regex étendu)
  out=$(grep -nE "$2" $FILES 2>/dev/null)
  if [ -n "$out" ]; then echo "✗ $1"; echo "$out" | cut -c1-140 | sed 's/^/    /'; bad=1; fi
}
check "Opacité de texte sous 70 % (illisible)" 'text-texte/([1-6][0-9]|[0-9])\b'
check "Taille arbitraire (text-[...]) : utiliser un rôle" 'text-\[[^]]+\]'
check "Couleur en dur dans une page (hors palette)" '(class|style)="[^"]*#[0-9a-fA-F]{3,6}'
check "Taille de police en style inline" 'style="[^"]*font-size'
check "Emoji dans le contenu ou les pages" $(printf '[\360\237\214\200-\360\237\253\277]')
[ $bad -eq 0 ] && echo "✓ charte respectée" || { echo; echo "Voir CLAUDE.md, section « Règles »"; exit 1; }
