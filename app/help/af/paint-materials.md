---
title: Verf materiaal op muure, vloere en dakke
summary: Gee elemente 'n materiaal soos baksteen, sye, dakspaan, hout of teël, op die hele element of op een kant, gestoor in die IFC en gewys in weergegewe prente.
keywords: verf, materiaal, materiale, afwerking, afwerkings, tekstuur, baksteen, sye, dakspaan, dakbedekking, hout, klip, teël, beton, pleister, gras, gruis, glas, metaal, muurkant, binne, buite, vloerafwerking, vertrek, oppervlakstyl
from: fbfed676
---

{{ui:Verf}} op die werkbalk maak die materiaalbiblioteek oor die 3D-aansig oop: baksteen en blok, sye, dakbedekking, hout, klip, teël, beton, pleister, grond, glas en metaal.

## Verf elemente

1. Klik {{ui:Verf}}.
2. Klik 'n materiaal.
3. Klik elemente in die 3D-aansig. Elke klik verf die element wat jy klik.

Om baie tegelyk te verf, kies hulle eers (klik, {{key:Ctrl}}+klik, of 'n [soektog](topic:find)), en klik dan die materiaal: elke gekose element kry dit in een stap.

Die element wys die materiaal se kleur dadelik in die 3D-aansig. Die tekstuur wys in 'n [weergegewe prent](topic:render). {{key:Esc}} of {{ui:Maak toe}} beëindig verf.

## Verf een kant

Kies {{ui:Net die kant wat geklik is}}, en klik dan die kant wat jy wil hê: die buitekant van 'n muur in sye en sy binnekant in 'n ander afwerking, of 'n vloer se bokant in hout met sy onderkant soos dit is. Die res van die element hou sy materiaal.

'n Kant word gevind vanaf die element se eie rigtings, so dit bly dieselfde kant wanneer jy die element skuif of draai.

Om vloere vertrek vir vertrek te verf, gee elke vertrek sy eie vloer ({{ui:Teken}} › {{ui:Vloer}} › **Hierdie vertrek**, sien [Vertrekke, vloere, plafonne en dakke](topic:floors-and-roofs)), en verf dan elke vloer se bokant.

## Haal 'n materiaal af

Klik die gestreepte monster ({{ui:Geen materiaal}}), en klik dan die element. Elke materiaal daarop, insluitend sye, gaan af.

## In die lêer

Verf verander die IFC (een stap elk; {{key:Ctrl+Z}} ontdoen dit) en bly gewone IFC:

- elke geverfde element kry die eienskapstel `CadCraft_Render` wat sy materiaal noem, en een eienskap per geverfde kant;
- sy liggaam kry 'n oppervlakstyl met die materiaal se kleur, sodat ander BIM-programme die kleur wys. In IFC4 noem die styl ook die tekstuur.

Wanneer BimCraft 'n muur wat jy geverf het hervorm (jy skuif sy einde, byvoorbeeld), hou die muur sy materiaal en sy kleur, in BimCraft, in prente en in ander programme.

:::note
Die teksture word deur BimCraft self geteken: hulle werk aflyn en is gratis om vir enigiets te gebruik (CC0). Jou eie beeldteksture is nog nie gebou nie.
:::

## Teksture in die 3D-aansig

'n Geverfde baksteenmuur wys sy stene, 'n houtvloer sy planke, op hul werklike grootte, sodra die verf aan is. Ontmerk **Wys die teksture in die 3D-aansig** in die Verf-paletjie om eerder plat kleure te sien ('n baie groot model skakel hulle self af en sê so). Kleur volgens eienskap wys altyd sy eie kleure. Die teksture word deur die program geteken, so niks word afgelaai nie, en die weergawes en die glTF-lêer dra hulle in albei gevalle.
