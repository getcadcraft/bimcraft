---
title: Mure uit 'n getraseerde tekening
summary: Verander 'n DWG- of DXF-plan in mure, deure en vensters op 'n vlak, en hou die tekening onder die plan as verwysing.
keywords: dwg, dxf, traseer, getraseer, invoer plan, omskakel, cad na bim, 2d na 3d, mure uit lyne, lae, blokke, deure uit blokke, onderlaag, verwysingstekening, agtergrond, xref, tekenprogram
from: 3bf213f1
---

## Wat jy sal doen

Gebruik 'n plan wat jy (of iemand anders) in die tekenprogram geteken het as die begin van die model: sy muurlyne word mure, en sy deur- en vensterblokke word deure en vensters.

## Stappe

1. Skakel {{ui:Teken}} aan en kies die vlak wat die tekening in die plan se vlaklys wys.
2. Kies {{ui:Bou}} › {{ui:Uit 'n tekening…}}, dan {{ui:Kies 'n tekening…}} en kies die DWG of DXF.
3. In die dialoog:
   - **Tekeningeenhede** kom uit die tekening; kies ander as hulle verkeerd is ('n plan wat in voet geteken is maar as duim gelees word, is twaalf keer te klein).
   - **Lae met die mure**: merk die lae waarop die muurlyne is. Lae waarvan die name "wall" sê, is vir jou gemerk.
   - **Die lyne is**: **albei vlakke van elke muur** (die gewone manier waarop planne geteken word: elke paar ewewydige lyne tot 600 mm uitmekaar word een muur so dik as die gaping), **die mure se middellyne**, of **een vlak** met die muur aan sy linker- of regterkant. Met middellyne of een vlak stel die muurtipe die dikte.
   - **Muurtipe** en **Muurhoogte**, soos vir die {{ui:Muur}}-gereedskap.
   - **Blokke**: kies 'n deur- of venstertipe vir elke blok wat 'n deur of 'n venster is, of laat dit weg. Blokke waarvan die name "door" of "window" sê, is vir jou gekies. Elkeen word in die muur geplaas waarop dit sit, so breed as die blok langs die muur; 'n deur swaai na die kant waarheen sy swaai getekend is.
   - **Waar dit gaan**: by die tekening se eie koördinate, of met sy linkeronderhoek op die plan se oorsprong.
   - **Hou die tekening onder die plan van hierdie vlak**: laat dit gemerk om die tekening as dun lyne onder wat jy maak te sien.
4. Die lyn onder die keuses sê hoeveel mure, deure en vensters dit sal maak. Klik op {{ui:Maak hulle}}.

## Wat jy behoort te sien

- Die mure, deure en vensters op die vlak, waar hulle ontmoet verbind, met die vertrekke wat hulle sluit; alles is een stap, so {{key:Mod+Z}} neem dit terug.
- Die tekening as dun lyne onder die plan. {{ui:Bou}} › {{ui:Uit 'n tekening…}} lys die tekeninge wat op die vlak bewaar word, elk met {{ui:Verwyder}}; om een te verwyder, laat die mure staan.
- In die IFC-lêer is die bewaarde tekening 'n annotasie op die vlak (sy lyne), so ander BIM-programme wys dit ook.

:::note
'n PDF of 'n skandering werk ook: sien [Mure uit 'n stel planne](topic:walls-from-plans). Boë word weggelaat (BimCraft teken reguit mure), en so ook lyne binne blokke. Lyne sonder 'n maat in "albei vlakke" word in die dialoog getel en weggelaat: teken daardie mure met die {{ui:Muur}}-gereedskap, of maak hulle netjies met {{ui:Wysig}} › {{ui:Trek bo / verleng}} (sien [Trek bo, verleng en verbind mure](topic:trim-extend-walls)).
:::

:::tip
In die tekenprogram oor 'n skandering getraseer? Maak die skandering hier ook oop en kontroleer die mure daarteen: sien [Model uit 'n skandering](topic:model-from-a-scan).
:::
