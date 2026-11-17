---
title: Exportul modelului ca Collada sau pentru Google Earth
summary: Scrie modelele IFC deschise într-un fișier Collada (.dae) pentru Blender și alte programe 3D sau ca pachet Google Earth (.kmz), plasat unde se află modelul pe hartă.
keywords: collada, dae, kmz, kml, google earth, blender, export, geolocalizare, georeferențiere, latitudine, longitudine, locație, programe 3d
from: 81cfec09
---

{{ui:Collada}} din bara de instrumente (sau {{ui:Export Collada (.dae, .kmz)…}} din meniul Fișier, în stilurile de meniu și panglică) scrie ce este deschis ca Collada 1.4.1: fiecare model care este afișat, iar modelele federate acolo unde le-ați plasat.

## Export

1. Alegeți {{ui:Collada}}.
2. Alegeți formatul:
   - {{ui:Fișier Collada (.dae), pentru Blender și alte programe 3D}}.
   - {{ui:Pachet Google Earth (.kmz): modelul plasat unde se află pe hartă}}. Este oferit doar când modelul are o locație.
3. Alegeți opțiunile, apoi {{ui:Export}}. Fișierul se descarcă, iar bara de stare spune câte elemente au intrat.

| Opțiune | Ce face |
|---|---|
| {{ui:Scrieți locația în fișier}} | Adaugă latitudinea, longitudinea, înălțimea și orientarea originii fișierului în .dae |
| {{ui:Înălțime}} | {{ui:Pe teren: nivelul 0 al modelului stă pe teren}}, sau {{ui:Înălțimea proprie a modelului deasupra nivelului mării}} |
| {{ui:Include camerele și spațiile}} | Spațiile intră și ele (sunt lăsate afară implicit) |
| {{ui:Include elementele ascunse}} | Elementele pe care le-ați ascuns sunt scrise și ele (implicit se scrie doar ce vedeți) |

## Ce conține fișierul

| În model | În fișierul Collada |
|---|---|
| Clădire, niveluri | Noduri imbricate, niveluri în ordinea cotei; elementele fără nivel sub „Unplaced” |
| Fiecare element | Un nod cu propria plasă, denumit ca în model (numele său, altfel clasa și eticheta) |
| Clasă, GlobalId, tip predefinit | În datele suplimentare ale nodului (profil IFC), cu numele exact (profil ModelCraft) |
| Culori | Materiale, cu transparență |
| Unități și axe | Metri, Z în sus. Nivelul 0 al modelului din față este la înălțimea 0 |

Modelul rămâne aproape de origine pe toată suprafața terenului, astfel încât programele care lucrează în simplă precizie îl afișează fără tremurături. ModelCraft scrie fișierele Collada cu același modul de scriere și deschide aceste fișiere cu numele elementelor.

## De unde vine locația

Modelul din față dă locația, în același fel în care {{ui:Măsurare}} calculează latitudinea și longitudinea unui punct:

- O conversie de hartă (IFC4 IfcMapConversion sau seturile de proprietăți IFC2X3) prin sistemul de coordonate al modelului. Un sistem ales pentru model are prioritate față de cel denumit în fișier.
- Altfel, latitudinea și longitudinea amplasamentului (aproximative: suficiente pe un amplasament).

Orientarea se măsoară, nu se presupune: ține cont de rotația hărții, de nordul geografic și de convergența hărții. Pentru a da unui model o locație, folosiți {{ui:Originea pe hartă…}} din Măsurare.

## În alte programe

- **Google Earth** citește fișierul .kmz: modelul apare la locație, orientat spre nord. Un .dae simplu nu are un loc de unde Google Earth să citească o locație; folosiți .kmz.
- **Blender** (4.x și anterior): File, Import, Collada (.dae). Fiecare element intră ca propriul obiect, cu materialul său. Locația este păstrată în datele suplimentare ale fișierului, pe care Blender nu le citește. Blender 5.0 a eliminat importatorul Collada integrat; acolo, folosiți în schimb {{ui:USD}} sau exportul glTF, ori deschideți .dae în Blender 4.5 și salvați un .blend.

Testele noastre verifică fiecare fișier față de schema Collada 1.4.1 și îl citesc apoi cu un cititor Collada independent. Fișierele nu au fost deschise în Blender sau Google Earth.
