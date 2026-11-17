---
title: A modell exportálása USD-ként
summary: A megnyitott IFC-modelleket USD-ként írja ki renderelésre, jelenetösszeállításra és más 3D-s programokhoz, minden elem IFC-osztályával, GlobalId-jával és tulajdonságaival.
keywords: usd, usda, usdc, usdz, openusd, exportálás, ifc, globalid, tulajdonságok, szintek, szakágak, jelenetösszeállítás, archviz, renderelés
from: 2be5f7b8
---

A {{ui:USD}} gomb az eszköztáron egyetlen USD-fájlba írja ki, ami meg van nyitva (minden modellt, a föderált modelleket is ott, ahová elhelyezte).

## Exportálás

1. Válassza a {{ui:USD}} gombot az eszköztáron.
2. Válassza ezek egyikét: {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} vagy {{ui:Package (.usdz)}}.
3. A fájl letöltődik. Az állapotsor jelzi, hány elem került bele.

## A fájl tartalma

| Az IFC-modellben | Az USD-fájlban |
|---|---|
| Telephely, épület, szintek | Egymásba ágyazott csoportok, a szintek magasság szerinti sorrendben |
| Minden elem | Egy primitív a saját szintje és szakága alatt (Építészet, Szerkezet, MEP, Berendezés, Telephely, Terek, Egyéb), a geometriájával hálóként |
| Osztály, GlobalId, név, típus, címke | `ifc:class`, `ifc:globalId`, `ifc:name` stb. nevű attribútumok |
| Tulajdonság- és mennyiséghalmazok | Tulajdonságonként egy attribútum; a hosszak, területek és térfogatok méterben, négyzetméterben és köbméterben |
| Színek | Anyagok (átlátszósággal) |
| Terek | Megmaradnak, segédként megjelölve, hogy a renderelők kihagyják őket |

A geometria az IFC-fájl saját koordinátáin marad. Az elrendezés a CadCraft épületekhez írt USD-konvencióit követi.
