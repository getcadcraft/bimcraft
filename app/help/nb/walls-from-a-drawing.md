---
title: Vegger fra en sporet tegning
summary: Gjør en DWG- eller DXF-plan til vegger, dører og vinduer på et nivå, og behold tegningen under planen som referanse.
keywords: dwg, dxf, spor, sporet, importer plan, konverter, CAD til BIM, 2D til 3D, vegger fra linjer, lag, blokker, dører fra blokker, underlag, referansetegning, bakgrunn, xref, tegneprogram
from: 3bf213f1
---

## Det du skal gjøre

Bruk en plan du (eller noen andre) tegnet i tegneprogrammet som starten på modellen. Dens veggelinjer blir vegger, og dens dør- og vindusblokker blir dører og vinduer.

## Steg

1. Slå på {{ui:Tegn}} og velg nivået tegningen viser, i planens nivåliste.
2. Velg {{ui:Bygg}} › {{ui:Fra en tegning…}}, deretter {{ui:Velg en tegning…}}, og velg DWG- eller DXF-filen.
3. I dialogen:
   - **Tegningsenheter** kommer fra tegningen. Velg andre hvis de er feil (en plan tegnet i fot og lest som tommer blir tolv ganger for liten).
   - **Lag med veggene**: kryss av lagene veggelinjene ligger på. Lag der navnet sier «vegg», er avkrysset for deg.
   - **Linjene er**: **begge flater for hver vegg** (den vanlige måten planer tegnes på: hvert par parallelle linjer inntil 600 mm fra hverandre blir én vegg, like tykk som gapet), **veggenes senterlinjer**, eller **én flate** med veggen til venstre eller høyre. Med senterlinjer eller én flate setter veggtypen tykkelsen.
   - **Veggtype** og **Vegghøyde**, som for verktøyet {{ui:Vegg}}.
   - **Blokker**: velg en dør- eller vindustype for hver blokk som er en dør eller et vindu, eller utelat den. Blokker der navnet sier «dør» eller «vindu», er valgt for deg. Hver settes inn i veggen den står på, så bred som blokken er langs veggen. En dør åpner seg til siden svingen er tegnet på.
   - **Hvor den går**: på tegningens egne koordinater, eller med det nedre venstre hjørnet på planens origo.
   - **Behold tegningen under planen for dette nivået**: la den stå avkrysset for å se tegningen som tynne linjer under det du lager.
4. Linjen under valgene sier hvor mange vegger, dører og vinduer den lager. Klikk {{ui:Lag dem}}.

## Det du skal se

- Veggene, dørene og vinduene på nivået, sammenkoblet der de møtes, med rommene de lukker. Alt er ett trinn, så {{key:Mod+Z}} tar det tilbake.
- Tegningen som tynne linjer under planen. {{ui:Bygg}} › {{ui:Fra en tegning…}} lister tegningene som er beholdt på nivået, hver med {{ui:Fjern}}. Å fjerne en lar veggene stå.
- I IFC-filen er den beholdte tegningen en merknad på nivået (dens linjer), slik at andre BIM-programmer også viser den.

:::note
En PDF eller en skanning fungerer også: se [Vegger fra et sett med planer](topic:walls-from-plans). Buer utelates (BimCraft tegner rette vegger), og det samme gjelder linjer inne i blokker. Linjer uten partner i «begge flater» telles i dialogen og utelates. Tegn disse veggene med verktøyet {{ui:Vegg}}, eller rydd dem med {{ui:Endre}} › {{ui:Trim / forleng}} (se [Trim, forleng og sammenkoble vegger](topic:trim-extend-walls)).
:::

:::tip
Sporet over en skanning i tegneprogrammet? Åpne skanningen her også, og kontroller veggene mot den: se [Modell fra en skanning](topic:model-from-a-scan).
:::
