---
title: Obre un model IFC i mira'l en 3D
summary: Obriu un fitxer IFC, orbiteu, desplaceu-vos i feu zoom, i useu Ajusta, Superior, Davant i Lateral per orientar-vos.
keywords: ifc, 3d, òrbita, desplaça, zoom, ajusta, vista superior, vista davant, vista lateral, navega, cub de vista, càmera
from: 68b460dd
---

## Què faràs

Obriu un model IFC, mogueu-vos-hi en 3D i aneu a les vistes estàndard. Unes cinc minuts.

Necessiteu un fitxer `.ifc`. La majoria de programes BIM n'exporten un; a Revit és **File > Export > IFC**. Vegeu [Porta un fitxer de projecte a 3D mitjançant IFC](topic:rvt-to-ifc).

## Passos

1. Feu clic a {{ui:Trieu un fitxer}} (o a la zona per arrossegar fitxers, a dalt a l'esquerra).
2. Trieu el vostre fitxer `.ifc` i confirmeu.
3. Espereu que la línia d'estat acabi. Mostra «S'està iniciant el motor IFC…» la primera vegada, després «Llegint el model…» i «Construint la geometria: … de … elements».
4. Mireu el model: s'obre en una vista de tres quarts, ajustat a la pantalla.
5. Feu clic a {{ui:Superior}} a la barra d'eines que hi ha sobre el model per mirar en vertical cap avall.
6. Feu clic a {{ui:Davant}} per mirar el davant, i després a {{ui:Lateral}} per mirar des del costat.
7. Feu clic a {{ui:Ajusta}}, o premeu {{key:F}}, per tornar a la vista de tres quarts de tot el model.

## Què hauríeu de veure

- El model al mig, amb arestes fines i fosques per a un aspecte de dibuix.
- El panell {{ui:Fitxer}} a l'esquerra: el nom del fitxer, la mida, l'esquema IFC (per exemple IFC2X3 o IFC4), el nom del projecte, la fase, el programa des del qual s'ha exportat, l'autor, la data d'exportació, i els recomptes d'elements i de triangles.
- Les llistes {{ui:Plantes}} i {{ui:Elements}} sota seu.
- La línia d'estat: «Obert *nom del fitxer*: *n* elements en *s* s».

## Desplaçar-se pel model

:::mouse
| Per a | Feu això |
|---|---|
| Orbitar | Arrossegueu amb el botó esquerre |
| Desplaçar | Arrossegueu amb el botó dret, o manteniu {{key:Shift}} (o {{key:Mod}}) i arrossegueu amb el botó esquerre |
| Fer zoom | Desplaceu la roda, o arrossegueu amb el botó del mig |
| Veure-ho tot | Premeu {{key:F}} o feu clic a {{ui:Ajusta}} |
:::

:::mac mouse
Al trackpad: arrossegueu amb un dit premut per orbitar; manteniu {{key:Shift}} o {{key:Mod}} i arrossegueu per desplaçar; desplaceu amb dos dits o feu una pinça per fer zoom. Un clic amb dos dits és un clic dret, i podeu arrossegar amb ell per desplaçar, però {{key:Shift}} i arrossegar és més fàcil.
:::

:::touch
| Per a | Feu això |
|---|---|
| Orbitar | Arrossegueu amb un dit |
| Fer zoom | Feu una pinça amb dos dits |
| Desplaçar | Moveu els dos dits junts |
| Veure-ho tot | Toqueu {{ui:Ajusta}} |
:::

L'òrbita sempre gira al voltant d'un punt al mig del model. Desplaçar mou aquest punt, de manera que després d'un desplaçament llarg l'òrbita pot semblar descentrada: feu clic a {{ui:Ajusta}} per restablir-la.

## Ombrejat, arestes o filferro

Tres botons petits just a sobre del cub de vista trien com es dibuixa el model: {{ui:Ombrejat}}, {{ui:Ombrejat amb arestes}} (el predeterminat) i {{ui:Filferro}}. També són ordres (Vista als menús i a la llista de Personalitza), així que poden tenir tecles pròpies. {{ui:Planta}}, {{ui:Divideix}} i {{ui:3D}} són a la fila {{ui:Vista}} de la barra d'eines.

## Errors habituals

- **Esperar vistes amb nom.** BimCraft té quatre vistes fixes ({{ui:Ajusta}}, {{ui:Superior}}, {{ui:Davant}}, {{ui:Lateral}}), el cub de vista a la cantonada inferior dreta i òrbita lliure. No desa vistes.
- **Buscar plantes i seccions.** En aquesta versió no hi ha plantes 2D ni caixes de secció. Talleu el model amb un sol pla de {{ui:Secció}} ([Talla un model IFC amb un pla de secció](topic:section-plane)), o apagueu plantes: [Mostra i amaga plantes, espais i arestes](topic:storeys-and-spaces).
- **Obrir un fitxer de projecte i esperar 3D.** Un fitxer de projecte s'obre com una targeta de fitxer. Exporteu primer IFC.
- **Obrir un `.ifczip`.** Descomprimiu-lo, o exporteu un `.ifc` normal.
- **Un model molt gran fa que la pestanya vagi lenta o es bloquegi.** Vegeu [Navegadors, dispositius i memòria](topic:platforms).

## Següent

[Trieu un element i llegiu-ne les propietats](topic:inspect-element).
