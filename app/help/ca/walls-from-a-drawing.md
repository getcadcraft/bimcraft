---
title: Murs a partir d'un plànol calcat
summary: Converteix un plànol DWG o DXF en murs, portes i finestres en un nivell, i mantén el dibuix sota la planta com a referència.
keywords: dwg, dxf, calc, calcat, importa plànol, converteix, de CAD a BIM, de 2D a 3D, murs a partir de línies, capes, blocs, portes a partir de blocs, subjacent, dibuix de referència, fons, xref, aplicació de dibuix
from: 3bf213f1
---

## Què faràs

Fes servir un plànol que tu (o algú altre) has dibuixat a l'aplicació de dibuix com a punt de partida del model: les seves línies de mur es converteixen en murs, i els seus blocs de porta i finestra en portes i finestres.

## Passos

1. Activa {{ui:Dibuixa}} i tria el nivell que mostra el dibuix a la llista de nivells de la planta.
2. Tria {{ui:Compilació}} › {{ui:Des d'un dibuix…}}, després {{ui:Trieu un dibuix…}} i tria el DWG o DXF.
3. Al diàleg:
   - Les **Unitats del dibuix** venen del dibuix; tria-ne unes altres si són incorrectes (un plànol dibuixat en peus i llegit en polzades surt dotze vegades més petit).
   - **Capes amb els murs**: marca les capes on hi ha les línies de mur. Les capes que tenen «mur» al nom ja estan marcades per tu.
   - **Les línies són**: **les dues cares de cada mur** (la manera habitual de dibuixar plànols: cada parell de línies paral·leles separades fins a 600 mm es converteix en un mur del gruix del buit), **els eixos centrals dels murs**, o **una cara** amb el mur a la seva esquerra o dreta. Amb eixos centrals o una cara, el tipus de mur fixa el gruix.
   - **{{ui:Tipus de mur}}** i **Alçada del mur**, igual que per a l'eina {{ui:Mur}}.
   - **Blocs**: tria un tipus de porta o de finestra per a cada bloc que sigui una porta o una finestra, o deixa'l fora. Els blocs que tenen «porta» o «finestra» al nom es trien per tu. Cadascun es posa al mur on es troba, de l'amplada del bloc al llarg del mur; una porta s'obre cap al costat on es dibuixa el seu gir.
   - **On va**: a les coordenades pròpies del dibuix, o amb la seva cantonada inferior esquerra a l'origen de la planta.
   - **Mantén el dibuix sota la planta d'aquest nivell**: deixa-ho marcat per veure el dibuix com a línies fines sota el que fas.
4. La línia sota les opcions diu quants murs, portes i finestres farà. Fes clic a {{ui:Crea-les}}.

## Què hauries de veure

- Els murs, les portes i les finestres del nivell, units on es troben, amb les sales que tanquen; tot és un sol pas, de manera que {{key:Mod+Z}} ho desfà.
- El dibuix com a línies fines sota la planta. {{ui:Compilació}} › {{ui:Des d'un dibuix…}} llista els dibuixos guardats al nivell, cadascun amb {{ui:Suprimeix}}; treure'n un deixa els murs.
- Al fitxer IFC, el dibuix guardat és una anotació del nivell (les seves línies), de manera que altres programes BIM també el mostren.

:::note
Un PDF o un escaneig també funcionen: consulta [Murs a partir d'un conjunt de plànols](topic:walls-from-plans). Els arcs es deixen fora (BimCraft dibuixa murs rectes), i també les línies dins dels blocs. Les línies sense parella a «les dues cares» es compten al diàleg i es deixen fora: dibuixa aquests murs amb l'eina {{ui:Mur}}, o ordena'ls amb {{ui:Modifica}} › {{ui:Retalla / allarga}} (consulta [Retalla, allarga i uneix murs](topic:trim-extend-walls)).
:::

:::tip
Calcat sobre un escaneig a l'aplicació de dibuix? Obre també l'escaneig aquí i comprova els murs contra ell: consulta [Model a partir d'un escaneig](topic:model-from-a-scan).
:::
