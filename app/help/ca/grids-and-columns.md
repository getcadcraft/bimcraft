---
title: Graelles i pilars
summary: Organitzeu línies de graella amb cercles numerats i lletrats, per espaiat o una per una; dibuixeu murs i pilars al llarg d'elles i veieu-los a les plantes, alçats i seccions.
keywords: graella, graelles, línia de graella, graella de pilars, eix, eixos, cercle, graella estructural, 1 2 3, A B C, pilar, pilars, pas, IfcGrid, IfcColumn
from: bf99a8f7
---

## Què cal fer

Situeu un edifici sobre una graella i després dibuixeu murs i col·loqueu pilars al llarg de les seves línies.

## Situa una graella completa

1. Activeu {{ui:Dibuixa}} i després trieu {{ui:Compilació}} › {{ui:Graella}}.
2. Feu clic a {{ui:Situa una graella…}}. Digueu quantes **línies numerades** (1, 2, 3…) i **línies lletrades** (A, B, C…) voleu i quina distància hi ha entre elles. Escriviu un espaiat, o diversos separats per comes per a trams desiguals (per exemple `20', 24', 20'`). {{ui:Més enllà de les últimes línies}} indica fins on arriba cada línia més enllà de les línies exteriors de l'altre tipus, i {{ui:Girada (graus)}} gira tota la graella.
3. Feu clic a {{ui:Situa-la}}, i després feu clic on ha d'anar el primer encreuament (1 / A). La previsualització segueix el punter.

Les línies numerades pugen per la planta i es reparteixen per ella; les lletrades recorren la planta i es reparteixen cap amunt. Les lletres salten la I i la O, com als plànols, perquè mai no es llegeixin com a 1 i 0.

## Dibuixa línies de graella una per una

Amb {{ui:Graella}} activada, feu clic on comença una línia i on acaba. Rep l'etiqueta següent de les línies al llarg de les quals va (després del 3 ve el 4; després de la B ve la C). Premeu {{key:Esc}} per aturar.

## Canvia una línia de graella

Amb {{ui:Graella}} activada, feu clic a una línia per triar-la. Escriviu una {{ui:Etiqueta}} nova i premeu {{key:Enter}}, o feu clic a {{ui:Suprimeix aquesta línia}} (o premeu {{key:Delete}}). {{ui:Cercles}} posa els cercles als dos extrems, a l'inici o al final de cada línia, o en cap lloc. Cada canvi és un sol pas: {{key:Mod+Z}} el desfà.

## Dibuixa al llarg de la graella

L'eina {{ui:Mur}}, l'eina {{ui:Pilar}} i les altres eines de dibuix s'ajusten a les línies de graella i als seus encreuaments (la marca de pas és un petit cercle amb una creu).

**Pilars:** trieu {{ui:Compilació}} › {{ui:Pilar}}, escolliu la forma (rectangular o rodona), la mida, i si el pilar arriba **fins al nivell superior** o té una alçada fixa, i després feu clic. {{ui:A cada encreuament de la graella}} posa un pilar a cada encreuament que encara no en té. Feu clic a un pilar per canviar-ne la forma, la mida o l'alçada a {{ui:Propietats}}; {{key:Delete}} l'elimina. Els pilars que arriben fins al nivell superior el segueixen quan canvia la seva alçada.

## Què hauríeu de veure

- La graella a la planta de cada nivell, amb un cercle i la seva etiqueta als extrems de cada línia.
- Les línies de graella al joc de fulls: a les plantes, i als alçats i seccions on una línia es veu de cantell, amb el seu cercle per sobre de l'edifici. Vegeu [Alçats, seccions i fulls](topic:sheets).
- Al fitxer IFC: una graella per a l'edifici (IfcGrid, amb les seves línies numerades en una llista i les lletrades en l'altra), i els pilars com a IfcColumn amb la seva mida, alçada i quantitats. Altres programes BIM mostren les dues coses.

:::note
Una graella que ha arribat en un fitxer d'un altre programa es mostra, i les eines s'hi ajusten, però les seves línies no es poden canviar aquí.
:::
