import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Le site du fablab occupait opentek.fr jusqu'au 23/09/2026 ; il vit désormais
// sur fablab.opentek.fr. On redirige ses 34 anciennes URL pour ne casser aucun
// lien déjà partagé (ateliers, cours, doc, blog...).
// Exception volontaire : /choeur/ reste ici, servi depuis public/choeur/ —
// c'est l'outil livré à Gérardo (Ensemble Alas), son lien ne doit jamais bouger.
const FABLAB = 'https://fablab.opentek.fr';

const ancienFablab = [
  '/a-propos',
  '/ateliers',
  '/ateliers/clavier-musical',
  '/ateliers/distance',
  '/ateliers/initiation',
  '/ateliers/lumiere-auto',
  '/ateliers/minuterie',
  '/ateliers/neopixel',
  '/ateliers/rfid',
  '/ateliers/station-meteo',
  '/avance',
  '/avance/grafcet',
  '/avance/grafcet-archive',
  '/avance/neoprog',
  '/blog',
  '/boutique',
  '/cours',
  '/cours/audio',
  '/cours/capteurs-afficheurs',
  '/cours/gpio-pwm',
  '/cours/introduction-micropython',
  '/cours/poo',
  '/cours/programmation-temps-reel',
  '/cours/systemes-embarques',
  '/doc',
  '/doc/bibliotheques',
  '/doc/bibliotheques/gdeh0213b73',
  '/doc/bibliotheques/oled',
  '/doc/cartes',
  '/doc/composants/max7219',
  '/doc/composants/rc522',
  '/doc/micropython-os',
  '/doc/thonny',
  '/legal',
];

const redirects = Object.fromEntries(
  ancienFablab.map((chemin) => [chemin, `${FABLAB}${chemin}/`])
);

export default defineConfig({
  site: 'https://opentek.fr',
  redirects,
  vite: { plugins: [tailwindcss()] }
});
