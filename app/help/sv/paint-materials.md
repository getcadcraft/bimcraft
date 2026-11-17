---
title: Måla material på väggar, golv och tak
summary: Ge element ett material som tegel, fasadpanel, takpannor, trä eller kakel, på hela elementet eller på en sida, sparat i IFC och visat i renderade bilder.
keywords: måla, material, ytskikt, yta, textur, tegel, fasadpanel, takbeläggning, trä, sten, kakel, betong, puts, gräs, grus, glas, metall, väggsida, insida, utsida, golvytskikt, rum, ytstil
from: fbfed676
---

{{ui:Måla}} på verktygsfältet öppnar materialbiblioteket över 3D-vyn: tegel och block, fasadpanel, takbeläggning, trä, sten, kakel, betong, puts, mark, glas och metall.

## Måla element

1. Klicka på {{ui:Måla}}.
2. Klicka på ett material.
3. Klicka på element i 3D-vyn. Varje klick målar det element du klickar på.

För att måla många på en gång, markera dem först (klicka, {{key:Ctrl}}+klicka, eller en [sökning](topic:find)), och klicka sedan på materialet: varje markerat element får det i ett steg.

Elementet visar materialets färg i 3D-vyn direkt. Dess textur syns i en [renderad bild](topic:render). {{key:Esc}} eller {{ui:Stäng}} avslutar målningen.

## Måla en sida

Välj {{ui:Bara sidan du klickade på}} och klicka sedan på den sida du vill ha: utsidan av en vägg i fasadpanel och dess insida i ett annat ytskikt, eller ett golvs översida i trä med undersidan kvar som den är. Resten av elementet behåller sitt material.

En sida hittas utifrån elementets egna riktningar, så den förblir samma sida när du flyttar eller vrider elementet.

För att måla golv rum för rum, ge varje rum ett eget golv ({{ui:Rita}} › {{ui:Golv}} › **Det här rummet**, se [Rum, golv, tak och undertak](topic:floors-and-roofs)), och måla sedan varje golvs översida.

## Ta bort ett material

Klicka på den randiga färgprovrutan ({{ui:Inget material}}) och klicka sedan på elementet. Varje material på det tas bort, inklusive på sidorna.

## I filen

Målning ändrar IFC (ett steg var, {{key:Ctrl+Z}} ångrar det) och förblir vanlig IFC:

- varje målat element får egenskapsuppsättningen `CadCraft_Render` som anger dess material, och en egenskap per målad sida;
- dess kropp får en ytstil med materialets färg, så att andra BIM-program visar färgen. I IFC4 anger stilen också texturen.

När BimCraft ändrar formen på en vägg du målat (du flyttar dess ände, till exempel), behåller väggen sitt material och sin färg, i BimCraft, i bilder och i andra program.

:::note
Texturerna ritas av BimCraft själv: de fungerar offline och är fria att använda för vad som helst (CC0). Egna bildtexturer finns inte ännu.
:::

## Texturer i 3D-vyn

En målad tegelvägg visar sina tegel, ett trägolv sina plank, i deras verkliga storlek, så snart färgen är på. Avmarkera **Visa texturerna i 3D-vyn** i Måla-panelen för att se platta färger i stället (en mycket stor modell stänger av dem själv och säger det). Färg efter egenskap visar alltid sina egna färger. Texturerna ritas av programmet, så ingenting laddas ner, och renderingarna och glTF-filen bär dem i alla fall.
