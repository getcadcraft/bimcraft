---
title: Treballar amb capes i fulls
summary: Activeu i desactiveu capes de dibuix, canvieu entre l'espai model i els fulls, i entengueu com els fulls mostren el model a través de les seves finestres gràfiques.
keywords: capes, activa o desactiva capa, congela, descongela, fulls, presentacions, espai de paper, pestanyes, finestres gràfiques, gestor de capes, la
from: a9a16b53
---

## Què hi fareu

Netegeu la vista d'un dibuix ple apagant capes, i després mireu els fulls del dibuix un per un.

## Passos: capes

1. Obriu un dibuix DWG o DXF.
2. Busqueu la llista {{ui:Capes}} a l'esquerra. Cada capa té una casella, una mostra de color i el seu nom.
3. Desmarqueu una capa per amagar tot el que hi ha.
4. Feu clic a {{ui:Desactiva-ho tot}} per amagar totes les capes.
5. Marqueu només les capes que voleu veure.
6. Feu clic a {{ui:Activa-ho tot}} per tornar a mostrar-ho tot.

## Què heu de veure

Les capes desapareixen i reapareixen de cop, a {{ui:Model}} i a cada full. Les capes que estan apagades o congelades al propi dibuix comencen desmarcades.

## Passos: fulls

1. Mireu la fila de pestanyes sobre el dibuix: {{ui:Model}}, i després cada full pel seu nom.
2. Feu clic a una pestanya de full.
3. Mireu el full: el paper es troba sobre una taula més fosca, i cada finestra gràfica mostra la seva part del model a la seva pròpia escala i angle.
4. Feu zoom dins d'una finestra gràfica per llegir el detall. Esteu fent zoom al full, no a la finestra, així que tot el full es mou junt.
5. Feu clic a {{ui:Ajusta}} o feu doble clic per veure de nou el full sencer.

## Com funcionen els fulls aquí

Un full (una presentació, o espai de paper) conté un caixetí i finestres gràfiques que miren a l'espai model. BimCraft dibuixa cada finestra retallada a la seva vora, a la seva pròpia escala i gir, i amaga les capes congelades en aquella finestra. La primera finestra gràfica de cada full és el propi full i no es dibuixa dues vegades.

## Errors habituals

- **Esperar que els canvis de capa es desin.** Els ajustos de capa només afecten la vista, fins que obriu un altre fitxer.
- **Esperar control de capa per finestra.** La llista {{ui:Capes}} canvia una capa a tot arreu. Les capes congelades en una finestra pel dibuix es mantenen congelades allà.
- **Buscar una cerca de capes o estats de capa.** Encara no implementat. La llista segueix l'ordre del dibuix.
- **Esperar treballar dins d'una finestra gràfica.** No hi ha res a activar: BimCraft només mostra el full. Useu {{ui:Model}} per mirar directament l'espai model.
