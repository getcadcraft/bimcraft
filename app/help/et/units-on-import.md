---
title: Ühikud importimisel: fail ütleb oma ühikud või sinult küsitakse esmalt
summary: Kui sisse toodav fail ütleb oma ühikud, kasutab BimCraft neid ja teatab sellest. Kui ei ütle, küsib BimCraft enne midagi paigutamist ja jätab sinu vastuse sellele failile meelde.
keywords: ühikud, import, ava, OBJ, STL, DWG, DXF, IFC, punktpilv, teegi üksus, millimeetrid, meetrid, tollid, jalad, mõõtkava, vale suurus, liiga suur, liiga väike, 1000 korda, küsi, meeldejäetud
from: f044e9bc
---

## Mida teed

Too fail sisse ja veendu, et see tuleb õige suurusega.

## Sammud

1. Ava või lisa fail tavapäraselt: {{ui:Avatud}}, teegi {{ui:Failid}}, {{ui:Punktpilved}} või Koosta › Joonisest.
2. Kui fail ütleb oma ühikud, ei küsita midagi. Olekuribal on öeldud, mis ühikud failis on.
3. Kui ei ütle, ilmub dialoog, mis küsib faili **ühikuid**. Vali, mis on faili üks ühik, ja klõpsa {{ui:Kasuta neid ühikuid}}. Enne vastamist ei paigutata midagi.
4. {{ui:Loobu}} (või {{key:Esc}}) ei too midagi sisse.

## Millised failid ütlevad oma ühikud

- **IFC**: ütleb oma pikkusühiku ja "Avatud" näitab, milline. IFC, mis ühikuid ei ütle, küsitakse enne avamist; sinu vastus kirjutatakse mudelisse ja fail ütleb selle üles pärast salvestamist.
- **DWG ja DXF**: joonise sisestusühikud. Joonis ilma nendeta küsitakse (teegi failid, Koosta › Joonisest, maapind kontuuridest).
- **Punktide loendid** maapinna jaoks: ühikuid ei ütle. Sinult küsitakse.
- **Punktpilved**: LAS ja LAZ koordinaatsüsteemiga, E57, PTX ja PLY ütlevad oma ühikud. Teisi küsitakse.
- **OBJ ja STL**: ei ütle kunagi ühikuid. Sinult küsitakse.
- **glTF ja GLB**: meetrites, formaadi enda reegli järgi.
- **Pildid**: neil ei ole oma suurust. Pilt sobitatakse vaatesse ja suuruse määrad mõõtkavaga kahe punkti järgi. Antud suurus jäetakse selle faili jaoks meelde: kui pilt paigutatakse uuesti, tuleb see sellesse suurusesse ja olekuribal ütleb seda.
- **Punktpilvede lisandmoodul**: küsib, kui koostad pilve, mille fail ei ütle ühikut, ja märgib pilve arvud selle kantud ühikuga.

## Hea teada

- Vastus jäetakse selle faili jaoks meelde (selle nimi, suurus ja kuupäev) sellesse arvutisse kõigis CadCraft'i rakendustes. Järgmisel korral, kui sama fail sisse tuleb, ei küsita sinult midagi ja olekuribal öeldakse, et kasutati meeldejäetud ühikuid.
- Uuesti küsimiseks: käsupalett ({{key:Mod+K}}) › **Küsi uuesti imporditud failide ühikuid**.
- Ühikute loend, mis impordil juba on (teegi Ühikud, pilvede riba Ühikud, Joonise ühikud valikus Koosta › Joonisest), muudab ühikuid ikka pärast. Maapinnatööriista Ühikute loend on nüüd vaid see, millega küsimine algab.
