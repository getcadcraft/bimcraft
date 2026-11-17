---
title: Col·loca i substitueix un element de biblioteca que té variants
summary: Alguns elements de biblioteca vénen en diverses mides o opcions. Tria la variant abans de col·locar-la, mira quina és un element col·locat, substitueix-la per una altra variant amb un clic, i conserva-la quan l'element s'actualitza.
keywords: variant, variants, mides, opcions, configuració, biblioteca, librarycraft, col·loca, substitueix, configurador, família, tipus, actualització, ports
from: c05f0af3
---

## Què faràs

Col·loca un element de biblioteca amb la mida o l'opció que necessites, i canvia d'idea més endavant sense tornar-lo a col·locar. Un element amb variants és un sol element de la biblioteca (un nom, una llicència, una versió) amb una taula de les variants en què ve: per exemple, una placa de muntatge en Petita, Mitjana i Gran, o la mateixa placa sense forats.

## Tria la variant i col·loca-la

1. Obre la pestanya {{ui:Biblioteca}} i fes clic a la targeta de l'element.
2. Sota el nom, l'opció {{ui:Variant}} llista cada variant amb la seva mida. La predeterminada de l'element es tria primer.
3. Tria'n una. El plànol, la mida i la fila del cos 3D segueixen la teva elecció.
4. Fes clic a {{ui:Col·loca al plànol}} (o {{ui:Col·loca al model}} a la vista 3D) i col·loca'l com qualsevol element: consulta [Col·loca equipament i mobiliari de la biblioteca](topic:place-from-library).

L'element col·locat rep el nom de l'element i de la variant, per exemple *Placa de muntatge — Gran*, perquè el quadre d'{{ui:Equipament}} i l'arbre els distingeixin. Cada variant és el seu propi tipus IFC: col·locar la mateixa variant dues vegades comparteix un tipus; una variant diferent en té un de propi.

## Mira quina variant és un element col·locat

Selecciona l'element. A {{ui:Propietats}}, el quadre **Element de biblioteca** té una línia **Variant**. L'IFC la guarda a `CadCraft_LibraryItem`: `Variant` (l'identificador de la variant), `VariantName` i `VariantValues` (els valors de l'opció, com a text), perquè altres programes la puguin llegir.

## Substitueix per una altra variant

1. Selecciona l'element col·locat i fes clic a {{ui:Substitueix l'element…}} al quadre **Element de biblioteca**. S'obre la pestanya {{ui:Biblioteca}}.
2. A la part superior, **Altres variants de** *l'element* llista cada variant amb la seva mida. La que està col·locada està marcada i no es pot triar.
3. Fes clic a {{ui:Substitueix per …}} a la variant que vols.

L'element conserva el seu lloc, gir, planta, número d'element, quantitat i notes; el seu tipus, forma i dades canvien a l'altra variant. {{key:Mod+Z}} torna la primera. Encara pots triar qualsevol altre element de la llista de sota, com abans: consulta [Substitueix un element col·locat, i actualitza elements de la biblioteca](topic:swap-and-update-library-items).

## Còpia, enganxa i actualitzacions

- Una còpia d'una variant col·locada és la mateixa variant: en aquest model, i en un altre model obert a la mateixa pestanya del navegador, a través de Copia i Enganxa.
- Les **actualitzacions** conserven la variant: si la versió nova de l'element encara la té, la col·locació passa a ser aquella variant de la versió nova. Si la versió nova ja no la té, la col·locació pren la variant predeterminada de l'element.

## Bones de saber

- Només alguns elements de biblioteca tenen variants. Les targetes no ho diuen; veus l'opció {{ui:Variant}} quan n'obres una.
- Un element pot llistar **ports** (punts de connexió per a tubs i conductes) per variant. La pestanya Biblioteca mostra quants en té una variant. Encara **no** s'escriuen a l'IFC quan col·loques l'element des de la pestanya Biblioteca.
- Una variant sense cos 3D es col·loca amb una caixa substitutiva, com qualsevol símbol 2D.
- Les mides de l'opció són en mil·límetres, tal com les escriu la biblioteca.
