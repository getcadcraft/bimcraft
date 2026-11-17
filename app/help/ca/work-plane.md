---
title: El pla de treball: defineix-lo, mostra'l, mira'l de cara
summary: El pla de treball és el pla que fan servir les línies del model, el text del model i el Visor del pla de treball. Defineix-lo a un nivell, una cara, un pla de referència amb nom o una línia; mostra'l a les vistes; obre el visor per dibuixar sobre un pla vertical.
keywords: pla de treball, defineix el pla de treball, mostra el pla de treball, pla de referència, visor del pla de treball, pla amb nom, cara, nivell, pla vertical, pla perpendicular, dibuixa sobre un mur, dibuix d'alçat, pas, alineació, pla de ref.
from: 8aceee1d
---

## Què fareu

Trieu el pla on dibuixeu, veieu on és i dibuixeu sobre un pla que estigui vertical.

## Passos

1. Activeu **Dibuixa** i obriu el menú **Construeix** (en una disposició de cinta: la pestanya Arquitectura, Pla de treball).
2. Trieu **Defineix el pla de treball**. Després feu una d'aquestes accions:
   - trieu un nivell a **Defineix a**;
   - trieu un pla de referència amb nom de la llista al costat;
   - feu clic en una línia de la planta: un mur, una línia de quadrícula, un pla de referència, una línia del model o un sistema de mur cortina. El pla de treball passa a ser el pla vertical que passa per aquesta línia;
   - feu clic en una cara plana a la vista 3D. El pla de treball s'estén sobre aquesta cara.
3. Trieu **Mostra el pla de treball** per veure'l: una làmina tintada amb una quadrícula de metres a la vista 3D, un contorn o una línia de traç discontinu a la planta i un contorn discontinu al panell d'alçats i seccions. Torneu a triar-lo per amagar-lo.
4. Trieu **Visor del pla de treball** per mirar el pla de cara. Les línies negres són el model tallat pel pla. Useu-ne les eines per dibuixar una línia del model, un text del model o un pla de referència sobre el pla. **Mira-ho en 3D** gira la vista 3D perquè encari el pla.

## Plans de referència

Un pla de referència és un pla amb nom que dibuixeu com una línia.

1. Trieu **Pla de referència**. Escriviu-hi un nom a la seva fila si en voleu un (si no, se'n posa un per vosaltres) i una alçada.
2. Feu clic on comença i on acaba. A la planta això crea un pla vertical. Al visor del pla de treball crea un pla que és perpendicular al pla de treball.
3. Es mostra com una línia verda de traç discontinu amb el seu nom a la planta, i com un contorn discontinu a la vista 3D i al panell d'alçats i seccions.
4. Seleccioneu-lo per reanomenar-lo, canviar-ne la longitud, l'alçada i el peu, o premeu **Utilitza com a pla de treball**.

Dos plans de referència no poden tenir el mateix nom, perquè el nom és la manera de triar-ne un.

## Per tenir en compte

- Un model sense pla de treball definit funciona al seu nivell més baix.
- El pla de treball es desa al fitxer. Mostrar-lo o amagar-lo es recorda en aquest navegador, no al fitxer.
- Si el pla de treball segueix un pla de referència i moveu aquest pla, el pla de treball es mou amb ell.
- En un pla de treball vertical, les eines Línia del model i Text del model obren el visor, perquè una planta no pot apuntar a una alçada.
- Les eines de dibuix capturen els extrems dels plans de referència dibuixats a la planta de la mateixa manera que capturen els extrems d'altres línies al visor.

## Al fitxer IFC

- El pla de treball és un conjunt de propietats (CadCraft_WorkPlane) del projecte.
- Un pla de referència és un IfcAnnotation amb el tipus d'objecte ReferencePlane i el seu nom. La seva forma és el contorn tancat del pla, perquè un altre programa mostri on és. El seu conjunt CadCraft_ReferencePlane conté l'origen, la direcció, la normal i l'extensió. IFC no té una classe per a un pla de referència; una anotació no es compta com a element de construcció i no delimita sales.
