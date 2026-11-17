---
title: Meet afstande, vlakoppervlaktes en liggings in 3D
summary: Meet tussen twee punte van 'n IFC-model met vasvang aan hoeke en rande, lees die verskil langs X, Y en Z, en meet die oppervlakte van 'n plat vlak.
keywords: meet, meting, afstand, lengte, maat, oppervlakte, vlakoppervlakte, vasvang, hoek, rand, meetband, liniaal, speling, ligging, breedtegraad, lengtegraad, lat long, koördinate, georefereer, kaartomskakeling, EPSG, opmeting, ooskoördinate, noordkoördinate, WGS 84, datum
from: 5f430bba
---

## Wat jy gaan doen

Kontroleer 'n speling, 'n muurlengte of die grootte van 'n vlak reguit uit die model, sonder om die outeurprogram oop te maak.

## Stappe

1. Maak 'n IFC-model oop.
2. Klik {{ui:Meet}} in die nutsbalk, of druk {{key:M}}. 'n Balk gaan oop onderaan die aansig.
3. **'n Afstand:** met {{ui:Afstand}} gekies, klik die eerste punt, dan die tweede. Naby 'n hoek vang die wyser daarop vas, naby 'n rand op die rand; die klein etiket by die wyser sê watter een. Elke paar klikke maak een meting.
4. **Die oppervlakte van 'n vlak:** kies {{ui:Vlakoppervlakte}} en klik 'n vlak. Die hele plat vlak lig op en sy oppervlakte wys.
5. **Reguit lyne:** hou {{key:Shift}} ingedruk terwyl jy die tweede punt kies, of druk {{ui:Reguit}} in die balk om dit aan te hou. Die lyn loop dan langs die een as wat die wyser die naaste is (in 'n bo-aansig langs X of Y van die plan; in ander aansigte langs X, Y of Z), en die wyseretiket sê "reguit langs 'n as". {{key:M}} begin en stop steeds Meet.
6. Klik {{ui:Maak skoon}} om die metings te verwyder, of {{ui:Klaar}} (of {{key:Esc}}) om met meet op te hou.

## Wat jy behoort te sien

- 'n Lyn tussen die twee punte met sy lengte daarop, en in die balk die lengte met hoe ver dit langs X, Y en Z loop (in die model se asse, Z op), alles in die {{ui:Eenhede}} wat op die nutsbalk gekies is.
- 'n Vlak se oppervlakte in vierkante meter, op die vlak en in die balk.
- Etikette bly by hul metings terwyl jy wentel, skuif en zoem.
- Terwyl jy meet, kies klikke nie elemente nie. 'n Snitvlak of -boks sny die model steeds, en jy kan meet wat dit wys, insluitend die gesnyde vlakke.

## Waar 'n punt op die aarde is

Klik {{ui:Ligging}} in die meetbalk, en klik dan 'n punt op die model (dit vang aan hoeke en rande vas soos afstande). Die balk wys:

- die **breedtegraad en lengtegraad**, in desimale grade en in grade, minute en sekondes, in WGS 84 om mee te begin;
- die **kaartkoördinate** (ooskoördinate en noordkoördinate, geskryf in die {{ui:Eenhede}} wat op die nutsbalk gekies is) in die model se eie kaartstelsel, byvoorbeeld `EPSG:28356`;
- die **hoogte** en die vertikale datum wat die lêer noem, en die lêer se **eie datum** (byvoorbeeld GDA94).

{{ui:Kopieer}} sit alles op die knipbord in een reël. Verander die stelsel waarin die breedte- en lengtegrade is onder {{ui:Instellings}} › {{ui:BimCraft}} › {{ui:Ligging}}: WGS 84 (soos GPS en webkaarte), die lêer se eie datum, of 'n ander algemene een soos ETRS89 of NAD83.

Dit het 'n georefereerde model nodig: een wat met kaartkoördinate uitgevoer is ('n kaartomskakeling na 'n geprojekteerde stelsel met 'n EPSG-kode). 'n Model wat net 'n terrein se breedte- en lengtegraad het, kry 'n benaderde posisie, uitgewerk vanaf die terrein se punt en sy ware noord, en die balk sê so. Met verskeie modelle oop gebruik elke punt die georeferensie van sy eie model.

:::note
Oorgang tussen datums (byvoorbeeld GDA94 na WGS 84) gebeur sonder rooster-lêers, so dit is goed tot 'n paar meter; die statuslyn sê hoe goed. Die kaartkoördinate self is presies.
:::

## Algemene foute

- **"…het geen georeferensie nie".** Die lêer het geen kaartomskakeling en geen terrein breedte- en lengtegraad nie. Voer dit weer uit met sy koördinaatstelsel gestel (gedeelde koördinate / opmetingspunt in die outeurgereedskap).
- **Kaartkoördinate maar geen breedte- en lengtegraad nie.** Die lêer noem sy kaartstelsel sonder 'n EPSG-kode, of met een wat nie in die lys is nie; die statuslyn sê watter een.

- **Die punt beland op die vlak, nie die hoek nie.** Vasvang kyk na die element onder die wyser. Beweeg nader aan die hoek, of zoem in.
- **Die oppervlakte is kleiner as verwag.** Openings word uitgelaat, en 'n vlak wat buig is verskeie vlakke: klik elkeen.
- **{{key:Esc}} het meet gestop.** Die eerste {{key:Esc}} gooi 'n halfgemaakte afstand weg; die tweede stop.

## Volgende

- [Snij 'n IFC-model met 'n snitvlak](topic:section-plane)
- [Verberg, isoleer en sien deur elemente](topic:hide-and-isolate)
