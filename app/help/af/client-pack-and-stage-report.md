---
title: Kliëntpakkette, fase-verslae en opsies vergelyk
summary: Maak 'n kliëntpakket of 'n fase-verslag uit die model, met die massa-opsies vergelyk op oppervlakte en koste, vloeroppervlaktes, die tekeninge met hul hersienings en die uitgawe-geskiedenis. Elke syfer hou die elemente agter hom.
keywords: kliëntpakket, aanbieding, fase-verslag, verslag, opsie-vergelyking, opsies, vergelyk opsies, oppervlakte en koste, koste per opsie, geen tarief, massa, vloeroppervlaktes, tekeningelys, uitgawe-geskiedenis, syfers, gekoppelde syfers
from: f6679bf5
---

## Wat jy gaan doen

Bou 'n kliëntpakket of 'n fase-verslag uit die model soos dit nou is, en vergelyk gehou massa-opsies langs mekaar op oppervlakte en koste.

## Stappe

1. Maak in die linkerpaneel **Kliëntpakket en fase-verslag** oop.
2. Kies **Maak oop in Dokumente** langs Kliëntpakket of Fase-verslag. Die dokument verskyn in Dokumente vanaf die model, waar jy sy teks kan verander.
3. Klik in die voorskou op 'n syfer om die elemente agter dit te kies.
4. Kies **Bou die pakket**. Een zip-lêer word gestoor: die dokument as 'n PDF, 'n prent van die 3D-aansig, en `figures.csv`, wat elke syfer met die GlobalIds van sy elemente lys.

## Die velde

Jy kan hierdie in enige dokument gebruik.

| Veld | Wat dit druk |
|---|---|
| `{{stage}}` | Die projekfase uit die tekeningbesonderhede. |
| `{{options}}` | Die gehoue massa-opsies, langs mekaar: vloere, hoogte, voetspoor, bruto vloeroppervlakte, omhulsel en koste. |
| `{{areas}}` | Vloeroppervlakte per vlak, uit die vertrekke. |
| `{{sheets}}` | Die blaaie met die hersiening waarop elkeen staan en wanneer dit laas uitgereik is. |
| `{{issues}}` | Die uitgawe-geskiedenis en tekeningveranderingslys. |
| `{{changes}}` | Wat sedert die laaste uitgawe verander het, blad vir blad. |

## Hoe opsies geprys word

Koste kom slegs uit jou projek se prystabel (Energie/Koste, 5D-koste). Niks word vir jou geraam nie.

- 'n Pryslyn prys 'n opsie slegs wanneer sy klasse `IfcBuildingElementProxy` noem.
- Die vloeroppervlakte word geprys deur 'n ry waarvan die woorde die opsie se gebruik noem, soos office. Sonder een word 'n ry met die woorde gross floor area of building mass gebruik. 'n Ry per m² gebruik die gross floor area. 'n Ry per m³ gebruik die volume.
- Die omhulsel (omtrek maal hoogte) word geprys deur 'n ry met die woord envelope of facade.
- 'n Opsie sonder 'n passende ry wys **Geen tarief**. 'n Totaal word slegs gewys wanneer elke deel waarvoor gevra is, 'n tarief het.

## Goed om te weet

- Hou opsies met **Hou as opsie** in die kamerprogram se massa-lys. Sien Massa-opsies.
- 'n PDF kan nie elemente kies nie. Buite BimCraft dra `figures.csv` die skakel van elke syfer na sy elemente.

## Nog nie gebou nie

- Blaaie en getekende aansigte word nie in die dokument geplaas nie. Die pakket hou slegs 'n prent van die 3D-aansig.
