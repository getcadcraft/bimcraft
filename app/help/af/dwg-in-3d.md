---
title: Sien 'n DWG- of DXF-tekening in 3D
summary: Skakel 'n tekening se modelruimte na 3D om hoogtes, dikte, 3D-vlakke, nette en blokke te sien, rondom te wentel, op 'n voorwerp te klik om sy eienskappe te sien, en te sien wat nog nie geteken is nie.
keywords: 3d, dwg, dxf, tekening, modelruimte, wentel, snit, knipvlak, kies, eienskappe, kenmerke, handvatsel, hoogte, dikte, ekstrusie, 3dface, polyface, net, 3d-polylyn, blokke, aansigte, perspektief, parallel, omvang, acis, soliede
from: a0c6cd17
---

## Wat jy sal doen

Kyk na 'n tekening se modelruimte in 3D. Lyne en polylyne staan op hul werklike hoogtes, voorwerpe met 'n dikte staan op as mure, en 3D-vlakke, nette en 3D-blokke wys as oppervlakke wat jy rondom kan wentel. Die blaaie bly 2D.

## Stappe

1. Maak 'n DWG of DXF oop. Sien [Kyk na 'n DWG- of DXF-tekening](topic:view-dwg). Dit open in 3D tensy {{ui:Instellings}} › {{ui:BimCraft}} › **Tekeninge open in** {{ui:Model (2D)}} sê.
2. Vanaf 2D, klik {{ui:3D}} in die balk bo die tekening, of druk {{key:3}}.
3. Wag 'n oomblik die eerste keer: die statuslyn sê "Bou die tekening in 3D…", en dan hoeveel lyne en vlakke dit wys.
4. Wentel, pan en zoem (sien die tabel hieronder).
5. Klik 'n aansig in die tweede balk: {{ui:Iso}}, {{ui:Bo}}, {{ui:Onder}}, {{ui:Voor}}, {{ui:Agter}}, {{ui:Links}} of {{ui:Regs}}.
6. Klik {{ui:Perspektief}} om tussen 'n perspektief- en 'n parallelle aansig te wissel.
7. Klik {{ui:Omvang}} of druk {{key:F}} om die hele tekening weer te sien.
8. Klik {{ui:3D}} weer, druk {{key:3}}, of klik {{ui:Model}} of 'n bladoortjie om terug na 2D te gaan.

## Wat jy behoort te sien

- Modelruimte in 3D, Z op, in die tekening se eie kleure. Vlakke is 'n skakering ligter as hul rande.
- Lae wat jy in {{ui:Lae}} afskakel, verdwyn ook uit die 3D-aansig.
- Aan die regterkant: die aantal lyne en vlakke, die grootte van die tekening in X, Y en Z, **Slegs in die 2D-aansig** en **Nog nie geteken nie**.

## Sny dit met 'n snitvlak

Klik {{ui:Snit}} op die 3D-balk, of druk {{key:X}}. Die balk daaronder werk soos dit vir IFC-modelle doen (sien [Sny 'n IFC-model met 'n snitvlak](topic:section-plane)): sny vanaf die {{ui:Bo}}, {{ui:Voor}} of {{ui:Syaansig}}, sleep of tik die verskuiwing — hier in die tekening se eie eenhede — en {{ui:Draai om}} om die ander kant te hou. Wat die vlak wegsny, kan nie gekies word nie. Terug na 2D haal die snit weg.

## Sien 'n voorwerp se eienskappe

Klik 'n voorwerp in die 3D-aansig. Dit kry die keuse-kleur, en {{ui:Eienskappe}} wys wat die lêer oor dit sê: sy tipe, laag, kleur, lynsoort en handvatsel, dan sy eie data, soos 'n lyn se begin, einde en lengte, 'n sirkel se middelpunt en radius, 'n 3D-vlak se hoeke, of 'n blokverwysing se blok, invoegpunt, skaal, rotasie en kenmerkwaardes.

