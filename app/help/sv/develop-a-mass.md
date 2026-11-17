---
title: Utveckla en byggnadsmassa från en platsstudie
summary: Ta en byggnadsmassa som studerats i CivilCrafts platsvy och utveckla den till nivåer, väggar och golv, med platsens läge på kartan bevarat.
keywords: massa, byggnadsmassa, massning, platsstudie, utveckla, CivilCraft, överlämna, nivåer, väggar, golv, fotavtryck, georeferens, IFC
from: 557b94d1
---

CivilCrafts platsvy kan rita byggnadsmassor på en tomt och pröva dem mot marken, de gränser du anger och solen. **Utveckla i BimCraft** öppnar BimCraft i en ny flik med massorna. **Massor som IFC** sparar dem som en fil som du öppnar här på vanligt sätt. Oavsett väg kommer varje massa som en tomt, en byggnad med en nivå per våning, och ett block (själva massan) som bär sina tal.

## Utveckla en massa

1. Välj en massa i 3D-vyn. Egenskaper visar dess användning, våningar och våningshöjd, fotavtryck, bruttoyta, hur den sitter i lutningen och dess tomt.
2. Klicka på **Utveckla den här massan**.

I ett enda ångra-steg får varje nivå i byggnaden väggar runt fotavtrycket (fotavtrycket är väggarnas yttre yta; varje vägg går upp till nivån ovanför, och den översta är en våning hög) och ett golv under hela byggnaden. Blocket ersätts, och byggnaden behåller studiens tal i egenskapsuppsättningen `CadCraft_SiteMass`, markerad som utvecklad. Det finns inget tak: ett tak beror på designen.

## Platsens läge

En fil från CivilCraft skrivs i projektets egna längdenhet och, när CivilCrafts projekt hade ett koordinatsystem, bär den det som projektets kartomvandling. Att utveckla en massa lämnar det orört, så byggnaden står kvar där kartan säger att den är.
