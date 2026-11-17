---
title: Vægge fra en optegnet tegning
summary: Lav en DWG- eller DXF-plan om til vægge, døre og vinduer på et niveau, og behold tegningen under planen som reference.
keywords: dwg, dxf, optegn, optegnet, importér plan, konvertér, cad til bim, 2d til 3d, vægge fra linjer, lag, blokke, døre fra blokke, underlag, referencetegning, baggrund, xref, tegneprogram
from: 3bf213f1
---

## Det skal du gøre

Brug en plan, du (eller nogen andre) har tegnet i tegneprogrammet, som starten på modellen: dens vægliner bliver til vægge, og dens dør- og vindueblokke bliver til døre og vinduer.

## Trin

1. Slå {{ui:Tegn}} til, og vælg det niveau, tegningen viser, i planens niveauliste.
2. Vælg {{ui:Build}} › {{ui:Fra en tegning…}}, derefter {{ui:Vælg en tegning…}}, og vælg DWG- eller DXF-filen.
3. I dialogen:
   - **Tegningsenheder** kommer fra tegningen. Vælg andre, hvis de er forkerte (en plan tegnet i fod og læst som tommer er tolv gange for lille).
   - **Lag med vægge**: sæt flueben i de lag, vægliniene ligger på. Lag, hvis navne siger "wall", sættes af til dig.
   - **Linjerne er**: **begge flader af hver væg** (den almindelige måde planer tegnes på: hvert par af parallelle linjer op til 600 mm fra hinanden bliver til én væg, lige så tyk som afstanden), **væggenes midterlinjer**, eller **én flade** med væggen til venstre eller højre. Med midterlinjer eller én flade sætter vægtypen tykkelsen.
   - **Vægtype** og **Væghøjde**, som for værktøjet {{ui:Væg}}.
   - **Blokke**: vælg en dør- eller vinduestype for hver blok, der er en dør eller et vindue, eller udelad den. Blokke, hvis navne siger "door" eller "window", vælges for dig. Hver sættes i den væg, den står i, så bred som blokken er langs væggen. En dør åbner mod den side, dens udslag er tegnet på.
   - **Hvor den går**: ved tegningens egne koordinater, eller med dens nederste venstre hjørne på planens nulpunkt.
   - **Behold tegningen under planen for dette niveau**: lad fluebenet stå for at se tegningen som tynde linjer under det, du laver.
4. Linjen under valgene siger, hvor mange vægge, døre og vinduer den laver. Klik på {{ui:Lav dem}}.

## Det skal du se

- Væggene, dørene og vinduerne på niveauet, sammenføjet, hvor de mødes, med de rum de lukker. Alt er ét trin, så {{key:Mod+Z}} fortryder det.
- Tegningen som tynde linjer under planen. {{ui:Build}} › {{ui:Fra en tegning…}} viser de tegninger, der er gemt på niveauet, hver med {{ui:Fjern}}. Fjerner du én, bliver væggene.
- I IFC-filen er den gemte tegning en annotation på niveauet (dens linjer), så andre BIM-programmer viser den også.

:::note
En PDF eller en skanning virker også: se [Vægge fra et sæt planer](topic:walls-from-plans). Buer udelades (BimCraft tegner lige vægge), og det samme gælder linjer inde i blokke. Linjer uden en makker i "begge flader" tælles i dialogen og udelades: tegn dem som vægge med {{ui:Væg}}-værktøjet, eller ryd dem op med {{ui:Rediger}} › {{ui:Beskær / forlæng}} (se [Beskær, forlæng og sammenføj vægge](topic:trim-extend-walls)).
:::

:::tip
Optegnet over en skanning i tegneprogrammet? Åbn skanningen her også, og kontrollér væggene mod den: se [Model fra en skanning](topic:model-from-a-scan).
:::
