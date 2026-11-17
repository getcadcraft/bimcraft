---
title: Tel hoeveelhede op, lys elemente en skedule ruimtes
summary: Tel elemente en tel hul lengtes, oppervlaktes, volumes of enige getalseienskap op, gegroepeer volgens enige eienskap; lys een ry per element; of skedule die ruimtes met hul oppervlaktes en volumes. Elkeen laai as 'n CSV af.
keywords: hoeveelheid, hoeveelhede, hoeveelheidsopname, totale, som, skedule, hoeveelheidslys, boq, qto, csv, groepeer volgens, tel, lengte, oppervlakte, volume, ruimtes, kamers, kamerskedule, oppervlakteskedule, elementlys
from: e2e7210c
---

## Wat jy gaan doen

Kry totale uit 'n model: muurlengtes per verdieping, deurtellings per tipe, plaatvolume per materiaal, die koste van elke sone.

## Stappe

1. Maak 'n IFC-model oop.
2. Maak {{ui:Quantity totals}} oop in die linkerpaneel.
3. In {{ui:Count}}, kies {{ui:Every element}} of net die gekose.
4. Onder {{ui:Group by}}, kies 'n eiendom, soos {{ui:Class}}. Klik {{ui:Add a group}} om verder te verdeel, tot drie, byvoorbeeld volgens {{ui:Storey}}.
5. Onder {{ui:Add up}}, merk die getalle om op te tel. Die model se hoeveelheidstelle is by die begin gemerk.
6. Klik {{ui:Download CSV}} om die tabel in 'n sigblad oop te maak.

## Wat jy behoort te sien

- 'n Ry per groep met hoeveel elemente dit het en elke totaal, en 'n totaalry.
- Elemente sonder 'n waarde word getel maar tel niks by nie. Wanneer dit gebeur, voeg die CSV 'n "uitgelaat"-kolom langs die totaal by sodat jy kan sien hoeveel.
- Getalle is in die lêer se eie eenhede, soos die lêer hulle stoor, dikwels millimeter vir lengtes.

## Een ry per element, of die ruimtes

Verander {{ui:Show}}:

- **Een ry per element**: elke element op sy eie ry, met die eienskappe onder {{ui:Columns}} en die getalle onder {{ui:Add up}}. Die CSV begin met elke element se GlobalId. Klik die eerste waarde in 'n ry om daardie element te kies.
- **Ruimtes**: elke kamer met sy nommer, naam, verdieping, oppervlakte en volume, en hul totale. Oppervlaktes en volumes kom uit die ruimte se hoeveelhede soos die lêer hulle stel. Wanneer die lêer geen het nie, word hulle uit die ruimte se vorm gemeet in m² en m³ en in skuinsdruk gewys; die CSV sê watter is wat.

## Volgende

- [Vind elemente volgens klas, naam of eienskap](topic:find)
- [Kleur elemente volgens 'n eienskap](topic:color-by-property)

## Infrastruktuur (IFC 4.3)

Kies **Infrastruktuur (IFC 4.3)** in die aansigslys om paaie, spoorlyne, brue en mariene werke te sien, getotaal per klas en tipe, met die lengte, oppervlakte en volume wat die lêer self noem. 'n Hoeveelheid wat die lêer nie noem nie, bly leeg en word nooit uitgewerk nie. **Stuur infrastruktuurhoeveelhede na TakeoffCraft** stoor 'n `.quantities.json`-lêer wat TakeoffCraft as getipeerde hoeveelhede oopmaak.
