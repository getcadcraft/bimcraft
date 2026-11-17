---
title: Fra en projektfil til BimCraft via IFC
summary: IFC-eksportindstillingerne, der åbner bedst i BimCraft (version, egenskabssæt, grundmængder, rum, koblede modeller, koordinater), hvordan resultatet åbnes, og hvad eksporten bevarer.
keywords: eksport, IFC-eksport, rvt til ifc, konverter, 3d, geometri, ifc2x3, ifc4, koordinationsvisning, referencevisning, designoverførselsvisning, egenskabssæt, grundmængder, rum, zoner, koblede filer, delte koordinater, opmålingspunkt, projektets basepunkt, indstillinger
from: 3efd5fc9
---

## Hvad du skal gøre

Lav en projektfil om til en IFC-fil, du kan dreje rundt om, inspicere, kontrollere og redigere i BimCraft. BimCraft læser endnu ikke 3D-modellen inde i en `.rvt`-fil, så eksporten sker i det program, der lavede filen (Revit); BimCraft åbner resultatet.

## Trin

1. Åbn projektet i det program, der lavede det. BimCrafts kort angiver den version, det blev gemt i.
2. Åbn en 3D-visning, der viser det, du vil eksportere.
3. Vælg **File > Export > IFC**.
4. I eksportdialogen vælges en opsætning (eller **Modify setup…**) med indstillingerne nedenfor.
5. Vælg en mappe og et filnavn, og eksportér.
6. I BimCraft klikkes {{ui:Choose a file}} og den nye `.ifc`-fil vælges. Koblede modeller, eksporteret som egne filer, åbnes i samme scene med {{ui:Tilføj en model}}.

## Indstillingerne der åbner bedst her

| Indstilling i eksportøren | Vælg | Hvorfor |
|---|---|---|
| IFC version | **IFC4 Reference View** til at kigge, kontrollere og lave mængdeudtræk; **IFC2X3 Coordination View 2.0** når andre har brug for IFC2X3 | Begge åbner fuldt ud. **IFC4 Design Transfer View** åbner også, med mere præcise former, men filen er større og langsommere. |
| File type | **IFC** (almindelig) | BimCraft åbner ikke `.ifczip` eller `.ifcxml`. |
| Phase / visible elements | Den fase du mener, og **Export only elements visible in view**, når du har sat 3D-visningen op til det | Udelader det, du har skjult med vilje. |
| Property sets | **Export Revit property sets** og **Export IFC common property sets** | De bliver de egenskabssæt BimCraft viser i {{ui:Properties}}, og som {{ui:Find}}, {{ui:Color}} og {{ui:Model checks}} bruger. |
| Base quantities | **Export base quantities** | {{ui:Quantity totals}} og lister bruger dem (længder, arealer, volumener) i stedet for at gætte. |
| Rooms and areas | **Export rooms in 3D views** (eller indstillingen Rooms / Spaces) | Rum kommer som zoner: klik på {{ui:Spaces}} for at se dem. |
| Linked files | **Export linked files as separate IFCs** | Hver kobling bliver sin egen fil; åbn dem sammen med {{ui:Tilføj en model}}, og de flugter. |
| Coordinate base | **Shared coordinates** (eller opmålingspunktet) | Filen bærer så sin plads på kortet (IfcMapConversion), så Mål › Placering, kortlag på terrænet og punktskyer placeret efter kortkoordinater virker. Projektets basepunkt holder modellen nær origo, men uden dens placering på kortet. |
| Split walls and columns by level | Til, når du laver mængdeudtræk pr. etage | Hver etages del er sit eget element. |

## Hvad du bør se

Modellen i 3D, med etager hentet fra projektets niveauer og projektoplysningerne i panelet {{ui:File}}. **Exported from** angiver eksportøren.

## Hvad eksporten bevarer, og hvad den ikke gør

- **Bevaret**: geometri, etager, elementtyper, navne, typer, de fleste parametre (som egenskabssæt), grundmængder når de er bedt om, rum som zoner, og kortplaceringen med delte koordinater.
- **Ikke bevaret**: visninger, ark, annotation, familier som redigerbare familier, arbejdssæt og designalternativer. En IFC-fil er et øjebliksbillede af modellens elementer, ikke af projektet. For arkene eksporteres DWG, og den åbnes i 2D-visningen.

## Almindelige fejl

- **Parametre mangler i BimCraft.** Slå egenskabssætindstillingerne ovenfor til, og eksportér igen.
- **Rum mangler.** Slå rumindstillingen til, og klik derefter på {{ui:Spaces}}.
- **Gemmer som `.ifczip`.** Vælg almindelig IFC, eller pak `.ifczip`-filen ud.
- **Ingen kortplacering.** Eksportér med delte koordinater; kontrollér at projektets opmålingspunkt er sat.
- **Forventer at ændringer går tilbage.** Ændringer du gemmer i BimCraft går i en ny IFC-fil, ikke i projektfilen.
