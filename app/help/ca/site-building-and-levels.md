---
title: El solar, l'edifici i els seus nivells
summary: Dibuixeu el contorn del solar, situeu i gireu l'edifici al solar, afegiu nivells a alçades donades o repartiu l'altura de l'edifici, i dibuixeu sobre el nivell que trieu.
keywords: solar, plànol de situació, línia d'edificació, retrocés, servitud, servitud de pas, dret de pas, límit de propietat, parcel·la, lot, límit, implantació de l'edifici, girar l'edifici, situar l'edifici, nivells, plantes, forjats, afegeix nivells, repartir l'altura, alçada de planta a planta, IfcSite, IfcBuilding, IfcBuildingStorey, estructura espacial
from: 48d10c1e
---

## Què hi fareu

Configureu les parts d'un model IFC que contenen tota la resta: el solar, l'edifici que hi ha i els nivells de l'edifici.

Un model s'organitza com un **solar** que conté un **edifici**, que conté els seus **nivells** (plantes); els murs, els forjats i tota la resta pertanyen a un nivell. {{ui:Fitxer}} › {{ui:Edifici nou}} crea les tres coses. Un model d'un altre programa que té un edifici però no té solar rep un solar la primera vegada que en dibuixeu un: l'edifici s'hi situa on ja era.

## Dibuixeu el solar

1. Activeu {{ui:Dibuixa}} i després trieu {{ui:Compilació}} › {{ui:Solar}}.
2. Cliqueu els cantons del solar (l'eina s'ajusta com l'eina de Mur). Cliqueu de nou el primer cantó, feu doble clic o premeu {{key:Enter}} per acabar. {{key:Backspace}} elimina l'últim cantó.
3. La fila mostra l'àrea del solar. Dibuixeu-lo de nou per canviar-lo.

La planta de cada nivell mostra el contorn del solar com una línia de propietat.

## Situeu l'edifici al solar

Amb {{ui:Solar}} activat, escriviu la **X** i la **Y** de l'edifici al solar i el seu **Gir** en graus, o cliqueu {{ui:Situa l'edifici amb un clic}} i cliqueu on ha d'anar l'origen de l'edifici. Tot el que hi ha a l'edifici (nivells, murs, quadrícules, tot el que heu dibuixat) es mou amb ell; el solar i el seu contorn es queden. Les plantes continuen mostrant cada nivell quadrat amb l'edifici.

## Línies d'edificació i servituds

Les línies d'edificació i les servituds (drets de pas, servituds d'accés) es dibuixen al solar com a restriccions. **Avisen, mai no bloquegen**: un mur que hi passi per sobre es dibuixa tal com l'heu demanat, i a Problemes apareix un avís que anomena el mur i la línia o la servitud. Torneu el mur enrere i l'avís es neteja. Un avís es pot acceptar amb un motiu (una relaxació concedida per l'autoritat, per exemple).

- **Línia d'edificació a partir de retrocessos.** {{ui:Compilació}} › {{ui:Línia d'edificació}}, i després {{ui:Retrocessos}}: escriviu a quina distància entra la línia des de cada límit del solar. Els límits es numeren a la planta mentre l'eina és activa. La línia es calcula a partir d'aquestes distàncies i segueix el contorn del solar si el dibuixeu de nou amb tants límits. Les distàncies són les vostres, les llegiu del títol de propietat o del pla d'ordenació; BimCraft n'omple cap.
- **Una línia d'edificació dibuixada.** Amb {{ui:Línia d'edificació}} activat, cliqueu-ne els punts i acabeu amb doble clic o amb {{key:Enter}}. Acabeu al primer punt per tenir una línia tancada: l'àrea de dins és on es pot edificar, i un mur amb alguna part fora se n'avisa. Una línia oberta només avisa d'un mur que la travessa.
- **Una servitud.** {{ui:Compilació}} › {{ui:Servitud}}: trieu-ne el tipus, escriviu-ne el nom, la referència registrada i l'amplada, i després cliqueu la seva línia central i acabeu (una franja), o tanqueu-la al primer punt (una àrea). Un mur amb alguna part sobre ella se n'avisa, a tots els nivells.
- Una cara exactament sobre una línia és tocant, no travessant (la tolerància és d'1 mm).
- L'opció de volum actual de cada conjunt d'opcions es comprova igual que els murs: un volum fora del límit, sobre una línia d'edificació o sobre una servitud rep un avís. Vegeu [Opcions de volum mantingudes una al costat de l'altra](topic:massing-options).
- Escolliu-ne una amb {{ui:Selecciona}} per canviar-ne el nom, la referència, el tipus o l'amplada, moure-la o suprimir-la.

Es dibuixen a la planta de cada nivell, als fulls i al PDF de la planta: les línies d'edificació a traços, les servituds de punts, cadascuna amb la seva etiqueta. A l'IFC cadascuna és una anotació (IfcAnnotation, de tipus BuildingLine o Servitude) al solar, amb la seva línia com una corba simple que altres programes poden llegir. La comprovació fa servir el contorn real de cada mur a la planta, amb les unions tal com estan dibuixades; un mur corb es comprova pel seu propi gruix al voltant de la seva línia central.

## Afegeix nivells

Al panell {{ui:Nivells}}, {{ui:Afegeix una planta a dalt}} n'afegeix un, i {{ui:Afegeix un nivell per sota}} n'afegeix un sota el més baix (un soterrani, a una cota negativa). {{ui:Afegeix nivells…}} n'afegeix diversos alhora:

- **A aquestes alçades**: escriviu alçades per sobre del nivell més baix, separades per comes (per exemple `12', 24', 36'`). Les alçades que ja tenen un nivell s'ometen.
- **Repartiu l'altura de l'edifici**: escriviu l'altura de l'edifici i el nombre de nivells. Els nivells que teniu es mouen a les seves noves alçades des del més baix cap amunt, els que falten s'afegeixen, i els que hi ha per sobre es queden on són.

Els murs que arriben al nivell superior el segueixen, igual que les columnes i les rampes.

{{ui:Copia aquesta planta…}} (al mateix panell) copia el que està dibuixat al nivell que mireu a un altre nivell o a un nou nivell a dalt, de manera que una planta es pot pujar per l'edifici en un sol pas. Vegeu [Dibuixa murs](topic:draw-walls).

## Dibuixa en un nivell

Cada eina de {{ui:Dibuixa}} treballa sobre el nivell triat a la llista de nivells de la planta (o escollit al panell {{ui:Nivells}}): el que dibuixeu pertany a aquest nivell.

## Què hauríeu de veure

- Cadascun d'aquests canvis és un sol pas: {{key:Mod+Z}} el desfà.
- A l'arxiu IFC: el solar (IfcSite) amb el seu contorn i la seva àrea, l'edifici (IfcBuilding) situat al solar, i els nivells (IfcBuildingStorey) de l'edifici.

Vegeu també [Coordenades a BimCraft](topic:coordinates) per a l'origen del projecte i el punt topogràfic.
