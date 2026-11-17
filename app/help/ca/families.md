---
title: Famílies i les seves mides
summary: Portes, finestres i mobiliari arriben en famílies. Cada mida d'una família és un tipus al fitxer IFC, de manera que la llista de tipus es manté curta a BimCraft mentre altres programes llegeixen tipus senzills.
keywords: família, famílies, tipus, mida, mides, tipus de porta, tipus de finestra, mobiliari, taula, prestatgeria, armari, nova mida, duplica, col·loca família, fitxer de família, ccfamily, biblioteca IFC, biblioteca de projecte, grup, visibilitat, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Què és una família

Una família és un tipus d'element en diverses mides: una porta batent que es presenta amb 32, 36 i 42 polzades d'amplada, o una taula que es presenta llarga i curta. A BimCraft veus la família una sola vegada, amb les seves mides a sota, en lloc d'una llista llarga de tipus.

IFC no té famílies. Al fitxer cada mida és un tipus normal (un tipus de porta, un tipus de finestra, un tipus de mobiliari…), i la família és un grup que enumera les seves mides. Altres programes BIM llegeixen els tipus i el grup tal com són; BimCraft recupera la família a partir d'ells.

## On trobar-les

- El grup **Famílies** del navegador del projecte llista les famílies d'aquest model, amb el nombre de mides de cadascuna i quantes s'han col·locat. Sota hi ha les **Famílies inicials**: les portes i finestres de les eines de Porta i de Finestra, i una taula, una unitat de prestatgeries i un moble baix de cuina.
- {{ui:Compilació}} › {{ui:Famílies…}} mostra la mateixa llista en una finestra.
- Fes clic a una família per obrir-la: les seves mides, els valors de cada mida i quants elements usen cadascuna.

## Portes i finestres

Les eines de Porta i de Finestra llisten les famílies d'aquest tipus, i al costat una **llista de mides**. Tria una mida, o escriu **W** i **H**: una amplada i una alçada que cap mida no té encara es converteixen en una nova mida de la família quan col·loques la porta. Les portes de la mateixa mida comparteixen un tipus.

A {{ui:Propietats}}, una porta o una finestra seleccionada mostra la seva **Família** i la seva **Mida**. Tria una altra mida de la llista, o escriu una nova amplada o alçada. {{ui:Obre la família}} obre la família a la qual pertany.

El marc de cada porta o finestra segueix el gruix del seu propi mur, com abans amb les famílies. El tipus de la mida manté també la porta dibuixada en un mur de 140 mm, per als programes que llegeixen tipus.

## Nova mida a partir d'aquesta família

1. Obre la família.
2. A **Nova mida a partir d'aquesta família**, escriu els seus valors (Amplada, Alçada i els altres paràmetres de la família) i, si vols, un nom. Sense nom, es nomena segons els seus valors.
3. Fes clic a {{ui:Fes la mida}}.

Dues mides no poden tenir els mateixos valors. **Reanomena** canvia el nom d'una mida; **Elimina** treu una mida que ningú no usa; **Selecciona** tria els elements d'aquella mida.

## Col·loca mobiliari

1. {{ui:Compilació}} › {{ui:Col·loca família}}, o {{ui:Situa}} a la finestra d'una família.
2. A la barra, tria la família i la seva mida.
3. Fes clic al plànol per situar-la a la planta. Prem {{key:R}} per girar-la 90° abans de fer clic. {{key:Esc}} atura l'acció.

Les {{ui:Propietats}} d'una peça col·locada mostren la seva mida, on és i quant està girada; {{key:Delete}} l'elimina. Totes les peces d'una mateixa mida comparteixen la forma d'aquesta mida, de manera que canviar la família les canvia totes.

## Mides d'una taula

