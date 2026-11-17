---
title: Die perseel se grond, die bouperseel en plaveisel
summary: Bring die grond in die model in vanaf opmetingspunte, kontoerlyne, 'n LAS- / LAZ-skandering, 'n GeoTIFF, 'n LandXML-oppervlak (CivilCraft s'n) of 'n paar puntpeile; sny die huis se bouperseel in met sy hellings en afgrawing / opvulling; plaas opritte, lope en patio's daarop; gee dit aan CivilCraft as LandXML.
keywords: terrein, grond, perseel, topografie, opmeting, punte, PNEZD, kontoerlyne, LAS, LAZ, LiDAR, GeoTIFF, DEM, hoogte, puntpeil, helling, gelykmaking, bouperseel, afgrawing, opvulling, grondwerk, daglig, oprit, loop, patio, plaveisel, LandXML, CivilCraft
from: 208298d6
---

## Wat jy sal doen

Plaas die huis op sy perseel. Die grond word deel van die model: dit word in 3D gewys, in snitte en aansigte gesny, met kontoerlyne op die plan. 'n Bouperseel word onder die huis in die grond ingesny, opritte en lope volg dit, en fondasievoete daal saam daarmee af.

## Bring die grond in

1. Maak {{ui:Bou}} oop en kies {{ui:Terrein}}.
2. Kies een van:
   - **Open 'n opmetingslêer…**: opmetingspunte (PNEZD, PENZD of gewone oos, noord, hoogte; geskei deur komma, tab of spasie), kontoerlyne in 'n DXF of DWG (polilyne op hul hoogte, 3D-polilyne), 'n LAS- of LAZ-skandering (grondpunte behou, uitgedun tot ongeveer een per vierkante meter), 'n GeoTIFF of ASCII-hoogtegrid, of 'n **LandXML**-oppervlak soos CivilCraft uitvoer (sy eie punte en driehoeke word behou; as die lêer verskeie oppervlaktes hou, vra BimCraft watter een die grond is; sy eenhede kom uit die lêer). Kies eers die lêer se eenhede (LandXML sê self watter).
   - Of tik 'n **Puntpeil** (vanaf hierdie vlak se vloer, so `-1'` is 'n voet daaronder) en klik punte op die plan, verander die hoogte en klik meer, en dan **Maak die grond**. Drie punte is genoeg om mee te begin.

Opmetingskoördinate ver van die model (staatsvlak, UTM) word na die huis geskuif, en die hoogtes word so gestel dat die grond by die huis ongeveer 8" onder die eerste vloer is. **Hef die grond op** in **Eienskappe** korrigeer dit met enige bedrag.

## Die bouperseel

1. Kies {{ui:Bouperseel}}.
2. Stel die **Rand** rondom die huis, hoe ver die **perseel sit onder die vloer** (8" onder 'n blad, meer onder 'n kruipruimte) en die **Hellings** uit na die bestaande grond (`2:1` = twee voet uit vir elke voet op of af).
3. Wys binne die huis en klik.

Die grond word onder die huis platgemaak en uit tot by die rand, en dan loop hellings op in die heuwel (afgrawing) en af na die lae kant (opvulling) totdat dit die bestaande grond ontmoet. **Eienskappe** van die grond en van die perseel gee die afgrawing- en opvulvolumes. Skuif die mure en die perseel volg.

## Opritte, lope en patio's

Kies {{ui:Plaveisel}}, kies **Loop**, **Oprit** of **Patio**, en klik die hoeke. Klik die eerste hoek weer, dubbelklik of druk {{key:Enter}} om klaar te maak. Die plaveisel volg die voltooide gelykmaking; verander die soort of dikte in **Eienskappe**.

## Fondasievoete volg die gelykmaking

Met die grond in die model volg muurfondasies en kruipruimte-fondasievoete dit: langs elke muur bly die fondasievoet sy diepte onder die grond buite, en spring in heel 8"-stappe waar die grond daal (sien [Fondasies onder die mure](topic:foundations)).

## Gee dit aan CivilCraft

**LandXML vir CivilCraft** (in die Terrein-ry, of die grond se **Eienskappe**) laai die bestaande grond en die voltooide gelykmaking af as 'n LandXML-lêer. Maak dit oop in CivilCraft vir werklike gelykmaking, dreinering en grondwerk.

## Goed om te weet

- Die grond benodig 'n IFC4-model, soos elke nuwe gebou.
- Kontoerlyne wys op die plan van die grondvlak teen die interval wat in die grond se **Eienskappe** gestel is; elke vyfde is swaarder.
- Die grond word as 'n IFC-terreinelement gestoor ('n geslote getrianguleerde oppervlak, sodat snitte dit sny); die perseel en plaveisel word saam daarmee gestoor. Skrap die grond om weer te begin: sy perseel en plaveisel gaan saam daarmee.
