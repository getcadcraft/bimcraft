---
title: Rady pri kreslení: neobvyklé rozmery sa vytvoria s upozornením
summary: BimCraft vytvorí to, čo zadáte. Rozmer mimo obvyklého sa zobrazí ako upozornenie v Problémoch; nikdy vám nebráni v kreslení ani v ukladaní.
keywords: rada, upozornenie, problémy, odmietnuté, nebude kresliť, príliš malé, príliš úzke, minimum, limit, šírka schodiska, výška stupňa, šírka stupňa, stĺp, rampa, rozmer dverí, os, výška úrovne, vikier, špirálové schodisko, sklon plošiny, krátka stena, bez prekážok
from: 20090130
---

## Čo budete robiť

Nakreslite rozmer, ktorý nie je obvyklý, a pozrite, kde vás na to BimCraft upozorní.

## Postup

1. Nakreslite alebo zmeňte prvok tak, ako chcete: napríklad schodisko so šírkou 400 mm.
2. BimCraft ho vytvorí tak, ako ste zadali.
3. Otvorte {{ui:Problems}} v hornom paneli. Pod **Rady pri kreslení** je upozornenie, ktoré uvádza prvok, zadaný rozmer a obvyklý rozsah.
4. Kliknutím na upozornenie prvok vyberiete. Zmeňte rozmer, ak to bol preklep, alebo ho nechajte: upozornenie možno potvrdiť, s dôvodom alebo bez neho.

## Čo je rada

Tieto veci sa kedysi odmietali. Teraz sa vytvoria, každá s upozornením:

- **Schodiská**: užšie ako 500 mm alebo širšie ako 5 m; výška stupňa mimo 100 až 300 mm; šírka stupňa mimo 150 až 600 mm.
- **Špirálové schodiská**: stĺpik mimo 40 až 400 mm; stupne s hĺbkou pod 100 mm na čiare chôdze.
- **Stĺpy**: pod 50 mm v priereze alebo pod 300 mm vysoké.
- **Rampy**: pod 300 mm široké.
- **Dvere a okná**: pod 100 mm široké alebo vysoké.
- **Osi**: pod 100 mm dlhé.
- **Steny**: stena kratšia ako 50 mm, napríklad po orezaní.
- **Úrovne**: pod 1 m alebo nad 100 m vysoké (nová budova, rozdelené úrovne, výška úrovne).
- **Vikiere**: mimo 600 mm až 12 m široké, predná stena mimo 300 mm až 4 m, presah nad 1 m, steny mimo 50 až 400 mm.
- **Stavebné plošiny**: bočné sklony mimo 1:1 až 10:1.

## Čo sa stále odmieta

Odmieta sa len to, čo sa nedá postaviť alebo nájsť, každé so správou, ktorá vysvetľuje prečo:

- Rozmer pod 10 mm (stena pod 1 mm): nie je čo postaviť.
- Vikier, ktorý nie je širší ako dvojnásobok hrúbky steny: jeho dve bočné steny by sa stretli.
- Stavebná plošina s bočnými sklonmi strmšími ako 0.1:1 (to je oporný múr) alebo plochejšími ako 100:1 (terén by pokračoval bez konca).
- Niečo, čo sa nezmestí tam, kam ste to umiestnili, obrys, ktorý sa sám pretína, alebo prvok, ktorý už nie je v modeli.

## Dobré vedieť

- Rada sa vypočíta z modelu, takže sa znova zobrazí, keď neskôr otvoríte súbor, a zmizne, keď sa rozmer opraví.
- Kontroly modelu, balíky predpisov a kontroly IDS tiež len vypisujú to, čo nájdu. Nič v {{ui:Problems}} vám nebráni v kreslení ani v ukladaní.
- Obvyklé rozsahy sú všeobecná prax, nie stavebný predpis. Pre predpis pridajte doplnok Stavebné predpisy a vyberte svoje miesto.

## Ďalej

- [Kontrola modelu na bežné problémy](topic:model-checks)
- [Schodiská a zábradlia](topic:stairs-and-railings)
