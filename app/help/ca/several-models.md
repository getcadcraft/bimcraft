---
title: Mostra diversos models IFC junts
summary: Afegiu més fitxers IFC a l'escena, com ara arquitectura, estructura i instal·lacions, vegeu-los en les mateixes coordenades, mogueu-ne un, amagueu-ne un i trieu quin editeu.
keywords: federar, federació, model federat, diversos models, diversos fitxers, combinar, superposar, coordinació, disciplina, estructura, mep, instal·lacions, desplaçament, mou model, model actiu, afegeix un model
from: df0efbbf
---

## Què hi fareu

Mireu models de diferents disciplines en un sol lloc: el model de l'arquitecte amb els models d'estructura i d'instal·lacions. Cadascun és el seu propi fitxer; BimCraft només els mostra junts.

## Passos

1. Obriu el primer model IFC com de costum.
2. A {{ui:Models}} de l'esquerra, cliqueu {{ui:Afegeix un model…}} i trieu un o més fitxers IFC. Cadascun apareix a la llista i a la vista 3D.
3. Desmarqueu un model per amagar-lo; marqueu-lo per tornar-lo a mostrar.
4. Si un model arriba en un lloc equivocat (un punt topogràfic diferent), cliqueu {{ui:Mou}} sota seu, escriviu quant s'ha de desplaçar al llarg de X, Y i Z, en metres, i cliqueu {{ui:Aplica}}.
5. El model amb el punt és el que editeu. Cliqueu el punt d'un altre model per editar-lo.
6. Cliqueu × al costat d'un model per treure'l de l'escena.

## Obre els models de l'equip

Quan el model obert és un fitxer al núvol en un projecte d'equip, sota la llista apareix {{ui:Obre els models de l'equip}}. Obre els altres models IFC del projecte al costat d'aquest, cadascun desplaçat per la compensació que va fixar el projecte. Els models que us són ocults queden fora i es compten; un model que el projecte gira s'obre sense girar i també es compta; els fitxers que no són IFC (un DWG, per exemple) s'ometen i se'n dona el nom a la línia d'estat. Un model ja obert mai no s'obre dues vegades. El botó s'amaga per a un fitxer que no és d'un projecte d'equip.

## Què hauríeu de veure

- Cada model a les coordenades del primer model, tal com les situa el seu fitxer. Els models exportats del mateix projecte s'alineen sense moure res.
- En triar un element d'un model que no editeu, les seves propietats es mostren només de lectura, amb {{ui:Edita aquest model}} per canviar.
- L'{{ui:Arbre del model}}, les {{ui:Plantes}}, el {{ui:Color}}, la llista de {{ui:Canvis}}, la col·locació d'elements de la biblioteca i {{ui:Desa com a IFC}} funcionen sobre el model que editeu. Amagar, aïllar, transparència i {{ui:Selecciona-ho tot}} funcionen en tots els models.
- {{ui:Desa com a IFC}} baixa el model que editeu, només amb els seus canvis.

## Errors habituals

- **Un model és lluny o falta.** El seu fitxer usa altres coordenades. Utilitzeu {{ui:Ajusta}} per trobar-lo, i després {{ui:Mou}} per col·locar-lo al seu lloc.
- **{{ui:Suprimeix}} o Copia està en gris en un element triat.** Pertany a un altre model: canvieu-hi primer.
- **Obrir un fitxer amb Tria un fitxer ho ha substituït tot.** Això comença una escena nova. Utilitzeu {{ui:Afegeix un model…}} per afegir fitxers a l'escena que ja teniu.

## Següent

- [Amaga, aïlla i transparenta elements](topic:hide-and-isolate)
- [Acoloreix elements per una propietat](topic:color-by-property)
