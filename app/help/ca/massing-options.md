---
title: Opcions de volumetria conservades una al costat de l'altra
summary: Conserva diverses opcions de volumetria al mateix model, fes-ne l'opció actual, comprova-la amb les alineacions de l'edifici i les servituds de l'emplaçament, incorpora volumetries de ModelCraft i desenvolupa l'opció escollida en murs i forjats.
keywords: volumetria, massa, opció, opcions, conjunt d'opcions, esquema, concepte, disseny conceptual, fase 2, alternatives, compara opcions, opció actual, massa d'edifici, empeny i estira, modelcraft, civilcraft, superfície bruta de planta, petjada, volum, desenvolupa la massa, servitud, dret de pas, alineació de l'edifici, retirada
from: 69a01459
---

## Què faràs

Conservar les opcions de volumetria d'un concepte en un sol model, en lloc de fitxers separats: diverses masses d'edifici una al costat de l'altra, una d'elles com a **opció actual** i les altres conservades per comparar.

Una opció de volumetria és una massa d'edifici: un contorn elevat fins a una alçada, amb un nombre de plantes. Encara no són murs. Pots conservar les que vulguis, agrupades en **conjunts d'opcions** (les opcions d'un mateix conjunt són alternatives entre elles).

## Conserva una opció

1. Obre {{ui:Del programa de sales a la volumetria}}, escriu el programa de sales i el contorn, i tria {{ui:Cerca opcions}}.
2. Escull una de les opcions enumerades.
3. A {{ui:Opcions de volumetria del model}}, escriu un nom per al {{ui:Conjunt d'opcions}} si en vols un, i tria {{ui:Mantén l'opció seleccionada}}.

L'opció apareix al model com a massa d'edifici i a la llista, amb les seves plantes, la petjada, la superfície bruta de planta i el volum. No es construeix res. Conserva'n una altra de la mateixa manera.

La primera opció d'un conjunt és la seva opció actual. Cada pas es pot desfer d'una sola vegada.

## L'opció actual

Una opció de cada conjunt és l'actual. Això vol dir dues coses:

- **Les seves plantes compten com a superfícies de l'edifici.** L'opció actual té un espai per planta que porta la superfície bruta d'aquella planta, de manera que tot el que llegeix superfícies de planta veu l'opció vigent i cap altra.
- **Es comprova amb l'emplaçament.** Si queda fora del límit de l'emplaçament, sobre una alineació de l'edifici o sobre una servitud, apareix a {{ui:Problemes}} un avís que la nomena. És només un avís: no es rebutja res. Les opcions que no són actuals no es comproven.

Tria {{ui:Fes-la actual}} en una altra opció per canviar-la.

{{ui:Amaga les opcions que no són actuals}} amaga les altres a la vista 3D. Això només és per a aquest navegador i no es desa al fitxer.

## Volumetria des de ModelCraft

A ModelCraft, {{ui:Exporta}} › {{ui:Volumetria cap a BimCraft…}} envia cada grup o component com a una opció. BimCraft obre el fitxer amb les opcions enumerades.

Per incorporar-les a un model que ja és obert, tria {{ui:Afegeix opcions de volumetria des d'un fitxer}} i escull el fitxer `.ifc`. Les seves masses entren com a opcions d'un conjunt, en un sol pas per desfer, i se situen on es van modelar. Un fitxer de masses d'edifici de CivilCraft funciona de la mateixa manera.

Una opció marcada com a "(forma simplificada)" no era un bloc vertical simple a ModelCraft (es retira, té pendents o no és tancada). La seva massa aquí és el contorn de la base elevat fins a la seva alçada; les seves superfícies de planta i el seu volum són els mesurats del propi sòlid.

## Desenvolupa l'opció escollida

Tria {{ui:Desenvolupa}} en una opció. Es converteix en nivells (sumats fins al seu nombre de plantes), murs al voltant del seu contorn a cada planta i un forjat de terra a cadascuna, en un sol pas per desfer. L'opció surt de la llista; les altres opcions es mantenen igual. Encara no hi ha coberta.

{{ui:Canvia el nom}} canvia el nom d'una opció, i {{ui:Suprimeix}} la treu del model. Suprimir l'opció actual fa actual la primera altra opció del conjunt.

## Què hauries de veure

- Cada opció conservada com a bloc a la vista 3D i com a fila a la llista.
- "(actual)" al costat d'una opció de cada conjunt.
- Un avís a {{ui:Problemes}} quan l'opció actual travessa el límit de l'emplaçament, una alineació de l'edifici o una servitud.

## Bon a saber

- Al fitxer IFC, una opció és un building element proxy amb el conjunt de propietats `CadCraft_SiteMass` (el seu conjunt d'opcions, el nom de l'opció i si és l'actual són en aquest conjunt). Les plantes de l'opció actual són espais de tipus `MassingFloor`. Altres programes llegeixen el proxy com un element genèric.
- Conservar una opció mai no afegeix nivells; desenvolupar-la sí.
- Un assistent pot llistar les opcions conservades, conservar-ne una, fer-ne una d'actual, canviar-ne el nom, desenvolupar-la o suprimir-la.
