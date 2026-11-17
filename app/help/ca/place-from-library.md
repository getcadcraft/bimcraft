---
title: Col·loca equips i mobiliari des de la biblioteca
summary: Trobeu un element a la Biblioteca, en un fitxer o en el dibuix obert, col·loqueu-lo en una planta d'un model IFC amb una vista prèvia fantasma, gireu-lo, ajusteu-lo a una paret i deseu.
keywords: mou, gira, arrossega, biblioteca, librarycraft, col·loca, insereix, equip, mobiliari, bloc, família, element, catàleg, contingut, kcl, csv, gltf, obj, rfa, dwg, tipus ifc
from: 3dad5d4b
---

## Què farà

Posa un element de la biblioteca en un model IFC: un lavabo, una taula de treball, una cadira. BimCraft el desa com un element IFC adequat amb un tipus, de manera que cada còpia del mateix element comparteix un sol conjunt de geometria, i les seves dades, el número d'element i la llicència l'acompanyen.

## Passos

1. Obriu un model IFC.
2. Feu clic a la pestanya {{ui:Biblioteca}} al costat de {{ui:Propietats}} a la dreta, o a {{ui:Biblioteca}} a la barra d'eines sobre el model.
3. Trieu una font:
   - **Símbols integrats**: símbols genèrics de planta de fontaneria inclosos amb BimCraft sota Apache-2.0, disponibles sense connexió. Comproveu-ne les dimensions abans de construir. Per als símbols elèctrics de planta i els dispositius elèctrics IFC, feu servir **Compilació › Elèctric**.
   - **Biblioteca**: la biblioteca de CadCraft d'aquest lloc. Els elements públics no necessiten inici de sessió.
   - **Aquest fitxer**: els blocs d'un dibuix DWG o DXF obert. Un bloc dinàmic amb estats de visibilitat s'ofereix un cop per estat, amb el nom "Pica: Doble cubeta", cadascun dibuixat només amb els objectes d'aquell estat.
   - **Fitxers…**: un fitxer DWG, DXF, IFC, glTF/GLB, OBJ, RFA o CSV del vostre ordinador. Es llegeix en aquesta pestanya; no es puja res.
   - **Altres fonts**: una altra biblioteca que parla el mateix format de font. Afegiu-ne l'adreça una vegada; es guarda en aquest navegador.
4. Cerqueu o trieu una categoria, i feu clic en una targeta. La targeta mostra una vista prèvia del plànol, el nom, el fabricant i el model, la llicència i la versió.
5. Feu clic a {{ui:Col·loca al plànol}} (a la vista Planta) o a {{ui:Col·loca al model}} (a la vista 3D). A {{ui:Divideix}}, on es veuen el plànol i la vista 3D, el botó és un botó dividit: la seva acció principal és {{ui:Col·loca al plànol}}, i la fletxa de la seva dreta obre un menú amb {{ui:Col·loca al model}}. O arrossegueu la targeta, o la imatge de les dades de l'element, al plànol o a la vista 3D: l'element es col·loca on el deixeu anar. Amb un llapis o un dit, manteniu premuda la targeta un moment i després arrossegueu-la.
6. Trieu la planta a la barra de col·locació. A la vista 3D, les plantes per sobre queden amagades mentre col·loqueu i la vista es posa a dalt; al plànol, aquest ja mostra aquella planta. Triar {{ui:Col·loca al model}} des només del plànol obre la vista 3D al costat.
7. Desplaceu el punter sobre el model: una caixa transparent indica on va l'element.
8. Premeu {{key:R}} per girar-lo 90°. Premeu {{key:Tab}} (o {{ui:Ajusta al mur}}) per posar-ne el darrere contra la paret més propera, mirant cap a la sala.
9. Feu clic per col·locar-lo. O escriviu la posició a **X, Y (mm)**, per exemple `1200, 3400`, i premeu {{key:Enter}}.

Un llum o qualsevol altra cosa penjada des de dalt: definiu **Muntatge** a **Al sostre**. La part superior de l'element es col·loca aleshores a la cara inferior del sostre sobre el punt (o a l'alçada del nivell on no hi ha sostre). Amb un plànol de sostre a la vista de planta, **Muntatge** comença en **Al sostre**.

