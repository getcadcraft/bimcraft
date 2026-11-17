---
title: Cerca d'elements per classe, nom o propietat
summary: Troba tots els elements que coincideixin amb una o més regles —la seva classe, nom, tipus, planta, material o qualsevol valor de propietat—, selecciona'ls tots i desa les regles com a conjunt de cerca amb nom.
keywords: cerca, recerca, filtre, consulta, regla, conjunt de cerca, conjunt de selecció, cerca desada, propietat, valor, classe, material, selecciona-ho tot
from: 3d293bc2
---

## Què fareu

En un sol pas, es poden triar tots els elements d'un tipus o amb un valor concret: totes les portes, tots els murs de la planta 2, tots els elements amb una resistència al foc EI60, o tots els murs que costen més d'una quantitat fixada.

## Passos

1. Obriu un model IFC.
2. Obriu {{ui:Cerca}} al panell de l'esquerra.
3. A la primera regla, trieu una propietat (primer les pròpies de l'element, com {{ui:Classe}} i {{ui:Planta}}, i després els conjunts de propietats del model), com comparar-la i un valor. El quadre de valors suggereix els valors que té el model.
4. Per acotar-ho, feu clic a {{ui:Afegeix una regla}}. Trieu {{ui:Totes les regles}} si cal que es compleixin totes, o {{ui:Qualsevol regla}} si n'hi ha prou amb una.
5. Feu clic a {{ui:Cerca}}, o premeu {{key:Enter}} en un quadre de valor. Els elements que coincideixen queden seleccionats.
6. Per desar les regles, feu clic a {{ui:Desa com a conjunt}}, escriviu un nom i torneu a fer-hi clic. Més endavant, feu clic al nom d'un conjunt per cercar-hi.

## Què hauríeu de veure

- Els elements que coincideixen queden seleccionats a la vista 3D i a l'arbre del model, i a {{ui:Propietats}} apareix quants n'hi ha per classe. Premeu {{key:I}} per mostrar només aquests, i {{key:H}} per amagar-los.
- Les paraules coincideixen sense distingir majúscules. Els números es comparen com a números: "és més gran que 1000" compara el valor, no el text.
- {{ui:té un valor}} i {{ui:no té cap valor}} no necessiten cap valor; troben el que està omplert o el que falta.
- Els conjunts desats es mantenen en aquest navegador per a tots els models que obriu.

## Errors habituals

- **No es troba res.** Una regla necessita un valor que pugui coincidir: mireu els suggeriments del quadre de valors.
- **Falta una propietat a la llista.** Cap element amb forma en aquest model la té.

## Continua amb

- [Acoloreix els elements per una propietat](topic:color-by-property)
- [Amaga, aïlla i fes transparents els elements](topic:hide-and-isolate)
