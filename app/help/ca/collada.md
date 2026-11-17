---
title: Exporta el model com a Collada o per a Google Earth
summary: Escriu els models IFC oberts com a fitxer Collada (.dae) per a Blender i altres programes 3D, o com a paquet de Google Earth (.kmz) col·locat on és el model al mapa.
keywords: collada, dae, kmz, kml, google earth, blender, exporta, geolocalització, georeferència, latitud, longitud, ubicació, programes 3d
from: 81cfec09
---

{{ui:Collada}} a la barra d'eines (o {{ui:Exporta Collada (.dae, .kmz)…}} al menú Fitxer dels estils de menú i de cinta) escriu el que hi ha obert com a Collada 1.4.1: cada model que es mostra, els federats on els heu col·locat.

## Exportació

1. Trieu {{ui:Collada}}.
2. Trieu el format:
   - {{ui:Fitxer Collada (.dae), per a Blender i altres programes 3D}}.
   - {{ui:Paquet de Google Earth (.kmz): el model col·locat on és al mapa}}. Només s'ofereix quan el model té una ubicació.
3. Trieu les opcions i després {{ui:Exporta}}. El fitxer es baixa, i la barra d'estat diu quants elements s'hi han inclòs.

| Opció | Què fa |
|---|---|
| {{ui:Escriu la ubicació dins del fitxer}} | Afegeix la latitud, la longitud, l'alçada i l'orientació de l'origen del fitxer al .dae |
| {{ui:Alçada}} | {{ui:Sobre el terreny: el nivell 0 del model descansa sobre el terreny}}, o {{ui:L'alçada pròpia del model sobre el nivell del mar}} |
| {{ui:Inclou sales i espais}} | Els espais també s'hi inclouen (per defecte queden fora) |
| {{ui:Inclou elements ocults}} | També s'escriuen els elements que heu amagat (per defecte només s'escriu el que veieu) |

## Què hi ha al fitxer

| Al model | Al fitxer Collada |
|---|---|
| Edifici, plantes | Nodes imbricats, plantes en ordre d'elevació; els elements que no són en cap planta, sota "Unplaced" |
| Cada element | Un node amb la seva pròpia malla, amb el nom del model (el seu nom, o si no, la seva classe i etiqueta) |
| Classe, GlobalId, tipus predefinit | A les dades extra del node (perfil IFC), amb el nom exacte (perfil ModelCraft) |
| Colors | Materials, amb transparència |
| Unitats i eixos | Metres, Z amunt. El nivell 0 del model que és al davant és a alçada 0 |

El model es queda a prop de l'origen sobre el terreny, de manera que els programes que treballen amb precisió simple el mostren sense tremolor. ModelCraft escriu els seus fitxers Collada amb el mateix escriptor, i obre aquests fitxers amb els noms dels seus elements.

## D'on surt la ubicació

El model que és al davant dona la ubicació, de la mateixa manera que {{ui:Mesura}} calcula la latitud i la longitud d'un punt:

- Una conversió de mapa (IFC4 IfcMapConversion, o els conjunts de propietats IFC2X3) a través del sistema de coordenades del model. Un sistema que hàgiu triat per al model té prioritat sobre el que indica el fitxer.
- Si no, la latitud i la longitud aproximades del solar (n'hi ha prou per a un solar).

L'orientació es mesura, no se suposa: té en compte la rotació del mapa, el nord vertader i la convergència del mapa. Per donar una ubicació a un model, useu {{ui:Origen al mapa…}} a Mesura.

## En altres programes

- **Google Earth** llegeix el .kmz: el model apareix a la ubicació, girat cap al nord. Un .dae simple no té cap lloc on Google Earth llegeixi una ubicació; useu el .kmz.
- **Blender** (4.x i anteriors): File, Import, Collada (.dae). Cada element arriba com a objecte propi amb el seu material. La ubicació es guarda a les dades extra del fitxer, que Blender no llegeix. Blender 5.0 va deixar d'incloure l'importador Collada integrat; allà, useu {{ui:USD}} o l'exportació glTF, o obriu el .dae a Blender 4.5 i deseu-lo com a .blend.

Les nostres proves comproven cada fitxer amb l'esquema Collada 1.4.1 i el tornen a llegir amb un lector Collada independent. No l'han obert a Blender ni a Google Earth.
