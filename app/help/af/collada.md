---
title: Voer die model uit as Collada of vir Google Earth
summary: Skryf die oop IFC-modelle as 'n Collada-lêer (.dae) vir Blender en ander 3D-programme, of as 'n Google Earth-pakket (.kmz) wat geplaas is waar die model op die kaart is.
keywords: collada, dae, kmz, kml, google earth, blender, voer uit, geolokasie, georeferensie, breedtegraad, lengtegraad, ligging, 3D-programme
from: 81cfec09
---

{{ui:Collada}} op die werkbalk (of {{ui:Voer Collada uit (.dae, .kmz)…}} in die Lêer-kieslys van die kieslys- en lintstyle) skryf wat oop is as Collada 1.4.1: elke model wat gewys word, gekoppelde modelle waar jy hulle geplaas het.

## Uitvoer

1. Kies {{ui:Collada}}.
2. Kies die formaat:
   - {{ui:Collada-lêer (.dae), vir Blender en ander 3D-programme}}.
   - {{ui:Google Earth-pakket (.kmz): die model geplaas waar dit op die kaart is}}. Word net aangebied wanneer die model 'n ligging het.
3. Kies die opsies, en dan {{ui:Voer uit}}. Die lêer word afgelaai, en die statusbalk sê hoeveel elemente ingegaan het.

| Opsie | Wat dit doen |
|---|---|
| {{ui:Skryf die ligging in die lêer}} | Voeg die breedtegraad, lengtegraad, hoogte en rigting van die lêer se oorsprong by die .dae |
| {{ui:Hoogte}} | {{ui:Op die grond: die model se vlak 0 sit op die terrein}}, of {{ui:Die model se eie hoogte bo seespieël}} |
| {{ui:Sluit kamers en ruimtes in}} | Ruimtes word ook ingesluit (dit word standaard uitgelaat) |
| {{ui:Sluit versteekte elemente in}} | Elemente wat jy versteek het, word ook geskryf (standaard word net wat jy sien, geskryf) |

## Wat in die lêer is

| In die model | In die Collada-lêer |
|---|---|
| Gebou, verdiepings | Geneste nodusse, verdiepings in volgorde van hoogte; elemente op geen verdieping onder "Unplaced" |
| Elke element | Een nodus met sy eie maas, genoem soos in die model (sy naam, anders sy klas en etiket) |
| Klas, GlobalId, vooraf gedefinieerde tipe | In die nodus se ekstra data (profiel IFC), met die presiese naam (profiel ModelCraft) |
| Kleure | Materiaal, met deursigtigheid |
| Eenhede en asse | Meter, Z op. Vlak 0 van die voorste model is op hoogte 0 |

Die model bly naby die oorsprong oor die grond, sodat programme wat met enkele presisie werk, dit sonder flikkering wys. ModelCraft skryf sy Collada-lêers met dieselfde skrywer, en open hierdie lêers met hul elementname.

## Waar die ligging vandaan kom

Die voorste model gee die ligging, op dieselfde manier as {{ui:Meet}} 'n punt se breedtegraad en lengtegraad bereken:

- 'n Kaartomskakeling (IFC4 IfcMapConversion, of die IFC2X3-eienskapstelle) deur die model se koördinaatstelsel. 'n Stelsel wat jy vir die model gekies het, wen bo een wat die lêer noem.
- Anders die perseel se breedtegraad en lengtegraad (benaderd: goed oor 'n perseel).

Die rigting word gemeet, nie aangeneem nie: dit neem die kaart se rotasie, ware noord en die kaart se konvergensie in ag. Om 'n model 'n ligging te gee, gebruik {{ui:Kaartoorsprong…}} in Meet.

## In ander programme

- **Google Earth** lees die .kmz: die model verskyn by die ligging, na noord gedraai. 'n Gewone .dae het geen plek waaruit Google Earth 'n ligging lees nie; gebruik die .kmz.
- **Blender** (4.x en vroeër): File, Import, Collada (.dae). Elke element kom in as sy eie objek met sy materiaal. Die ligging word in die lêer se ekstra data bewaar, wat Blender nie lees nie. Blender 5.0 het sy ingeboude Collada-invoerder laat vaar; gebruik dan eerder {{ui:USD}} of die glTF-uitvoer, of maak die .dae oop in Blender 4.5 en stoor as 'n .blend.

Ons toetse kontroleer elke lêer teen die Collada 1.4.1-skema en lees dit terug met 'n onafhanklike Collada-leser. Ons het dit nog nie in Blender of Google Earth oopgemaak nie.
