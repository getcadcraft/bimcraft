---
title: Enllaça altres models per coordinar-los
summary: Mostra un altre model IFC al costat del teu per referència (mai fusionat), col·loca'l per coordenades compartides, coordenades de mapa o dos punts, ajusta-t'hi mentre dibuixes i torna'l a carregar quan canviï el seu fitxer.
keywords: enllaç, model enllaçat, referència, xref, coordinació, federació, estructura, MEP, consultor, coordenades compartides, topografia, coordenades de mapa, torna a carregar, descarrega, referència de document, IfcDocumentReference
from: 3e0f1eab
---

## Què faràs

Dibuixar sobre el model d'un consultor (l'estructura, les instal·lacions, l'edifici existent) sense copiar res al teu propi fitxer.

Un **model enllaçat** es mostra a la vista 3D i es talla als teus plànols, però mai no es canvia ni es desa al teu model. El teu model només conserva l'enllaç: el nom del fitxer i on va.

## Enllaça un model

1. A la secció {{ui:Models enllaçats}} del panell de l'esquerra, fes clic a {{ui:Enllaça un model…}} i tria el fitxer IFC. Es mostra de seguida, i la seva fila diu **Mostrat**.
2. Tria on va a {{ui:Posició}}:
   - **Coordenades compartides** (per començar): les seves coordenades són les teves, com si tots dos models s'haguessin replantejat des del mateix origen.
   - **Coordenades de mapa**: les coordenades de mapa dels dos fitxers els alineen (tots dos necessiten una conversió de mapa; BimCraft ho indica quan un no en té).
   - **Per dos punts…**: fes clic a un punt del model enllaçat i després on va al teu; després, un segon parell. L'enllaç es mou i es gira (al voltant de la vertical) per encaixar.
3. Cada enllaç i cada canvi de posició és un sol pas: {{key:Mod+Z}} el desfà.

## Treballa amb ell

- Els plànols mostren el model enllaçat tallat a l'alçada de tall del nivell, com a línies fines, i l'eina {{ui:Mur}} i les altres eines de dibuix s'ajusten als seus cantons i arestes.
- Tria'n els elements a la vista 3D per llegir-ne les propietats; un model enllaçat mai no és el que edites, així que el seu botó d'opció a {{ui:Models}} no està marcat.
- **Has canviat el fitxer?** Quan el navegador pot vigilar el fitxer (un fitxer obert amb el seu selector de fitxers, o a Studio), BimCraft torna a carregar l'enllaç tot sol uns segons després de tornar a desar el fitxer, i ho indica. Si no, fes clic a {{ui:Torna a carregar}}.
- {{ui:Descarrega}} l'amaga i allibera la memòria; l'enllaç es manté al teu model. {{ui:Carrega…}} el torna a mostrar (tries el fitxer: un navegador no pot obrir un fitxer només pel seu nom).
- La × suprimeix l'enllaç del teu model.

## Què hauries de veure

- Al teu fitxer IFC: un IfcDocumentReference per a cada enllaç (el nom del fitxer), relacionat amb el projecte, i on va al conjunt de propietats del projecte CadCraft_Links. En tornar a obrir el model, la llista mostra els seus enllaços com a **No carregat** fins que els carregues.

:::note
Les comprovacions de col·lisions, Compara i Cerca poden fer servir un enllaç carregat com qualsevol altre model obert: vegeu [Mira diversos models IFC junts](topic:several-models).
:::
