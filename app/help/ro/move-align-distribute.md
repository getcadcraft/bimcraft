---
title: Mutare, copiere, aliniere și distribuire a elementelor clădirii
summary: Mutați pereți, planșee, stâlpi și elemente plasate printr-un punct de bază și un al doilea punct sau o distanță tastată, copiați-le pe parcurs și aliniați-le sau distribuiți-le uniform, pe plan sau dintr-o alegere în 3D.
keywords: mutare, copiere, aliniere, distribuire, distanțare, decalare, punct de bază, deplasare, pereți, stâlpi, planșee, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Ce veți face

Mutați un perete, un stâlp, un planșeu sau un element de bibliotecă plasat într-un loc nou, faceți copii ale lor sau aliniați mai multe, fără să le redesenați.

## Nume și taste

Comenzile se numesc {{ui:Mutare}}, {{ui:Aliniere}} și {{ui:Distribuire}}, iar în linia de comandă puteți tasta `MOVE`, `ALIGN` și `DISTRIBUTE`, ca în aplicația de desenare CadCraft. O diferență: în BimCraft {{key:M}} este {{ui:Măsurare}}, deci Mutare are propria tastă, {{key:Shift+M}}. Instrumentele se află în meniul {{ui:Build}}.

## Mutare

1. Alegeți ce să mutați, pe plan sau în vizualizarea 3D. Pereții, planșeele, stâlpii și elementele de bibliotecă plasate pot intra toate într-o singură alegere.
2. Apăsați {{key:Shift+M}} sau alegeți {{ui:Mutare}}.
3. Faceți clic pe un punct de bază, apoi pe un al doilea punct. Sau, după punctul de bază, tastați o distanță și apăsați {{key:Enter}}: se mută pe direcția în care indică cursorul de la punctul de bază. Puteți tasta și `dx,dy` (sau `@dx,dy`), ori `lungime<unghi`.
4. Apăsați {{key:C}} ca să activați {{ui:Copiere}}: fiecare mutare face atunci copii și rămâne pregătită pentru următoarea. Apăsați {{key:Esc}} ca să opriți.

Ambele puncte pot fi indicate și cu clic în vizualizarea 3D: cu Mutare activă, cursorul întâlnește înălțimea podelei nivelului, deci un clic acolo este un punct de pe plan. Țineți {{key:Shift}} apăsat în timp ce faceți clic ca să alegeți un alt element. Folosiți planul, {{ui:Sus}}, {{ui:Față}} sau {{ui:Lateral}} după cum preferați: punctele se află întotdeauna pe acel nivel.

Un perete își ia cu el ușile și ferestrele. Un planșeu desenat își ia golurile. Încăperile, planșeele și tavanele care urmează pereții sunt actualizate. Pereții care s-au unit cu peretele mutat rămân unde sunt.

Fiecare mutare este o singură modificare: {{key:Mod+Z}} o anulează, iar ea ajunge la toți cei dintr-o sesiune Live TeamWork. Un element de bibliotecă plasat nu poate fi copiat în acest fel; folosiți {{ui:Editare}} › {{ui:Copiere}} și {{ui:Lipire}}.

## Aliniere

Alegeți două sau mai multe elemente, alegeți {{ui:Aliniere}}, apoi o latură (stânga, centru, dreapta, sus, mijloc sau jos) și de ce să se alinieze: setul ales, primul ales, ultimul ales sau un punct pe care îl indicați. Apăsați {{ui:Aliniere}} în bară.

## Distribuire

Alegeți trei sau mai multe elemente, alegeți {{ui:Distribuire}}, apoi o direcție (orizontal sau vertical) și distanța: spații egale între ele sau centre egale. Cele două de la capete rămân unde sunt.

Pereții pe care îi mută Aliniere sau Distribuire își păstrează îmbinările, ca la Mutare: un perete unit cu un perete mutat își alunecă capătul pe propria linie ca să rămână unit, pereții de compartimentare care se sprijină pe el vin odată cu el, iar doi pereți uniți care sunt amândoi mutați își păstrează colțul acolo unde se întâlnesc noile linii. Încăperile rămân închise. Este un pas în **Modificări**.