- 'n Blokverwysing word as geheel gekies, en die blokke daarin ook.
- 'n Klik 'n paar pixels van 'n lyn kies die lyn.
- Hou {{key:Mod}} vas en klik om meer voorwerpe te kies, of om een uit te haal; {{ui:Eienskappe}} tel hulle dan volgens tipe.
- {{key:Esc}}, of 'n klik op leë ruimte, maak die keuse skoon.
- Voorwerpe op lae wat jy afgeskakel het, kan nie gekies word nie.

## Rondbeweeg

:::mouse
| Om | Doen dit |
|---|---|
| Wentel | Sleep met die middelknoppie, of met die linkerknoppie |
| Pan | Sleep met die regterknoppie, of hou {{key:Shift}} vas en sleep |
| Zoem | Rol die wiel; dit zoem na wat onder die wyser is |
| Sien alles | {{ui:Omvang}} of {{key:F}} |
| Kyk vanaf 'n kant | Klik 'n vlak, rand of hoek van die aansigkubus in die onderregterhoek |
:::

Die aansigkubus kan in {{ui:Instellings}} vervang word met 'n asikoon, of versteek word. Sien [BimCraft-instellings](topic:settings).

:::mac mouse
Op 'n raakpaneel, swiep met twee vingers om te wentel, hou {{key:Shift}} vas en swiep om te pan, en knyp om te zoem.
:::

:::touch
Sleep met een vinger om te wentel. Knyp met twee vingers om te zoem, en beweeg hulle saam om te pan.
:::

## Wat in 3D geteken word

| In die tekening | In 3D |
|---|---|
| Lyne, 3D-polylyne | Op hul werklike hoogtes |
| Polylyne, sirkels, boë, ellipse | In hul eie vlak, op hul peil, gekantel wanneer die tekening hulle kantel |
| Dikte op lyne, polylyne, sirkels en boë | Mure van daardie hoogte; sirkels is bo en onder toe |
| 3D-vlakke, polyface-nette, polygonnette | Geskakeerde oppervlakke met hul sigbare rande |
| Blokke | Geplaas, gedraai en geskaal in 3D, geneste blokke ook |
| Arseringe | Hul omtrekke |
| Gewone 2D-lynwerk | Plat, waar dit geteken is |

## Slegs in die 2D-aansig

Teks, veelreeksteks en die sigbare kenmerke van blokke word in 3D geteken, in hul eie vlak op hul eie hoogte, en 'n klik daarop kies hulle. Breë polylyne wys hul breedte as 'n plat band. Multileaders, prente en arseringpatrone word onder **Slegs in die 2D-aansig** getel: sien hulle op die {{ui:Model}}-oortjie of die blaaie.

## Nog nie geteken nie

Soliede liggame en oppervlakke wat as ACIS-liggame gestoor is (3D-soliede, liggame, streke en oppervlakke), en onderverdelingsnette, word onder **Nog nie geteken nie** gelys met hoeveel daar is. Hulle word oorgeslaan, nie geraai nie.

## Algemene foute

- **Alles lyk plat.** Die tekening is 2D: sy lyne het geen hoogte nie. Klik {{ui:Voor}} om te kontroleer; 'n plat tekening wys as 'n lyn.
- **'n Soliede model wys niks.** Soliede wat met 'n soliedemodelleerder gemaak is, is ACIS-liggame, gelys onder **Nog nie geteken nie**. Voer die model uit as IFC of as 3D-vlakke uit die program wat dit gemaak het.
- **Die tekening is 'n klein groepie in die middel.** Iets ver weg in modelruimte, soos 'n ou kopie van 'n plan, maak die omvang groot. Zoem in met die wiel waar jy wil kyk.

## Volgende

- [Werk met lae en blaaie](topic:dwg-layers-sheets)
- [Sny 'n IFC-model met 'n snitvlak](topic:section-plane)
