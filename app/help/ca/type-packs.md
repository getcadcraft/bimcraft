---
title: Paquets de tipus: compartir tipus de mur com a fitxers oberts
summary: Deseu tipus de mur amb les seves capes, materials, etiquetes i codis de classificació, i famílies, com un sol fitxer obert (JSON pla o IFC), i afegiu-los a un altre projecte. També es poden llegir els tipus de mur d'un fitxer IFC d'un altre programa.
keywords: paquet de tipus, tipus, tipus de mur, compartir, exportar, importar, biblioteca, format obert, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materials, capes, plantilla, estàndard d'oficina, famílies
from: e4c91331
---

## Què fareu

Porteu els vostres tipus de mur d'un projecte a un altre, o lliureu-los a algú que treballa en un altre programa. Un paquet de tipus conté cada tipus de mur amb les seves capes, gruixos, materials, nucli, cambres d'aire, prioritat de capa, nivell de desenvolupament, dades d'amidament i codis de classificació, i les famílies que hi afegiu. És un fitxer obert: text JSON pla que qualsevol pot llegir, o un fitxer IFC. No hi ha res que estigui lligat a una empresa, a un país o a un compte.

## Deseu tipus d'un projecte

1. Obriu **Dades** a la barra del model i trieu {{ui:Paquets de tipus}}.
2. Sota {{ui:Desa els tipus d'aquest projecte}}, marqueu els tipus de mur que hi voleu posar. Els tipus propis del projecte ja estan marcats; es pot afegir un tipus inicial, i entra com a còpia. Marqueu les famílies si les voleu incloure.
3. Escriviu un {{ui:Nom del paquet}}.
4. {{ui:Desa com a paquet (.json)}} baixa un fitxer `.cctypes.json`. {{ui:Desa com a IFC (.ifc)}} baixa un fitxer IFC que només conté tipus: cada tipus de mur com a IfcWallType amb el seu conjunt de capes de material, materials i classificació, per a qualsevol programa BIM.

## Afegiu tipus a un projecte

1. En el mateix diàleg, trieu {{ui:Obre un paquet o un fitxer IFC…}} i seleccioneu un paquet `.json` o un fitxer `.ifc`.
2. El diàleg llista el que conté el fitxer: cada tipus de mur amb el seu gruix, nombre de capes i codis, els materials i les famílies.
3. Trieu què passa amb {{ui:Un tipus que aquest projecte ja té}}: **Conserva el del projecte**, **Afegeix el del paquet com a còpia** (rep un nou nom que acaba en "(2)"), o **Substitueix-lo (només quan cap mur l'utilitza)**.
4. {{ui:Afegeix al projecte}}. El diàleg llista el que s'ha afegit, copiat, substituït o conservat. És un sol pas per desfer.

Els tipus nous ja són a la llista de tipus de l'eina Mur.

## Tipus de forjat, de coberta i de sostre

La llista de tipus per desar també conté els tipus de forjat, de coberta i de sostre del projecte, i els seus inicials (marcats com a Forjat, Coberta, Sostre). Un paquet pot portar els quatre tipus; cada tipus indica la seva classe IFC (IfcWallType, IfcSlabType, IfcCoveringType). Un tipus de forjat, de coberta o de sostre que utilitzen elements no se substitueix des d'un paquet: canvieu-lo a l'editor de tipus.

## Un tipus com a element de la biblioteca

Marqueu exactament un tipus i trieu **Desa com a element de la biblioteca…**. Es desa un fitxer `.cctype.json`: un element de la biblioteca de la classe Tipus que conté aquell sol tipus (les seves capes, materials, LOD i codis de classificació). Pugeu-lo a la {{ui:Biblioteca}} per compartir-lo. **Obre un paquet o un fitxer IFC** també llegeix aquests elements i afegeix el seu tipus al projecte com un paquet.

## Cal saber-ne

- Aquí també es pot obrir un fitxer IFC d'un altre programa. Cada un dels seus tipus de mur que tingui capes de material es llegeix: el nom, els materials i gruixos de les capes i qualsevol cambra d'aire són els propis del fitxer. Quines capes són el nucli i què fa cada capa (acabat, estructura, aïllament) s'estima, el tipus es marca **(estimat)**, i cal comprovar-lo a l'editor de tipus de mur. Un tipus de mur sense capes es deixa de banda, i se n'indica el nom.
- Un material que el projecte ja té es manté tal com és. Un material nou amb un nom ja utilitzat rep "(paquet)" després del seu nom.
- Un tipus que utilitzen murs mai no se substitueix des d'un paquet. Canvieu-lo a l'editor de tipus de mur, que mou els seus murs correctament.
- Un codi definit en un mur no viatja: pertany a aquest mur. Un codi definit al tipus sí.
- Un fitxer amb un camp que el format no té, una capa el material de la qual falta, o qualsevol cosa que no sigui text pla, és rebutjat, i el missatge indica on i per què.
- Encara no implementat: tipus de forjat, de coberta i de sostre (no tenen tipus en aquesta versió: cadascun té el seu propi gruix), tipus de porta i de finestra que no siguin famílies, i les trames o els colors d'un fitxer d'un altre programa.
