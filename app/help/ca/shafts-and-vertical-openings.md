---
title: Buits de pas i obertures a través dels forjats
summary: Un pou és un únic contorn que talla cada forjat, sostre i coberta entre dues plantes. Una obertura vertical en talla un. Obertura de mur talla un mur.
keywords: pou, pou d'ascensor, pou d'escala, obertura d'escala, contrapetjada, obertura vertical, obertura de forjat, obertura de sostre, obertura de coberta, obertura de llum zenital, forat al forjat, obertura de mur, IfcOpeningElement, deducció, àrea neta
from: 8e9e1641
---

## Què hi fareu

Traceu un pou d'ascensor a través d'un edifici amb un sol croquis, feu un forat en un forjat i llegiu què s'ha tret de les àrees.

## On són les eines

- Disposicions de cinta: {{ui:Arquitectura}} › **Obertura** › {{ui:Pou}}, {{ui:Obertura vertical}} i {{ui:Obertura de mur}}.
- Disposició clàssica: la barra de dibuix, menú {{ui:Sales}} (Pou, Obertura vertical) i menú {{ui:Murs}} (Obertura de mur).

## Un pou

1. Obriu la planta del nivell on comença el pou. Trieu {{ui:Pou}}.
2. A la fila, trieu la {{ui:Planta base}} i la {{ui:Planta superior}}, i els desfasaments si comença o acaba per sobre o per sota d'aquestes.
3. Cliqueu els cantons del contorn. Cliqueu de nou el primer cantó, feu doble clic o premeu {{key:Enter}} per acabar.
4. Cada forjat, sostre i coberta entre les dues alçades es talla. La línia d'estat indica quants n'hi ha.

Un pou és una sola cosa. Trieu-ne el contorn a qualsevol nivell pel qual passi: **Propietats** en mostra el nom, els nivells i els desfasaments, què talla i l'àrea que se n'ha tret. Si el canvieu, cada obertura en segueix el canvi. Si el suprimiu, desapareixen totes les obertures. Cadascuna d'aquestes accions és un sol pas de Desfés.

Continua tallant: un forjat fet més tard entre les seves plantes es talla sense que se li demani, i un forjat que suprimiu deixa de tenir-lo.

El forjat sobre el qual s'alça el pou no es talla (la seva part superior és la base). Doneu a la base un desfasament negatiu per tallar-lo també. Doneu a la part superior un desfasament positiu per travessar la coberta.

## Una obertura vertical

1. Trieu {{ui:Obertura vertical}}. A la fila, trieu què es talla: el forjat, el sostre o la coberta.
2. Cliqueu els cantons del contorn i acabeu com abans.
3. Es talla el forjat, el sostre o la coberta d'aquest nivell sota el contorn. Pertany a aquest únic element: si suprimiu el forjat, l'obertura se n'hi va.

## Una obertura de mur

{{ui:Obertura de mur}} és l'eina de [Doneu forma a un mur](topic:wall-shape): cliqueu un mur a la planta o dos cantons de la seva cara en 3D.

## Quantitats

Segons la regla de mesurament per a forjats, l'àrea neta d'un element és la seva àrea bruta menys el que se n'ha tret. Un pou o una obertura vertical és una deducció a cada forjat i sostre que talla; els quadres de Forjats i acabats i les quantitats de l'IFC mostren els mateixos valors. En una coberta, la deducció és l'àrea de la superfície de coberta: l'àrea en planta dividida pel cosinus de la inclinació.

Un contorn que sobresurt de la vora només dedueix la part que queda sobre l'element.

## Si no es talla res

Un pou sense res al seu pas es crea igualment i ho indica: tallarà el que s'hi construeixi més tard. Una obertura vertical necessita alguna cosa a sota; si no n'hi ha, la línia d'estat ho diu i no es crea res.

## A l'IFC

Cada tall és un IfcOpeningElement amb IfcRelVoidsElement a l'element que talla, de manera que qualsevol programa IFC mostra el forat. Una coberta es talla cara per cara. El pou en si és un IfcGroup de les seves obertures.

## Encara no implementat

- Contorns corbs.
- Els murs d'un pou: dibuixeu-los amb l'eina de Mur.
- Editar el contorn arrossegant-ne els cantons (canvieu-lo a Propietats, o suprimiu-lo i torneu a fer el croquis).
- Les propietats d'un forjat dibuixat només mostren la seva àrea menys les seves pròpies obertures; els quadres i les quantitats de l'IFC inclouen les del pou.

Vegeu també [Sales i separadors de sala](topic:rooms-and-separators).
