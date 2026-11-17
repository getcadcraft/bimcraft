---
title: Åpne .pln- og .pla-prosjektfiler
summary: Hva BimCraft gjør i dag med .pln-, .pla-, .tpl- og .bpn-filer, og hvordan du eksporterer IFC og DWG fra dem slik at modellen og tegningene åpnes her.
keywords: pln, pla, tpl, bpn, prosjektfil, arkiv, mal, sikkerhetskopi, ifc-eksport, dwg-eksport, oversetter, soner, layouter
from: 41fb921d
---

## Hva du skal gjøre

Få et prosjekt lagret som `.pln` (prosjekt), `.pla` (arkiv med biblioteket sitt), `.tpl` (mal) eller `.bpn` (sikkerhetskopi) inn i BimCraft. Dette er Archicads egne filer.

## Hva som åpnes i dag

- **Prosjektfilene selv åpnes ikke ennå.** Formatet deres er ikke publisert, og BimCraft leser det ikke ennå. Når du åpner en, sier BimCraft det og viser hit.
- **BimCraft sjekker filens første bytes.** Archicad-prosjekter fra versjon 17 og nyere begynner med samme korte signatur, så BimCraft kan si sikkert at en fil er et Archicad-prosjekt. En fil med et Archicad-navn som ikke begynner slik, er trolig omdøpt, skadet eller fra en eldre versjon. Signaturen skiller ikke prosjekt, arkiv og mal fra hverandre.
- **En IFC-eksport åpnes fullt ut**: modellen i 3D, etasjer, soner som rom, elementdata, egenskapssett og klassifikasjoner, med alle BimCraft-verktøyene.
- **En DWG-eksport åpnes** i 2D-visningen, med layerne og layoutene sine, og i {{ui:3D}}. For å redigere den, bruk {{ui:Rediger i CadCraft}}.

Eller ta hele prosjektet inn som én zip-fil, med visningene, layoutene og egenskapsgruppene: se [Åpne en prosjektpakke](topic:open-project-bundle).

## Eksporter IFC (modellen)

1. Åpne prosjektet i Archicad.
2. Velg **File > Save As**, og velg **IFC** som filtype.
3. Velg en IFC-oversetter (Archicads navn på et sett med IFC-eksportinnstillinger). En for **IFC4 Reference View** eller **IFC2X3 Coordination View 2.0** passer til BimCraft. IFC4X3 åpnes også.
4. Velg hva som skal eksporteres: hele prosjektet, eller bare elementene som er synlige på etasjene du ser på.
5. Lagre, og klikk deretter {{ui:Velg en fil}} i BimCraft og velg `.ifc`-filen.

Sjekk disse i oversetterens innstillinger før du eksporterer:

- **Soner**: eksporter dem, slik at rom kommer inn som rom (spaces). Klikk {{ui:Rom}} i BimCraft for å se dem.
- **Egenskaper og klassifikasjoner**: eksporter dem, slik at de vises i {{ui:Egenskaper}} og kan brukes i {{ui:Finn}}, {{ui:Farge}} og {{ui:Mengdesummer}}.
- **Vanlig `.ifc`**, ikke `.ifczip` eller `.ifcxml`. BimCraft åpner bare vanlig `.ifc`.

## Eksporter DWG (tegningene)

1. Åpne planen, snittet eller layouten du vil ha.
2. Velg **File > Save As**, og velg **DWG** som filtype.
3. Velg en DXF-DWG-oversetter, og lagre.
4. For et helt sett med ark, lagre layoutene fra Layout Book, eller publiser dem som DWG.
5. Åpne `.dwg`-filen i BimCraft. Tegninger som eksporten lenker til, åpnes sammen med den når de ligger i samme mappe; se [Eksterne tegninger og bilder](topic:dwg-linked-files).

## Feilsøking

- **«… er et Archicad-prosjekt: de første bytene sier det.»** Eksporter IFC eller DWG som over, og åpne den filen.
- **«… har et Archicad-filnavn, men begynner ikke slik.»** Sjekk hvor filen kommer fra: det kan være en annen filtype med nytt navn (prøv å åpne den under sin egentlige filendelse), en kopi som ikke ble ferdig, eller et prosjekt fra en versjon før 17. Åpne den i Archicad hvis du kan, og eksporter deretter IFC eller DWG.
- **Modellen åpnes uten rom.** Soner ble ikke eksportert. Slå dem på i IFC-oversetteren, og eksporter på nytt.
- **Åpninger er ikke kuttet.** BimCraft sier det under **Ikke tegnet ennå** i panelet {{ui:Fil}}. Eksporter på nytt; hvis det fortsatt er slik, åpne modellen i programmet som laget den og sjekk åpningene der.
- **Teksten i DWG-filen ser annerledes ut.** Eksporten kan beholde skrifter BimCraft ikke har. BimCraft tegner tekst med en enkel sans-serif-skrift.

Se også [Få en prosjektfil inn i 3D via IFC](topic:rvt-to-ifc) og [Hva BimCraft leser fra hvert format](topic:file-formats).
