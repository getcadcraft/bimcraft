---
title: Miestnosti a oddeľovače miestností
summary: Vyberte miestnosť, pomenujte ju a očíslujte a prečítajte si jej plochu, obvod a objem. Nakreslite oddeľovač miestností tam, kde sa dve miestnosti stretávajú bez steny medzi nimi.
keywords: miestnosť, miestnosti, oddeľovač miestností, deliaca čiara, priestor, IfcSpace, názov, číslo, plocha, obvod, objem, otvorený plán, rozdeliť miestnosť, kuchyňa a obývačka, nie uzavretá
from: d4c1d66b
---

## Čo urobíte

Pomenujte miestnosti, ktoré vytvárajú steny, a rozdeľte otvorenú miestnosť na dve bez steny.

## Kde sú nástroje

- Rozloženie s pásom kariet: {{ui:Architektúra}} › **Miestnosť a plocha** › {{ui:Miestnosť}} a {{ui:Oddeľovač miestností}}.
- Klasické rozloženie: lišta {{ui:Kresliť}} › ponuka {{ui:Miestnosti}}.
- Ľubovoľný štýl ponuky: príkazy sa volajú Room a Room Separator; paleta príkazov ich nájde.

## Postup

1. Nakreslite steny. Každá uzavretá slučka stien je už miestnosť: BimCraft ju vytvorí, očísluje a pri kreslení jej dá plochu.
2. Zvoľte {{ui:Miestnosť}}. Prejdite nad pôdorysom: miestnosť pod kurzorom sa zvýrazní s plochou, obvodom a objemom.
3. Ak chcete miestnosti rýchlo pomenovať, najprv zadajte v riadku {{ui:Názov}} a {{ui:Číslo}} a potom kliknite do miestnosti. Číslo sa pre ďalšiu miestnosť zvýši o jeden (101, 102; A-09, A-10).
4. Alebo len kliknite na miestnosť: je vybraná a Vlastnosti majú jej názov, číslo, plochu, obvod, objem a štítok.
5. Ak chcete rozdeliť otvorenú miestnosť, zvoľte {{ui:Oddeľovač miestností}} a kliknite na dva body: stena po stenu alebo stena po iný oddeľovač. Pokračujte klikaním pre reťaz; Enter, Esc alebo dvojitým kliknutím to ukončíte.

## Čo oddeľovač robí

- Ohraničuje miestnosti ako stena bez hrúbky. Plochy dvoch miestností sa presne sčítajú na pôvodnú miestnosť.
- Miestnosť, ktorá obsahuje stred pôvodnej, si ponechá názov a číslo. Druhá je nová.
- Oddeľovač, ktorý končí v otvorenom priestore a na jednom konci sa ničoho nedotýka, nič nerozdelí. Predĺžte ho a rozdelí.
- Časť oddeľovača, ktorá leží vo vnútri steny, sa ignoruje, takže sa môžete prichytávať na stredové osi stien.
- Vyberte oddeľovač a stlačte Delete na jeho odstránenie: dve miestnosti sa znova stanú jednou. Späť ho vráti.

## Ak na mieste kliknutia nie je miestnosť

Stavový riadok to povie: steny tam nie sú uzavreté. Uzavrite medzeru alebo cez ňu nakreslite oddeľovač. Nič sa nezakazuje; jednoducho ešte neexistuje uzavretá miestnosť.

## V IFC

Miestnosť je IfcSpace s číslom (Name), názvom (LongName) a Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Objem je plocha krát výška po úroveň nad ňou.

Oddeľovač miestností je IfcVirtualElement, entita, ktorú IFC používa pre hranicu, ktorá nie je postavená. Má čiaru a nemá teleso, takže iný program nečíta žiadnu stenu a nič pre ňu nepočíta.

## Ešte nie je hotové

- Zakrivené oddeľovače.
- Miestnosť, ktorá sleduje šikmý strop: objem je vždy plocha krát výška úrovne.
- Vzťahy hraníc priestoru (IfcRelSpaceBoundary) sa nezapisujú ani pre steny, ani pre oddeľovače.

Pozri aj [Označenia miestností a plôch](topic:room-and-area-tags), [Plochy a hranice plôch](topic:areas-and-area-boundaries).
