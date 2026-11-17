---
title: Åbn .pln- og .pla-projektfiler
summary: Hvad BimCraft gør i dag med filerne .pln, .pla, .tpl og .bpn, og hvordan du eksporterer IFC og DWG fra dem, så model og tegninger kan åbnes her.
keywords: pln, pla, tpl, bpn, projektfil, arkiv, skabelon, backup, ifc-eksport, dwg-eksport, oversætter, zoner, layouts
from: 41fb921d
---

## Hvad du gør

Få et projekt gemt som `.pln` (projekt), `.pla` (arkiv med dets bibliotek), `.tpl` (skabelon) eller `.bpn` (backup) ind i BimCraft. Det er Archicads egne filer.

## Hvad der åbnes i dag

- **Projektfilerne selv kan endnu ikke åbnes.** Deres format er ikke offentliggjort, og BimCraft læser det ikke endnu. Når du åbner en, siger BimCraft det og henviser hertil.
- **BimCraft kontrollerer filens første bytes.** Archicad-projekter fra version 17 og frem starter med den samme korte signatur, så BimCraft kan med sikkerhed fortælle dig, at en fil er et Archicad-projekt. En fil med et Archicad-navn, der ikke starter sådan, er sandsynligvis omdøbt, beskadiget eller stammer fra en ældre version. Signaturen kan ikke skelne et projekt, et arkiv og en skabelon fra hinanden.
- **En IFC-eksport åbnes fuldt ud**: modellen i 3D, etager, zoner som rum, elementdata, egenskabssæt og klassifikationer, med alle BimCraft-værktøjer.
- **En DWG-eksport åbnes** i 2D-visningen, med sine lag og layouts, og i {{ui:3D}}. For at redigere den bruger du {{ui:Rediger i CadCraft}}.

Eller hent hele projektet som én zip-fil med dets visninger, layouts og egenskabsgrupper: se [Åbn en projektpakke](topic:open-project-bundle).

## Eksportér IFC (modellen)

1. Åbn projektet i Archicad.
2. Vælg **File > Save As**, og vælg **IFC** som filtype.
3. Vælg en IFC-oversætter (Archicads navn for et sæt IFC-eksportindstillinger). En af **IFC4 Reference View** eller **IFC2X3 Coordination View 2.0** passer til BimCraft. IFC4X3 åbnes også.
4. Vælg, hvad der skal eksporteres: hele projektet, eller kun de elementer, der er synlige på de etager, du kigger på.
5. Gem, klik derefter på {{ui:Vælg en fil}} i BimCraft, og vælg `.ifc`-filen.

Kontrollér disse i oversætterens indstillinger, før du eksporterer:

- **Zoner**: eksportér dem, så rum kommer med som zoner. Klik på {{ui:Zoner}} i BimCraft for at se dem.
- **Egenskaber og klassifikationer**: eksportér dem, så de vises i {{ui:Egenskaber}} og kan bruges i {{ui:Find}}, {{ui:Farve}} og {{ui:Mængdesummer}}.
- **Almindelig `.ifc`**, ikke `.ifczip` eller `.ifcxml`. BimCraft åbner kun almindelig `.ifc`.

## Eksportér DWG (tegningerne)

1. Åbn planen, snittet eller layoutet, du vil have.
2. Vælg **File > Save As**, og vælg **DWG** som filtype.
3. Vælg en DXF-DWG-oversætter, og gem.
4. For et helt sæt ark: gem layouts fra Layout Book, eller publicér dem som DWG.
5. Åbn `.dwg`-filen i BimCraft. Tegninger, som eksporten linker til, åbnes sammen med den, når de ligger i samme mappe; se [Eksterne referencer og billeder](topic:dwg-linked-files).

## Fejlfinding

- **"… er et Archicad-projekt: dets første bytes siger det."** Eksportér IFC eller DWG som ovenfor, og åbn den fil.
- **"… er navngivet som en Archicad-fil, men starter ikke som en."** Tjek, hvor filen kommer fra: den kan være en anden filtype med nyt navn (prøv at åbne den under dens rigtige endelse), en kopi der ikke blev færdig, eller et projekt fra en version før 17. Åbn den i Archicad, hvis du kan, og eksportér derefter IFC eller DWG.
- **Modellen åbnes uden rum.** Zoner blev ikke eksporteret. Slå dem til i IFC-oversætteren, og eksportér igen.
- **Åbninger er ikke skåret ud.** BimCraft siger det under **Ikke tegnet endnu** i panelet {{ui:Fil}}. Eksportér igen; hvis det stadig står sådan, så åbn modellen i det program, der lavede den, og kontrollér åbningerne der.
- **Teksten på DWG'en ser anderledes ud.** Eksporten kan beholde skrifttyper, som BimCraft ikke har; BimCraft tegner tekst i en almindelig skrifttype uden seriffer.

Se også [Få en projektfil ind i 3D via IFC](topic:rvt-to-ifc) og [Hvad BimCraft læser fra hvert format](topic:file-formats).
