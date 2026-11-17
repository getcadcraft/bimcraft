---
title: Kontrola výkresu v zobrazení na tlač
summary: Prepnite DWG alebo DXF do zobrazenia na tlač a uvidíte ho čierno na bielom s hrúbkami čiar a bez hladín, ktoré sa nikdy netlačia.
keywords: tlač, vykreslenie, náhľad, náhľad vykreslenia, hrúbky čiar, hrúbka čiary, čierno-biele, defpoints, bez tlače
from: 1a59c23e
---

## Čo urobíte

Pozriete si, ako list bude vyzerať na papieri skôr, ako ho vytlačíte z programu, ktorý ho vytvoril: čierno na bielom, hrúbky čiar v ich skutočnej šírke a bez hladín nastavených na netlačenie.

## Postup

1. Otvorte výkres DWG alebo DXF.
2. Kliknite na záložku listu nad výkresom.
3. Kliknite na {{ui:Print view}} na konci záložiek alebo stlačte {{key:P}}.
4. Priblížte detail a porovnajte hrubé a tenké čiary.
5. Kliknite znova na {{ui:Print view}} alebo stlačte {{key:P}}, aby ste sa vrátili k bežným farbám.

## Čo by ste mali vidieť

- Biely papier na sivom pozadí, každá čiara a text čierne, bez ohľadu na motív.
- Hrúbky čiar: na liste sa každá hrúbka vykreslí v svojej skutočnej šírke na papieri, takže čiara 0.5 mm je dvakrát hrubšia ako čiara 0.25 mm pri akomkoľvek priblížení. Čiara sa nikdy nevykreslí tenšie, než je jej hrúbka na obrazovke.
- Hladiny nastavené na netlačenie a hladina DEFPOINTS sú skryté.
- Tlačidlo {{ui:Print view}} zostáva stlačené. Zobrazenie na tlač zostáva zapnuté aj pri prepnutí listu alebo otvorení iného výkresu, kým ho nevypnete.

V {{ui:Model}} zobrazenie na tlač používa iba hrúbky na obrazovke (tenké čiary jeden pixel, hrubšie o niečo hrubšie), pretože priestor modelu nemá veľkosť papiera.

## Časté chyby

- **Očakávanie, že sa vytlačí.** Zobrazenie na tlač je iba náhľad. Tlač a export do PDF zatiaľ nie sú v BimCraft vstavané; tlačte z programu, ktorý výkres vytvoril.
- **Očakávanie štýlov vykreslenia.** Tabuľky pier a farby štýlov vykreslenia sa nečítajú. Všetko je jednoduchá čierna.
- **Stlačenie P pri písaní.** {{key:F}} a {{key:P}} nič nerobia, keď píšete do poľa alebo keď sa zobrazuje rozpis zariadení.
