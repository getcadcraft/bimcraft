---
title: Des d'un fitxer de projecte a BimCraft mitjançant IFC
summary: Els paràmetres d'exportació IFC que s'obren millor a BimCraft (versió, conjunts de propietats, quantitats base, sales, models enllaçats, coordenades), com obrir el resultat i què conserva l'exportació.
keywords: exportació, exportació IFC, RVT a IFC, converteix, 3D, geometria, ifc2x3, ifc4, vista de coordinació, vista de referència, vista de transferència de disseny, conjunts de propietats, quantitats base, sales, espais, fitxers enllaçats, coordenades compartides, punt topogràfic, punt base del projecte, configuració
from: 3efd5fc9
---

## Què farà

Converteix un fitxer de projecte en un fitxer IFC que podeu girar, inspeccionar, comprovar i editar a BimCraft. BimCraft encara no llegeix el model 3D dins d'un fitxer `.rvt`, de manera que l'exportació es fa al programa que l'ha creat (Revit); BimCraft obre el resultat.

## Passos

1. Obriu el projecte al programa que l'ha creat. La targeta de BimCraft indica la versió amb què es va desar.
2. Obriu una vista 3D que mostri allò que voleu exportar.
3. Trieu **Fitxer > Exporta > IFC**.
4. Al diàleg d'exportació, trieu una configuració (o **Modifica la configuració…**) amb els paràmetres següents.
5. Trieu una carpeta i un nom de fitxer, i exporteu.
6. A BimCraft, feu clic a {{ui:Trieu un fitxer}} i trieu el nou fitxer `.ifc`. Els models enllaçats exportats com a fitxers propis s'obren a la mateixa escena amb {{ui:Afegeix un model}}.

## Els paràmetres que s'obren millor aquí

| Paràmetre a l'exportador | Trieu | Per què |
|---|---|---|
| Versió IFC | **IFC4 Reference View** per a visualitzar, comprovar i fer amidaments; **IFC2X3 Coordination View 2.0** quan els altres necessiten IFC2X3 | Tots dos s'obren completament. **IFC4 Design Transfer View** també s'obre, amb formes més exactes, però el fitxer és més gran i més lent. |
| Tipus de fitxer | **IFC** (simple) | BimCraft no obre `.ifczip` ni `.ifcxml`. |
| Fase / elements visibles | La fase que voleu, i **Exporta només els elements visibles a la vista** quan configureu la vista 3D per a això | Deixa fora el que heu amagat a propòsit. |
| Conjunts de propietats | **Exporta els conjunts de propietats de Revit** i **Exporta els conjunts de propietats IFC comuns** | Es converteixen en els conjunts de propietats que BimCraft mostra a {{ui:Propietats}}, i que fan servir {{ui:Cerca}}, {{ui:Color}} i {{ui:Comprovacions del model}}. |
| Quantitats base | **Exporta les quantitats base** | {{ui:Totals de quantitats}} i els quadres les fan servir (longituds, àrees, volums) en lloc d'estimar-los. |
| Sales i àrees | **Exporta les sales en les vistes 3D** (o l'opció Sales / Espais) | Les sales arriben com a espais: feu clic a {{ui:Espais}} per veure'n-les. |
| Fitxers enllaçats | **Exporta els fitxers enllaçats com a IFC separats** | Cada enllaç es converteix en un fitxer propi; obriu-los junts amb {{ui:Afegeix un model}} i s'alinearan. |
| Base de coordenades | **Coordenades compartides** (o el punt topogràfic) | El fitxer porta llavors el seu lloc al mapa (IfcMapConversion), de manera que funcionen Mesura › Ubicació, les capes de mapa sobre el terreny i els núvols de punts col·locats per coordenades de mapa. El punt base del projecte manté el model a prop de l'origen, però sense el seu lloc al mapa. |
| Divideix els murs i les columnes per planta | Activat, quan calculeu quantitats per planta | Cada part de cada planta és un element propi. |

## Què hauríeu de veure

El model en 3D, amb les plantes preses dels nivells del projecte i la informació del projecte al tauler {{ui:Fitxer}}. **Exportat des de** indica l'exportador.

## Què conserva l'exportació i què no

- **Es conserva**: la geometria, les plantes, els tipus d'element, els noms, els tipus, la majoria de paràmetres (com a conjunts de propietats), les quantitats base si se sol·liciten, les sales com a espais, i el lloc al mapa amb coordenades compartides.
- **No es conserva**: vistes, fulls, anotacions, famílies com a famílies editables, conjunts de treball i opcions de disseny. Un fitxer IFC és una instantània dels elements del model, no del projecte. Per als fulls, exporteu-lo com a DWG i obriu-lo a la vista 2D.

## Errors habituals

- **Paràmetres que falten a BimCraft.** Activeu les opcions de conjunts de propietats de dalt i torneu a exportar.
- **Sales que falten.** Activeu l'opció de sales i feu clic a {{ui:Espais}}.
- **Desar com a `.ifczip`.** Trieu IFC simple, o descomprimiu el `.ifczip`.
- **Sense lloc al mapa.** Exporteu amb coordenades compartides; comproveu que el punt topogràfic del projecte està definit.
- **Esperar que les edicions tornin al projecte.** Les edicions que deseu a BimCraft van a un fitxer IFC nou, no al fitxer de projecte.
