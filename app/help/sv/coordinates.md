---
title: Koordinater i BimCraft
summary: Var du arbetar: pekarens position i planen och 3D-vyn, nivån du befinner dig på, projektets origo och platsens mätpunkt.
keywords: koordinater, var är jag, position, pekare, avläsning, x y z, nivå, våningsplan, projektets origo, origo, baspunkt, mätpunkt, plats, kartkoordinater, östvärde, nordvärde, georeferens, enheter, läge
from: 84df5245
---

## Vad du gör

Se snabbt var du befinner dig i en modell: vilken nivå du ritar på, hur långt pekaren är från projektets origo och var platsens mätpunkt ligger.

## Var siffrorna visas

- **Över 3D-vyn** (nedre högra hörnet, bredvid ViewCube): flytta pekaren över modellen. Rutan visar nivån punkten ligger på och hur högt över den nivåns golv den är, därefter **X, Y och Z**. Över tomt utrymme visas punkten på golvet i den lägsta nivån.
- **På planen** (nedre högra hörnet, medan {{ui:Rita}} är på): nivån som planen visar och höjden på dess golv, samt pekarens **X och Y** medan den är över planen.
- När filen har en kartkonvertering (den exporterades med kartkoordinater) lägger båda rutorna till **östvärde och nordvärde** i kartnätet, i de enheter du valde i {{ui:Enheter}} (enheten skrivs alltid bredvid dem; fot och tum visas som decimalfot). En ritning (DWG eller DXF) behåller sina egna enheter: dess pekaravläsning anger dem, och de konverteras aldrig.

Varje X, Y och Z mäts från **projektets origo**, i de enheter som valts i verktygsfältets enhetslista ({{ui:Enheter}}) (fot och tum, tum, decimalfot, millimeter, centimeter eller meter). Positiv Y pekar mot modellens norr, som inte alltid är verkligt norr. Östvärde och nordvärde i kartan följer samma val (fot och tum visas som decimalfot). När kartsystemets egen enhet skiljer sig från den du valde, anges den inom hakparenteser efter siffrorna, till exempel *(US survey feet)*, så att en lantmätare kan se vilken enhet systemet självt är skrivet i.

## De två markörerna

- **Projektets origo** (en röd cirkel med ett kryss): punkten 0, 0, 0 som alla koordinater i modellen mäts från.
- **Mätpunkt** (en blå cirkel med en triangel): platsens referenspunkt, den punkt som dess latitud, longitud och höjd, eller dess kartkoordinater, anges för. Peka på den i 3D-vyn för att läsa av var den ligger.

När platsen ligger på projektets origo, som i en ny byggnad ritad här, visar en markör båda. Klicka på korsknappen i någon av rutorna för att dölja eller visa markörerna; BimCraft minns ditt val i den här webbläsaren.

## Vad du ska se

- Siffrorna ändras när pekaren rör sig, och planens ruta anger nivån du valde i nivålistan.
- Markörerna står kvar när du kretsar, panorerar och zoomar.

:::tip
Om du vill läsa av en punkts latitud och longitud använder du {{ui:Mät}} › {{ui:Plats}}: se [Mät avstånd, ytarea och platser i 3D](topic:measure).
:::

:::touch
På en pekskärm visar 3D-rutan ingenting förrän du använder en mus eller penna: med ett finger flyttas vyn i stället.
:::
