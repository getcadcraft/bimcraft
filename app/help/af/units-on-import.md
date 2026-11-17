---
title: Eenhede by invoer: 'n lêer verklaar sy eenhede, of jy word eers gevra
summary: Wanneer 'n lêer wat jy invoer sy eenhede verklaar, gebruik BimCraft dit en sê so. Wanneer nie, vra BimCraft voordat iets geplaas word en onthou jou antwoord vir daardie lêer.
keywords: eenhede, invoer, oopmaak, OBJ, STL, DWG, DXF, IFC, puntwolk, biblioteekitem, millimeter, meter, duim, voet, skaal, verkeerde grootte, te groot, te klein, 1000 keer, vra, onthou
from: f044e9bc
---

## Wat jy sal doen

Bring 'n lêer in en maak seker dit kom in die regte grootte in.

## Stappe

1. Maak die lêer oop of voeg dit by soos gewoonlik: {{ui:Oop}}, die Biblioteek se {{ui:Lêers}}, {{ui:Puntwolke}}, of Bou › Uit 'n tekening.
2. As die lêer sy eenhede verklaar, word niks gevra nie. Die statuslyn sê watter eenhede die lêer verklaar.
3. As nie, vra 'n dialoog **Eenhede van** die lêer. Kies wat een eenheid in die lêer is en klik {{ui:Gebruik hierdie eenhede}}. Niks word geplaas voordat jy antwoord nie.
4. {{ui:Kanselleer}} (of {{key:Esc}}) bring niks in nie.

## Watter lêers verklaar hul eenhede

- **IFC**: verklaar sy lengte-eenheid, en die status "Oopgemaak" sê watter een. 'n IFC wat geen verklaar nie, word gevra voordat dit oopgaan; jou antwoord word in die model geskryf, sodat die lêer dit verklaar sodra jy stoor.
- **DWG en DXF**: die tekening se invoegingseenhede. 'n Tekening sonder hulle word gevra (Biblioteeklêers, Bou › Uit 'n tekening, terrein uit kontoere).
- **Lyste van punte** vir terrein: verklaar geen eenhede nie. Jy word gevra.
- **Puntwolke**: LAS en LAZ met 'n koördinaatstelsel, E57, PTX en PLY verklaar hulle s'n. Ander word gevra.
- **OBJ en STL**: verklaar nooit eenhede nie. Jy word gevra.
- **glTF en GLB**: meter, volgens die formaat se eie reël.
- **Prente**: het nie 'n eie grootte nie. 'n Prent word by die aansig gepas, en jy stel sy grootte met Skaal deur twee punte. Die grootte wat jy gee, word vir daardie lêer onthou: as dit weer geplaas word, kom dit in daardie grootte in en die statuslyn sê so.
- **Die Puntwolke-byvoeging**: vra wanneer jy 'n wolk bou waarvan die lêer geen eenheid verklaar nie, en merk die wolk se getalle in die eenheid wat dit dra.

## Goed om te weet

- Die antwoord word vir daardie lêer onthou (sy naam, grootte en datum) op hierdie rekenaar, in elke CadCraft-program. Die volgende keer dat dieselfde lêer ingebring word, word jy nie gevra nie, en die statuslyn sê die onthoude eenhede is gebruik.
- Om weer gevra te word: die opdragpalet ({{key:Mod+K}}) › **Vra weer vir die eenhede van ingevoerde lêers**.
- 'n Eenhedelys wat 'n invoer reeds het (die Biblioteek se Eenhede, die wolkbalk se Eenhede, Tekening-eenhede in Uit 'n tekening) verander die eenhede steeds daarna. Die terreingereedskap se Eenhede-lys is nou net waarmee die vraag begin.