10. Respongueu l'única pregunta: el **número d'element** (s'omple el següent de lliure), la quantitat i una nota. Premeu {{key:Enter}}.
11. Col·loqueu-ne més, o premeu {{key:Esc}} per aturar-vos.
12. Feu clic a {{ui:Desa com a IFC}} per baixar la còpia editada.

## Planta o model

El botó de col·locació de la Biblioteca segueix la vista en què sou, i canvia tan bon punt canvieu de vista (els botons {{ui:Planta}}, {{ui:Divideix}} i {{ui:3D}}, el teclat, obrir un fitxer). Planta mostra un sol botó, {{ui:Col·loca al plànol}}; 3D mostra un sol botó, {{ui:Col·loca al model}}; Divideix mostra el botó dividit, amb {{ui:Col·loca al plànol}} com a acció principal i {{ui:Col·loca al model}} al seu menú. Les dues maneres fan servir la mateixa barra de col·locació i escriuen el mateix element IFC: el punter funciona a la vista de planta en una i a la vista 3D en l'altra. Premeu {{key:Esc}} en qualsevol moment per aturar.

Arrossegar una targeta no té tecla pròpia: el botó dividit, o el botó simple, fa el mateix amb el teclat.

## Mou o gira un element col·locat

A {{ui:Dibuixa}}, trieu l'element al plànol. Una nansa quadrada es mostra al seu punt d'inserció, i una nansa rodona al costat.

- Arrossegueu l'element, o la seva nansa quadrada, per moure'l. S'ajusta com l'eina Paret (extrems i cares de les parets); {{key:Shift}} el manté perpendicular a on era.
- Arrossegueu la nansa rodona per girar-lo en passos de 15°. Manteniu {{key:Shift}} per a passos d'1°.
- Premeu {{key:R}} per girar-lo 90°.
- A **Propietats** (també a la vista 3D), escriviu **X**, **Y** i **Rotació (°)**, o feu clic a **Gira 90°**.

Cada moviment és un pas de {{ui:Desfés}} i viatja en Live TeamWork. L'element manté el seu número d'element, les seves dades de biblioteca i la seva alçada sobre el nivell. Encara no implementat: arrossegar-lo a la vista 3D.

## Què hauríeu de veure

- L'element al model, seleccionat, amb les seves propietats a la dreta: una caixa **Element de biblioteca** amb la seva llicència i atribució, i els conjunts `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` i, per als elements de dibuixos etiquetats, `CadCraft_SourceAttributes`.
- "Col·locat: *element* (element *n*)" a la llista de canvis. {{key:Mod+Z}} el desfà.
- La línia d'estat: "Col·locat *element* com a element *n*."

## Bones de saber

- Alguns elements vénen en diverses mides o opcions: la targeta llavors té una opció **Variant**, i la que trieu és la que es col·loca. Vegeu [Col·loqueu i canvieu un element de la biblioteca que té variants](topic:library-variants).
- Un element sense cos 3D (un símbol 2D) es col·loca amb una caixa substitutiva; en donareu l'alçada quan se us demani.
- Més del mateix: trieu un element col·locat i feu servir {{ui:Copia}} i {{ui:Enganxa}}, o {{key:Mod+D}}. Vegeu [Copieu, enganxeu i dupliqueu elements de la biblioteca](topic:copy-paste).
- Per començar cada col·locació amb l'ajust al mur activat, activeu **Comença amb l'ajust al mur activat** a [Configuració de BimCraft](topic:settings).
- Les longituds es converteixen a les unitats del propi model, siguin les que siguin.
- **Entorn** (arbres, arbustos, persones, cotxes) també és a la biblioteca: cerqueu "arbre", "persona" o "cotxe". Els dibuixa CadCraft (CC0) i conserven els seus colors en col·locar-los (un tronc marró, fulles verdes, els vidres d'un cotxe transparents), a BimCraft i en altres programes BIM. Apareixen a les [imatges renderitzades](topic:render).
- En un fitxer IFC2X3 el cos s'escriu com un sòlid facetat; en IFC4, com un conjunt de cares triangulades. Tots dos s'obren en altres eines IFC.
- Un dibuix (DWG o DXF) no es pot desar aquí, de manera que els elements només es col·loquen en models IFC. Feu servir **Aquest fitxer** en un dibuix per veure en què es convertirien els seus blocs.

## Elements en la vostra llengua

Un element pot portar el seu nom, la seva descripció i el seu tipus en altres llengües. Quan els té en la llengua a què està configurat BimCraft (Configuració › General › Idioma), la pàgina de l'element els mostra, amb el nom que li va donar el seu fabricant a sota, i **Col·loca** escriu el nom en la vostra llengua al model, de manera que el quadre {{ui:Equipament}} l'enumera així. L'element segueix sent el mateix element: la comprovació d'actualitzacions i els canvis van per l'element mateix, mai pel nom. Els elements sense traducció conserven les seves pròpies paraules.

## Errors habituals

- **Falta el botó de col·locació.** No hi ha cap model IFC obert. Obriu-ne un primer.
- **El fantasma no segueix el punter.** El punter és fora de l'àrea del model, o el pla de la planta és fora de vista. Feu clic a {{ui:Superior}}.
- **{{ui:Ajusta al mur}} diu que no hi ha parets.** La planta no té parets a l'IFC (algunes exportacions posen les parets en una altra planta). Trieu aquella planta, o escriviu X i Y.
- **Els elements d'un fitxer tenen una mida equivocada.** El fitxer no té unitats, o en diu unes d'incorrectes. A {{ui:Fitxers…}} trieu les unitats i torneu a llegir-lo.

:::tip
Col·locar el mateix element dues vegades comparteix un sol tipus IFC, de manera que un model amb quaranta cadires desa la cadira una sola vegada.
:::
