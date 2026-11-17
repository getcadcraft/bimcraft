---
title: Koble rør og kanaler til utstyr
summary: Start eller avslutt et rør eller en kanal på en port slik at det tar portens dimensjon og system og sitter fast i den, og kontroller tilkoblingene: åpne porter, dimensjons- og systemavvik, og strekninger uten kilde.
keywords: mep, koble, tilkobling, tilkoblinger, port, porter, åpen port, dimensjonsavvik, systemavvik, kilde, kontroller tilkoblinger, fast, følg, flytt utstyr, ifcrelconnectsports, koordinering
from: 29144fb0
---

## Hva du skal gjøre

Koble strekningene til utstyret slik at modellen er ett sammenhengende system: en pumpes utløp til røret som går ut fra den, en dysehals til sin grenkanal. Deretter lar du BimCraft liste opp det som ikke er koblet sammen.

## Tegn fra en port

1. Velg {{ui:Rør}} eller {{ui:Kanal}}.
2. Flytt pekeren over en port på et utstyr (de små sirklene; en åpen port tegnes i advarselsfargen). Pekeren fester seg til den og sier **på en port**.
3. Klikk: strekningen starter i portens høyde og **tar dimensjonen og systemet** (et rør tar også systemets vanlige materiale). Statuslinjen sier hva den tok.
4. Tegn videre som vanlig. Å avslutte en strekning på en annen port fester også den enden.

En strekningsende på en port er **festet** til den: flytt eller vend utstyret (i Egenskaper), så følger strekningens ende med; redigerer du strekningen, blir den enden på porten. Strekningens andre hjørner blir der de er, så etter en stor flytting kan første del løsne fra porten i en vinkel: flytt neste hjørne også.

## Kontroller tilkoblingene

Åpne {{ui:Bygg}} og klikk {{ui:Kontroller tilkoblinger}}. Listen under linjen viser:

| Linje | Hva den betyr |
|---|---|
| En port er ikke koblet til | Et utstyr har en tilkobling som ingenting er tegnet til |
| Ingenting i enden | En strekning ender i luften |
| Sammenkoblede porter med ulik dimensjon | En strekning av én størrelse møter en port eller strekning av en annen uten redusering (et rørs nominelle dimensjon, en kanals form og sider) |
| Sammenkoblede porter med ulikt system | For eksempel en returkanal på en tilluftsdyse |
| Et rør koblet til en kanal | To tilkoblinger av ulik type møtes |
| Ingen utstyr i nettverket forsyner den | Ingenting en strekning er koblet til, uansett hvor langt borte, har et utløp. Avløp, overvann og avluftinger spørres ikke om dette: vannet deres kommer fra sanitærenhetene |
| Festet til en port på utstyr som ikke lenger er i modellen | Utstyret ble slettet; tegn enden på nytt eller slett strekningen |

Feil kommer først. Klikk en linje for å velge det den nevner. {{ui:Lukk}} skjuler listen. Kontrollen leser modellen slik den er tegnet: den sjekker tilkoblinger og dimensjoner, aldri strømninger, trykk eller balansering.
