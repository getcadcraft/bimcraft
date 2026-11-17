---
title: Mudeli eksportimine USD-na
summary: Kirjuta avatud IFC-mudelid USD-na renderdamiseks, stseenide kokkupanekuks ja teistele 3D-programmidele, iga elemendi IFC-klassi, GlobalId ja omadustega.
keywords: usd, usda, usdc, usdz, openusd, eksport, ifc, globalid, omadused, korrused, erialad, stseeni kokkupanek, archviz, renderdamine
from: 2be5f7b8
---

{{ui:USD}} tööriistaribal kirjutab avatud oleva (kõik mudelid, seotud mudelid seal, kus need paigutasid) ühe USD-failina.

## Eksport

1. Vali tööriistaribal {{ui:USD}}.
2. Vali {{ui:Tekst (.usda)}}, {{ui:Binaarne (.usdc)}} või {{ui:Pakend (.usdz)}}.
3. Fail laaditakse alla. Olekuriba ütleb, mitu elementi sisse läks.

## Mis failis on

| IFC-mudelis | USD-failis |
|---|---|
| Krunt, hoone, korrused | Pesastatud rühmad, korrused kõrguse järjekorras |
| Iga element | Üks primitiiv oma korruse ja eriala all (Arhitektuur, Konstruktsioon, MEP, Sisustus, Krunt, Ruumid, Muu), geomeetriaga võrguna |
| Klass, GlobalId, nimi, tüüp, silt | Atribuudid nimega `ifc:class`, `ifc:globalId`, `ifc:name` jne |
| Omaduste ja koguste hulgad | Üks atribuut iga omaduse kohta; pikkused, pindalad ja mahud meetrites, ruutmeetrites ja kuupmeetrites |
| Värvid | Materjalid (koos läbipaistvusega) |
| Ruumid | Säilitatud, märgitud juhenditena, et renderdajad need vahele jätaksid |

Geomeetria asub IFC-faili enda koordinaatides. Paigutus järgib CadCraft'i avaldatud USD-konventsioone hoonete jaoks.
