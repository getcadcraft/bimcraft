---
title: Vykreslenie obrazu iným programom
summary: Náš vlastný path tracer vykreslí obraz pre dialóg Vykresliť; iný program ho môže vykresliť iba cez doplnok vykresľovacieho motora v CadCraft Studio. Čo sa prenesie a prečo niektoré programy nikdy nie sú ponúkané.
keywords: vykreslenie, motor, externý program, motor doplnku, studio, pozadie, rad, usd, gltf, vykreslené programom, blender, gpl
from: 652b413c
---

Obraz v {{ui:Vykresliť}} vykresľujú **naše vlastné motory**: Rýchly a Path tracer, v prehliadači aj v CadCraft Studio. Iný program ho môže vykresliť, iba ak ho prinesie **doplnok vykresľovacieho motora**: pozri [Pridanie vykresľovacieho motora pomocou doplnku](topic:render-engine-addons). Ak chcete scénu preniesť do iného programu a pokračovať v práci tam, použite [Otvorenie scény v inom programe](topic:render-open-in) alebo [Odoslanie scény do herného motora](topic:render-unreal).

## Vykreslenie obrazu motorom doplnku

1. Zapnite doplnok v Nastavenia › Doplnky. Jeho motor sa zobrazí v zozname motorov v {{ui:Vykresliť}}.
2. Vyberte ho. Jeho vlastné nastavenia sa zobrazia pod zoznamom motorov.
3. Kliknite na {{ui:Vykresliť}}. V Studiu sa pri prvom spustení programu doplnkom Studio opýta vo vlastnom dialógu. Priebeh sa zobrazuje, kým kreslí; {{ui:Zastaviť}} ho ukončí. Obraz sa zobrazí označený motorom, ktorý ho vykreslil.

Motor napísaný v JavaScripte beží aj v prehliadači. Motor, ktorý spúšťa program na tomto počítači, beží iba v Studiu; v prehliadači sa zobrazí ako súbor na uloženie.

## Čo sa prenesie

Motor dostane **balík**: model ako súbor USD (a súbor glTF, ak si ho vyžiada) a súbor nastavení s presnými hodnotami materiálov, slnkom a oblohou, každým zapnutým svetlom s jeho výkonom a svetelným profilom, kamerou a expozíciou. Každý program osvetľuje, tónuje a vzorkuje po svojom, takže obrazy sú si podobné v kamere, slnku, svetlách a expozícii, nie však pixel po pixeli.

## Programy, ktoré CadCraft nikdy nespúšťa

CadCraft nikdy nespustí program pod licenciou GNU GPL a nikdy ho neuvedie ako motor ani ako cieľ položky Otvoriť v. Blender je jedným z nich, preto nie je v zozname motorov. Súbor USD alebo glTF uložený z {{ui:Vykresliť}} sa v ňom stále otvorí rovnako ako v ľubovoľnom programe, ktorý tieto súbory číta.

:::note
Panoramatické a stereo kamery a obrázok oblohy (namiesto neho sa použijú farby oblohy) sa do iného programu neprenášajú. Nič, čo sa urobí v inom programe, sa do modelu nevráti.
:::
