---
title: Mal materialer på vegger, dekker og tak
summary: Gi elementer et materiale som murstein, kledning, takstein, tre eller flis, på hele elementet eller på én side. Det lagres i IFC-en og vises i renderte bilder.
keywords: mal, materiale, materialer, overflate, overflater, tekstur, murstein, kledning, takstein, takbelegg, tre, stein, flis, betong, puss, gress, grus, glass, metall, veggside, innside, utside, gulvoverflate, rom, overflatestil
from: fbfed676
---

{{ui:Mal}} på verktøylinjen åpner materialbiblioteket over 3D-visningen: murstein og blokk, kledning, takbelegg, tre, stein, flis, betong, puss, bakke, glass og metall.

## Mal elementer

1. Klikk {{ui:Mal}}.
2. Klikk et materiale.
3. Klikk på elementer i 3D-visningen. Hvert klikk maler elementet du klikker på.

For å male mange om gangen, velg dem først (klikk, {{key:Ctrl}}+klikk, eller et [søk](topic:find)), og klikk deretter på materialet: hvert valgte element får det i ett trinn.

Elementet viser materialets farge i 3D-visningen med en gang. Teksturen vises i et [renderet bilde](topic:render). {{key:Esc}} eller {{ui:Lukk}} avslutter maling.

## Mal én side

Velg {{ui:Bare siden du klikket på}}, og klikk på siden du vil ha: utsiden av en vegg i kledning og innsiden i en annen overflate, eller et gulvs overside i tre med undersiden som den er. Resten av elementet beholder sitt materiale.

En side finnes ut fra elementets egne retninger, så den forblir den samme siden når du flytter eller roterer elementet.

For å male gulv rom for rom, gi hvert rom sitt eget gulv ({{ui:Tegn}} › {{ui:Dekke}} › **Dette rommet**, se [Rom, dekker, himlinger og tak](topic:floors-and-roofs)), og mal deretter hvert gulvs overside.

## Fjern et materiale

Klikk på den stripete fargeprøven ({{ui:Ingen materiale}}), og klikk deretter på elementet. Alle materialer på det går bort, også på sidene.

## I filen

Maling endrer IFC-en (ett trinn hver gang, og {{key:Ctrl+Z}} angrer det) og forblir ren IFC:

- hvert malt element får egenskapssettet `CadCraft_Render` som navngir materialet, og én egenskap per malt side;
- kroppen får en overflatestil med materialets farge, slik at andre BIM-programmer viser fargen. I IFC4 navngir stilen også teksturen.

Når BimCraft omformer en vegg du malte (du flytter enden, for eksempel), beholder veggen sitt materiale og sin farge: i BimCraft, i bilder og i andre programmer.

:::note
Teksturene tegnes av BimCraft selv: de fungerer frakoblet og er fritt å bruke til hva som helst (CC0). Dine egne bildeteksturer er ikke bygget ennå.
:::

## Teksturer i 3D-visningen

Et malt murvegg viser murstein, et tregulv viser planker, i virkelig størrelse, så snart malingen er på. Fjern krysset ved **Vis teksturene i 3D-visningen** i Mal-palletten for å se flate farger i stedet (en svært stor modell slår dem av av seg selv og sier fra om det). Farge etter egenskap viser alltid sine egne farger. Teksturene tegnes av programmet, så ingenting lastes ned, og både rendene og glTF-filen bærer dem uansett.
