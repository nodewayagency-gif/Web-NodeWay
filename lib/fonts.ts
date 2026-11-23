/**
 * Fontes do site (centralizado). Para trocar as fontes, altere aqui e no
 * mapeamento @theme de app/globals.css (--font-sans / --font-mono / --font-display).
 */
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono, Outfit } from 'next/font/google';

export const fontSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
});

export const fontBrand = Outfit({
  subsets: ['latin'],
  variable: '--font-brand',
  display: 'swap',
});

export const fontSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

/** String pronta com as variáveis das fontes, para o <body>. */
export const fontVariables = `${fontSans.variable} ${fontBrand.variable} ${fontSerif.variable} ${fontMono.variable}`;
