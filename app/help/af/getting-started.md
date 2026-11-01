---
title: Aan die gang met BimCraft
summary: Wat BimCraft vandag doen, hoe jy jou eerste model oopmaak, dit in 3D bekyk, een waarde verander en 'n kopie stoor.
keywords: begin, eerste keer, oopmaak, ifc, rvt, dwg, vinnige begin, inleiding, kyker, bim
from: fc2dea19
---

BimCraft is die gebou-modelprogram van die CadCraft-familie. In hierdie weergawe **open, lees en inspekteer** dit bouwerslêers, en dit **wysig die data in IFC-modelle**. Dit teken of modelleer nog nie nuwe elemente nie. Dink daaraan as 'n modelkyker en -nagaer wat ook name, etikette en eienskapwaardes in 'n IFC-lêer laat regstel.

Wat dit oopmaak:

| Lêer | Wat jy kry |
|---|---|
| IFC (`.ifc`) | Die volledige model in 3D: wentel, verdiepings, elementeienskappe, en wysiging van name en eienskapwaardes |
| Projek- en familielêers (`.rvt`, `.rfa`, `.rte`, `.rft`) | 'n Lêerkaart: die vrystelling waarin dit gestoor is, projekinligting, die voorskou-prent en gekoppelde lêers. Geen 3D nie. |
| DWG en DXF | Die tekening in 2D: modelruimte en elke blad, lae, gekoppelde tekeninge, drukaansig, en 'n toerustingskedule vir getagde voedseldienstetekeninge |
| 'n Projekvouer | 'n Verslag van elke model in die vouer: rugsteunlêers, skakels, beskadigde kopieë, en 'n voorstel van watter lêer om mee te begin |

Alles gebeur in jou blaaier, op jou rekenaar. **Niks word opgelaai nie.** Sien [Lêers wat BimCraft oopmaak en stoor](topic:files) vir die besonderhede.

## Maak BimCraft oop

1. Maak BimCraft oop in 'n huidige blaaier. Chrome, Edge, Firefox en Safari werk almal; [Blaaiers, toestelle en geheue](topic:platforms) lys die verskille.
2. Wag vir die leë skerm wat sê "Maak 'n gebou-model oop."

:::note
BimCraft loop in die blaaier, en op die rekenaar binne CadCraft Studio, saam met die ander programme. Wolkstoring is nog nie beskikbaar nie: jy maak lêers oop vanaf jou rekenaar en stoor kopieë terug daarheen.
:::

## Maak jou eerste model oop

Die vinnigste manier om te sien wat BimCraft doen, is met 'n IFC-lêer.

1. Klik {{ui:Kies 'n lêer}} in die middel van die skerm.
2. Kies 'n `.ifc`-lêer in {{pick:mac=Finder|windows=File Explorer|linux=jou lêerbestuurder}} en bevestig.
3. Wag terwyl die statuslyn onderaan die skerm sê "Begin die IFC-enjin…", en daarna "Bou geometrie".

Jy behoort die model in 3D in die middel te sien, 'n {{ui:Lêer}}-paneel en 'n {{ui:Verdiepings}}-lys aan die linkerkant, en 'n leë {{ui:Eienskappe}}-paneel aan die regterkant. Die statuslyn eindig met "Oop gemaak" en die getal elemente.

:::tip
Jy kan ook 'n lêer van {{pick:mac=Finder|windows=File Explorer|linux=jou lêerbestuurder}} direk op die bladsy sleep. Die skerm wys "Laat los om oop te maak" terwyl jy sleep.
:::

:::offline
Die IFC-enjin laai die eerste keer van die webwerf af wanneer jy 'n IFC-model oopmaak, tensy BimCraft vir vanlyn gebruik gestoor is. DWG- en DXF-tekeninge, projeklêers en vouers het niks ekstra nodig nie: hul lesers is deel van die program. As die program se knoppie {{ui:Vanlyn gereed}} sê, open alles vanlyn. As nie, sal IFC-modelle nie oopmaak voordat jy weer koppel nie, tensy een reeds in hierdie blaaiertablad oopgemaak is. Sien [Aanlyn en vanlyn](topic:online-offline).
:::

:::online
Gaan iewers sonder 'n verbinding? Klik {{ui:Stoor vir vanlyn}} in die programbalk en wag vir {{ui:Vanlyn gereed}}. Die gestoorde kopie (sowat 11 MB) sluit die IFC-enjin in. Sien [Werk vanlyn](common:offline).
:::

## Kyk rond

:::mouse
1. Sleep met die linkermuisknoppie om om die model te wentel.
2. Rol die muiswiel om te zoem.
3. Sleep met die regtermuisknoppie om te pan. Op 'n Mac-trackpad, hou {{key:Shift}} vas en sleep in plaas daarvan.
4. Druk {{key:F}} of klik {{ui:Pas}} om die hele model weer te sien.
:::

:::touch
1. Sleep met een vinger om te wentel.
2. Knyp met twee vingers om te zoem, en beweeg twee vingers saam om te pan.
3. Tik {{ui:Pas}} om die hele model weer te sien.
:::

## Doen een regte ding: regstel 'n etiket

1. Klik 'n muur, deur of enige element in die model. Dit word blou, en sy eienskappe verskyn aan die regterkant.
2. In die {{ui:Eienskappe}}-paneel, klik die waarde langs **Etiket**.
3. Tik die nuwe etiket en druk {{key:Enter}}.
4. Kyk na die {{ui:Veranderinge}}-afdeling wat aan die linkerkant oopgegaan het: jou verandering word gelys met die ou en nuwe waarde.

## Stoor 'n kopie

1. Klik {{ui:Stoor as IFC}} in die {{ui:Veranderinge}}-afdeling, of druk {{key:Mod+S}}.
2. Vind die nuwe lêer in jou aflaaivouer. Dit is na die oorspronklike genoem, met " (edited)" bygevoeg, byvoorbeeld `Clinic (edited).ifc`.

Jou oorspronklike lêer word nooit verander nie. [Verander IFC-eienskappe en stoor 'n gewysigde kopie](topic:edit-ifc-properties) verduidelik wysiging in volle.

## Waarheen om volgende te gaan

- [Die BimCraft-skerm](topic:workspace): elke paneel by naam.
- [Vanaf ander BIM- en tekenprogramme](topic:coming-from): wat anders voel as jy aan Revit gewoond is.
- [Maak 'n hele projekvouer oop](topic:open-project-folder): wys BimCraft na 'n projekvouer en laat dit die lêers uitsorteer.
- [Bekyk 'n DWG- of DXF-tekening](topic:view-dwg): blaaie, lae en drukaansig.
