---
title: Aanlyn en vanlyn
summary: Wat BimCraft van die werf laai, hoe Stoor vir vanlyn IFC-modelle en DWG-tekeninge sonder enige verbinding laat oopmaak, en waarom niks wat jy oopmaak ooit opgelaai word nie.
keywords: vanlyn, aanlyn, internet, verbinding, geen netwerk, vliegtuig, werfbesoek, stoor vir vanlyn, vanlyn gereed, oplaai, privaatheid, wasm, webassembly, ifc-enjin, dwg, wolk
from: 39e5c7eb
---

BimCraft lees jou lêers binne die blaaieroortjie. Oopmaak, inspekteer, wysig en stoor stuur jou lêers nooit enige plek heen nie, aanlyn of vanlyn. [Werk vanlyn](common:offline) verduidelik hoe vanlynkopieë in elke program werk; hierdie bladsy dek wat eie is aan BimCraft.

## Wat BimCraft van die werf laai

| Deel | Wanneer dit sonder 'n vanlyn-kopie laai | Grootte |
|---|---|---|
| Die program self, met die 3D-kyker en die IFC-enjin se kode | Wanneer jy BimCraft oopmaak | Verskeie megagrepe |
| Die IFC-enjin se WebAssembly-deel | Die eerste IFC-lêer wat jy in die oortjie oopmaak: "Begin die IFC-enjin…" | Ongeveer 1.6 MB |

DWG- en DXF-tekeninge, projek- en familielêers en vouers het niks ekstra nodig nie: hul lesers is deel van die program.

## Stoor BimCraft vir vanlyn gebruik

1. Maak BimCraft oop terwyl jy aanlyn is.
2. Klik {{ui:Stoor vir vanlyn}} in die programbalk bo.
3. Kyk hoe die knoppie optel: "Stoor 40 van 212", byvoorbeeld. BimCraft se kopie is ongeveer 11 MB, omdat dit die IFC-enjin insluit.
4. Wag vir {{ui:Vanlyn gereed}}.

Sodra dit {{ui:Vanlyn gereed}} sê, maak IFC-modelle, DWG- en DXF-tekeninge, projeklêers, vouers en hierdie hulp almal sonder 'n verbinding oop. Jy hoef nie 'n IFC- of DWG eers oop te maak om die lesers "op te warm" nie.

Om die kopie op te dateer of te verwyder, klik {{ui:Vanlyn gereed}} en kies {{ui:Stoor weer (kry die nuutste weergawe)}} of {{ui:Verwyder die vanlyn-kopie}}.

## Wat die knoppie sê

| Knoppie | Beteken |
|---|---|
| {{ui:Stoor vir vanlyn}} | Nog geen vanlyn-kopie in hierdie blaaier nie. Klik om een te stoor |
| "Stoor *n* van *m*" | Stoor; hou die oortjie oop totdat dit klaar is |
| {{ui:Vanlyn gereed}} | Gestoor. Hou die muis daarop om te sien wanneer; klik vir die kieslys |
| {{ui:Could not save}} | Sommige lêers is nie afgelaai nie. Kontroleer jou verbinding en klik om weer te probeer. Die laaste goeie kopie, indien enige, word behou |
| {{ui:Offline not available}} | Hierdie venster kan nie 'n vanlyn-kopie hou nie (’n privaatvenster of ’n bestuurde rekenaar). Sien [Werk vanlyn](common:offline) |

:::offline
Jy is vanlyn.

- As die knoppie {{ui:Vanlyn gereed}} sê, maak elke soort lêer soos gewoonlik oop.
- As dit nie sê nie, werk net wat hierdie oortjie reeds gelaai het: 'n leser wat nie in hierdie oortjie gelaai is nie, kan nie begin nie, en om so 'n lêer oop te maak wys 'n fout van die blaaier in die statuslyn. Moenie die oortjie herlaai voordat jy weer aanlyn is nie.
:::

## Wat nooit 'n verbinding nodig het nie

Sodra BimCraft in die oortjie oop is, werk hierdie sonder 'n gestoorde kopie ook vanlyn:

- Lees projek- en familielêers en kontroleer vouers.
- Kies elemente, lees eienskappe en wysig IFC-waardes in 'n model wat reeds oop is.
- {{ui:Stoor as IFC}} en {{ui:Laai CSV af}}: albei is aflaaie wat in die oortjie gemaak word.

## Wat nog nie beskikbaar is nie

- **Wolkstoor.** Lêers word net op jou rekenaar gestoor.

Sien [Waar jou lêers heen gaan](common:your-files).