{{ui:Mides d'una taula…}} a la finestra d'una família llegeix un fitxer CSV (coma, punt i coma o tabulador). La primera fila indica els noms de les columnes: el nom o l'etiqueta d'un paràmetre i, opcionalment, `Name`. Les longituds són en mil·límetres tret que escriguis una unitat (`1.2 m`, `36 in`); les columnes Sí / No accepten sí, no, true, false, 1 o 0, i un paràmetre sense columna manté el seu valor per defecte. Cada fila es converteix en una mida, en un sol pas que pots desfer; una mida que ja hi és s'omet. Si una fila no es llegeix, o si la família no la pot dibuixar, es rebutja tota la taula i se n'indica la línia. Com a màxim 200 files i 1 MB. {{ui:Desa les mides com a taula}} escriu la mateixa taula de nou.

## Definir a cada element

Un paràmetre marcat **Per element** a l'editor (un Sí / No que afegeix un travesser, una etiqueta o un material) no forma part d'una mida: dues portes d'una mateixa mida poden ser diferents. Tria l'element i les {{ui:Propietats}} mostren aquests paràmetres; canvia'n un i aquell element es torna a dibuixar amb la seva pròpia forma (els mobles i els accessoris reben una forma pròpia, i les portes i finestres es tornen a fer dins dels seus murs). Si els tornes tots als valors per defecte, torna a la forma de la seva mida.

## Nivell de detall

{{ui:Compilació}} › {{ui:Famílies…}} › **Nivell de detall** defineix, per a totes les famílies del model, què es desa als sòlids i què es dibuixa als símbols de planta: **Fi** ho conserva tot, **Mitjà** i **Gruixut** deixen fora les peces que l'editor marca com a més fines (fitxers més petits, vistes més ràpides). **Automàtic** ho desa tot i deixa que la vista d'un full triï segons l'escala: 1:50 i més grans, fi; 1:100, mitjà; 1:200 i més petits, gruixut. És un pas que pots desfer.

## Duplica una família

No cal començar de zero. {{ui:Duplica}} copia una família amb els seus paràmetres, sòlids i mides, amb un nom nou. Canvia la còpia a l'editor; l'original es queda tal com estava.

## Fitxers de família

- {{ui:Desa el fitxer de la família}} desa un `.ccfamily.json`: els paràmetres, els sòlids i les mides de la família. Obre'l en un altre model amb {{ui:Obre un fitxer de família…}} al grup Famílies.
- {{ui:Desa com a IFC}} desa la família com un petit fitxer IFC: els tipus de les seves mides i el seu grup, declarats per una biblioteca de projecte IFC. Altres programes l'obren com un conjunt de tipus; BimCraft l'obre de nou com a família.

Un fitxer de família obert aquí es llegeix com a dades i es comprova abans que s'escrigui res. Una família la clau de la qual ja és al model entra com a família separada. Una família que conté altres (vegeu {{ui:Famílies a dins}} a l'ajuda de l'editor) els porta amb ella: el fitxer els enumera, i el model conserva els que ja té.

## Famílies de la Biblioteca

Obre {{ui:Famílies…}} i tria {{ui:De la Biblioteca…}} per veure les famílies que s'han compartit a la Biblioteca. {{ui:Afegeix a aquest projecte}} en llegeix una com si fos un fitxer de família: BimCraft comprova cada camp abans de crear res, la família entra com a família pròpia i s'obre a l'editor. Afegir-la és un sol pas que pots desfer. Per compartir-ne una de teva, usa {{ui:Desa-ho tot com a biblioteca}} i envia el fitxer a la Biblioteca (el personal de la Biblioteca publica un fitxer de família amb una ordre, i cada família és un element propi amb les seves mides). Si no es pot accedir a la Biblioteca, la llista ho indica i no canvia res.

## Tipus d'altres programes

Els tipus fets per altres programes també apareixen al grup Famílies, agrupats per una suposició: per la part del nom dels seus elements abans del primer dos punts, o, si no, per noms de tipus que només es diferencien pels números. La finestra de la família indica quina suposició ha usat. Es llisten i pots seleccionar els seus elements, però aquí no s'editen: no tenen una recepta de família.

:::note
Les portes i finestres inicials es dibuixen exactament com abans de les famílies. Els fitxers fets abans de les famílies s'obren sense canvis: les seves portes i finestres apareixen sota la seva família amb les mides en ús, i passen a una mida pròpia la primera vegada que les canvies.
:::

Veure també [Edita una família](topic:family-editor) i [Portes i finestres](topic:doors-and-windows).
