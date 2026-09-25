# opentek.fr — charte du site

Site principal de Vincent (formation, certification, prestations). Astro 6 + Tailwind 4, déployé par GitHub Actions sur `vincent-herm/opentek`. Ne pas confondre avec `fablab.opentek.fr` (`projets/ESP32/fablab-esp32/`) ni avec Omaïah (`projets/omaiah/`, autre charte).

## Où vit quoi

- **Le texte** : cinq fichiers JSON dans `src/content/` (`index`, `formation`, `certification`, `site-internet`, `qui-suis-je`). Changer un prix, une FAQ, une accroche ne demande aucun changement de code.
- **Le style** : `src/styles/global.css`, une seule définition pour toutes les pages. Si un réglage manque, on l'ajoute là, jamais dans une page.
- **Ne pas toucher** : `src/pages/shop.astro` et `test.astro` (mises en page à part), `public/choeur/` (répétiteur livré à un client, lien fixe), le tableau `ancienFablab` d'`astro.config.mjs` (34 redirections).

## La charte

**Palette** (définie dans `@theme`, ne jamais écrire un hex dans une page) :
anthracite `#282A26` · texte `#3D403A` · crème `#F6F5EF` (fond) · sauge `#7C8B6B` · sauge foncé `#586646` · sauge clair `#E7ECDF` · doré `#C9A24B` (accent, boutons, filets).

**Polices** : Georgia pour les titres, police système pour le corps. Pas de police externe.

**Échelle typographique** (on choisit un rôle, jamais une taille) :

| Rôle | Classe | Taille |
|---|---|---|
| Titre de page | `.titre-page` | 36 / 48 px |
| Titre de section | `.titre-section` | 28 / 34 px |
| Sous-section | `.titre-sous-section` | 22 px |
| Titre de carte | `.titre-carte` | 19 px |
| Petit titre | `.titre-mini` | 16 px |
| Chapô | `.chapo` | 18 / 19 px |
| Corps | (par défaut) | 17 px |
| Texte secondaire | `.texte-secondaire` | 15 px, 70 % |
| Légende | `.legende` | 13 px, 70 % |

`text-sm` = 15 px et `text-xs` = 13 px (redéfinis dans `@theme`). Réservés aux étiquettes en majuscules, badges, en-têtes de tableau et liens de renvoi.

**Rythme vertical** : `.section` 2 / 2,75 rem, `.section-hero` 2,5 / 3,5 rem. Deux valeurs, pas davantage. Fonds de sections en alternance : crème, `bg-sauge-clair/50`, crème… jamais deux teintes identiques côte à côte.

**Boutons** : une taille (`.btn`), trois habillages (`.btn-or`, `.btn-ligne`, `.btn-ligne-sombre`).

## Règles

1. **Jamais d'opacité de texte sous 70 %** pour du texte porteur d'information (prix, conditions, dates). 80 % pour le corps courant.
2. **Jamais de taille arbitraire** (`text-[0.9rem]`) ni de `text-lg`/`text-xl` pour du texte de contenu.
3. **Jamais d'emoji.** Pour marquer une carte : le filet doré `<span class="block w-8 h-0.5 bg-dore mb-3"></span>`.
4. **Un titre de page = un `<h1>` + un `.chapo`.** Le sous-titre ne va pas dans le `<h1>`.
5. **Deux paragraphes de même rang ont la même taille.** Ne pas mettre `text-sm` sur un paragraphe isolé d'un bloc de texte (vécu sur les mentions légales).
6. **Vocabulaire** : « formation », « stagiaire » restent sur les pages Formation et Certification (cadre Qualiopi de POLLEN). Sur la page Site internet : atelier, accompagnement, prestation, participants.
7. **Prix** : les prix affichés viennent de `site-internet.json` et font foi. Relire ce fichier avant toute communication.

## Avant de publier

```sh
sh scripts/check-charte.sh   # détecte opacités faibles, tailles arbitraires, hex en dur, emojis
npx astro build              # doit passer sans erreur
```

Publication : commit + push sur `main`, GitHub Actions reconstruit en 1 à 2 minutes. Ouvrir la page en ligne ensuite et cliquer pour vérifier.
