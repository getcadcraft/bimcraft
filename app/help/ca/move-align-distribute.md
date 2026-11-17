---
title: Mou, copia, alinea i distribueix elements de l'edifici
summary: Desplaceu murs, forjats, columnes i elements col·locats amb un punt base i un segon punt o una distància escrita, copieu-los mentre avanceu, i alineu-los o espaieu-los uniformement, a la planta o a partir d'una tria en 3D.
keywords: mou, copia, alinea, distribueix, espaiat, desfasament, punt base, desplaçament, murs, columnes, forjats, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Què faràs

Desplaceu un mur, una columna, un forjat o un element de la biblioteca col·locat a un lloc nou, feu-ne còpies, o alineu diversos sense tornar-los a dibuixar.

## Noms i tecles

Les ordres es diuen {{ui:Mou}}, {{ui:Alinea}} i {{ui:Distribueix}}, i podeu escriure `MOVE`, `ALIGN` i `DISTRIBUTE` a la línia d'ordres, com a l'aplicació de dibuix CadCraft. Una diferència: a BimCraft {{key:M}} és {{ui:Mesura}}, així que Mou té la seva pròpia tecla, {{key:Shift+M}}. Les eines són al menú {{ui:Compilació}}.

## Mou

1. Trieu què voleu moure, a la planta o a la vista 3D. Els murs, els forjats, les columnes i els elements col·locats de la biblioteca es poden triar tots en una sola tria.
2. Premeu {{key:Shift+M}} o trieu {{ui:Mou}}.
3. Feu clic a un punt base i després a un segon punt. O, després del punt base, escriviu una distància i premeu {{key:Enter}}: el desplaçament va en la direcció on apunta el punter des del punt base. També podeu escriure `dx,dy` (o `@dx,dy`), o `longitud<angle`.
4. Premeu {{key:C}} per activar {{ui:Copia}}: cada desplaçament aleshores fa còpies i queda a punt per al següent. Premeu {{key:Esc}} per aturar-ho.

Els dos punts també es poden fer clic a la vista 3D: amb {{ui:Mou}} activat, el punter es troba amb l'alçada del terra del nivell, de manera que un clic allà és un punt de la planta. Manteniu {{key:Shift}} premut mentre feu clic per triar un altre element. Useu una vista de planta, {{ui:Superior}}, {{ui:Davant}} o {{ui:Lateral}}, com vulgueu: els punts sempre són sobre aquell nivell.

Un mur es porta amb les seves portes i finestres. Un forjat dibuixat es porta amb les seves obertures. Les sales, els forjats i els sostres que segueixen els murs s'actualitzen. Els murs que estaven units al mur desplaçat es queden on són.

Cada desplaçament és un sol canvi: un {{key:Mod+Z}} el desfà, i arriba a tothom en una sessió de Live TeamWork. Un element col·locat de la biblioteca no es pot copiar d'aquesta manera; useu {{ui:Edita}} › {{ui:Copia}} i {{ui:Enganxa}}.

## Alinea

Trieu dos o més elements, trieu {{ui:Alinea}}, després un costat (esquerra, centre, dreta, superior, mig o inferior) i a què alinear: el conjunt triat, el primer triat, l'últim triat, o un punt on feu clic. Premeu {{ui:Alinea}} a la barra.

## Distribueix

Trieu tres o més elements, trieu {{ui:Distribueix}}, després una direcció (horitzontalment o verticalment) i l'espaiat: buits iguals entre ells o centres iguals. Els dos dels extrems es queden on són.

Els murs que {{ui:Alinea}} o {{ui:Distribueix}} mouen mantenen les seves unions, com amb {{ui:Mou}}: un mur unit a un mur desplaçat fa lliscar el seu extrem al llarg de la seva pròpia línia per continuar unit, les particions que hi topen se'n van amb ell, i dos murs units que es mouen tots dos mantenen la cantonada on es troben les seves noves línies. Les sales continuen tancades. És un sol pas als **Canvis**.
